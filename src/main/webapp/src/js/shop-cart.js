
/**
 * Foxtel now shop cart manager && related JS
 *
 */



com.foxtel.ShopCartManager = function() {

    //Constants are defined here, but variables are defined in init function
    var MODEL_NAME_FOR_CART_SERVLET ="modelShopCart";
    var DEFAULT_CART_SERVLET_URL = "/bin/foxtel/now/cart";

    var EPL_CHANNEL_TIERS = [
        {
            name:"Chelsea TV",
            tierIdWithoutSports:991139,
            tierIdWithSports:991145
        },
        {
            name:"Liverpool TV",
            tierIdWithoutSports:991140,
            tierIdWithSports:991146
        },
        {
            name:"Manchest TV",
            tierIdWithoutSports:991141,
            tierIdWithSports:991147
        },
    ];

    var sport_tier_id = 990703;
    var drama_tier_id = 991149;
    var pop_tier_id = 991148;

    function getEPLTiers(){
        return EPL_CHANNEL_TIERS;
    }

    function getSportTierId(){
        return sport_tier_id;
    }

    function getDramaTierId(){
        return drama_tier_id;
    }

    function getPopTierId(){
        return pop_tier_id;
    }


    function getEPLWithSportTierIds(){
        return this.epl_channel_with_sport_ids;
    }

    function getEPLWithOutSportTierIds(){
        return this.epl_channel_without_sport_ids;
    }

    function init(){
        //shop cart servlet response
        this.shopCartResponseData = null;
        var self = this;

        self.EPL_CHANNEL_TIERS = EPL_CHANNEL_TIERS;
        self.sport_tier_id = sport_tier_id;

        //keep a copy in client side
        //we need to change the request to follow EPL rules
        self.current_play_tiers = [];

        self.cartServletUrl = $("[data-model-id='"+MODEL_NAME_FOR_CART_SERVLET+"']").data('request-url');
        if(!self.cartServletUrl){
            self.cartServletUrl = DEFAULT_CART_SERVLET_URL;
        }

        FOX.dyc.subscribeEvent(MODEL_NAME_FOR_CART_SERVLET,function(data){
            self.shopCartResponseData = data;
            FOX.context.broadcast("SHOP_CART_LOADED",data);
        });

        //init the 3 epl channle ids
        self.epl_channel_with_sport_ids = [];
        self.epl_channel_without_sport_ids = [];
        $.each(EPL_CHANNEL_TIERS,function(idx,item){
            self.epl_channel_with_sport_ids.push(item.tierIdWithSports);
            self.epl_channel_without_sport_ids.push(item.tierIdWithoutSports);
        })
    }

    function addPlayTier(tierId,callback){
        var self = this;

        var tierIdsAdded = [tierId];

        //call
        self.addPlayTiers(tierIdsAdded,callback);
    }

    function addPlayTiers(tierIdsAdded,callback){
        var self = this;

        var tierIds = self.getCurrentPlayTiers();
        tierIds = _.union(tierIds, tierIdsAdded);

        self.updatePlayTiers(tierIds,callback);
    }

    function removePlayTier(tierId,callback){
        var self = this;

        var tierIds = [tierId];
        //add 3 epl free channels when adding sports
        if(tierId == sport_tier_id){
            tierIds = _.union(tierIds,self.epl_channel_with_sport_ids);
        }
        self.removePlayTiers(tierIds,callback);
    }

    function removePlayTiers(tierIdsRemoved,callback){
        var self = this;

        var tierIds = self.getCurrentPlayTiers();
        tierIds = _.difference(tierIds, tierIdsRemoved);
        self.updatePlayTiers(tierIds,callback);
    }

    function updatePlayTiers(tierIds,callback){
        var self = this;
        var sport_tier_id = Foxtel.ShopCartManager.getSportTierId();
        var hasSportTier = _.contains(tierIds,sport_tier_id);

        if(hasSportTier){
            tierIds = _.difference(tierIds, self.epl_channel_without_sport_ids);
            tierIds = _.union(tierIds, self.epl_channel_with_sport_ids);
        }else{
            tierIds = _.difference(tierIds, self.epl_channel_with_sport_ids);
        }

        var postData = getPlayRequestFromTierIds(tierIds);

        $.ajax({
            type: "POST",
            url: self.cartServletUrl,
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

    function getCartResponse(){
        return this.shopCartResponseData;
    }

    // Has the user added any starter packs?
    function hasStarter () {
      var packsInCart = this.shopCartResponseData.play.tiers;

      return _(packsInCart).any(function (pack) {
        return pack.type === 'GENRE';
      });
    }

    // Has the user added any premium packs to the cart but not yet any starter
    // packs?
    function hasPremiumPackAndNoStarter () {
      var packsInCart = this.shopCartResponseData.play.tiers;
      var anyPremiumPacks = _(packsInCart).any(function (pack) {
        return pack.type === 'PREMIUM' || pack.type ==="EXTRA";
      });

      var anyStarterPacks = this.hasStarter();

      return anyPremiumPacks && !anyStarterPacks;
    }

    return {
        init:init,
        addPlayTier:addPlayTier,
        addPlayTiers:addPlayTiers,
        removePlayTier:removePlayTier,
        removePlayTiers:removePlayTiers,
        updatePlayTiers:updatePlayTiers,
        getCurrentPlayTiers:getCurrentPlayTiers,
        getCartResponse : getCartResponse,
        getEPLTiers:getEPLTiers,
        getSportTierId:getSportTierId,
        getDramaTierId,
        getPopTierId,
        getEPLWithSportTierIds:getEPLWithSportTierIds,
        getEPLWithOutSportTierIds:getEPLWithOutSportTierIds,
        hasStarter:hasStarter,
        hasPremiumPackAndNoStarter:hasPremiumPackAndNoStarter
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
