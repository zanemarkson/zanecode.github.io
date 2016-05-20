
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    // written in html as data-spy="scroll" data-target=".navbar-fixed-top" data-offset="51"

    // Closes the Responsive Menu on Menu Item Click
    for( var i = 0 ; i < document.querySelectorAll('.navbar-collapse ul li a').length; i++ )
    {
        document.querySelectorAll('.navbar-collapse ul li a')[i].addEventListener('click', function(){
            document.querySelectorAll('.navbar-toggle')[0].click();
        });
    }

    // Make the large heading fonts responsive
    for(var j = 0 ; j < document.querySelectorAll('h1').length; j++)
    {
        // document.querySelectorAll('h1')[j].fitText(1.2, {
        //             minFontSize: '35px',
        //             maxFontSize: '65px'
        //         });
        window.fitText( document.querySelectorAll('h1')[j], 1.2 );
    }


    // Offset for Main Navigation
    // written directly in html using data-spy="affix"

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
