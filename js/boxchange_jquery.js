$(document).ready(function() {
    $(".box1").css("height", parseFloat($(".box1").css("width")) * 0.5)
    $(".box2").css("height", parseFloat($(".box2").css("width")) * 0.5)
    $(".box3").css("height", parseFloat($(".box3").css("width")) * 0.5)
    $(".box4").css("height", parseFloat($(".box4").css("width")) * 0.5)

    var bot = $(".box1").children().eq(0).css("bottom")
    alert(bot)
    // $(".box1").append("<style>.box1 section:before{top:" + bot + "}</style>")
    // $(".box1 section").css("top", parseFloat($(".box1::before").css("bottom")))
    // $(".box2 section::before").css("bottom", parseFloat($(".box2::before").css("bottom")))
})

$(window).resize(function() {
    $(".box1").css("height", parseFloat($(".box1").css("width")) * 0.5)
    $(".box2").css("height", parseFloat($(".box2").css("width")) * 0.5)
    $(".box3").css("height", parseFloat($(".box3").css("width")) * 0.5)
    $(".box4").css("height", parseFloat($(".box4").css("width")) * 0.5)

    // $(".box1 section::before").css("bottom", parseFloat($(".box1::before").css("bottom")))
    // $(".box2 section::before").css("bottom", parseFloat($(".box2::before").css("bottom")))
})