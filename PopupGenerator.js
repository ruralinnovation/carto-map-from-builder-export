class PopupGenerator {
	constructor() {
		this._GENERATE_SECTIONS_FLAG = '<!-- GENERATED FIELDS GO HERE (do not delete, this is a flag for string search) -->'
	}
	
	_generateScoreField = (fieldValue, title) => `
			<div class="pillar-rating-container">
				<div class="title-and-number-container">
					<div class="rating-title">${title}</div>
					 <div class="rating-number">${fieldValue}</div>
				</div>
				<div class="bar-container">
					<div class="bar" style="width: ${fieldValue}%" />
				</div>
			</div>
		`
	
	_generateGenericField = (fieldValue, title) => `
			<div class="pillar-rating-container">
				<div class="title-and-number-container">
					<div class="rating-title">${title}</div>
					 <div class="rating-number">${fieldValue}</div>
				</div>
			</div>
		`
	
	
	// Public methods:
	
	
	generateCountyPrepPopupHTML = (layerInfo, featureEvent) => {
		const injectedFields = layerInfo.popupFieldInfo.reduce((accumulator, {field, fieldTitle}) => fieldTitle ? accumulator : [...accumulator, field], [])
		const popupInjectedWithData = injectedFields.reduce(
			(_popupStr, field) => {
				const re = new RegExp(`{{${field}}}`,'g');
				return _popupStr.replace(re, featureEvent.data[field])
			},
			popupHTMLTemplates.countyPrepHTMLPopupTemplate,
		)
		
		const generatedFieldSections = layerInfo.popupFieldInfo.reduce(
			(_sections, {field, fieldTitle}) => fieldTitle ? _sections + this._generateScoreField(featureEvent.data[field], fieldTitle) : _sections,
			[],
		)
		
		return popupInjectedWithData.replace(this._GENERATE_SECTIONS_FLAG, generatedFieldSections)
	}
	
	closedHospitalDriveTimeRadiusPopupHTML = (layerInfo, featureEvent) => {
		const injectedFields = layerInfo.popupFieldInfo.reduce((accumulator, {field, fieldTitle}) => fieldTitle ? accumulator : [...accumulator, field], [])
		const popupInjectedWithData = injectedFields.reduce(
			(_popupStr, field) => {
				const re = new RegExp(`{{${field}}}`,'g');
				return _popupStr.replace(re, featureEvent.data[field])
			},
			popupHTMLTemplates.closedHospitalDrivetimeRadiusHTMLPopupTemplate,
		)
		
		const generatedFieldSections = layerInfo.popupFieldInfo.reduce(
			(_sections, {field, fieldTitle}) => fieldTitle ? _sections + this._generateGenericField(featureEvent.data[field], fieldTitle) : _sections,
			[],
		)
		
		return popupInjectedWithData.replace(this._GENERATE_SECTIONS_FLAG, generatedFieldSections)
	}
}
