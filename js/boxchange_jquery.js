

$(document).ready(function () {
    $(".box1").css("height", parseFloat($(".box1").css("width")) * 0.5)
    $(".box2").css("height", parseFloat($(".box2").css("width")) * 0.5)
    $(".box3").css("height", parseFloat($(".box3").css("width")) * 0.5)
    $(".box4").css("height", parseFloat($(".box4").css("width")) * 0.5)

    var bot1 = window.getComputedStyle(document.getElementsByClassName("box1")[0], ":before").getPropertyValue("bottom");
    // alert(bot1);
    var bot2 = window.getComputedStyle(document.getElementsByClassName("box2")[0], ":before").getPropertyValue("bottom");
    // alert(bot2);
    $(".box1").append("<style>.box1 section:before{top:" + bot1 + "}</style>")
    $(".box2").append("<style>.box2 section:before{top:" + bot2 + "}</style>")
})

$(window).resize(function () {
    $(".box1").css("height", parseFloat($(".box1").css("width")) * 0.5)
    $(".box2").css("height", parseFloat($(".box2").css("width")) * 0.5)
    $(".box3").css("height", parseFloat($(".box3").css("width")) * 0.5)
    $(".box4").css("height", parseFloat($(".box4").css("width")) * 0.5)

    var bot1 = window.getComputedStyle(document.getElementsByClassName("box1")[0], ":before").getPropertyValue("bottom");
    var bot2 = window.getComputedStyle(document.getElementsByClassName("box2")[0], ":before").getPropertyValue("bottom");
    $(".box1").append("<style>.box1 section:before{top:" + bot1 + "}</style>")
    $(".box2").append("<style>.box2 section:before{top:" + bot2 + "}</style>")
})