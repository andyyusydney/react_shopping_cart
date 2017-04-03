/**
 * This javascript is for now/shop.html
 */



$(document).ready(function(){

    //Add all packs click event
    $(document).on('click','#foxtel-now-add-all-packs',function(e){

        var cards[] = $('.foxtel-now-card');
        var tierIds[];

        for(var i = 0; i<cards.length;i++ ){
            tierIds[i]=cards[i].find('.foxtelNowProductAddToCart span').data('tier-id');
            if(!tierIds[i]){
                continue;
            }
        }


        if($(this).hasClass('enable')){

            $(this).addClass('hidden');
            $(this).siblings('.foxtel-now-btn.disabled').removeClass('hidden');
            e.stopImmediatePropagation();
            e.preventDefault();
        }
        Foxtel.ShopCartManager.addPlayTier(tierId);

    });

    //Add button event
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

    //Remove pack from shopping cart
    $(document).on('click','.foxtel-now-jumbotron__pack-tag',function(e){
        var $this = $(this);
        var tierId = $this.data('tier-id') || $this.find('span').data('tier-id');
        if(!tierId){
            return;
        }

        Foxtel.ShopCartManager.removePlayTier(tierId);
    })

    //Add default pack offer from shopping cart
    $(document).on('click','.foxtel-now-jumbotron__pack-tag--ghost',function(e){
        var $this = $(this);
        var tierId = $this.data('tier-id') || $this.find('span').data('tier-id');
        if(!tierId){
            return;
        }
        $this.css('display','none');
        Foxtel.ShopCartManager.addPlayTier(tierId);
    })

    //Navigation
    $(document).on('click','[data-button-url]',function(){
        var dataURL = $(this).data("button-url");
        Foxtel.navigator(dataURL);
    });




});
