$(function () {
    $(".BANNER").click(function () {
        $(this).find(".BOX").slideToggle().end().siblings().find(".BOX").slideUp()
    })
})