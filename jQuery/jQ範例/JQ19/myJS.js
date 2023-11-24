$(function () {
    $(".AA").click(function () {
         
        //按下其餘會變顏色
        //$(this).siblings().css({"background-color":"#F00"})

        //按下由.AA後直到.BB前的所有會變顏色
        //$(this).nextUntil(".BB").css({"background-color": "#F00"})

        //按下由.AA前直到h2的所有會變顏色
        //$(this).prevUntil("h2").css({ "background-color": "#fdb" })
        
        //按下由0算起(自己除外)指定至第幾個會變顏色
        //$(this).siblings().eq(8).css({"background-color":"#fdb"})

        //$(this).siblings().not(".BB").add("h1").css({"background-color":"#fdb"})

        //$(this).parentsUntil("body").css({ "background-color": "#fdb" })

        //$(this).parent().siblings().first().css({ "background-color": "#fdb" })

        $(this).parentsUntil("body").css({ "background-color": "#fdb" })
    })


})