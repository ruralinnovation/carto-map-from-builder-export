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
		
		this._countyPrepLayer = this._addMapLayerFromLayerExportInfo(layers[0])
		this._addLayersToMap()
		
		this.addPopupFor(this._countyPrepLayer)
	}
	
	
	addPopupFor = (layer) => {
		const popup = L.popup({ closeButton: false });
		
		const openPopup = (featureEvent) => {
			let content = '<div class="widget">';
			
			if (featureEvent.data.name) {
				content += `<h2 class="h2">${featureEvent.data.name}</h2>`;
			}
			
			if (featureEvent.data.pop_max || featureEvent.data.pop_min) {
				content += `<ul>`;
				
				if (featureEvent.data.pop_max) {
					content += `<li><h3>Max:</h3><p class="open-sans">${featureEvent.data.pop_max}</p></li>`;
				}
				
				if (featureEvent.data.pop_min) {
					content += `<li><h3>Min:</h3><p class="open-sans">${featureEvent.data.pop_min}</p></li>`;
				}
				
				content += `</ul>`;
			}
			
			content += `hiiiii</div>`;
			
			popup.setContent(content);
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
