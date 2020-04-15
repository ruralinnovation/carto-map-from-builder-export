class Map {
	constructor(rootId, cartoClientCredentials, layers) {
		// Initialize constants
		this._COUNTY_LEVEL_ZOOM = 8
		this._dataFetcher = new DataFetcher(cartoClientCredentials)
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
	}
	
	
	addPopupFor = (layer, layerInfo) => {
		const popup = L.popup({ closeButton: true });
		
		const updatePopup = (featureEvent) => {
			const { existingPopupIsTogglingOff } = this._toggleClickedFeatureBorder(featureEvent, layerInfo.dataset, this._map) || {}
			if (existingPopupIsTogglingOff) {
				this.closePopup()
				return
			}
			
			const fields = layerInfo.popupFieldInfo.map(({field}) => field)
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
		
		layer.off('featureOver');
		layer.off('featureOut');
		layer.on('featureClicked', updatePopup);
	}
	
	
	_addLayersToMap = () => this._cartoClient.getLeafletLayer().addTo(this._map);
	
	
	_addMapLayerFromLayerExportInfo = (layerInfo) => {
		const source = new carto.source.Dataset(layerInfo.dataset)
		const style = new carto.style.CartoCSS(layerInfo.style)
		const options = {
			featureClickColumns: layerInfo.popupFieldInfo.map(({field}) => field)
		}
		const layer = new carto.layer.Layer(source, style, options)
		
		this._cartoClient.addLayer(layer);
		return layer
	}
	
	_toggleClickedFeatureBorder = (featureEvent, cartoTableName, map) => {
		const clickedPolygonCartoDBId = featureEvent.data.cartodb_id;
		
		const existingBoundary = this._clickedLayer.boundary
		if (existingBoundary) {
			map.removeLayer(existingBoundary)
			if (this._clickedLayer.cartodb_id === clickedPolygonCartoDBId) {
				this._clickedLayer = {}
				return { existingPopupIsTogglingOff: true }
			}
		}
		
		this._dataFetcher.fetchFeatureOutline(cartoTableName, clickedPolygonCartoDBId)
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
