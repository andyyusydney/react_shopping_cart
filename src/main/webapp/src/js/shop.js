/**
 * This javascript is for now/shop.html
 */


$(document).ready(function(){

    //Disable <add to cart> button status
    function disableButton ($btn,$siblings){
        if($btn.hasClass('enable')){
            $btn.addClass('hidden');
            $btn.siblings($siblings).removeClass('hidden');
        }
    }

    //Enable <add to cart> button status
    function enableButton ($btn,$siblings){
        if($btn.hasClass('enable')){
            $btn.removeClass('hidden');
            $btn.siblings($siblings).addClass('hidden');
        }
    }

    var $cards = $('.foxtel-now-card');
    if($cards.length == 0){
        return;
    }

    //pack load & cart refresh event
    function updatePackBtns(cartResponse){
        $('.foxtelNowProductAddToCart').each(function(){
            enableButton($(this),'.foxtel-now-btn.disabled');
        })
        $.each(cartResponse.play.tiers,function(idx,element){
            var $btnWrapper = $("[data-tier-id="+element.tierId+"]").closest('.foxtelNowProductAddToCart');
            if($btnWrapper.length>0){
                disableButton($btnWrapper,'.foxtel-now-btn.disabled');
            }
        });

    };

    //show or hide EPL channels
    function updateEPLChannels(cartResponse){

        var sport_tier_id = Foxtel.ShopCartManager.getSportTierId();
        var $epl_extra_tiers_without_sports = $('.epl-extra-tiers').children('.EPL-without-sports');
        var $epl_extra_tiers_with_sports = $('.epl-extra-tiers').children('.EPL-with-sports');

        $epl_extra_tiers_without_sports.addClass('hidden');
        $epl_extra_tiers_with_sports.addClass('hidden');

        var hasSport = false;
        $.each(cartResponse.play.tiers,function(idx,element){
            if(element.tierId == sport_tier_id){
               hasSport = true;
            }
        });
        if(hasSport){
            $epl_extra_tiers_with_sports.removeClass('hidden');
        }else{
            $epl_extra_tiers_without_sports.removeClass('hidden');
        }

    };

    //Add all packs click event
    $(document).on('click','.foxtelNowAddAllPacks',function(e){
        var tierIds=[];
        $('body').find('.foxtel-now-album').each(function(index){
            var $thisBtn = $(this).find('.foxtelNowProductAddToCart');
            if($thisBtn.find('span').data('tier-id')){
                tierIds.push($thisBtn.find('span').data('tier-id'));
            }
        });

        Foxtel.ShopCartManager.addPlayTiers(tierIds);
        disableButton($(this),'.foxtel-now-btn--ghost.disabled');

    });

    //Add button event
    $(document).on('click','.foxtelNowProductAddToCart',function(e){
        var $this = $(this);
        var tierId = $this.data('tier-id') || $this.find('span').data('tier-id');
        if(!tierId){
            return;
        }

        disableButton($(this),'.foxtel-now-btn.disabled');
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
        Foxtel.ShopCartManager.removePlayTier(tierId);

        //Enable <add all packs> button
        var $foxtelNowAddAllPacks = $('.foxtelNowAddAllPacks');
        enableButton($foxtelNowAddAllPacks,'.foxtel-now-btn--ghost.disabled');

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


    FOX.context.subscribe("SHOP_CART_LOADED",function(data){
        updatePackBtns(data);
        updateEPLChannels(data);
    });

    FOX.context.subscribe("SHOP_CART_REFRESHED",function(data){
        updatePackBtns(data);
        updateEPLChannels(data);
    });

});
