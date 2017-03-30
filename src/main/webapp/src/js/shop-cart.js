
/**
 * Foxtel now shop cart manager && related JS
 * 
 */



com.foxtel.ShopCartManager = function() {

    //Constants are defined here, but variables are defined in init function
    var MODEL_NAME_FOR_CART_SERVLET ="modelShopCart";
    var CART_SERVLET_URL = "/bin/foxtel/now/cart";

    function init(){
        //shop cart servlet response
        this.shopCartResponseData = null;
        var self = this;

        FOX.dyc.subscribeEvent(MODEL_NAME_FOR_CART_SERVLET,function(data){
            self.shopCartResponseData = data;
            FOX.context.broadcast("SHOP_CART_LOADED",data);
        });
    }

    function addPlayTier(tierId,callback){
        var self = this;

        var tierIds = self.getCurrentPlayTiers();
        tierIds = _.union(tierIds, [tierId]);
        var postData = getPlayRequestFromTierIds(tierIds);

        $.ajax({
            type: "POST",
            url: CART_SERVLET_URL,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(postData),
            success: function(data) {
                self.shopCartResponseData = data;
                if(callback){
                    callback(data);
                }
                FOX.context.broadcast("SHOP_CART_REFRESHED",data);
            }
        });
    }

    function getCurrentPlayTiers(){
        var tierIds = [];

        $.each(this.shopCartResponseData.play.tiers,function(idx,tier){
            tierIds.push(tier.tierId);
        });

        return tierIds;
    }

    function getPlayRequestFromTierIds(tierIds){
        var postData  = {
                "play" : {
                    "tiers" : [

                    ]
                }
            };

        $.each(tierIds,function(idx,tierId){
            postData.play.tiers.push({"tierId":tierId})
        });

        return postData;
    }



    return {
        init:init,
        addPlayTier:addPlayTier,
        getCurrentPlayTiers:getCurrentPlayTiers
    }

};

Foxtel.ShopCartManager = new com.foxtel.ShopCartManager();

$(document).ready(function(){
    
    Foxtel.ShopCartManager.init();

    // Shopping Cart SMART SCROLLING FEATURE
    var shoppingcart = $('.foxtel-now-jumbotron');
    var shoppingcartH = shoppingcart.height();
    var shoppingcartStatus;
    var currentScroll = 0;

    // SCROLL SENSITIVITY TO ADJUST SCROLL BEHAVIOURS
    var sensitivity = 2;

    $(window).scroll(function() {
        // GET CURRENT PAGE AXIS
        var nextScroll = $(this).scrollTop();

        // GET SCROLL DELTA
        var scrollDelta = nextScroll - currentScroll;

        // IF SCROLLED OR LEFT FROM 0 Y-AXIS
        if($(this).scrollTop() > 0) {

            // WHEN SCROLL DOWNWARDS
            if (nextScroll > currentScroll){
                if (scrollDelta > sensitivity){
                    // shoppingcart SLIDES BACK AWAY
                    shoppingcart.addClass('foxtel-header-breadcrumb--pop foxtel-now-jumbotron--minimized');
                    shoppingcart.css('position','fixed');
                }

                // WHEN SCROLL UPWARDS
            } else {
                if (scrollDelta < -sensitivity){
                    shoppingcart.addClass('foxtel-header-breadcrumb--pop foxtel-now-jumbotron--minimized');
                }
            }

            // IF COMPLETLEY BACK TO TOP, 0 Y-AXIS
        } else {
            shoppingcart.removeClass('foxtel-header-breadcrumb--pop foxtel-now-jumbotron--minimized');
            shoppingcart.css('position','relative');
        }

        // SET CURRENT AS LAST SCROLL
        currentScroll = nextScroll;
    });


});

