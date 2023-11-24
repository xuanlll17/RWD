$(function () {
    $(".BANNER").hover(function () {
        $(this).find(".BOX").slideDown();
    }, function () {
        $(this).find(".BOX").slideUp();
    })
})