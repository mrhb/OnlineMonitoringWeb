

/* *****************تنظیمات کلی**********************/
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

function randomColorFactor() {
    return Math.round(Math.random() * 255);
}
function randomColor(opacity) {
    return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
}
///////*************تمنظیمات کلی*****************


window.RefreshChart = function (ActiveSection) {
    var cnxs = [];
    var refreshAjax = [];
    $(".time-series-chart").each(function (index) {
    var Chartconfig = {
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
                text: 'Time Series chart'
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
        Chartconfig.data.datasets.forEach(function (dataset) {
        dataset.borderColor = randomColor(0.4);
        dataset.backgroundColor = randomColor(0.5);
        dataset.pointBorderColor = randomColor(0);
        dataset.pointBackgroundColor = randomColor(0.7);
        dataset.pointBorderWidth = 0.1;
        });
        console.log(index + ": " + $(this).text());
        cnxs[index] = new Chart($(this), Chartconfig);
        api =  $(this).data('api');
        api = api + '/id=' + ActiveSection.id
        refreshAjax[index] = RefreshAjax(cnxs[index],api); 
    });
    }

    function RefreshAjax(cnxs,api) {
        $.ajax({
            type: "GET",
            url: api ,
            contentType: "application/json",
            dataType: 'json',
            success: function (dataFromUrl) {
                var dataset = cnxs.config.data.datasets[0];
                var i = 0;
                dataset.data = [];
                for (i = 0; i < dataFromUrl.length; i++) {
                    var obj = {
                        x: moment(dataFromUrl[i].y).format(timeFormat),
                        y: dataFromUrl[i].item1
                    };
                    dataset.data.push(obj);
                }

                cnxs.update();

                setTimeout(function () {
                    RefreshAjax(cnxs,api);
                }, 10000);
            }
        });
    }