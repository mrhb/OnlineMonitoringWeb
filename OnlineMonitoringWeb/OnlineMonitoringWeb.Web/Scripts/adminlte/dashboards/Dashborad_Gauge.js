$(function () {

     window.nxs = [];
     window.randomData = function () {
        return [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ];
    };
    var randomScalingFactor = function () {
        return Math.round(Math.random() * 100);
    };

    window.randomValue = function (data) {
        return Math.max.apply(null, data) * Math.random();
    };

    var data = randomData();
    var value = randomValue(data);

     window.config = {
        type: 'gauge',
        data: {
            labels: ['Success', 'Warning', 'Warning', 'Fail'],
            datasets: [{
                data: data,
                value: value,
                backgroundColor: ['green', 'yellow', 'orange', 'red'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Power'
            },
            layout: {
                padding: {
                    bottom: 30
                }
            },
            needle: {
                // Needle circle radius as the percentage of the chart area width
                radiusPercentage: 2,
                // Needle width as the percentage of the chart area width
                widthPercentage: 2.2,
                // Needle length as the percentage of the interval between inner radius (0%) and outer radius (100%) of the arc
                lengthPercentage: 20,
                // The color of the needle
                color: 'rgba(0, 0, 155, 1)'
            },
            valueLabel: {
                display: false
            },
            plugins: {
                datalabels: {
                    display: true,
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    },
                    //color: function (context) {
                    //  return context.dataset.backgroundColor;
                    //},
                    color: 'rgba(0, 0, 0, 1.0)',
                    //color: 'rgba(255, 255, 255, 1.0)',
                    backgroundColor: null,
                    font: {
                        size: 20,
                        weight: 'bold'
                    }
                }
            }
        }
    };

    window.onload = function () {
        //var ctx = document.getElementById('chart').getContext('2d');
        window.cnxs = $(".Gauge");// document.getElementById('chart').getContext('2d');
      
        $(".Gauge").each(function (index) {
            console.log(index + ": " + $(this).text());
            window.cnxs[index]= new Chart($(this),  window.config);
        });

        window.RefreshGauge();
    };

    document.getElementById('randomizeData').addEventListener('click', function () {
        window.RefreshGauge();
    });


    window.RefreshGauge = function () {

        window.config.data.datasets.forEach(function (dataset) {
            dataset.data = randomData();
            dataset.value = randomValue(dataset.data);
        });

        $(".Gauge").each(function (index) {
            console.log(index + ": " + $(this).text());
            window.cnxs[index].update();

        });
    };

});