$(function () {
    $("#A").click(function () {
        $("#content").removeClass().addClass("AAA");

        $("#img").attr("src", "images/top.png");
    })

    $("#B").click(function () {
        $("#content").removeClass().addClass("BBB");

        $("#img").attr("src", "images/top_B.png");
    })

    $("#C").click(function () {
        $("#content").removeClass().addClass("CCC");

        $("#img").attr("src", "images/top_C.png")
    })
})