function BarPile(id,data) {
    var xData = []
    var demandData = []
    var remouldData = []
    var researchData = []
    var channelData = []
    for (var i = 0; i < data.length; i++)
    {
        xData.push(data[i].xName)
        demandData.push(data[i].demand)
        remouldData.push(data[i].remould)
        researchData.push(data[i].research)
        channelData.push(data[i].channel)
    }

    var myChart = echarts.init(document.getElementById(id), 'dark');
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['业务需求', '技术改造','技术研发','渠道接入']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        yAxis:  {
            type: 'value'
        },
        xAxis: {
            type: 'category',
            data: xData
        },
        series: [
            {
                name: '业务需求',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: demandData
            },
            {
                name: '技术改造',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: remouldData
            },
            {
                name: '技术研发',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: researchData
            },
            {
                name: '渠道接入',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: channelData
            },
        ]
    };

    myChart.setOption(option);
}