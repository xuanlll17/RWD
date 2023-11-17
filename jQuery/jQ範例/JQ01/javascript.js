/*JS*/
/*document.getElementById("a").innerHTML = "Welcome";*/
/*window.onload = function () {
    document.getElementById("a").innerHTML = "Welcome"
}*/

/*JQ*/
/*將網頁內容全部載入後才執行JQ*/
$(function () {
    $("h1").html("Welcome");
    
    $("h1").click(function () {
        alert("文字")
    });

    $("p").click(function () {
        alert("圖片")
    });
})


