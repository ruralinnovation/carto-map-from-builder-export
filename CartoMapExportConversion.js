// todo: REPLACE THIS WITH A GENERALIZABLE SYSTEM
const CARTO_LAYERS = {
	countyPreparedness: 'county_preparedness_score_v0_5',
	closedHospitalDriveTimeRadius: 'cori_master_closed_hospitals_dataset_drive_time'
}

class CartoMapExportConversion {
	constructor(exportedCartoMapInfo) {
		this._exportedCartoMapInfo = exportedCartoMapInfo
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
			sql,
			style,
			popupFieldInfo,
		}
	}
	
	getLayers = () => {
		const cartoLayersInfo =	this._exportedCartoMapInfo.visualization.layers.filter(({kind}) => kind === 'carto')
		const _layers = cartoLayersInfo.forEach(layerExportInfo => this._formatExportedLayer(layerExportInfo))
		
		const layers = {
			[CARTO_LAYERS.countyPreparedness]: {
				dataset: CARTO_LAYERS.countyPreparedness,
				popupFieldInfo: [
					// Search and replace these fields in the popup template (if they exist):
					{field: 'cartodb_id'},
					{field: 'name'},
					{field: 'st_stusps'},
					{field: 'prep_score'},
					{field: 'prep_level'},
					// Iterate over these fields and inject each as a section into the popup template:
					{field: 'pc_score', fieldTitle: 'Physical Capacity'},
					{field: 'hr_score', fieldTitle: 'Human Resources'},
					{field: 'dem_score', fieldTitle: 'Demographic'},
					{field: 'se_score', fieldTitle: 'Socioeconimic'},
					{field: 'covid_score', fieldTitle: 'COVID-19'},
				],
				style: `
				#layer {
				  polygon-fill: ramp(
					[prep_score],
					(
					  #dc0302,
					  #DD6F4C,
					  #1FADB6,
					  #76D282,
					  #77ff02
					),
					equal
				  );
				  polygon-opacity: 0.4;
				}
			`
			},
			[CARTO_LAYERS.closedHospitalDriveTimeRadius]: {
				dataset: CARTO_LAYERS.closedHospitalDriveTimeRadius,
				popupFieldInfo: [
					{field: 'cartodb_id'},
					// Search and replace these fields in the popup template (if they exist):
					{field: 'name'},
					{field: 'state'},
					// Iterate over these fields and inject each as a section into the popup template:
					{field: 'type', fieldTitle: 'Hospital Type'},
					{field: 'name', fieldTitle: 'Hospital Name'},
					{field: 'city', fieldTitle: 'City'},
				],
				style: `
				#layer {
				  polygon-fill: #ffffff;
				  polygon-opacity: 0.8;
				}
				#layer::outline {
				  line-width: 1;
				  line-color: #000000;
				  line-opacity: 0.09;
				}
			`
			}
		}
		
		return layers
	}
}
