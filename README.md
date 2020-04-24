# Creating custom maps using CORI's CARTO data
This is a starter template for building custom [carto.js](https://carto.com/developers/carto-js/) maps using Leaflet.js to render the map, and pulling map tiles and SQL requests to the Center on Rural Innovation's public access data.


## High level technical overview
- All work is on this branch, `gh-pages`, so any pushed commit can immediately be shared/demo-ed.
- [Map.js](https://github.com/ruralinnovation/carto-map-from-builder-export/blob/gh-pages/Map.js) abstracts map logic, and exposes a few public method you'll want to use/tweak
- [DataFetcher.js](https://github.com/ruralinnovation/carto-map-from-builder-export/blob/gh-pages/DataFetcher.js) handles SQL API calls
- [PopupGenerator.js](https://github.com/ruralinnovation/carto-map-from-builder-export/blob/gh-pages/PopupGenerator.js) holds logic for creating layer-specific popups, via a (semi-hacky) HTML string injection method.

## Useful tidbits
- CARTO has a UI library designed to work seemlessly with their APIs: [Airship.js](https://carto.com/developers/airship/)
- It's often easiest to build maps in CARTO Builder's GUI, then copy and paste the CARTO CSS and popup HTML into this custom map project.
