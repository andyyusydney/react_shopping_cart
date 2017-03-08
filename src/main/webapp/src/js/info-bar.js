// Info bar animation

$(document).ready(function(){
    if($('.info-bar-wrapper').length > 0){

        var infobar = $('.info-bar-wrapper');

        var animationType = infobar.attr('data-animate-slide');

        switch (animationType){
            case 'up':
                window.setTimeout(infobar.slideUp('slow'), 3000);
                $('.icon-close-remove').click(function(){
                    infobar.slideDown('slow');
                })
                break;
            case 'down':
                window.setTimeout(infobar.slideDown('slow'),3000);
                $('.icon-close-remove').click(function(){
                    infobar.slideUp('slow');
                })
                break;
        }

    }
});