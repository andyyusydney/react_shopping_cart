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
        if(Foxtel.isEditOrDesignMode()){
            return;
        }
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

        var $btnsWithSport = $epl_extra_tiers_with_sports.find('.foxtelNowProductAddToCart');
        if(hasSport){
            $epl_extra_tiers_with_sports.removeClass('hidden');
            //disable <add to card> button
            $.each($btnsWithSport,function(idx,element){
                disableButton($(element),'.foxtel-now-btn.disabled')
            })
        }else{
            $epl_extra_tiers_without_sports.removeClass('hidden');
            //enable <add to card> button
            $.each($btnsWithSport,function(idx,element){
                enableButton($(element),'.foxtel-now-btn.disabled')
            })
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
    $(document).on('click','.foxtel-now-header__btn-cart',function(e){
        e.stopImmediatePropagation();
        e.preventDefault();
        $('.foxtel-now-jumbotron').slideToggle({
          duration: 400
        });
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
        if(Foxtel.ShopCartManager.hasPremiumPackAndNoStarter()){
            Foxtel.navigator($(this).data("button-without-starter-url"));
        }else{
            Foxtel.navigator($(this).data("button-url"));
        }
    });

    //Click card to trigger Find out more
    $(document).on('click','.foxtel-now-album',function(e){
        var url = $(this).find('.foxtel-now-card__title__link a').attr('href');
        var target = $(e.target);
        if(target.is("a span")||target.is("a.foxtelNowProductAddToCart")){
            e.preventDefault();
            return false;}
        else{
            Foxtel.navigator(url);
        }
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
