
/**
 * Foxtel now shop cart manager
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
});

