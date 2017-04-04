/**
 * This javascript is for now/shop.html
 */



$(document).ready(function(){

    var $cards = $('.foxtel-now-card');
    if($cards.length == 0){
        return;
    }

    //pack load & cart refresh event
    function updatePackBtns(cartResponse){
        $.each(cartResponse.play.tiers,function(idx,element){

            var $btnWrapper = $("[data-tier-id="+element.tierId+"]").closest('.foxtelNowProductAddToCart');
            if($btnWrapper.length>0){
                $btnWrapper.addClass('hidden');
                $btnWrapper.siblings('.foxtel-now-btn.disabled').removeClass('hidden');
            }
        });

    };

    //show or hide EPL channels
    function updateEPLChannels(cartResponse){

        var sport_tier_id = Foxtel.ShopCartManager.getSportTierId();
        var $epl_extra_tiers_without_sports = $('.epl-extra-tiers').children('.EPL-without-sports');
        var $epl_extra_tiers_with_sports = $('.epl-extra-tiers').children('.EPL-with-sports');

        $.each(cartResponse.play.tiers,function(idx,element){

            if(element.id == sport_tier_id){
                $epl_extra_tiers_without_sports.removeClass('hidden-sm-down hidden-sm-up ');
                $epl_extra_tiers_with_sports.addClass('hidden-sm-down hidden-sm-up ');
            }else{
                $epl_extra_tiers_without_sports.addClass('hidden-sm-down hidden-sm-up ');
                $epl_extra_tiers_with_sports.removeClass('hidden-sm-down hidden-sm-up ');
            }
             return;
        });

    };

    FOX.context.subscribe("SHOP_CART_LOADED",function(data){
        updatePackBtns(data);
        updateEPLChannels(data);
    });

    FOX.context.subscribe("SHOP_CART_REFRESHED",function(data){
        updatePackBtns(data);
        updateEPLChannels(data);
    });

    //Add all packs click event
    $(document).on('click','#foxtel-now-add-all-packs',function(e){

        var tierIds=[];

        for(var i = 0; i<$cards.length;i++ ){
            var $thisBtn = $cards[i].find('.foxtelNowProductAddToCart');
            if(!$thisBtn.find('span').data('tier-id')){
                continue;
            }

            tierIds.push($thisBtn.find('span').data('tier-id'));

        }

        Foxtel.ShopCartManager.addPlayTiers(tierIds);

        if($(this).hasClass('enable')){

            $(this).addClass('hidden');
            $(this).siblings('.foxtel-now-btn--ghost.disabled').removeClass('hidden');
            e.stopImmediatePropagation();
            e.preventDefault();
        }
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

    //Hide or show Cart
    $(document).on('click','.foxtel-now-header__btn-cart__icon',function(e){
        e.stopImmediatePropagation();
        e.preventDefault();
        $('.foxtel-now-jumbotron').toggle('slow',function(){})
    });

    //Remove pack from shopping cart
    $(document).on('click','.foxtel-now-jumbotron__pack-tag',function(e){
        var $this = $(this);
        var tierId = $this.data('tier-id') || $this.find('span').data('tier-id');
        if(!tierId){
            return;
        }
console.log(tierId);
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
