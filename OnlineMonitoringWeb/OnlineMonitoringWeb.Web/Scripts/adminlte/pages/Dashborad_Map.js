
    //Iran MAp
    $(function () {

        var map,
            markerIndex = 0,
            markersCoords = {};
        var plants = [
            { name: 'VAK', coords: [36.30184530368433, 59.600830078125], status: 'closed', offsets: [0, 2] },
            { name: 'MZFR', coords: [39.45, -110], status: 'activeUntil2018', offsets: [0, 2] },
            { name: 'AVR', coords: [39.2, -107], status: 'activeUntil2022' }
        ];


        new jvm.MultiMap({
            container: $('#world-map'),
            maxLevel: 2,
            subMapsOptions: {
                backgroundColor: "transparent",
            },
            mapUrlByCode: function (code, multiMap) {
                return '/Scripts/jvectormap/iran_regions_map.js';
            },
            main: {
                map: 'GeoRefIran',
                zoomMax: 12,
                focusOn: {
                    region: 'iran',
                    animate: true
                },
                backgroundColor: "transparent",
                regionStyle: {
                    initial: {
                        fill: '#e4e4e4',
                        "fill-opacity": 1,
                        stroke: 3,
                        "stroke-width": 0,
                        "stroke-opacity": 1
                    }
                },
                onRegionTipShow: function (e, el, code) {
                    el.html(el.html() + "<img src=\"/Content/site/slides/slide1.jpg\"  height=\"42\" width=\"42\"><br>"
                        + "salam");
                },

                markers: plants.map(function (h) { return { name: h.name, latLng: h.coords } }),
                labels: {
                    markers: {
                        render: function (index) {
                            return plants[index].name;
                        },
                        offsets: function (index) {
                            var offset = plants[index]['offsets'] || [0, 0];

                            return [offset[0] - 7, offset[1] + 3];
                        }
                    }
                },
                series: {
                    markers: [{
                        attribute: 'image',
                        scale: {
                            'closed': '/Content/map/icon-np-1.png',
                            'activeUntil2018': '/Content/map/icon-np-2.png',
                            'activeUntil2022': '/Content/map/icon-np-3.png'
                        },
                        values: plants.reduce(function (p, c, i) { p[i] = c.status; return p }, {}),
                    }]
                }
            }
        });
    });
    //World map by jvectormap
    //$('#world-map').vectorMap({
    //    map: 'iran_Region_mill_en',
    //  backgroundColor: "transparent",
    //  regionStyle: {
    //    initial: {
    //      fill: '#e4e4e4',
    //      "fill-opacity": 1,
    //      stroke: 'none',
    //      "stroke-width": 0,
    //      "stroke-opacity": 1
    //    }
    //  },
    //  series: {
    //    regions: [{
    //      values: visitorsData,
    //      scale: ["#92c1dc", "#ebf4f9"],
    //      normalizeFunction: 'polynomial'
    //    }]
    //  },
    //  onRegionLabelShow: function (e, el, code) {
    //    if (typeof visitorsData[code] != "undefined")
    //      el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
    //  }
    //});
