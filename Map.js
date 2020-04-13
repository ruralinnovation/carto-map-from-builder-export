

class Map {
	constructor(rootId, cartoClientCredentials, mapExportJSON) {
		this._COUNTY_LEVEL_ZOOM = 8
		this._cartoClient = new carto.Client(cartoClientCredentials);
		this._map = L.map(rootId).setView([38.63765, -100.55221], 3.8);
		this._map.scrollWheelZoom.disable();
		
		L.tileLayer(
			'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png',
			{ maxZoom: 18 },
		).addTo(this._map);
		
		const cartoLayersInfo =	mapExportJSON.visualization.layers.filter(({kind}) => kind === 'carto')
		cartoLayersInfo.forEach(layerExportInfo => this._addMapLayerFromLayerExportInfo(layerExportInfo))
		
		this._addLayersToMap()
	}
	
	
	_addLayersToMap = () => this._cartoClient.getLeafletLayer().addTo(this._map);
	
	
	_addMapLayerFromLayerExportInfo = (layerExportInfo) => {
		const source = new carto.source.SQL(layerExportInfo.options.query)
		const style = new carto.style.CartoCSS(layerExportInfo.options.tile_style)
		const layer = new carto.layer.Layer(source, style)
		
		this._cartoClient.addLayer(layer);
	}
	
	// Public
	flyToCounty = (latLon, zoom = null) => {
		this._map.flyTo(
			latLon,
			typeof(zoom) === 'number' || this._COUNTY_LEVEL_ZOOM,
		)
	}
}
