$(function() {
    $("li.dropdown").mouseenter(function(){
        $(".dropdown-content").slideDown(400)
    })

    $("li.dropdown").mouseleave(function(){
        $(".dropdown-content").slideUp(400)
    })

})