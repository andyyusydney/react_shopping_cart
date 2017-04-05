$(document).ready(function(){

    // TOP NAV SMART SCROLLING FEATURE
    var topnav = $('.foxtel-header-breadcrumb-wrapper');
    var topnavH = topnav.height();
    var topnavStatus;
    var currentScroll = 0;

    // SCROLL SENSITIVITY TO ADJUST SCROLL BEHAVIOURS
    var sensitivity = 3;

    $(window).scroll(function() {
        // GET CURRENT PAGE AXIS
        var nextScroll = $(this).scrollTop();

        // GET SCROLL DELTA
        var scrollDelta = nextScroll - currentScroll;

        // IF SCROLLED OR LEFT FROM 0 Y-AXIS
        if($(this).scrollTop() > 0) {
            // ONLY TRIGGER WHEN NOT IN THE Y-AXIS RANGE, 0 - TOP NAV HEIGHT
            if ($(this).scrollTop() > topnavH) {
                // WHEN SCROLL DOWNWARDS
                if (nextScroll > currentScroll) {
                    if (scrollDelta > sensitivity) {
                        if (topnavStatus) {
                            topnavStatus = false;

                            // TOPNAV SLIDES BACK AWAY
                            topnav.clearQueue().stop().animate({marginTop: -topnavH}, 300, function () {

                                //TO DISTINCUISH FOXTEL NOW HEADER
                                if (topnav.find('header').hasClass('foxtel-now-header')) {
                                    return;
                                } else {
                                    topnav.css('position', 'fixed');
                                    topnav.removeClass('foxtel-header-breadcrumb--pop');
                                }
                            });
                        }
                    }

                    // WHEN SCROLL UPWARDS
                } else {
                    if (scrollDelta < -sensitivity) {
                        if (!topnavStatus) {
                            topnavStatus = true;

                            // TOPNAV POPS DOWN
                            topnav.clearQueue().stop().css('margin-top', -topnavH).animate({marginTop: 0}, 300);
                        }
                        //TO DISTINCUISH FOXTEL NOW HEADER
                        if (topnav.find('header').hasClass('foxtel-now-header')) {
                            return;
                        } else {
                            topnav.addClass('foxtel-header-breadcrumb--pop');
                        }
                    }
                }
            }
            // IF COMPLETLEY BACK TO TOP, 0 Y-AXIS
        } else {
            topnav.removeClass('foxtel-header-breadcrumb--pop');
            topnav.css('position','relative');
        }

        // SET CURRENT AS LAST SCROLL
        currentScroll = nextScroll;
    });
});