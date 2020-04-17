class Map {
	constructor(rootId, cartoClientCredentials, layers) {
		// Initialize constants, classes, and map elements
		this._COUNTY_LEVEL_ZOOM = 8
		this._dataFetcher = new DataFetcher(cartoClientCredentials)
		this._popupGenerator = new PopupGenerator()
		this._cartoClient = new carto.Client(cartoClientCredentials);
		this._map = L.map(rootId).setView([38.63765, -100.55221], 3.8);
		this._map.scrollWheelZoom.disable();
		L.tileLayer(
			'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png',
			{ maxZoom: 18 },
		).addTo(this._map);
		this._popup = L.popup({ closeButton: true });
		
		// State
		this._clickedLayer = {
			cartodb_id: null,
			boundary: null,
		}
		
		// Layers
		this._countyPrepLayerInfo = layers[0]
		this._countyPrepLayer = this._addMapLayerFromLayerInfo(this._countyPrepLayerInfo)
		this._addLayersToMap()
		
		this._addPopupFor(this._countyPrepLayer, this._countyPrepLayerInfo)
	}
	
	
	_addLayersToMap = () => this._cartoClient.getLeafletLayer().addTo(this._map);
	
	
	_addMapLayerFromLayerInfo = (layerInfo) => {
		const source = new carto.source.Dataset(layerInfo.dataset)
		const style = new carto.style.CartoCSS(layerInfo.style)
		const options = {
			featureClickColumns: layerInfo.popupFieldInfo.map(({field}) => field)
		}
		const layer = new carto.layer.Layer(source, style, options)
		
		this._cartoClient.addLayer(layer);
		return layer
	}
	
	_removeAnyExistingClickedFeatureBorder = () => {
		const existingBoundary = this._clickedLayer.boundary
		if (existingBoundary) {
			this._map.removeLayer(existingBoundary)
		}
	}
	
	
	_addPopupFor = (layer, layerInfo) => {
		this._popup.on('remove', this._removeAnyExistingClickedFeatureBorder);
		
		layer.off('featureOver');
		layer.off('featureOut');
		layer.on('featureClicked', featureEvent => this.updateOrToggleSelectedRegion(featureEvent, layerInfo));
	}
	
	
	updateOrToggleSelectedRegion = (featureEvent, layerInfo) => {
		const { existingPopupIsTogglingOff } = this._toggleClickedFeatureBorder(featureEvent, layerInfo.dataset, this._map) || {}
		if (existingPopupIsTogglingOff) {
			this.closePopup()
			return
		}
		
		const popupInjectedWithData = this._popupGenerator.generateScorePopupHTML(layerInfo, featureEvent)
		this._popup.setContent(popupInjectedWithData);
		this._popup.setLatLng(featureEvent.latLng);
		if (!this._popup.isOpen()) {
			this._popup.openOn(this._map);
		}
	}
	
	
	_toggleClickedFeatureBorder = (featureEvent, cartoTableName) => {
		this._removeAnyExistingClickedFeatureBorder()
		const clickedPolygonCartoDBId = featureEvent.data.cartodb_id;
		if (this._clickedLayer.cartodb_id === clickedPolygonCartoDBId) {
			this._clickedLayer = {}
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
