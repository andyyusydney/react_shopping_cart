/* Multi Tab List Of Images */
$(document).ready(function(){

            var applyMaxHeight = function() {

                var arr = jQuery(".content-container .combo-content__right__row__cell");
                var max = Math.max.apply(Math, arr.map(
                    function(index, el) {
                        return jQuery(el).height();
                    }
                ));
                arr.map(function(index, el) {
                    jQuery(el).css("height", Math.ceil(max));
                });

            }
            applyMaxHeight();
            /*
             * Replace all SVG images with inline SVG
             */
            jQuery('img').filter(function() {
                return this.src.match(/.*\.svg$/);
            }).each(function(){
                var $img = jQuery(this);
                var imgID = $img.attr('id');
                var imgClass = $img.attr('class');
                var imgURL = $img.attr('src');

                jQuery.get(imgURL, function(data) {
                    // Get the SVG tag, ignore the rest
                    var $svg = jQuery(data).find('svg');

                    // Add replaced image's ID to the new SVG
                    if(typeof imgID !== 'undefined') {
                        $svg = $svg.attr('id', imgID);
                    }
                    // Add replaced image's classes to the new SVG
                    if(typeof imgClass !== 'undefined') {
                        $svg = $svg.attr('class', imgClass+' replaced-svg');
                    }

                    // Remove any invalid XML tags as per http://validator.w3.org
                    $svg = $svg.removeAttr('xmlns:a');

                    // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
                    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                    }

                    // Replace image with new SVG
                    $img.replaceWith($svg);

                }, 'xml');

            });

            /* show more */
           	jQuery(".show-more-combo-content").on("click", function() {
                if ($(".active .combo-content__right__row__cell:hidden").length <=0) {
                    jQuery(".combo-content__right__row__cell").css('display', '')
           	        jQuery(".show-more-combo-content").html("show more&#133;")
           	    } else {
                    jQuery(".combo-content__right__row__cell").css("display", "inline-block");
           	        jQuery(".show-more-combo-content").html("show less&#133;")
           	    }
                applyMaxHeight();
            });

            /* left tab button */
            jQuery(".combo-content-btn").on("click", function() {
                jQuery(".combo-content-btn").removeClass("active");
                var loop = jQuery(this).data("loop");
                jQuery(this).addClass("active");
                jQuery(".combo-content__right__table").removeClass("active").hide();
                jQuery(".combo-content-tab-" + loop).addClass("active").show();

                jQuery(".combo-content__right__row__cell").css('display', '');
                jQuery(".show-more-combo-content").html("show more&#133;")
                applyMaxHeight();
            });
});