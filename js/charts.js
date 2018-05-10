$(document).ready(function () {
    var chart = {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    };
    var title = {
        text: null

    };
    // var credits = {
    //     enabled: false
    // };
    var tooltip = {
        pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
    };

    var plotOptions = {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}<br>{point.percentage:.2f} %'
            },
            showInLegend: true
        }
    };
    var series = [{
        type: 'pie',
        name: 'Browser share',
        data: [
            ['活期', 1116],
            ['定期', 1132],
            {
                name: '整体',
                y: 1215,
                sliced: true,
                selected: true
            }
        ]
    }];

    var json = {};
    json.chart = chart;
    json.title = title;
    // json.credits = credits;
    json.tooltip = tooltip;
    json.plotOptions = plotOptions;
    json.series = series;
    $('#container').highcharts(json);
});
$(document).ready(function () {
    var chart = {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    };
    var title = {
        text: '每周水果配送量'
    };
    var subtitle = {
        text: 'Highcharts 3D圆环图'
    };

    var tooltip = {
        pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
    };


    var plotOptions = {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            innerSize: 100,
            depth: 45,
            dataLabels: {
                enabled: true,
                format: '{point.name}<br>{series.data.name}<br>{point.percentage:.2f} %'
            },
            showInLegend: true
        }
    };
    /*
            var plotOptions = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.2f} %'
                },
                showInLegend: true
            }
        };
        */

    var series = [{
        name: '配送量',
        data: [
            ['自营贷款', 1234],
            ['委托贷款', 1345],
            ['商贷', 1456],
            ['票据兑现', 1000]
        ]
    }];

    var json = {};
    json.chart = chart;
    json.title = title;
    json.subtitle = subtitle;
    json.tooltip = tooltip;
    json.plotOptions = plotOptions;
    json.series = series;
    $('#container2').highcharts(json);
});
$(document).ready(function () {
    var chart = {
        type: 'area'
    };
    var title = {
        text: 'Area chart with negative values'
    };
    // var xAxis = {
    //     categories: ['一月', '二月', '三月', '四月', '五月', '六月','七月']
    // };
    var xAxis = {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        }
    };
    // var credits = {
    //     enabled: false
    // };
    var series = [{
        name: '整体',
        data: [3333, 3111, 3222, 3444, 3123, 3456, 2555]
    }, {
        name: '活期',
        data: [2222, 2111, 2333, 2444, 2432, 2323, 1345]
    }, {
        name: '定期',
        data: [1111, 1232, 1212, 1313, 1234, 1213, 832]
    }, {
        name: '通知',
        data: [555, 666, 777, 654, 543, 456, 567]
    }
    ];

    var json = {};
    json.chart = chart;
    json.title = title;
    json.xAxis = xAxis;
    // json.credits = credits;
    json.series = series;
    $('#container1').highcharts(json);

});
$(document).ready(function () {
    var chart = {
        type: 'column'
    };
    var title = {
        text: '每月平均降雨量'
    };
    var subtitle = {
        text: 'Source: runoob.com'
    };
    var xAxis = {
        categories: ['贷款业务', '自营贷款', '票据贴现', '票据承兑'],
        crosshair: true
    };
    var yAxis = {
        min: 0,
        title: {
            text: '单位：亿元'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    };
    var tooltip = {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    };
    var plotOptions = {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    };
    var credits = {
        enabled: false
    };

    var series = [{
        name: '2017.03',
        data: [5432, 3111, 4222, 3444]
    }, {
        name: '2018.03',
        data: [6543, 3011, 3133, 2544]
    }];

    var json = {};
    json.chart = chart;
    json.title = title;
    json.subtitle = subtitle;
    json.tooltip = tooltip;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.series = series;
    json.plotOptions = plotOptions;
    json.credits = credits;
    $('#container3').highcharts(json);

});
$(document).ready(function () {
    var chart = {
        type: 'column'
    };
    var title = {
        text: '每月平均降雨量'
    };
    var subtitle = {
        text: 'Source: runoob.com'
    };
    var xAxis = {
        categories: ['贷款业务', '自营贷款', '票据贴现', '票据承兑'],
        crosshair: true
    };
    var yAxis = {
        min: 0,
        title: {
            text: '单位：亿元'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    };
    var tooltip = {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    };
    var plotOptions = {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    };
    var credits = {
        enabled: false
    };

    var series = [{
        name: '2017.03',
        data: [2526, 700, 1456, 456]
    }, {
        name: '2018.03',
        data: [3567, 1111, 2345, 789]
    }];

    var json = {};
    json.chart = chart;
    json.title = title;
    json.subtitle = subtitle;
    json.tooltip = tooltip;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.series = series;
    json.plotOptions = plotOptions;
    json.credits = credits;
    $('#container4').highcharts(json);

});
$(document).ready(function () {
    var title = {
        text: '每月平均温度'
    };
    var subtitle = {
        text: 'Source: runoob.com'
    };
    var xAxis = {
        categories: ['01月', '02月', '03月', '04月', '05月', '06月', '07月']
    };
    var yAxis = {
        title: {
            text: 'Temperature (\xB0C)'
        }
    };
    var plotOptions = {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    };
    var series = [{
        name: '累计发放额',
        data: [2333, 3111, 2222, 2444, 3523, 3556, 2555]
    }];

    var json = {};

    json.title = title;
    json.subtitle = subtitle;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.series = series;
    json.plotOptions = plotOptions;
    $('#container5').highcharts(json);

});