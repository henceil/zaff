$(function()
{
    console.log(11);
    clearIFrame();
});

$(".ul_span_1").click(function(){
    var ul = $(this).parent().children("ul");
    ul.toggle();
    clearIFrame()
})

$("#mainPage").click(function(){
    $("#view1").attr("src","testEchart5.html");
    $("#view2").attr("src","testEchart3.html");
    $("#view3").attr("src","testEchart4.html");
    $("#view4").attr("src","testEchart2.html");
    $("#view5").attr("src","testEchart.html");
})

$("#s_1").click(function(){
    $("#a_1_1")[0].click()
    $("#a_1_2")[0].click()
    $("#a_1_3")[0].click()
})

$("#s_2").click(function(){
    $("#a_2_1")[0].click()
    $("#a_2_2")[0].click()
    $("#a_2_3")[0].click()
    $("#a_2_4")[0].click()
})

$("#s_3").click(function(){
    $("#a_3_1")[0].click()
    $("#a_3_2")[0].click()
    $("#a_3_3")[0].click()
    $("#a_3_4")[0].click()
})

$("#s_4").click(function(){
    $("#a_4_1")[0].click()
    $("#a_4_2")[0].click()
    $("#a_4_3")[0].click()
})

$("#s_5").click(function(){
    $("#a_5_1")[0].click()
    $("#a_5_2")[0].click()
})

function clearIFrame()
{
    $("#view1").attr("src","");
    $("#view2").attr("src","");
    $("#view3").attr("src","");
    $("#view4").attr("src","");
    $("#view5").attr("src","");
    $("#view6").attr("src","");
}