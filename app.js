$(".navbar-toggler").click(function(){
    $(".collapse").slideToggle("slow")
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".navbar").addClass("header_fixed");
    } else {
        $(".navbar").removeClass("header_fixed");
    }
});