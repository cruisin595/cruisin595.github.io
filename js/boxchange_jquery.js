

$(document).ready(function () {
    $(".box1").css("height", parseFloat($(".box1").css("width")) * 0.5)
    $(".box2").css("height", parseFloat($(".box2").css("width")) * 0.5)
    $(".box3").css("height", parseFloat($(".box3").css("width")) * 0.5)
    $(".box4").css("height", parseFloat($(".box4").css("width")) * 0.5)

    var bot1 = window.getComputedStyle(document.getElementsByClassName("box1")[0], ":before").getPropertyValue("bottom");
    // alert(bot1);
    var bot2 = window.getComputedStyle(document.getElementsByClassName("box2")[0], ":before").getPropertyValue("bottom");
    // alert(bot2);
    $(".box1").append("<style>.box1 section:before{bottom: calc(" + bot1 + " + 8%)}</style>")
    $(".box2").append("<style>.box2 section:before{bottom:calc(" + bot2 + " + 8%)}</style>")

    $(".circle1").css("height", parseFloat($(".circle1").css("width")))

    $(".circle1").css("border-width", parseFloat($(".circle1").css("width")) * 0.15)

    var w = parseFloat($(".content").css("height"));
    // console.log(w)
    var wt = w * 0.1;
    // console.log(wt)
    var wc = parseFloat($(".circle1").css("height")) / 1.8;
    // console.log(wc)
    $(".content-cylinder").css("height", w / 2.0 - wt - wc)
})

$(window).resize(function () {
    $(".box1").css("height", parseFloat($(".box1").css("width")) * 0.5)
    $(".box2").css("height", parseFloat($(".box2").css("width")) * 0.5)
    $(".box3").css("height", parseFloat($(".box3").css("width")) * 0.5)
    $(".box4").css("height", parseFloat($(".box4").css("width")) * 0.5)

    var bot1 = window.getComputedStyle(document.getElementsByClassName("box1")[0], ":before").getPropertyValue("bottom");
    var bot2 = window.getComputedStyle(document.getElementsByClassName("box2")[0], ":before").getPropertyValue("bottom");
    $(".box1").append("<style>.box1 section:before{bottom:calc(" + bot1 + " + 8%)}</style>")
    $(".box2").append("<style>.box2 section:before{bottom:calc(" + bot2 + " + 8%)}</style>")

    $(".circle1").css("height", parseFloat($(".circle1").css("width")))

    $(".circle1").css("border-width", parseFloat($(".circle1").css("width")) * 0.15)

    var w = parseFloat($(".content").css("height"));
    // console.log(w)
    var wt = w * 0.1;
    // console.log(wt)
    var wc = parseFloat($(".circle1").css("height")) / 1.8;
    // console.log(wc)
    $(".content-cylinder").css("height", w / 2.0 - wt - wc)
})