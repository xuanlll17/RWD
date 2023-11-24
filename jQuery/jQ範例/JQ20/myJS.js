$(function () {
    $("li").hover(function () {

        $(this).stop().animate({ top: 0 }, 150);
        $(this).siblings().stop().animate({ top: 50 }, 150);

    }, function () {
        $("li").stop().animate({ top: 100 }, 150);
    })
})