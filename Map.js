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
		
		this._countyPrepLayerInfo = layers[0]
		this._countyPrepLayer = this._addMapLayerFromLayerExportInfo(this._countyPrepLayerInfo)
		this._addLayersToMap()
		
		this.addPopupFor(this._countyPrepLayer)
	}
	
	
	addPopupFor = (layer) => {
		const popup = L.popup({ closeButton: false });
		
		const openPopup = (featureEvent) => {
			const fields = this._countyPrepLayerInfo.options.featureOverColumns
			
			const popupInjectedWithData = fields.reduce(
				(_popupStr, field) => _popupStr.replace(`{{${field}}}`, featureEvent.data[field]),
				popupHTMLTemplate,
			)
			
			popup.setContent(popupInjectedWithData);
			popup.setLatLng(featureEvent.latLng);
			if (!popup.isOpen()) {
				popup.openOn(this._map);
			}
		}
		
		const closePopup = (featureEvent) => {
			popup.removeFrom(this._map);
		}
		
		const setPopupsClick = () => {
			layer.off('featureOver');
			layer.off('featureOut');
			layer.on('featureClicked', openPopup);
		}
		
		const setPopupsHover = () => {
			layer.off('featureClicked');
			layer.on('featureOver', openPopup);
			layer.on('featureOut', closePopup);
		}
		setPopupsHover()
	}
	
	
	_addLayersToMap = () => this._cartoClient.getLeafletLayer().addTo(this._map);
	
	
	_addMapLayerFromLayerExportInfo = (layerInfo) => {
		const source = new carto.source.Dataset(layerInfo.dataset)
		const style = new carto.style.CartoCSS(layerInfo.style)
		const layer = new carto.layer.Layer(source, style, layerInfo.options)
		
		this._cartoClient.addLayer(layer);
		return layer
	}
		
		
		
		// Public methods:
		
		
		flyToCounty = (latLon, zoom = null) => {
			this._map.flyTo(
				latLon,
				typeof(zoom) === 'number' || this._COUNTY_LEVEL_ZOOM,
			)
		}
	}
