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
    /* *****************ChartJs**********************/
 
    var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var config = {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: window.chartColors.red,
                borderColor: window.chartColors.red,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ],
                fill: false,
            }, {
                label: 'My Second dataset',
                fill: false,
                backgroundColor: window.chartColors.blue,
                borderColor: window.chartColors.blue,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ],
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
        }
    };
 
    window.onload = function () {
        var ctx = document.getElementById('chart1').getContext('2d');
        var chart = new Chart(ctx, config);
   

    Refreshq();
    function Refreshq() {
        $.ajax({
            url: 'dbnames',
            dataType: 'json',
            success: function (dataFromUrl) {
               
                var i = 0;
                var qqq = [];
                var ttt = [];
                for ( i = 0; i < dataFromUrl.length; i++)
                {
                    qqq[i] = dataFromUrl[i].item1;
                    ttt[i] = dataFromUrl[i].y;
                }

                var dataset = chart.config.data.datasets[0];
                var labels = chart.config.data.labels;
                dataset.data = qqq;
                labels = ttt;
                chart.update();

                setTimeout(function () {
                    Refreshq();
                }, 10000);
            }
        });

    }

    };
///////*************CHartJs*****************
  
    /* Morris.js Charts */
    // RecentDay chart
    var area = new Morris.Area({
                            element: 'revenue-chart',
                            resize: true,
                            data: [],
                            xkey: 'y',
                            ykeys: ['item1', 'item2'],
                            labels: ['Power', 'Energy'],
                            lineColors: ['#a0d0e0', '#3c8dbc'],
                            parseTime: false,
                            hideHover: 'auto',

                            xLabels: 'minute',
                            xLabelAngle: 45,
                            xLabelFormat: function (x) {
                             
                                var weekdays = new Array(7);
                                weekdays[0] = "SUN";
                                weekdays[1] = "MON";
                                weekdays[2] = "TUE";
                                weekdays[3] = "WED";
                                weekdays[4] = "THU";
                                weekdays[5] = "FRI";
                                weekdays[6] = "SAT";

                                var jsonDate =  x.label;
                                var d = new Date(parseInt(jsonDate.substr(6)));
                                return ("0" + d.getHours()).slice(-2) + ':' + ("0" + d.getMinutes()).slice(-2);
                                //return ("0" + (d.getHours() + 1)).slice(-2) + ':' +
                                //        ("0" + (d.getMinutes())).slice(-2);
                            }
                           
                        });
    Refresh();
    function Refresh(){
        $.ajax({
            url: 'dbnames',
            dataType: 'json',
            success: function (dataFromUrl) {
                area.setData(dataFromUrl);
        setTimeout(function () {
            Refresh();
        }, 10000);
            }
        });

    }
   
    var line = new Morris.Line({
        element: 'line-chart',
        resize: true,
        data: [
          { y: '2011 Q1', item1: 2666 },
          { y: '2011 Q2', item1: 2778 },
          { y: '2011 Q3', item1: 4912 },
          { y: '2011 Q4', item1: 3767 },
          { y: '2012 Q1', item1: 6810 },
          { y: '2012 Q2', item1: 5670 },
          { y: '2012 Q3', item1: 4820 },
          { y: '2012 Q4', item1: 15073 },
          { y: '2013 Q1', item1: 10687 },
          { y: '2013 Q2', item1: 8432 }
        ],
        xkey: 'y',
        ykeys: ['item1'],
        labels: ['Item 1'],
        lineColors: ['#efefef'],
        lineWidth: 2,
        hideHover: 'auto',
        gridTextColor: "#fff",
        gridStrokeWidth: 0.4,
        pointSize: 4,
        pointStrokeColors: ["#efefef"],
        gridLineColor: "#efefef",
        gridTextFamily: "Open Sans",
        gridTextSize: 10
    });

    //Recentweek Chart
    var area2 = new Morris.Area({
        element: 'sales-chart',
        resize: true,
        data: [],
        xkey: 'y',
        ykeys: ['item1', 'item2'],
        labels: ['Power', 'Energy'],
        lineColors: ['#a0d0e0', '#3c8dbc'],
        parseTime: false,
        hideHover: 'auto',

        xLabels: 'day',
        xLabelAngle: 45,
        xLabelFormat: function (x) {

            var weekdays = new Array(7);
            weekdays[0] = "یکشنبه";
            weekdays[1] = "دوشنبه";
            weekdays[2] = "سه شنبه";
            weekdays[3] = "چهارشنبه";
            weekdays[4] = "پنج شنبه";
            weekdays[5] = "جمعه";
            weekdays[6] = "شنبه";

            var jsonDate = x.label;
            var d = new Date(parseInt(jsonDate.substr(6)));

            return (weekdays[d.getDay()]);
        }

    });
    Refreshweekly();
    function Refreshweekly() {
        $.ajax({
            url: 'dbnames2',
            dataType: 'json',
            success: function (dataFromUrl2) {
                area2.setData(dataFromUrl2);
                setTimeout(function () {
                    Refreshweekly();
                }, 10000);
            }
        });

    }

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
