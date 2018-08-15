$(document).ready(function () {

    new WOW().init();

    $('#burger-nav').on("click", function () {
        $("#burger-nav").toggleClass("open");
        $("nav ul").toggleClass("nav-open");
        $(".navbar").toggleClass("open");
    });

    $(' .js-wp-2').waypoint(function (direction) {
        $('.js-wp-2').addClass('animated slideInUp')
    }, {
        offset: '70%'
    });

    $(' .js-wp-3').waypoint(function (direction) {
        $('.js-wp-3').addClass('animated fadeIn')
    }, {
        offset: '70%'
    });

    $('.iphone-btn').delay(2000).animate({
        top: "+=3"
    }, 150);
    $('.iphone-btn').delay(150).animate({
        top: "-=3"
    }, 100);

    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) { // If page is scrolled more than 500px
            $('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function () { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });

});
