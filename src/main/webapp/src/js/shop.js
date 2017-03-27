/**
 * This javascript is for now/shop.html
 */



$(document).ready(function(){

    //add button event
    $(document).on('click','.foxtelNowProductAddToCart span',function(){
        var $this = $(this);
        var tierId = $this.data("tier-id");
        if(!tierId){
            return;
        }

        Foxtel.ShopCartManager.addPlayTier(tierId);
    });

    $(document).on('click','[data-button-url]',function(){
        var dataURL = $(this).data("button-url");
        Foxtel.navigator(dataURL);
    });




});
