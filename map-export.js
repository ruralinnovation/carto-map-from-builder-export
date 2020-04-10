const mapExportJSON = {
  "version": "2.1.3",
  "visualization": {
    "id": "722b00a2-3f60-408a-a21e-d134847bd5fc",
    "name": "[LIVE-STATNEWS] County Preparedness Score",
    "description": "Based on preliminary results.",
    "version": 3,
    "type": "derived",
    "tags": [],
    "privacy": "link",
    "source": null,
    "license": null,
    "title": null,
    "kind": "geom",
    "attributions": null,
    "bbox": null,
    "display_name": null,
    "map": {
      "provider": "leaflet",
      "bounding_box_sw": "[-85.0511, -179]",
      "bounding_box_ne": "[85.0511, 179]",
      "center": "[45.137761499999996,0]",
      "zoom": 1,
      "view_bounds_sw": "[24.3595, -179]",
      "view_bounds_ne": "[57.4133, 179]",
      "scrollwheel": true,
      "legends": true,
      "options": {
        "legends": true,
        "scrollwheel": false,
        "layer_selector": false,
        "dashboard_menu": false
      }
    },
    "layers": [{
      "options": {
        "type": "Tiled",
        "category": "CARTO",
        "urlTemplate": "https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png",
        "urlTemplate2x": "https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}@2x.png",
        "subdomains": "abcd",
        "minZoom": "0",
        "maxZoom": "18",
        "name": "Dark matter",
        "className": "dark_matter_rainbow_labels",
        "attribution": "\u0026copy; \u003ca href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\" rel=\"noopener\"\u003eOpenStreetMap\u003c/a\u003e contributors, \u0026copy; \u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\" rel=\"noopener\"\u003eMapTiler\u003c/a\u003e",
        "selected": true,
        "val": "dark_matter_rainbow_labels",
        "label": "Dark matter",
        "default": false,
        "highlighted": true
      },
      "kind": "tiled",
      "infowindow": null,
      "tooltip": null,
      "widgets": [],
      "legends": []
    }, {
      "options": {
        "opacity": 0.99,
        "auto_bound": false,
        "interactivity": "cartodb_id",
        "debug": false,
        "visible": true,
        "tiler_domain": "carto.com",
        "tiler_port": "443",
        "tiler_protocol": "https",
        "sql_domain": "carto.com",
        "sql_port": "443",
        "sql_protocol": "https",
        "extra_params": {
          "cache_policy": "persist"
        },
        "cdn_url": "",
        "tile_style_history": [],
        "style_version": "2.1.1",
        "table_name": "county_preparedness_score",
        "user_name": "ruralinnovation-admin",
        "style_properties": {
          "type": "simple",
          "properties": {
            "fill": {
              "color": {
                "attribute": "prep_score_1",
                "attribute_type": "number",
                "range": ["#cf597e", "#e88471", "#eeb479", "#e9e29c", "#9ccb86", "#39b185", "#009392"],
                "bins": "7",
                "quantification": "equal"
              }
            },
            "stroke": {
              "size": {
                "fixed": 0.4
              },
              "color": {
                "opacity": 0.5,
                "fixed": "#FFFFFF"
              }
            },
            "blending": "none",
            "aggregation": {},
            "labels": {
              "enabled": false,
              "attribute": null,
              "font": "DejaVu Sans Book",
              "fill": {
                "size": {
                  "fixed": 10
                },
                "color": {
                  "fixed": "#FFFFFF",
                  "opacity": 1
                }
              },
              "halo": {
                "size": {
                  "fixed": 1
                },
                "color": {
                  "fixed": "#6F808D",
                  "opacity": 1
                }
              },
              "offset": -10,
              "overlap": true,
              "placement": "point"
            }
          }
        },
        "source": "a0",
        "letter": "a",
        "color": "#11A579",
        "type": "CartoDB",
        "sql_wrap": null,
        "cartocss_history": ["#layer {\n  polygon-fill: ramp([prep_score_1], (#cf597e, #e88471, #eeb479, #e9e29c, #9ccb86, #39b185, #009392), equal);\n}\n#layer::outline {\n  line-width: 0.4;\n  line-color: #FFFFFF;\n  line-opacity: 0.5;\n}", "#layer {\n  polygon-fill: ramp(\n    [prep_score_1], \n    (\n      #dc0302, \n      #DD6F4C, \n      #1FADB6, \n      #76D282, \n      #77ff02\n    ), \n    equal\n  );\n}\n#layer::outline {\n  line-width: 0.4;\n  line-color: #FFFFFF;\n  line-opacity: 0.5;\n}"],
        "sql_history": ["SELECT * FROM \"ruralinnovation-admin\".county_preparedness_score"],
        "table_name_alias": "Preparedness Score",
        "cartocss_custom": true,
        "tile_style": "#layer {\n  polygon-fill: ramp(\n    [prep_score_1], \n    (\n      #dc0302, \n      #DD6F4C, \n      #1FADB6, \n      #76D282, \n      #77ff02\n    ), \n    equal\n  );\n}\n#layer::outline {\n  line-width: 0.4;\n  line-color: #FFFFFF;\n  line-opacity: 0.5;\n}",
        "query": "SELECT * FROM \"ruralinnovation-admin\".county_preparedness_score"
      },
      "kind": "carto",
      "infowindow": {
        "template_name": "",
        "fields": [{
          "name": "geoid",
          "title": true,
          "position": 2
        }, {
          "name": "name",
          "title": true,
          "position": 3
        }, {
          "name": "st_stusps",
          "title": true,
          "position": 4
        }, {
          "name": "icuover_max_date",
          "title": true,
          "position": 5
        }, {
          "name": "total_estimated_bed_40_mins_100k",
          "title": true,
          "position": 6
        }, {
          "name": "icu_bed_max_date",
          "title": true,
          "position": 6
        }, {
          "name": "bed_score_1",
          "title": true,
          "position": 7
        }, {
          "name": "total_estimated_bed_40_mins",
          "title": true,
          "position": 7
        }, {
          "name": "bed_score_2",
          "title": true,
          "position": 8
        }, {
          "name": "total_staff",
          "title": true,
          "position": 9
        }, {
          "name": "total_staff_100k",
          "title": true,
          "position": 10
        }, {
          "name": "staff_score_1",
          "title": true,
          "position": 11
        }, {
          "name": "staff_score_2",
          "title": true,
          "position": 12
        }, {
          "name": "pct_65_over_2018",
          "title": true,
          "position": 13
        }, {
          "name": "dem_score_1",
          "title": true,
          "position": 14
        }, {
          "name": "dem_score_2",
          "title": true,
          "position": 15
        }, {
          "name": "svi_socioeconomic",
          "title": true,
          "position": 16
        }, {
          "name": "se_score_1",
          "title": true,
          "position": 17
        }, {
          "name": "icuover_max_needed",
          "title": true,
          "position": 18
        }, {
          "name": "icuover_max_needed_100k",
          "title": true,
          "position": 19
        }, {
          "name": "proj_score_1",
          "title": true,
          "position": 20
        }, {
          "name": "proj_score_2",
          "title": true,
          "position": 21
        }, {
          "name": "prep_score",
          "title": true,
          "position": 22
        }, {
          "name": "prep_score_1",
          "title": true,
          "position": 23
        }, {
          "name": "prep_score_2",
          "title": true,
          "position": 24
        }, {
          "name": "prep_level",
          "title": true,
          "position": 25
        }],
        "latlng": [0, 0],
        "offset": [28, 0],
        "maxHeight": 180,
        "autoPan": true,
        "template": "    \u003cdiv class=\"CDB-infowindow CDB-infowindow--dark js-infowindow\"\u003e\n      \u003cdiv class=\"CDB-infowindow-close js-close\"\u003e\u003c/div\u003e\n      \u003cdiv class=\"CDB-infowindow-container\"\u003e\n        \u003cdiv class=\"CDB-infowindow-bg\"\u003e\n        \n\t\u003cdiv class=\"CDB-infowindow-header CDB-infowindow-headerBg CDB-infowindow-headerBg--light js-header\" style=\"background: #191e21; padding-bottom: 16px;\"\u003e\n      \u003cul class=\"CDB-infowindow-list\"\u003e\n        \u003cli class=\"CDB-infowindow-listItem\"\u003e\n          \u003ch4 class=\"CDB-infowindow-title\" style=\"font-size: 24px\"\u003e\n            {{name}}, {{st_stusps}}\n          \u003c/h4\u003e\n        \u003c/li\u003e\n      \u003c/ul\u003e\n    \u003c/div\u003e\n\n          \u003cdiv class=\"CDB-infowindow-inner js-inner\"\u003e\n            \u003cul class=\"CDB-infowindow-list js-content\"\u003e\n                \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\n\tmin-height: 3em;\n\tmargin-top: 3em;\n\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"position: absolute;left: 0px; top: 0;margin-top: -3em;font-size: 12px;text-transform: capitalize;\"\u003e\n\t\tPreparedness Level:\n\t\u003c/div\u003e\n\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 16px;\n\tfont-style: bolder;\n\"\u003e{{prep_level}}\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 3em;\n\"\u003e{{prep_score}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n\t\t\u003cdiv class='bar-container' style=\"\n                                  height: 12px;\n                                  border-radius: 4px;\n                                  position: relative;\n                                  background: linear-gradient(90deg,#dc0302, #DD6F4C 20%, #1fadb6 50%,#77ff02);\n                                  \"\u003e\n    \t\u003cdiv style=\"-webkit-transform: translateX(-12px)\"\u003e\n  \t\t\t\u003cdiv class='bar' style=\"\n\t\t\t\t\tborder-radius: 0px;\n\t\t\t\t\theight: 0px;\n\t\t\t\t\twidth: 0px;\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: {{prep_score}}%;\n\t\t\t\t\ttop: -8px;\n\t\t\t\t\tborder-left: 12px solid transparent;\n\t\t\t\t\tborder-right: 12px solid transparent;\n\t\t\t\t\tborder-top: 16px solid white;\n\t\t\t\t\t\"/\u003e\n    \t\u003c/div\u003e\n\t\u003c/div\u003e\n\t\n\t\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003ePhysical Capacity score\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{bed_score_1}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n\t\t\t\u003cdiv style=\"\n        width: 100%;\n        height: 8px;\n        border-radius: 4px;\n        background-color: rgba(10,10,10,0.6);\n      \"\u003e\n        \u003cdiv style=\"\n        border-radius: 4px;\n        height: 100%;\n        width: 0;\n        width: {{bed_score_1}}%;\n        transition: width 0.8s;\n        background-color: skyblue;\n      \"/\u003e\n      \u003c/div\u003e\n\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003eHuman Resources score\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{staff_score_1}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n\t\t\t\u003cdiv style=\"\n        width: 100%;\n        height: 8px;\n        border-radius: 4px;\n        background-color: rgba(10,10,10,0.6);\n      \"\u003e\n        \u003cdiv style=\"\n        border-radius: 4px;\n        height: 100%;\n        width: 0;\n        width: {{staff_score_1}}%;\n        transition: width 0.8s;\n        background-color: skyblue;\n      \"/\u003e\n      \u003c/div\u003e\n\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003eDemographic score\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{dem_score_1}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n\t\t\t\u003cdiv style=\"\n        width: 100%;\n        height: 8px;\n        border-radius: 4px;\n        background-color: rgba(10,10,10,0.6);\n      \"\u003e\n        \u003cdiv style=\"\n        border-radius: 4px;\n        height: 100%;\n        width: 0;\n        width: {{dem_score_1}}%;\n        transition: width 0.8s;\n        background-color: skyblue;\n      \"/\u003e\n      \u003c/div\u003e\n\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003eSocio-Economic score\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{se_score_1}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n\t\t\t\u003cdiv style=\"\n        width: 100%;\n        height: 8px;\n        border-radius: 4px;\n        background-color: rgba(10,10,10,0.6);\n      \"\u003e\n        \u003cdiv style=\"\n        border-radius: 4px;\n        height: 100%;\n        width: 0;\n        width: {{se_score_1}}%;\n        transition: width 0.8s;\n        background-color: skyblue;\n      \"/\u003e\n      \u003c/div\u003e\n\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003eCOVID-19 score\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{proj_score_1}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n\t\t\t\u003cdiv style=\"\n        width: 100%;\n        height: 8px;\n        border-radius: 4px;\n        background-color: rgba(10,10,10,0.6);\n      \"\u003e\n        \u003cdiv style=\"\n        border-radius: 4px;\n        height: 100%;\n        width: 0;\n        width: {{proj_score_1}}%;\n        transition: width 0.8s;\n        background-color: skyblue;\n      \"/\u003e\n      \u003c/div\u003e\n\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003eStaff w/in 40min per 100k\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{total_staff_dt_100k}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003eBEDS IN 40 MINS PER 100K\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{total_estimated_bed_40_mins_100k}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003ePERCENT POP AGE \u003e 65\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{pct_65_over_2018}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003eCDC SVI\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{svi_socioeconomic}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003eICU SHORTAGE AT PEAK PER 100K\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{icuover_max_needed_100k}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n            \u003c/ul\u003e\n          \u003c/div\u003e\n        \u003c/div\u003e\n        \n\t\u003cdiv style=\"\n\t\t\tposition: relative;\n\t\t\tbottom: 25px;\n\t\t\tleft: 24px;\n\t\"\u003e\n    \u003cdiv style=\"\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\tborder-top: 16px solid #2e3c42;\n\t\t\tborder-right: 24px solid transparent;\n\t\t\tz-index: 3;\n\t\t\t\t\"/\u003e\n    \u003c/div\u003e\n\n      \u003c/div\u003e\n    \u003c/div\u003e\n  ",
        "content": "",
        "visibility": false,
        "alternative_names": {
          "icuover_max_needed": "",
          "name": "",
          "st_stusps": "",
          "total_estimated_bed_40_mins_100k": "Beds in 40 mins per 100k",
          "bed_score_1": "BED SCORE",
          "total_staff_100k": "Critical staff per 100k",
          "staff_score_1": "CRITICAL STAFF SCORE",
          "pct_65_over_2018": "Percent Pop age \u003e 65",
          "dem_score_1": "DEMOGRAPHIC SCORE",
          "svi_socioeconomic": "CDC SVI",
          "se_score_1": "SOCIAL-ECONOMIC SCORE",
          "icuover_max_needed_100k": "ICU shortage at peak per 100k",
          "prep_score": "Overall Preparedness Score",
          "prep_level": "Prepare Level",
          "proj_score_1": "COVID-19",
          "prep_score_1": "",
          "prep_score_2": "",
          "total_estimated_bed_40_mins": "",
          "total_staff": ""
        },
        "width": 300,
        "headerColor": {
          "color": {
            "fixed": "#d1784b",
            "opacity": 1
          }
        },
        "template_type": "mustache",
        "old_fields": [{
          "name": "name",
          "title": false,
          "position": 0
        }, {
          "name": "st_stusps",
          "title": false,
          "position": 1
        }, {
          "name": "prep_score",
          "title": true,
          "position": 2
        }, {
          "name": "prep_level",
          "title": true,
          "position": 3
        }, {
          "name": "total_estimated_bed_40_mins_100k",
          "title": true,
          "position": 4
        }, {
          "name": "bed_score_1",
          "title": true,
          "position": 5
        }, {
          "name": "total_staff_100k",
          "title": true,
          "position": 6
        }, {
          "name": "staff_score_1",
          "title": true,
          "position": 7
        }, {
          "name": "pct_65_over_2018",
          "title": true,
          "position": 8
        }, {
          "name": "dem_score_1",
          "title": true,
          "position": 9
        }, {
          "name": "svi_socioeconomic",
          "title": true,
          "position": 10
        }, {
          "name": "se_score_1",
          "title": true,
          "position": 11
        }, {
          "name": "icuover_max_needed_100k",
          "title": true,
          "position": 12
        }, {
          "name": "proj_score_1",
          "title": true,
          "position": 13
        }],
        "old_template_name": "infowindow_color"
      },
      "tooltip": {
        "fields": [],
        "template_name": "none",
        "vertical_offset": 0,
        "horizontal_offset": 0,
        "position": "top|center",
        "template": "",
        "template_type": "mustache"
      },
      "widgets": [],
      "legends": [{
        "definition": {},
        "post_html": "",
        "pre_html": "",
        "title": "",
        "type": "choropleth"
      }]
    }, {
      "options": {
        "type": "Tiled",
        "subdomains": "abcd",
        "minZoom": "0",
        "maxZoom": "18",
        "name": "Dark matter Labels",
        "className": "dark_matter_rainbow_labels",
        "attribution": "\u0026copy; \u003ca href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\" rel=\"noopener\"\u003eOpenStreetMap\u003c/a\u003e contributors, \u0026copy; \u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\" rel=\"noopener\"\u003eMapTiler\u003c/a\u003e",
        "category": "CARTO",
        "urlTemplate": "https://{s}.basemaps.cartocdn.com/rastertiles/dark_only_labels/{z}/{x}/{y}.png",
        "urlTemplate2x": "https://{s}.basemaps.cartocdn.com/rastertiles/dark_only_labels/{z}/{x}/{y}@2x.png",
        "selected": true,
        "val": "dark_matter_rainbow_labels",
        "label": "Dark matter",
        "highlighted": true
      },
      "kind": "tiled",
      "infowindow": null,
      "tooltip": null,
      "widgets": [],
      "legends": []
    }],
    "overlays": [{
      "options": {
        "display": true,
        "x": 20,
        "y": 20
      },
      "type": "share",
      "template": ""
    }, {
      "options": {
        "display": true,
        "x": 60,
        "y": 20
      },
      "type": "search",
      "template": ""
    }, {
      "options": {
        "display": true,
        "x": 20,
        "y": 20
      },
      "type": "zoom",
      "template": "\u003ca href=\"#zoom_in\" class=\"zoom_in\"\u003e+\u003c/a\u003e \u003ca href=\"#zoom_out\" class=\"zoom_out\"\u003e-\u003c/a\u003e"
    }, {
      "options": {
        "display": true,
        "x": 20,
        "y": 150
      },
      "type": "loader",
      "template": "\u003cdiv class=\"loader\" original-title=\"\"\u003e\u003c/div\u003e"
    }, {
      "options": {
        "display": true,
        "x": 10,
        "y": 40
      },
      "type": "logo",
      "template": ""
    }],
    "analyses": [{
      "analysis_definition": {
        "id": "a0",
        "type": "source",
        "params": {
          "query": "SELECT * FROM \"ruralinnovation-admin\".county_preparedness_score"
        },
        "options": {
          "table_name": "county_preparedness_score",
          "simple_geom": "polygon"
        }
      }
    }],
    "user": {
      "username": "ruralinnovation-admin"
    },
    "state": {
      "json": {
        "map": {
          "ne": [5.938094440317893, -139.19128417968753],
          "sw": [66.14926828202209, -48.13659667968751],
          "center": [42.85558140751056, -93.66394042968751],
          "zoom": 4
        }
      }
    },
    "permission": {
      "access_control_list": []
    },
    "synchronization": null,
    "user_table": null,
    "uses_vizjson2": false,
    "mapcap": {
      "ids_json": {
        "visualization_id": "722b00a2-3f60-408a-a21e-d134847bd5fc",
        "map_id": "058a5309-abb0-4d31-a22d-48257a5d3da8",
        "layers": [{
          "layer_id": "f382fcdb-4361-4771-a388-80166e846577",
          "widgets": []
        }, {
          "layer_id": "c8b18554-99d6-4a46-9cdc-be70340c27e9",
          "widgets": []
        }, {
          "layer_id": "2e9c5788-1a5a-45ce-942f-2e9fff6834d5",
          "widgets": []
        }]
      },
      "export_json": {
        "version": "2.1.3",
        "visualization": {
          "id": "722b00a2-3f60-408a-a21e-d134847bd5fc",
          "name": "[LIVE-STATNEWS] County Preparedness Score",
          "description": "Based on preliminary results. Not for circulation. ",
          "version": 3,
          "type": "derived",
          "tags": [],
          "privacy": "link",
          "source": null,
          "license": null,
          "title": null,
          "kind": "geom",
          "attributions": null,
          "bbox": null,
          "display_name": null,
          "map": {
            "provider": "leaflet",
            "bounding_box_sw": "[-85.0511, -179]",
            "bounding_box_ne": "[85.0511, 179]",
            "center": "[45.137761499999996,0]",
            "zoom": 1,
            "view_bounds_sw": "[24.3595, -179]",
            "view_bounds_ne": "[57.4133, 179]",
            "scrollwheel": true,
            "legends": true,
            "options": {
              "legends": true,
              "scrollwheel": false,
              "layer_selector": false,
              "dashboard_menu": false
            }
          },
          "layers": [{
            "options": {
              "type": "Tiled",
              "category": "CARTO",
              "urlTemplate": "https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png",
              "urlTemplate2x": "https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}@2x.png",
              "subdomains": "abcd",
              "minZoom": "0",
              "maxZoom": "18",
              "name": "Dark matter",
              "className": "dark_matter_rainbow_labels",
              "attribution": "\u0026copy; \u003ca href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\" rel=\"noopener\"\u003eOpenStreetMap\u003c/a\u003e contributors, \u0026copy; \u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\" rel=\"noopener\"\u003eMapTiler\u003c/a\u003e",
              "selected": true,
              "val": "dark_matter_rainbow_labels",
              "label": "Dark matter",
              "default": false,
              "highlighted": true
            },
            "kind": "tiled",
            "infowindow": null,
            "tooltip": null,
            "widgets": [],
            "legends": []
          }, {
            "options": {
              "opacity": 0.99,
              "auto_bound": false,
              "interactivity": "cartodb_id",
              "debug": false,
              "visible": true,
              "tiler_domain": "carto.com",
              "tiler_port": "443",
              "tiler_protocol": "https",
              "sql_domain": "carto.com",
              "sql_port": "443",
              "sql_protocol": "https",
              "extra_params": {
                "cache_policy": "persist"
              },
              "cdn_url": "",
              "tile_style_history": [],
              "style_version": "2.1.1",
              "table_name": "county_preparedness_score",
              "user_name": "ruralinnovation-admin",
              "style_properties": {
                "type": "simple",
                "properties": {
                  "fill": {
                    "color": {
                      "attribute": "prep_score_1",
                      "attribute_type": "number",
                      "range": ["#cf597e", "#e88471", "#eeb479", "#e9e29c", "#9ccb86", "#39b185", "#009392"],
                      "bins": "7",
                      "quantification": "equal"
                    }
                  },
                  "stroke": {
                    "size": {
                      "fixed": 0.4
                    },
                    "color": {
                      "opacity": 0.5,
                      "fixed": "#FFFFFF"
                    }
                  },
                  "blending": "none",
                  "aggregation": {},
                  "labels": {
                    "enabled": false,
                    "attribute": null,
                    "font": "DejaVu Sans Book",
                    "fill": {
                      "size": {
                        "fixed": 10
                      },
                      "color": {
                        "fixed": "#FFFFFF",
                        "opacity": 1
                      }
                    },
                    "halo": {
                      "size": {
                        "fixed": 1
                      },
                      "color": {
                        "fixed": "#6F808D",
                        "opacity": 1
                      }
                    },
                    "offset": -10,
                    "overlap": true,
                    "placement": "point"
                  }
                }
              },
              "source": "a0",
              "letter": "a",
              "color": "#11A579",
              "type": "CartoDB",
              "sql_wrap": null,
              "cartocss_history": ["#layer {\n  polygon-fill: ramp([prep_score_1], (#cf597e, #e88471, #eeb479, #e9e29c, #9ccb86, #39b185, #009392), equal);\n}\n#layer::outline {\n  line-width: 0.4;\n  line-color: #FFFFFF;\n  line-opacity: 0.5;\n}", "#layer {\n  polygon-fill: ramp(\n    [prep_score_1], \n    (\n      #dc0302, \n      #DD6F4C, \n      #1FADB6, \n      #76D282, \n      #77ff02\n    ), \n    equal\n  );\n}\n#layer::outline {\n  line-width: 0.4;\n  line-color: #FFFFFF;\n  line-opacity: 0.5;\n}"],
              "sql_history": ["SELECT * FROM \"ruralinnovation-admin\".county_preparedness_score"],
              "table_name_alias": "Preparedness Score",
              "cartocss_custom": true,
              "tile_style": "#layer {\n  polygon-fill: ramp(\n    [prep_score_1], \n    (\n      #dc0302, \n      #DD6F4C, \n      #1FADB6, \n      #76D282, \n      #77ff02\n    ), \n    equal\n  );\n}\n#layer::outline {\n  line-width: 0.4;\n  line-color: #FFFFFF;\n  line-opacity: 0.5;\n}",
              "query": "SELECT * FROM \"ruralinnovation-admin\".county_preparedness_score"
            },
            "kind": "carto",
            "infowindow": {
              "template_name": "",
              "fields": [{
                "name": "geoid",
                "title": true,
                "position": 2
              }, {
                "name": "name",
                "title": true,
                "position": 3
              }, {
                "name": "st_stusps",
                "title": true,
                "position": 4
              }, {
                "name": "icuover_max_date",
                "title": true,
                "position": 5
              }, {
                "name": "total_estimated_bed_40_mins_100k",
                "title": true,
                "position": 6
              }, {
                "name": "icu_bed_max_date",
                "title": true,
                "position": 6
              }, {
                "name": "bed_score_1",
                "title": true,
                "position": 7
              }, {
                "name": "total_estimated_bed_40_mins",
                "title": true,
                "position": 7
              }, {
                "name": "bed_score_2",
                "title": true,
                "position": 8
              }, {
                "name": "total_staff",
                "title": true,
                "position": 9
              }, {
                "name": "total_staff_100k",
                "title": true,
                "position": 10
              }, {
                "name": "staff_score_1",
                "title": true,
                "position": 11
              }, {
                "name": "staff_score_2",
                "title": true,
                "position": 12
              }, {
                "name": "pct_65_over_2018",
                "title": true,
                "position": 13
              }, {
                "name": "dem_score_1",
                "title": true,
                "position": 14
              }, {
                "name": "dem_score_2",
                "title": true,
                "position": 15
              }, {
                "name": "svi_socioeconomic",
                "title": true,
                "position": 16
              }, {
                "name": "se_score_1",
                "title": true,
                "position": 17
              }, {
                "name": "icuover_max_needed",
                "title": true,
                "position": 18
              }, {
                "name": "icuover_max_needed_100k",
                "title": true,
                "position": 19
              }, {
                "name": "proj_score_1",
                "title": true,
                "position": 20
              }, {
                "name": "proj_score_2",
                "title": true,
                "position": 21
              }, {
                "name": "prep_score",
                "title": true,
                "position": 22
              }, {
                "name": "prep_score_1",
                "title": true,
                "position": 23
              }, {
                "name": "prep_score_2",
                "title": true,
                "position": 24
              }, {
                "name": "prep_level",
                "title": true,
                "position": 25
              }],
              "latlng": [0, 0],
              "offset": [28, 0],
              "maxHeight": 180,
              "autoPan": true,
              "template": "    \u003cdiv class=\"CDB-infowindow CDB-infowindow--dark js-infowindow\"\u003e\n      \u003cdiv class=\"CDB-infowindow-close js-close\"\u003e\u003c/div\u003e\n      \u003cdiv class=\"CDB-infowindow-container\"\u003e\n        \u003cdiv class=\"CDB-infowindow-bg\"\u003e\n        \n\t\u003cdiv class=\"CDB-infowindow-header CDB-infowindow-headerBg CDB-infowindow-headerBg--light js-header\" style=\"background: #191e21; padding-bottom: 16px;\"\u003e\n      \u003cul class=\"CDB-infowindow-list\"\u003e\n        \u003cli class=\"CDB-infowindow-listItem\"\u003e\n          \u003ch4 class=\"CDB-infowindow-title\" style=\"font-size: 24px\"\u003e\n            {{name}}, {{st_stusps}}\n          \u003c/h4\u003e\n        \u003c/li\u003e\n      \u003c/ul\u003e\n    \u003c/div\u003e\n\n          \u003cdiv class=\"CDB-infowindow-inner js-inner\"\u003e\n            \u003cul class=\"CDB-infowindow-list js-content\"\u003e\n                \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\n\tmin-height: 3em;\n\tmargin-top: 3em;\n\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"position: absolute;left: 0px; top: 0;margin-top: -3em;font-size: 12px;text-transform: capitalize;\"\u003e\n\t\tPreparedness Level:\n\t\u003c/div\u003e\n\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 16px;\n\tfont-style: bolder;\n\"\u003e{{prep_level}}\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 3em;\n\"\u003e{{prep_score}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n\t\t\u003cdiv class='bar-container' style=\"\n                                  height: 12px;\n                                  border-radius: 4px;\n                                  position: relative;\n                                  background: linear-gradient(90deg,#dc0302, #DD6F4C 20%, #1fadb6 50%,#77ff02);\n                                  \"\u003e\n    \t\u003cdiv style=\"-webkit-transform: translateX(-12px)\"\u003e\n  \t\t\t\u003cdiv class='bar' style=\"\n\t\t\t\t\tborder-radius: 0px;\n\t\t\t\t\theight: 0px;\n\t\t\t\t\twidth: 0px;\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: {{prep_score}}%;\n\t\t\t\t\ttop: -8px;\n\t\t\t\t\tborder-left: 12px solid transparent;\n\t\t\t\t\tborder-right: 12px solid transparent;\n\t\t\t\t\tborder-top: 16px solid white;\n\t\t\t\t\t\"/\u003e\n    \t\u003c/div\u003e\n\t\u003c/div\u003e\n\t\n\t\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003ePhysical Capacity score\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{bed_score_1}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n\t\t\t\u003cdiv style=\"\n        width: 100%;\n        height: 8px;\n        border-radius: 4px;\n        background-color: rgba(10,10,10,0.6);\n      \"\u003e\n        \u003cdiv style=\"\n        border-radius: 4px;\n        height: 100%;\n        width: 0;\n        width: {{bed_score_1}}%;\n        transition: width 0.8s;\n        background-color: skyblue;\n      \"/\u003e\n      \u003c/div\u003e\n\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003eHuman Resources score\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{staff_score_1}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n\t\t\t\u003cdiv style=\"\n        width: 100%;\n        height: 8px;\n        border-radius: 4px;\n        background-color: rgba(10,10,10,0.6);\n      \"\u003e\n        \u003cdiv style=\"\n        border-radius: 4px;\n        height: 100%;\n        width: 0;\n        width: {{staff_score_1}}%;\n        transition: width 0.8s;\n        background-color: skyblue;\n      \"/\u003e\n      \u003c/div\u003e\n\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003eDemographic score\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{dem_score_1}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n\t\t\t\u003cdiv style=\"\n        width: 100%;\n        height: 8px;\n        border-radius: 4px;\n        background-color: rgba(10,10,10,0.6);\n      \"\u003e\n        \u003cdiv style=\"\n        border-radius: 4px;\n        height: 100%;\n        width: 0;\n        width: {{dem_score_1}}%;\n        transition: width 0.8s;\n        background-color: skyblue;\n      \"/\u003e\n      \u003c/div\u003e\n\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003eSocio-Economic score\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{se_score_1}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n\t\t\t\u003cdiv style=\"\n        width: 100%;\n        height: 8px;\n        border-radius: 4px;\n        background-color: rgba(10,10,10,0.6);\n      \"\u003e\n        \u003cdiv style=\"\n        border-radius: 4px;\n        height: 100%;\n        width: 0;\n        width: {{se_score_1}}%;\n        transition: width 0.8s;\n        background-color: skyblue;\n      \"/\u003e\n      \u003c/div\u003e\n\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003eCOVID-19 score\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{proj_score_1}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n\t\t\t\u003cdiv style=\"\n        width: 100%;\n        height: 8px;\n        border-radius: 4px;\n        background-color: rgba(10,10,10,0.6);\n      \"\u003e\n        \u003cdiv style=\"\n        border-radius: 4px;\n        height: 100%;\n        width: 0;\n        width: {{proj_score_1}}%;\n        transition: width 0.8s;\n        background-color: skyblue;\n      \"/\u003e\n      \u003c/div\u003e\n\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003eStaff w/in 40min per 100k\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{total_staff_dt_100k}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003eBEDS IN 40 MINS PER 100K\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{total_estimated_bed_40_mins_100k}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003ePERCENT POP AGE \u003e 65\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{pct_65_over_2018}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003eCDC SVI\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{svi_socioeconomic}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n    \u003cli class=\"CDB-infowindow-listItem\" style=\"\"\u003e\n    \t\u003cdiv style=\"min-height: 42px;\"\u003e\n\t\t\t\t\u003cdiv style=\"\n\tposition: relative;\n\tpadding-bottom: 4px;\n\tpadding-top: 4px;\n\t\n\"\u003e\n\t\t\t\t\t\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-subtitle\" style=\"\n\tposition: absolute;\n\tleft: 0px;\n\tbottom: 8px;\n\tfont-size: 12px;\n\t\n\"\u003eICU SHORTAGE AT PEAK PER 100K\u003c/div\u003e\n\t\t\t\t\t\u003cdiv class=\"CDB-infowindow-title\" style=\"\n\tposition: absolute;\n\tright: 8px;\n\tbottom: 8px;\n\tline-height: 1em;\n\tfont-size: 2em;\n\"\u003e{{icuover_max_needed_100k}}\u003c/div\u003e\n\t\t\t\t\u003c/div\u003e\n\t\t\t\t\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \n            \u003c/ul\u003e\n          \u003c/div\u003e\n        \u003c/div\u003e\n        \n\t\u003cdiv style=\"\n\t\t\tposition: relative;\n\t\t\tbottom: 25px;\n\t\t\tleft: 24px;\n\t\"\u003e\n    \u003cdiv style=\"\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\tborder-top: 16px solid #2e3c42;\n\t\t\tborder-right: 24px solid transparent;\n\t\t\tz-index: 3;\n\t\t\t\t\"/\u003e\n    \u003c/div\u003e\n\n      \u003c/div\u003e\n    \u003c/div\u003e\n  ",
              "content": "",
              "visibility": false,
              "alternative_names": {
                "icuover_max_needed": "",
                "name": "",
                "st_stusps": "",
                "total_estimated_bed_40_mins_100k": "Beds in 40 mins per 100k",
                "bed_score_1": "BED SCORE",
                "total_staff_100k": "Critical staff per 100k",
                "staff_score_1": "CRITICAL STAFF SCORE",
                "pct_65_over_2018": "Percent Pop age \u003e 65",
                "dem_score_1": "DEMOGRAPHIC SCORE",
                "svi_socioeconomic": "CDC SVI",
                "se_score_1": "SOCIAL-ECONOMIC SCORE",
                "icuover_max_needed_100k": "ICU shortage at peak per 100k",
                "prep_score": "Overall Preparedness Score",
                "prep_level": "Prepare Level",
                "proj_score_1": "COVID-19",
                "prep_score_1": "",
                "prep_score_2": "",
                "total_estimated_bed_40_mins": "",
                "total_staff": ""
              },
              "width": 300,
              "headerColor": {
                "color": {
                  "fixed": "#d1784b",
                  "opacity": 1
                }
              },
              "template_type": "mustache",
              "old_fields": [{
                "name": "name",
                "title": false,
                "position": 0
              }, {
                "name": "st_stusps",
                "title": false,
                "position": 1
              }, {
                "name": "prep_score",
                "title": true,
                "position": 2
              }, {
                "name": "prep_level",
                "title": true,
                "position": 3
              }, {
                "name": "total_estimated_bed_40_mins_100k",
                "title": true,
                "position": 4
              }, {
                "name": "bed_score_1",
                "title": true,
                "position": 5
              }, {
                "name": "total_staff_100k",
                "title": true,
                "position": 6
              }, {
                "name": "staff_score_1",
                "title": true,
                "position": 7
              }, {
                "name": "pct_65_over_2018",
                "title": true,
                "position": 8
              }, {
                "name": "dem_score_1",
                "title": true,
                "position": 9
              }, {
                "name": "svi_socioeconomic",
                "title": true,
                "position": 10
              }, {
                "name": "se_score_1",
                "title": true,
                "position": 11
              }, {
                "name": "icuover_max_needed_100k",
                "title": true,
                "position": 12
              }, {
                "name": "proj_score_1",
                "title": true,
                "position": 13
              }],
              "old_template_name": "infowindow_color"
            },
            "tooltip": {
              "fields": [],
              "template_name": "none",
              "vertical_offset": 0,
              "horizontal_offset": 0,
              "position": "top|center",
              "template": "",
              "template_type": "mustache"
            },
            "widgets": [],
            "legends": [{
              "definition": {},
              "post_html": "",
              "pre_html": "",
              "title": "",
              "type": "choropleth"
            }]
          }, {
            "options": {
              "type": "Tiled",
              "subdomains": "abcd",
              "minZoom": "0",
              "maxZoom": "18",
              "name": "Dark matter Labels",
              "className": "dark_matter_rainbow_labels",
              "attribution": "\u0026copy; \u003ca href=\"http://www.openstreetmap.org/copyright\" target=\"_blank\" rel=\"noopener\"\u003eOpenStreetMap\u003c/a\u003e contributors, \u0026copy; \u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\" rel=\"noopener\"\u003eMapTiler\u003c/a\u003e",
              "category": "CARTO",
              "urlTemplate": "https://{s}.basemaps.cartocdn.com/rastertiles/dark_only_labels/{z}/{x}/{y}.png",
              "urlTemplate2x": "https://{s}.basemaps.cartocdn.com/rastertiles/dark_only_labels/{z}/{x}/{y}@2x.png",
              "selected": true,
              "val": "dark_matter_rainbow_labels",
              "label": "Dark matter",
              "highlighted": true
            },
            "kind": "tiled",
            "infowindow": null,
            "tooltip": null,
            "widgets": [],
            "legends": []
          }],
          "overlays": [{
            "options": {
              "display": true,
              "x": 20,
              "y": 20
            },
            "type": "share",
            "template": ""
          }, {
            "options": {
              "display": true,
              "x": 60,
              "y": 20
            },
            "type": "search",
            "template": ""
          }, {
            "options": {
              "display": true,
              "x": 20,
              "y": 20
            },
            "type": "zoom",
            "template": "\u003ca href=\"#zoom_in\" class=\"zoom_in\"\u003e+\u003c/a\u003e \u003ca href=\"#zoom_out\" class=\"zoom_out\"\u003e-\u003c/a\u003e"
          }, {
            "options": {
              "display": true,
              "x": 20,
              "y": 150
            },
            "type": "loader",
            "template": "\u003cdiv class=\"loader\" original-title=\"\"\u003e\u003c/div\u003e"
          }, {
            "options": {
              "display": true,
              "x": 10,
              "y": 40
            },
            "type": "logo",
            "template": ""
          }],
          "analyses": [{
            "analysis_definition": {
              "id": "a0",
              "type": "source",
              "params": {
                "query": "SELECT * FROM \"ruralinnovation-admin\".county_preparedness_score"
              },
              "options": {
                "table_name": "county_preparedness_score",
                "simple_geom": "polygon"
              }
            }
          }],
          "user": {
            "username": "ruralinnovation-admin"
          },
          "state": {
            "json": {
              "map": {
                "ne": [5.938094440317893, -139.19128417968753],
                "sw": [66.14926828202209, -48.13659667968751],
                "center": [42.85558140751056, -93.66394042968751],
                "zoom": 4
              }
            }
          },
          "permission": {
            "access_control_list": []
          },
          "synchronization": null,
          "user_table": null,
          "uses_vizjson2": false,
          "mapcap": null,
          "external_source": null,
          "created_at": "2020-04-06T11:52:40.377Z",
          "updated_at": "2020-04-09T21:39:27.396Z",
          "locked": false
        }
      },
      "created_at": "2020-04-10T21:25:06.689Z"
    },
    "external_source": null,
    "created_at": "2020-04-06T11:52:40.377Z",
    "updated_at": "2020-04-09T21:39:27.396Z",
    "locked": false
  }
}
