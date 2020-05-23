class CartoMapExportConversion {
	constructor(exportedCartoMapInfo, cartoClientCredentials) {
		this._exportedCartoMapInfo = exportedCartoMapInfo
		this._cartoClientCredentials = cartoClientCredentials
	}
	
	
	_getCartoLayerName = (sql) => {
		const {username} = this._cartoClientCredentials
		const sqlUsername = `"${username}".`
		
		return sql.split('FROM ')[1]
			.trim()
			.replace(sqlUsername, '')
	}
	
	
	_formatExportedLayer = (layerExportInfo) => {
		const sql = layerExportInfo.options.query
		const style = layerExportInfo.options.tile_style
		
		const popupFields = layerExportInfo.infowindow.fields || []
		const popupFieldInfo = popupFields.map(({name, position}) => ({
			field: name,
			fieldTitle: layerExportInfo.infowindow.alternative_names[name],
			position,
		}))
		
		return {
			cartoLayerName: this._getCartoLayerName(sql),
			sql,
			style,
			popupFieldInfo,
		}
	}
	
	
	// Public methods
	
	
	getLayers = () => {
		const cartoLayersInfo =	this._exportedCartoMapInfo.visualization.layers.filter(({kind}) => kind === 'carto')
		return cartoLayersInfo.map(layerExportInfo => this._formatExportedLayer(layerExportInfo))
	}
}
