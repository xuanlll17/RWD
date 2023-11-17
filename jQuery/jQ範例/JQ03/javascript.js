$(function(){

    /*$("#AAA").click(function () {
        $("img").slideDown();
    })

    $("#BBB").click(function () {
        $("img").hide();
    })

    $("#CCC").click(function () {
        $("img").fadeToggle(500);
    })*/

    /*(速度,1/0/0.5) -> 透明度*/
    $("#AAA").click(function () {
        $("img").fadeTo(500,1);
    })

    $("#BBB").click(function () {
        $("img").fadeTo(500,0);
    })

    $("#CCC").click(function () {
        $("img").fadeTo(500,0.5);
    })


})

