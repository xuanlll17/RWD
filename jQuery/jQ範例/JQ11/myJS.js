$(function () {
    $("#RRR").click(function () {
        $("#KIDS").stop(true, false).animate({ left: "1000" }, 800);
    });
    $("#LLL").click(function () {
        $("#KIDS").stop(true, false).animate({ left: "0" }, 800);
    })
})
