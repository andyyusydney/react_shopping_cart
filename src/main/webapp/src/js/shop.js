/**
 * This javascript is for now/shop.html
 */



$(document).ready(function(){

    //add button event
    $(document).on('click','.foxtelNowProductAddToCart',function(e){
        var $this = $(this);
        var tierId = $this.data('tier-id') || $this.find('span').data('tier-id');
        if(!tierId){
            return;
        }
        if($(this).hasClass('enable')){
            $(this).addClass('hidden');
            $(this).siblings('.foxtel-now-btn.disabled').removeClass('hidden');
            e.stopImmediatePropagation();
            e.preventDefault();            
        }   
        Foxtel.ShopCartManager.addPlayTier(tierId);

    });

    $(document).on('click','[data-button-url]',function(){
        var dataURL = $(this).data("button-url");
        Foxtel.navigator(dataURL);
    });




});
