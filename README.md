[![image](https://user-images.githubusercontent.com/6570507/80257078-fbd9d580-8634-11ea-90f7-9a9b59106d67.png)](https://ruralinnovation.github.io/carto-map-from-builder-export/)

# Creating custom maps using CORI's CARTO data [Demo](https://ruralinnovation.github.io/carto-map-from-builder-export/)
This is a starter template for building custom [carto.js](https://carto.com/developers/carto-js/) maps using Leaflet.js to render the map, and pulling map tiles and SQL requests to the Center on Rural Innovation's public access data.

**Most notably, we're pulling in all layers and layer meta-info from a CARTO Builder export.** 

The long term aim is to be able to generate storymaps from layers styled in Builder before hand.

## High level technical overview
- All work is on this branch, `gh-pages`, so any pushed commit can immediately be shared/demo-ed.
- [Map.js](https://github.com/ruralinnovation/carto-map-from-builder-export/blob/gh-pages/Map.js) abstracts map logic, and exposes a few public method you'll want to use/tweak
- [DataFetcher.js](https://github.com/ruralinnovation/carto-map-from-builder-export/blob/gh-pages/DataFetcher.js) handles SQL API calls. **This is useful boilerplate for SQL calls even if you're not planning on using this starter project.**
- [PopupGenerator.js](https://github.com/ruralinnovation/carto-map-from-builder-export/blob/gh-pages/PopupGenerator.js) holds logic for creating layer-specific popups, via a (semi-hacky) HTML string injection method.

## Useful tidbits
- CARTO has a UI library designed to work seemlessly with their APIs: [Airship.js](https://carto.com/developers/airship/)
- It's often easiest to build maps in CARTO Builder's GUI, then copy and paste the CARTO CSS and popup HTML into this custom map project.
