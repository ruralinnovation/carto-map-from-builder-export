class Map {
	constructor(rootId, cartoClientCredentials, layers) {
		this._COUNTY_LEVEL_ZOOM = 8
		this._cartoClient = new carto.Client(cartoClientCredentials);
		this._map = L.map(rootId).setView([38.63765, -100.55221], 3.8);
		this._map.scrollWheelZoom.disable();
		
		L.tileLayer(
			'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png',
			{ maxZoom: 18 },
		).addTo(this._map);
		
		layers.forEach(layerInfo => this._addMapLayerFromLayerExportInfo(layerInfo))
		
		this._addLayersToMap()
	}
	
	
	_addLayersToMap = () => this._cartoClient.getLeafletLayer().addTo(this._map);
	
	
	_addMapLayerFromLayerExportInfo = (layerInfo) => {
		const source = new carto.source.SQL(layerInfo.query)
		const style = new carto.style.CartoCSS(layerInfo.style)
		const layer = new carto.layer.Layer(source, style)
		
		this._cartoClient.addLayer(layer);
	}
	
	
	// Public methods:
	
	
	flyToCounty = (latLon, zoom = null) => {
		this._map.flyTo(
			latLon,
			typeof(zoom) === 'number' || this._COUNTY_LEVEL_ZOOM,
		)
	}
}
