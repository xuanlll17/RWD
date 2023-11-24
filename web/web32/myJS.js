$(function () {

    //h3有設a會有跳頂問題(預設),所以需要設定event,event.preventDefault()阻擋預設事件
    $("h3").click(function (event){
        $(".header ul").show();
        event.preventDefault();
    })

    $(".close").click(function () {
        $(".header ul").hide();
    })

    $(window).resize(function () {
        var N = $(window).width();

        if (N >= 768) {
            $(".header ul").show();
        } else {
            $(".header ul").hide();
        }
    })
        
})