var monthNames = ["JAN", "FEB", "MÄR", "APR", "MAI", "JUNI",
    "JULI", "AUG", "SEPT", "OCT", "NOV", "DEZ"
];
var riskChart;
var performanceChart;
var d = new Date();

function draw_max_risk_label(context, x, y) {
    var risk_image = new Image();
    risk_image.src = '/img/max_risk.png';
    risk_image.onload = function () {
        context.drawImage(risk_image, x - risk_image.naturalWidth, y);
    }
}
function draw_aver_risk_label(context, x, y) {
    var risk_image = new Image();
    risk_image.src = '/img/aver_risk.png';
    console.log(risk_image);
    risk_image.onload = function () {
        context.drawImage(risk_image, x - risk_image.naturalWidth, y - risk_image.naturalHeight);
    }
}


function showBigRisks(index) {
    $.ajax({
        url: "resolver.php?index=" + index,
        success: function (data) {
            data = JSON.parse(data);
            setAverages(data.average);
            setFonds(data.index);
            if (document.getElementById("riskChart"))
                var ctx = document.getElementById("riskChart").getContext('2d');
            if (riskChart)
                riskChart.destroy();
            if (ctx) {
                riskChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: [monthNames[(d.getMonth() - 11 + 12) % 12], monthNames[(d.getMonth() - 10 + 12) % 12], monthNames[(d.getMonth() - 9 + 12) % 12],
                            monthNames[(d.getMonth() - 8 + 12) % 12], monthNames[(d.getMonth() - 7 + 12) % 12], monthNames[(d.getMonth() - 6 + 12) % 12],
                            monthNames[(d.getMonth() - 5 + 12) % 12], monthNames[(d.getMonth() - 4 + 12) % 12], monthNames[(d.getMonth() - 3 + 12) % 12],
                            monthNames[(d.getMonth() - 2 + 12) % 12], monthNames[(d.getMonth() - 1 + 12) % 12], monthNames[d.getMonth()],],
                        datasets: [{
                            data: data.risks,
                            lineTension: 0,
                            cubicInterpolationMode: 'linear',
                            pointRadius: 10,
                            pointBackgroundColor: '#ffffff',
                            // pointBackgroundColor: '#ffffff',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(40,65,255,1)',
                            borderWidth: 3,
                        }, {
                            data: maxRisks,
                            lineTension: 0,
                            cubicInterpolationMode: 'linear',
                            pointRadius: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(234,109,40,1)',
                            borderDash: [10, 5],
                            borderWidth: 3,
                        },
                        ]
                    },
                    options: {
                        tooltips: {
                            bodyFontColor: '#a8acb9',
                            bodyFontSize: 20,
                            bodyFontFamily: 'Montserrat',
                            backgroundColor:'white',
                            borderColor:'rgba(225,225,225,1)',
                            borderWidth:3,
                            titleFontSize:0,
                            titleMarginBottom:0,
                            titleSpacing:0,
                            displayColors:false,
                            intersect:false,
                            yPadding:9,
                            xPadding:9,
                        },
                        legend: {
                            display: false
                        },
                        animation: {
                            duration: 0
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    autoSkip: false,
                                    fontColor: '#a8acb9',
                                    fontSize: 20,
                                    fontFamily: 'Montserrat',
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    // max:10,
                                    // min:-1,
                                    fontColor: '#a8acb9',
                                    fontSize: 20,
                                    fontFamily: 'Montserrat',
                                    beginAtZero: false,
                                    step: 1,
                                    callback: function (value, index, values) {
                                        return parseFloat(value).toFixed(1) + ' %';
                                    },
                                }
                            }]
                        }
                    }
                });
                var max_risk_haystack = riskChart.config.data.datasets[1]._meta;
                var  max_risk_needleKey = Object.keys(max_risk_haystack)[0];
                var aver_risk_haystack = riskChart.config.data.datasets[0]._meta;
                var  aver_risk_needleKey = Object.keys(aver_risk_haystack)[0];
                console.log("haysrack", riskChart.config.data );
                draw_aver_risk_label(ctx, aver_risk_haystack[aver_risk_needleKey].data[9]._model.x, aver_risk_haystack[aver_risk_needleKey].data[9]._model.y);
                draw_max_risk_label(ctx, max_risk_haystack[max_risk_needleKey].data[4]._model.x, max_risk_haystack[max_risk_needleKey].data[4]._model.y);
            }
        }
    });
}

function showSmallRisks(index) {
    $.ajax({
        url: "resolver.php?index=" + index,
        success: function (data) {
            data = JSON.parse(data);
            setAverages(data.average);
            setFonds(data.index);
            if (document.getElementById("riskChart"))
                var ctx = document.getElementById("riskChart").getContext('2d');
            if (riskChart)
                riskChart.destroy();
            if (ctx)
                riskChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: [monthNames[(d.getMonth() - 11 + 12) % 12], monthNames[(d.getMonth() - 10 + 12) % 12], monthNames[(d.getMonth() - 9 + 12) % 12],
                            monthNames[(d.getMonth() - 8 + 12) % 12], monthNames[(d.getMonth() - 7 + 12) % 12], monthNames[(d.getMonth() - 6 + 12) % 12],
                            monthNames[(d.getMonth() - 5 + 12) % 12], monthNames[(d.getMonth() - 4 + 12) % 12], monthNames[(d.getMonth() - 3 + 12) % 12],
                            monthNames[(d.getMonth() - 2 + 12) % 12], monthNames[(d.getMonth() - 1 + 12) % 12], monthNames[d.getMonth()],],
                        datasets: [{
                            data: data.risks,
                            lineTension: 0,
                            cubicInterpolationMode: 'linear',
                            pointRadius: 2,
                            pointBackgroundColor: '#ffffff',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(40,65,255,1)',
                            borderWidth: 3,
                        },
                            {
                                data: maxRisks,
                                lineTension: 0,
                                cubicInterpolationMode: 'linear',
                                pointRadius: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                borderColor: 'rgba(234,109,40,1)',
                                borderDash: [10, 5],
                                borderWidth: 3,
                            },
                        ]
                    },
                    options: {
                        tooltips: {
                            enabled:false,
                        },
                        legend: {
                            display: false
                        },
                        scales: {
                            animation: {
                                duration: 0
                            },
                            xAxes: [{
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    // autoSkip: false,
                                    fontColor: '#a8acb9',
                                    fontSize: 10,
                                    fontFamily: 'Montserrat',
                                    callback: function (value, index, values) {
                                        return '';
                                    }
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    // max:10,
                                    // min: -1,
                                    beginAtZero: false,
                                    step: 1,
                                    fontColor: '#a8acb9',
                                    fontSize: 10,
                                    fontFamily: 'Montserrat',
                                    callback: function (value, index, values) {
                                        return parseFloat(value).toFixed(1) + ' %';
                                    },
                                }
                            }]
                        }
                    }
                });

        }
    });
}

function showBigPerformance(index) {
    $.ajax({
        url: "resolver.php?index=" + index,
        success: function (data) {
            data = JSON.parse(data);
            setAverages(data.average);
            setFonds(data.index);
            if (document.getElementById("performanceChart"))
                var ctx = document.getElementById("performanceChart").getContext('2d');
            if (performanceChart)
                performanceChart.destroy();
            if (ctx) {
                performanceChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: [monthNames[(d.getMonth() - 11 + 12) % 12], "", "", "", monthNames[(d.getMonth() - 10 + 12) % 12], "", "", "", "", monthNames[(d.getMonth() - 9 + 12) % 12], "", "", "",
                            monthNames[(d.getMonth() - 8 + 12) % 12], "", "", "", "", monthNames[(d.getMonth() - 7 + 12) % 12], "", "", "", monthNames[(d.getMonth() - 6 + 12) % 12], "", "", "", "",
                            monthNames[(d.getMonth() - 5 + 12) % 12], "", "", "", monthNames[(d.getMonth() - 4 + 12) % 12], "", "", "", "", monthNames[(d.getMonth() - 3 + 12) % 12], "", "", "",
                            monthNames[(d.getMonth() - 2 + 12) % 12], "", "", "", "", monthNames[(d.getMonth() - 1 + 12) % 12], "", "", "", monthNames[d.getMonth()]],
                        datasets: [{
                            data: data.performance,
                            lineTension: 0,
                            cubicInterpolationMode: 'linear',
                            pointRadius: 2,
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(234,109,40,1)',
                            pointBorderColor: 'rgba(0,0,0,1)',
                            borderWidth: 3,
                        }
                        ]
                    },
                    options: {
                        tooltips: {
                            bodyFontColor: '#a8acb9',
                            bodyFontSize: 20,
                            bodyFontFamily: 'Montserrat',
                            backgroundColor:'white',
                            borderColor:'rgba(225,225,225,1)',
                            borderWidth:3,
                            titleFontSize:0,
                            titleMarginBottom:0,
                            titleSpacing:0,
                            displayColors:false,
                            intersect:false,
                            yPadding:9,
                            xPadding:9,
                        },
                        legend: {
                            display: false
                        },
                        scales: {
                            animation: {
                                duration: 0
                            },
                            xAxes: [{
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    maxRotation: 0,
                                    minRotation: 0,
                                    autoSkip: false,
                                    fontColor: '#a8acb9',
                                    fontSize: 20,
                                    fontFamily: 'Montserrat',
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    beginAtZero: false,
                                    step: 1,
                                    max: 30,
                                    fontColor: '#a8acb9',
                                    fontSize: 20,
                                    fontFamily: 'Montserrat',
                                    callback: function (value, index, values) {
                                        return parseFloat(value).toFixed(1) + ' %';
                                    },
                                }
                            }]
                        }
                    }
                });
            }
        }
    });
}

function showSmallPerformance(index) {
    $.ajax({
        url: "resolver.php?index=" + index,
        success: function (data) {
            data = JSON.parse(data);
            setAverages(data.average);
            setFonds(data.index);
            if (document.getElementById("performanceChart"))
                var ctx = document.getElementById("performanceChart").getContext('2d');
            if (performanceChart)
                performanceChart.destroy();
            if (ctx)
                performanceChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: [monthNames[(d.getMonth() - 11 + 12) % 12], "", "", "", monthNames[(d.getMonth() - 10 + 12) % 12], "", "", "", "", monthNames[(d.getMonth() - 9 + 12) % 12], "", "", "",
                            monthNames[(d.getMonth() - 8 + 12) % 12], "", "", "", "", monthNames[(d.getMonth() - 7 + 12) % 12], "", "", "", monthNames[(d.getMonth() - 6 + 12) % 12], "", "", "", "",
                            monthNames[(d.getMonth() - 5 + 12) % 12], "", "", "", monthNames[(d.getMonth() - 4 + 12) % 12], "", "", "", "", monthNames[(d.getMonth() - 3 + 12) % 12], "", "", "",
                            monthNames[(d.getMonth() - 2 + 12) % 12], "", "", "", "", monthNames[(d.getMonth() - 1 + 12) % 12], "", "", "", monthNames[d.getMonth()]],
                        datasets: [{
                            data: data.performance,
                            lineTension: 0,
                            cubicInterpolationMode: 'linear',
                            pointRadius: 0.5,
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(234,109,40,1)',
                            pointBorderColor: 'rgba(0,0,0,1)',
                            borderWidth: 3,
                        }
                        ]
                    },
                    options: {
                        tooltips: {
                            enabled:false,
                        },
                        legend: {
                            display: false
                        },
                        scales: {
                            animation: {
                                duration: 0
                            },
                            xAxes: [{
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    autoSkip: false,
                                    fontColor: '#a8acb9',
                                    fontSize: 14,
                                    fontFamily: 'Montserrat',
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    beginAtZero: false,
                                    step: 1,
                                    max: 30,
                                    fontColor: '#a8acb9',
                                    fontSize: 14,
                                    fontFamily: 'Montserrat',
                                    callback: function (value, index, values) {
                                        return parseFloat(value).toFixed(1) + ' %';
                                    },
                                }
                            }]
                        }
                    }
                });

        }
    });
}