 function cycleBackgrounds() {
     var index = 0;

     $imageEls = $('.container .slide'); // Get the images to be cycled.

     setInterval(function () {
         // Get the next index.  If at end, restart to the beginning.
         index = index + 1 < $imageEls.length ? index + 1 : 0;

         // Show the next
         $imageEls.eq(index).addClass('show');

         // Hide the previous
         $imageEls.eq(index - 1).removeClass('show');
     }, 2000);
 };

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

     cycleBackgrounds();

 })(jQuery); // End of use strict
