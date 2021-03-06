﻿/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

    "use strict";

    if (!$('#s-DashboardPage').length)
        return;

    //Make the dashboard widgets sortable Using jquery UI
    $(".connectedSortable").sortable({
        placeholder: "sort-highlight",
        connectWith: ".connectedSortable",
        handle: ".box-header, .nav-tabs",
        forcePlaceholderSize: true,
        zIndex: 999999
    });
    $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");

    //jQuery UI sortable for the todo list
    $(".todo-list").sortable({
        placeholder: "sort-highlight",
        handle: ".handle",
        forcePlaceholderSize: true,
        zIndex: 999999
    });

    //bootstrap WYSIHTML5 - text editor
    $(".textarea").wysihtml5();

    $('.daterange').daterangepicker({
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        startDate: moment().subtract(29, 'days'),
        endDate: moment()
    }, function (start, end) {
        window.alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });

    /* jQueryKnob */
    $(".knob").knob();

    //jvectormap data
    var visitorsData = {
        "US": 398, //USA
        "SA": 400, //Saudi Arabia
        "CA": 1000, //Canada
        "DE": 500, //Germany
        "FR": 760, //France
        "CN": 300, //China
        "AU": 700, //Australia
        "BR": 600, //Brazil
        "IN": 800, //India
        "GB": 320, //Great Britain
        "RU": 3000 //Russia
    };

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
                    el.html(el.html() + "<img src=\"Content/site/slides/slide1.jpg\"  height=\"42\" width=\"42\"><br>"
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
                            'closed': 'Content/map/icon-np-1.png',
                            'activeUntil2018': 'Content/map/icon-np-2.png',
                            'activeUntil2022': 'Content/map/icon-np-3.png'
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

    //Sparkline charts
    var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
    $('#sparkline-1').sparkline(myvalues, {
        type: 'line',
        lineColor: '#92c1dc',
        fillColor: "#ebf4f9",
        height: '50',
        width: '80'
    });
    myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
    $('#sparkline-2').sparkline(myvalues, {
        type: 'line',
        lineColor: '#92c1dc',
        fillColor: "#ebf4f9",
        height: '50',
        width: '80'
    });
    myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
    $('#sparkline-3').sparkline(myvalues, {
        type: 'line',
        lineColor: '#92c1dc',
        fillColor: "#ebf4f9",
        height: '50',
        width: '80'
    });

    //The Calender
    $("#calendar").datepicker();

    //SLIMSCROLL FOR CHAT WIDGET
    $('#chat-box').slimScroll({
        height: '250px'
    });
   
  

    /* *****************ChartJs هفتگی**********************/
    var timeFormat = 'MM/DD/YYYY HH:mm:ss';

    function newDate(days) {
        return moment().add(days, 'd').toDate();
        }

    function newDateString(days) {
        return moment().add(days, 'd').format(timeFormat);
        }
var color = Chart.helpers.color;
var dragOptions = {
    animationDuration: 1000
};
     var configb = {
            type: 'line',
          data: {
              labels: [newDate(-1),
                      newDate()],
          datasets: [{
          label: 'Power',
          backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
          borderColor: window.chartColors.green,
                    fill: false,
                    data: [],
                }]
                },
          options: {
              responsive: true,
              title: {
                  display: true,
                  text: 'Chart.js Time Scale'
              },
              tooltips: {
                  mode: 'index',
                  intersect: false,
              },
              scales: {
                  xAxes: [{
                      type: 'time',
                      time: {
                          parser: timeFormat,
                          // round: 'day'
                          tooltipFormat: 'll HH:mm'
                      },
                      scaleLabel: {
                          display: true,
                          labelString: ''
                      },
                      ticks: {
                          maxRotation: 0
                      }
                  }],
                  yAxes: [{
                      scaleLabel: {
                          display: true,
                          labelString: '(Power(Kw'
                      }
                  }]
              },
              plugins: {
                  zoom: {
                      zoom: {
                          enabled: true,
                          drag: false,
                          mode: 'x',
                          speed: 0.1
                      }
                  }
              }
          }
     };

     configb.data.datasets.forEach(function (dataset) {
         dataset.borderColor = randomColor(0.4);
         dataset.backgroundColor = randomColor(0.5);
         dataset.pointBorderColor = randomColor(0);
         dataset.pointBackgroundColor = randomColor(0.7);
         dataset.pointBorderWidth = 0.1;
     });

                        ///////*************CHartJs هفتگی*****************



    /* *****************ChartJs روزانه**********************/
     function randomColorFactor() {
         return Math.round(Math.random() * 255);
     }
     function randomColor(opacity) {
         return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
     }
var config = {
    type: 'line',
    data: {
        labels: [newDate(-1),
                newDate()],
        datasets: [{
            label: 'Power',
            backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
            borderColor: window.chartColors.green,
            fill: true,
            data: [],
        }]
    },
    options: {
        title: {
            text: 'Chart.js Time Scale'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'index',
            intersect: false
        },
            scales: {
            xAxes: [{
                type: 'time',
                time: {
                   parser: timeFormat,
                    // round: 'day'
                    tooltipFormat: 'll HH:mm:ss'
                },
                scaleLabel: {
                    display: true,
                    labelString: ''
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: '(Power(Kw'
                }
            }]
            },
            plugins: {
                zoom: {
                    zoom: {
                        enabled: true,
                        drag: false,
                        mode: 'x',
                        speed: 0.05
                    }
                }
            }
    }



};

config.data.datasets.forEach(function (dataset) {
    dataset.borderColor = randomColor(0.4);
    dataset.backgroundColor = randomColor(0.5);
    dataset.pointBorderColor = randomColor(0.7);
    dataset.pointBackgroundColor = randomColor(0.5);
    dataset.pointBorderWidth = 1;
});

window.onload = function () {
    var ctx = document.getElementById('chart1').getContext('2d');
    var charta = new Chart(ctx, config);



    Refreshq();
    function Refreshq() {
        $.ajax({
            url: 'dbnames',
            dataType: 'json',
            success: function (dataFromUrl) {
                var dataset = charta.config.data.datasets[0];
                var i = 0;
                dataset.data = [];
                for (i = 0; i < dataFromUrl.length; i++) {
                    var obj = {
                        x: moment(dataFromUrl[i].y).format(timeFormat),
                        y: dataFromUrl[i].item1
                    };
                    dataset.data.push(obj);
                }

                charta.update();

                setTimeout(function () {
                    Refreshq();
                }, 20000);
            }
        });



        var ctxb = document.getElementById('chart2').getContext('2d');
        var chartb = new Chart(ctxb, configb);



        Refreshb();
        function Refreshb() {
            $.ajax({
                url: 'dbnames2',
                dataType: 'json',
                success: function (dataFromUrlb) {
                    var datasetb = chartb.config.data.datasets[0];
                    var i = 0;
                    datasetb.data = [];
                    for (i = 0; i < dataFromUrlb.length; i++) {
                        var obj = {
                            x: moment(dataFromUrlb[i].y).format(timeFormat),
                            y: dataFromUrlb[i].item1
                        };
                        datasetb.data.push(obj);
                    }

                    chartb.update();

                    setTimeout(function () {
                        Refreshb();
                    }, 20000);
                }
            });

        }


    }
};

    ///////*************CHartJs*****************

 
    //Fix for charts under tabs
    $('.box ul.nav a').on('shown.bs.tab', function () {
        area.redraw();
        donut.redraw();
        line.redraw();
    });

    /* The todo list plugin */
    $(".todo-list").todolist({
        onCheck: function (ele) {
            window.console.log("The element has been checked");
            return ele;
        },
        onUncheck: function (ele) {
            window.console.log("The element has been unchecked");
            return ele;
        }
    });

});
