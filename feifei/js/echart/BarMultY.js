function BarMultY(id,data) {
    var xData = []
    var personData = []
    var finishData = []
    var percentData = []
    for (var i = 0; i < data.length; i++)
    {
        xData.push(data[i].xName)
        personData.push(data[i].person)
        finishData.push(data[i].finish)
        percentData.push(data[i].percent)
    }

    var myChart = echarts.init(document.getElementById(id), 'dark');

    var colors = ['#5793f3', '#d14a61', '#675bba'];

    var option = {
        color: colors,

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            right: '20%'
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['人数','完成需求','需求/人']
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                data: xData
            }
        ],
        yAxis: [
            {
                type: 'value',
                //name: '人数',
                min: 0,
                max: 200,
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                show: false,
                name: '完成需求',
                min: 0,
                max: 200,
                position: 'right',
                offset: 80,
                axisLine: {
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                },
            },
            {
                type: 'value',
                //name: '需求/人',
                min: 0,
                max: 2.5,
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: colors[2]
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name:'人数',
                type:'bar',
                data:personData
            },
            {
                name:'完成需求',
                type:'bar',
                yAxisIndex: 1,
                data:finishData
            },
            {
                name:'需求/人',
                type:'line',
                yAxisIndex: 2,
                data:percentData
            }
        ]
    };

    myChart.setOption(option);
}