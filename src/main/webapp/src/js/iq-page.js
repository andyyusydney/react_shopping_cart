$(document).ready(function () {

    function Utils() {}
    Utils.prototype = {
        constructor: Utils,
        isElementInView: function (element, fullyInView) {
            var pageTop = $(window).scrollTop()+350;
            var pageBottom = pageTop + $(window).height();
            var elementTop = $(element).offset().top;
            var elementBottom = elementTop + $(element).height();

            if (fullyInView === true) {
                return ((pageTop < elementTop) && (pageBottom > elementBottom));
            } else {
                return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
            }
        }
    };
    var Utils = new Utils();

    var inView = function() {
        //remove all active
        for (var i=0; i<$(".iq-nav").children('a').length;i++) {
            var $elem = $(".iq-nav").children('a')[i];
            if ($elem.hasAttribute("class")) {
            	$elem.removeAttribute("class");
            }
        }
        for (var i=0; i<$(".iq-nav").children('a').length;i++) {
            var isVisible = Utils.isElementInView($('#anchor_loop_' + i), false);
            if (isVisible) {
                $('a[href="#anchor_loop_' + i + '"]').addClass('active');
                break;
            } else if (i >= $(".iq-nav").children('a').length-1) {//active the last one if all else is invisible
				$('a[href="#anchor_loop_' + i + '"]').addClass('active');
            }
        }
    }

    var arr = jQuery(".channel-pack-combos");
    var max = Math.max.apply(Math, arr.map(
               function(index, el) {
                   return jQuery(el).height();
               }
           ));
          if(arr){
           arr.map(function(index, el) {
               jQuery(el).css("height", Math.ceil(max));
           });
    }

    var ancnav = $('.iq-nav');
    if (ancnav.length > 0) {
        var currentScroll = 0;
        var initAnchorTop = ancnav.offset().top;
        var previousTop = 0;

        $(window).scroll(function() {
            var nextScroll = $(this).scrollTop();
                // WHEN SCROLLED UP TO THE ANCHOR NAV POSITION
                if($(this).scrollTop() > ancnav.offset().top) {
                    // WHEN SCROLL DOWNWARDS
                    if (nextScroll > currentScroll){
                        ancnav.addClass('iq-nav-position__fixed');
                    }
                } else {
                    // WHEN SCROLL UPWARDS
                    if (nextScroll < currentScroll){
                        ancnav.removeClass('iq-nav-position__fixed');
                    }
                }
                // SET CURRENT AS LAST SCROLL
                currentScroll = nextScroll;
            inView();
        });

        // SMOOTH SCROLLING FOR ANCHOR NAVIGATION
        $(document).on('click', 'a', function(event){
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top - 270
            }, 300);
        });

         /* the following code is used to shrink the Foxtel Store image, the really wide one, from both side when tablets or mobile hit. */
        jQuery(".inclusions-cmp-img__overflow")
            .css("height",  jQuery(".inclusions-cmp-img__overflow img").height())
                .addClass("inclusions-cmp-img__overflow-shrink");
    }
});