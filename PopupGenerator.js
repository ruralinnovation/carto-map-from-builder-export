class PopupGenerator {
	constructor() {
		this._GENERATE_SECTIONS_FLAG = '<!-- GENERATED FIELDS GO HERE (do not delete, this is a flag for string search) -->'
	}
	
	_generateFieldIfFieldTitle = (fieldValue, fieldTitle) => fieldTitle
		? `
			<div class="pillar-rating-container">
				<div class="title-and-number-container">
					<div class="rating-title">${fieldTitle}</div>
					 <div class="rating-number">${fieldValue}</div>
				</div>
			</div>
		`
		: ''
	
	
	// Public methods:
	
	
	genericPopupHTML = (layerInfo, featureEvent) => {
		const popupFields = layerInfo.popupFieldInfo.map(({field}) => field, [])
		const popupInjectedWithData = popupFields.reduce(
			(_popupStr, field) => {
				const re = new RegExp(`{{${field}}}`,'g');
				return _popupStr.replace(re, featureEvent.data[field])
			},
			popupHTMLTemplates.genericHTMLPopupTemplate,
		)
		
		const generatedFieldSections = layerInfo.popupFieldInfo.reduce(
			(_sections, {field, fieldTitle}) => _sections + this._generateFieldIfFieldTitle(featureEvent.data[field], fieldTitle),
			[],
		)
		debugger
		return popupInjectedWithData.replace(this._GENERATE_SECTIONS_FLAG, generatedFieldSections)
	}
}
