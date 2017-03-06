$(document).ready(function(){

    // TOP NAV SMART SCROLLING FEATURE
    var topnav = $('.foxtel-header');
    var topnavH = topnav.height();
    var topnavStatus;
    var currentScroll = 0;

    // SCROLL SENSITIVITY TO ADJUST SCROLL BEHAVIOURS
    var sensitivity = 2;

    $(window).scroll(function() {
        // GET CURRENT PAGE AXIS
        var nextScroll = $(this).scrollTop();

        // GET SCROLL DELTA
        var scrollDelta = nextScroll - currentScroll;

        // IF SCROLLED OR LEFT FROM 0 Y-AXIS
        if($(this).scrollTop() > 0) {

            // WHEN SCROLL DOWNWARDS
            if (nextScroll > currentScroll){
                if (scrollDelta > sensitivity){
                    if (topnavStatus) {
                        topnavStatus = false;

                        // TOPNAV SLIDES BACK AWAY
                        topnav.clearQueue().stop().animate({marginTop: -topnavH}, 300, function(){
                            topnav.removeClass('foxtel-header--pop');
                        });
                    }
                }

                // WHEN SCROLL UPWARDS
            } else {
                if (scrollDelta < -sensitivity){
                    if (!topnavStatus) {
                        topnavStatus = true;

                        // TOPNAV POPS DOWN
                        topnav.clearQueue().stop().css('margin-top',-topnavH).animate({marginTop: 0}, 300);
                    }
                    topnav.addClass('foxtel-header--pop');
                }
            }

            // IF COMPLETLEY BACK TO TOP, 0 Y-AXIS
        } else {
            topnav.removeClass('foxtel-header--pop');
        }

        // SET CURRENT AS LAST SCROLL
        currentScroll = nextScroll;
    });
});