function BarCompare(id,data)
{
    var xData = []
    var nums = []
    var scores = []
    for (var i = 0; i < data.length; i++)
    {
        xData.push(data[i]['姓名'])
        nums.push(data[i]['入榜次数'])
        scores.push(data[i]['累计扣分'])
    }

    var myChart = echarts.init(document.getElementById(id), 'dark');
    option = {
        title: {
            text: '车险Q2黑榜',
            subtext: '2018'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['入榜次数', '累计扣分']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            type: 'value',
        },
        xAxis: {
            type: 'category',
            data: xData
        },
        series: [
            {
                name: '入榜次数',
                type: 'bar',
                data: nums
            },
            {
                name: '累计扣分',
                type: 'bar',
                data: scores
            }
        ]
    };
    myChart.setOption(option);
}