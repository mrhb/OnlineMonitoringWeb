

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
var configa = {
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

configa.data.datasets.forEach(function (dataset) {
    dataset.borderColor = randomColor(0.4);
    dataset.backgroundColor = randomColor(0.5);
    dataset.pointBorderColor = randomColor(0.7);
    dataset.pointBackgroundColor = randomColor(0.5);
    dataset.pointBorderWidth = 1;
});

window.RefreshChart = function () {
    var ctx = document.getElementById('chart3').getContext('2d');
    var charta = new Chart(ctx, configa);



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
