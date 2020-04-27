class Map {
	constructor(rootId, cartoClientCredentials, layers) {
		// Initialize constants, classes, and map elements
		this._COUNTY_LEVEL_ZOOM = 8
		this._dataFetcher = new DataFetcher(cartoClientCredentials)
		this._popupGenerator = new PopupGenerator()
		this._cartoClient = new carto.Client(cartoClientCredentials);
		this._map = L.map(rootId).setView([38.63765, -100.55221], 5);
		// this._map.scrollWheelZoom.disable();
		L.tileLayer(
			'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png',
			{ maxZoom: 18 },
		).addTo(this._map);
		this._popup = L.popup({ closeButton: true });
		
		// State
		this._clickedLayersByLayerName = {
			// [cartoLayerName]: {
			// 			cartodb_id: null,
			// 			boundary: null,
			// 		}
			// ...
		}
		
		// Layers:
		
		// Specifically add the County Prep Layer to the map with a popup)
		layers.forEach((layerInfo) => {
			const cartoLayer = this._addMapLayerFromLayerInfo(layerInfo)
			this._addPopupFor(cartoLayer, layerInfo, this._popupGenerator.genericPopupHTML)
		})
		
		this._addLayersToMap()
	}
	
	
	_addLayersToMap = () => this._cartoClient.getLeafletLayer().addTo(this._map);
	
	
	_addMapLayerFromLayerInfo = (layerInfo) => {
		const source = new carto.source.SQL(layerInfo.sql)
		const style = new carto.style.CartoCSS(layerInfo.style)
		const options = {
			featureClickColumns: layerInfo.popupFieldInfo.map(({field}) => field)
		}
		const layer = new carto.layer.Layer(source, style, options)
		
		this._cartoClient.addLayer(layer);
		return layer
	}
	
	_removeAnyExistingClickedFeatureBorder = () => {
		Object.values(this._clickedLayersByLayerName).forEach(clickedLayer => this._map.removeLayer(clickedLayer.boundary))
	}
	
	
	_addPopupFor = (layer, layerInfo, popupGeneratorFunction) => {
		this._popup.on('remove', this._removeAnyExistingClickedFeatureBorder);
		
		layer.off('featureOver');
		layer.off('featureOut');
		layer.on('featureClicked', featureEvent => this._updateOrToggleSelectedRegion(featureEvent, layerInfo, popupGeneratorFunction));
	}
	
	
	_updateOrToggleSelectedRegion = (featureEvent, layerInfo, popupGeneratorFunction) => {
		const { existingPopupIsTogglingOff } = this._toggleClickedFeatureBorder(featureEvent, layerInfo.cartoLayerName, this._map) || {}
		if (existingPopupIsTogglingOff) {
			this.closePopup()
			return
		}
		
		const popupInjectedWithData = popupGeneratorFunction(layerInfo, featureEvent)
		this._popup.setContent(popupInjectedWithData);
		this._popup.setLatLng(featureEvent.latLng);
		if (!this._popup.isOpen()) {
			this._popup.openOn(this._map);
		}
	}
	
	_clearClickedLayers = () => this._clickedLayer = {}
	
	_toggleClickedFeatureBorder = (featureEvent, cartoTableName) => {
		this._removeAnyExistingClickedFeatureBorder()
		const clickedPolygonCartoDBId = featureEvent.data.cartodb_id;
		const layerIsAlreadySelected = Object.values(this._clickedLayersByLayerName).some(
			clickedLayer => clickedLayer.cartodb_id === clickedPolygonCartoDBId
		)
		if (layerIsAlreadySelected) {
			this._clearClickedLayers()
			return { existingPopupIsTogglingOff: true }
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
				
				this._map.addLayer(boundary);
				this._clickedLayersByLayerName[cartoTableName] = {}
				this._clickedLayersByLayerName[cartoTableName].boundary = boundary
				this._clickedLayersByLayerName[cartoTableName].cartodb_id = clickedPolygonCartoDBId
			})
	}
	
	_flyToCounty = (latLon, zoom = null) => {
		const TRANSITION_DURATION = 3
		this._map.flyTo(
			latLon,
			typeof(zoom) === 'number' || this._COUNTY_LEVEL_ZOOM,
			{ duration: TRANSITION_DURATION }
		)
	}
	
	
	// Public methods:
	
	
	closePopup = () => {
		this._map.closePopup();
		this._clearClickedLayers();
	}
	
	
	// TODO: make this generic so we can highlight regions from outside the class
	// selectCountyInCountyPrepLayer = (countyData) => {
	// 	const latLng = [countyData.lat, countyData.lon]
	//
	// 	this._updateOrToggleSelectedRegion(
	// 		{
	// 			data: countyData,
	// 			latLng,
	// 		},
	// 		this._countyPrepLayerInfo,
	// 		this._popupGenerator.generateCountyPrepPopupHTML,
	// 	)
	//
	// 	this._flyToCounty(latLng)
	// }
	
}
