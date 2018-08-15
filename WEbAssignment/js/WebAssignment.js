(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

//    $('.Carcarousel')
//    .on('carousel:create carousel:reload', function() {
//        var element = $(this),
//            height = element.innerHeight();
//
//        // This shows 1 item at a time.
//        // Divide `width` to the number of items you want to display,
//        // eg. `width = width / 3` to display 3 items at a time.
//        element.carousel('-items').css('width', height + 'px');
//    })
//    .jcarousel({
//        // Your configurations options
//    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });
})(jQuery); // End of use strict
