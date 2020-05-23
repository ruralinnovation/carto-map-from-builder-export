[![image](https://user-images.githubusercontent.com/6570507/80257078-fbd9d580-8634-11ea-90f7-9a9b59106d67.png)](https://ruralinnovation.github.io/carto-map-from-builder-export/)

# VISION: Generating (story)maps from Builder Exports

This repo was started in order to be able to download a builder map, then convert that quickly into a storymap.

Why? Builder is the fastest way to build and style layers, and we want a quick way to convert it to a sharable storymap.

What ended up happening was, midway through, we converted this as starter code for our work with New Lab, and use at the New Lab Hackathon.

This helped me code it nice and modularly, but also means we haven't gotten to the storymap part yet.

### My ultimate vision:
You click download on a builder map, and drag and drop it onto the UI, and it automaticaly opens it and populates the UI with each layer.

Then, you can add slides, and specify which layers are turned on for each slide, and the lat/lon/zoom for that slide. 


# Creating custom maps using CORI's CARTO data [Demo](https://ruralinnovation.github.io/carto-map-from-builder-export/)
This is a starter template for building custom [carto.js](https://carto.com/developers/carto-js/) maps using Leaflet.js to render the map, and pulling map tiles and SQL requests to the Center on Rural Innovation's public access data.

**Most notably, we're pulling in all layers and layer meta-info from a CARTO Builder export.** 

The long term aim is to be able to generate storymaps from layers styled in Builder before hand.

## High level technical overview
- `Map.js` abstracts map logic, and exposes a few public method you'll want to use/tweak
- `DataFetcher.js` handles SQL API calls. **This is useful boilerplate for SQL calls even if you're not planning on using this starter project.**
- `PopupGenerator.js` holds logic for creating layer-specific popups, via a (semi-hacky) HTML string injection method.
- `CartoMapExportConversion.js` takes in the JSON export file from the Builder export (once its unzipped, of course) and loads it into a map.

## Useful tidbits
- CARTO has a UI library designed to work seemlessly with their APIs: [Airship.js](https://carto.com/developers/airship/)
- It's often easiest to build maps in CARTO Builder's GUI, then copy and paste the CARTO CSS and popup HTML into this custom map project.
