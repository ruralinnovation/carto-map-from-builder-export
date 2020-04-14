class Map {
	constructor(rootId, cartoClientCredentials, layers) {
		// Initialize constants
		this._COUNTY_LEVEL_ZOOM = 8
		this._cartoClientCredentials = cartoClientCredentials
		this._cartoClient = new carto.Client(cartoClientCredentials);
		this._map = L.map(rootId).setView([38.63765, -100.55221], 3.8);
		this._map.scrollWheelZoom.disable();
		L.tileLayer(
			'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png',
			{ maxZoom: 18 },
		).addTo(this._map);
		
		// State
		this._clickedLayer = {
			cartodb_id: null,
			boundary: null,
		}
		
		// Layers
		this._countyPrepLayerInfo = layers[0]
		this._countyPrepLayer = this._addMapLayerFromLayerExportInfo(this._countyPrepLayerInfo)
		this._addLayersToMap()
		
		this.addPopupFor(this._countyPrepLayer, this._countyPrepLayerInfo)
		
		// TODO: move somewhere better
		this._countyPrepLayer.on('featureClicked', featureEvent => this._toggleClickedFeatureBorder(featureEvent, this._countyPrepLayerInfo.dataset, this._map))
	}
	
	
	addPopupFor = (layer, layerInfo) => {
		const popup = L.popup({ closeButton: true });
		
		const openPopup = (featureEvent) => {
			const fields = layerInfo.options.featureOverColumns
			
			const popupInjectedWithData = fields.reduce(
				(_popupStr, field) => {
					const re = new RegExp(`{{${field}}}`,"g");
					return _popupStr.replace(re, featureEvent.data[field])
				},
				popupHTMLTemplate,
			)
			
			popup.setContent(popupInjectedWithData);
			popup.setLatLng(featureEvent.latLng);
			if (!popup.isOpen()) {
				popup.openOn(this._map);
			}
		}
		
		const setPopupsClick = () => {
			layer.off('featureOver');
			layer.off('featureOut');
			layer.on('featureClicked', openPopup);
		}
		
		const setPopupsHover = () => {
			layer.off('featureClicked');
			layer.on('featureOver', openPopup);
			layer.on('featureOut', this.closePopup);
		}
		setPopupsClick()
	}
	
	
	_addLayersToMap = () => this._cartoClient.getLeafletLayer().addTo(this._map);
	
	
	_addMapLayerFromLayerExportInfo = (layerInfo) => {
		const source = new carto.source.Dataset(layerInfo.dataset)
		const style = new carto.style.CartoCSS(layerInfo.style)
		const layer = new carto.layer.Layer(source, style, layerInfo.options)
		
		this._cartoClient.addLayer(layer);
		return layer
	}
	
	// TODO: this really deserves own sub-class
	_getCartoDataPromise = (cartoLayerId, fields, sqlFilter = '') => {
		const config = {
			"CARTO_SERVER": "https://ruralinnovation-admin.carto.com",
		}
		
		const DEV_SQL_CLIENT = axios.create({
			method: 'get',
			url: `${config.CARTO_SERVER}/api/v2/sql`
		})
		
		const sqlQuery = {query: `SELECT ${fields} FROM "${this._cartoClientCredentials.username}".${cartoLayerId} ${sqlFilter}`}
		const promise = DEV_SQL_CLIENT.request({
			params: { q: sqlQuery.query, api_key: this._cartoClientCredentials.apiKey, data: sqlQuery }
		})
		
		return promise.then(res => res.data.rows)
	}
	
	_fetchFeatureOutline = (cartoTableName, clickedPolygonCartoDBId) => {
		return this._getCartoDataPromise(cartoTableName, 'ST_asGeoJSON(ST_Boundary(the_geom)) as geom', `WHERE cartodb_id = ${clickedPolygonCartoDBId}`)
	}
	
	_toggleClickedFeatureBorder = (featureEvent, cartoTableName, map) => {
		const clickedPolygonCartoDBId = featureEvent.data.cartodb_id;
		
		const existingBoundary = this._clickedLayer.boundary
		if (existingBoundary) {
			map.removeLayer(existingBoundary)
			if (this._clickedLayer.cartodb_id === clickedPolygonCartoDBId) {
				this._clickedLayer = {}
				this.closePopup()
				return
			}
		}
		
		// Use CARTO SQL API to get the boundaries of the polygons to highlight them when click
		this._fetchFeatureOutline(cartoTableName, clickedPolygonCartoDBId)
			.then(data => {
				const geom = data[0].geom;
				const boundary = L.geoJson(JSON.parse(geom), {
					style: {
						color: "#000",
						weight: 5
					}
				});
				
				map.addLayer(boundary);
				this._clickedLayer.boundary = boundary
				this._clickedLayer.cartodb_id = clickedPolygonCartoDBId
			})
	}
	
	
	// Public methods:
	
	
	flyToCounty = (latLon, zoom = null) => {
		this._map.flyTo(
			latLon,
			typeof(zoom) === 'number' || this._COUNTY_LEVEL_ZOOM,
		)
	}
	
	closePopup = () => this._map.closePopup();
}
