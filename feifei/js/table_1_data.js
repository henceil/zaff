var table1_data = [
    {
        xName : "2017年1月",
        person : 38,
        finish : 40
    },
    {
        xName : "2017年2月",
        person : 38,
        finish : 35,
    },
    {
        xName : "2017年3月",
        person : 38,
        finish : 49
    },
    {
        xName : "2017年4月",
        person : 35,
        finish : 19
    },
    {
        xName : "2017年5月",
        person : 34,
        finish : 38
    },
    {
        xName : "2017年6月",
        person : 38,
        finish : 76
    },
    {
        xName : "2017年7月",
        person : 41,
        finish : 63
    },
    {
        xName : "2017年8月",
        person : 40,
        finish : 84
    },
    {
        xName : "2017年9月",
        person : 46,
        finish : 106
    },
    {
        xName : "2017年10月",
        person : 49,
        finish : 75
    },
    {
        xName : "2017年11月",
        person : 51,
        finish : 106
    },
    {
        xName : "2017年12月",
        person : 57,
        finish : 101
    },
    {
        xName : "2018年1月",
        person : 70,
        finish : 67,
    },
    {
        xName : "2018年2月",
        person : 72,
        finish : 89,
    },
    {
        xName : "2018年3月",
        person : 81,
        finish : 142,
    },
    {
        xName : "2018年4月",
        person : 86,
        finish : 174,
    },
    {
        xName : "2018年5月",
        person : 96,
        finish : 119,
    },
    {
        xName : "2018年6月",
        person : 98,
        finish : 150,
    },
]


for (var i = 0; i < table1_data.length; i++) {
    table1_data[i].percent = (table1_data[i].finish/table1_data[i].person).toFixed(3)
}