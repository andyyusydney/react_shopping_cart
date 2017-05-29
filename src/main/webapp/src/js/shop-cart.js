
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

    // Has the user added any premium packs?
    function hasPremium () {
      var packsInCart = this.shopCartResponseData.play.tiers;

      return _(packsInCart).any(function (pack) {
        return pack.type === 'PREMIUM';
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

    // Is the cart empty?
    function isEmpty () {
      var packsInCart = this.shopCartResponseData.play.tiers;

      return packsInCart.length === 0;
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
        getDramaTierId:getDramaTierId,
        getPopTierId:getPopTierId,
        getEPLWithSportTierIds:getEPLWithSportTierIds,
        getEPLWithOutSportTierIds:getEPLWithOutSportTierIds,
        hasStarter:hasStarter,
        hasPremium:hasPremium,
        hasPremiumPackAndNoStarter:hasPremiumPackAndNoStarter,
        isEmpty: isEmpty
    }

};

Foxtel.ShopCartManager = new com.foxtel.ShopCartManager();

$(document).ready(function(){

    Foxtel.ShopCartManager.init();

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 3;
    var shoppingCart = $('.foxtel-now-jumbotron');
    var shoppingCartHeight = $('.foxtel-now-jumbotron').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }else if(lastScrollTop == 0){
            initState();
        }

    }, 50);

    function initState() {
        shoppingCart.removeClass('foxtel-now-jumbotron--minimized');
        shoppingCart.find('.add-packs-text').removeClass('hidden');
    }

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        shoppingCart.addClass('foxtel-now-jumbotron--minimized');
        shoppingCart.find('.add-packs-text').addClass('hidden');
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > shoppingCartHeight){
            // Scroll Down
            $('.foxtel-now-jumbotron').removeClass('shoppingCart-nav-down').addClass('shoppingCart-nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.foxtel-now-jumbotron').removeClass('shoppingCart-nav-up').addClass('shoppingCart-nav-down');
            }
        }

        lastScrollTop = st;
    }

});
