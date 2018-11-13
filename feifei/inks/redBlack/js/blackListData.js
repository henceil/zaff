var blackListData
$.ajax({
    url:"inks/redBlack/php/blackList.php",
    async:false,
    dataType:"json",
    success: function(data)
    {
        blackListData = data
    },
    error:function(data)
    {
        console.log("失败了")
    }
});


var blackListData = [
    {
        "姓名" : "张嗣峰",
        "入榜次数" : 11,
        "累计扣分" : 22
    },
    {
        "姓名" : "熊飞龙",
        "入榜次数" : 3,
        "累计扣分" : 18
    },
    {
        "姓名" : "李朋飞",
        "入榜次数" : 2,
        "累计扣分" : 16.8
    },
    {
        "姓名" : "马春祥",
        "入榜次数" : 3,
        "累计扣分" : 16
    },
    {
        "姓名" : "宋克军",
        "入榜次数" : 3,
        "累计扣分" : 16
    }
]