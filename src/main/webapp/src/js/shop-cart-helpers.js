
/**
 * These helper functions are for shop cart
 */

// common functions in this file
var ShopCartHelpers = {
    hasSportTier: function(cartResponse){
        var sport_tier_id = Foxtel.ShopCartManager.getSportTierId();
        for(var i = 0; i< cartResponse.play.tiers.length;i++){
            if(cartResponse.play.tiers[i].tierId == sport_tier_id){
                return true;
            }
        }

        return false;
    },

    hasPopTier: function(cartResponse){
        var pop_tier_id = Foxtel.ShopCartManager.getPopTierId();

        for(var i = 0; i< cartResponse.play.tiers.length;i++){
            if(cartResponse.play.tiers[i].tierId == pop_tier_id){
                return true;
            }
        }
        return false;
    }
}

Handlebars.registerHelper("shopCartMonthlyOffer",function(cartResponse,options) {
    if(!cartResponse || !cartResponse.quote){
        return;
    }

    var monthlyCostItems = [];
    var hasFreeTrial = false;
    for(var i=0;i<cartResponse.quote.monthlyCostItems.length;i++){
        var monthlyCostItem = cartResponse.quote.monthlyCostItems[i];
        if(monthlyCostItem.len == 0){
            //free trial
            hasFreeTrial = true;
        }else{
            monthlyCostItems.push(monthlyCostItem);
        }
    }
    cartResponse.hasFreeTrial = hasFreeTrial;
    cartResponse.quote.monthlyCostItems = monthlyCostItems;

});

Handlebars.registerHelper("shopCartEmptyCart",function(cartResponse,options) {
    if (cartResponse.play.tiers.length > 0) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("shopDefaultPackage",function(cartResponse,options) {
    var hasStarterTier = false;
    for(var i = 0; i< cartResponse.play.tiers.length;i++){
        if ('GENRE' == cartResponse.play.tiers[i].type) {
            hasStarterTier = true;
        } else {
            hasStarterTier = false;
        }
    }

    if(hasStarterTier){
        return options.fn(this);
    }else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("shopEPLRules",function(cartResponse,options) {

    var EPL_CHANNEL_TIERS = Foxtel.ShopCartManager.getEPLTiers();
    if(ShopCartHelpers.hasSportTier(cartResponse)){
        var tiers = [];

        for(var i = 0; i< cartResponse.play.tiers.length;i++){
            var removeFlag = false;
            for(var key = 0; key<EPL_CHANNEL_TIERS.length; key++ ){
                if(EPL_CHANNEL_TIERS[key].tierIdWithSports == cartResponse.play.tiers[i].tierId){
                    removeFlag = true;
                    break;
                }
            }
            if(!removeFlag){
                tiers.push(cartResponse.play.tiers[i]);
            }
        }

        cartResponse.play.tiers = tiers;
    }

});

Handlebars.registerHelper("shopCartLegalTextInTierList",function(legalTextInTierListTextJson,tierObj,cartResponse,options) {

    legalTextArray = eval(legalTextInTierListTextJson);
    if(!legalTextArray){
        return;
    }

    var drama_tier_id = Foxtel.ShopCartManager.getDramaTierId();

    var hasPopTier = ShopCartHelpers.hasPopTier(cartResponse);

    for(var i=0;i<legalTextArray.length;i++){
        var legalTextObj = legalTextArray[i];
        var tierIdFomConfig = legalTextObj.tierId;

        if(tierIdFomConfig == tierObj.tierId){
            if(tierIdFomConfig == drama_tier_id){
                if(!hasPopTier){
                    continue;
                }
            }
            tierObj.legalText = legalTextObj.legalMsg;
        }
    }
});

Handlebars.registerHelper("shopCartTierLegalText",function(tierLegalTextArrayStr,cartResponse,options) {

    tierLegalTextArray = eval(tierLegalTextArrayStr);
    if(!tierLegalTextArray || !cartResponse){
        return;
    }

    cartResponse.tierLegalTexts = [];


    for(var i=0;i<tierLegalTextArray.length;i++){
        var tierLegalTextObj = tierLegalTextArray[i];
        var tierId = tierLegalTextObj.tierId;

        //look for this tier
        var obj = _.find(cartResponse.play.tiers, function(tier){
            if(tier.tierId == tierId){
                return true;
            }
        });

        if(obj){
            cartResponse.tierLegalTexts.push(tierLegalTextObj.legalMsg);
        }
    }
});

Handlebars.registerHelper("shopCartShowFirstMonthCost",function(cartResponse,options) {
    if(ShopCartHelpers.hasSportTier(cartResponse)){
        return options.fn(this);
    }else{
        return options.inverse(this);
    }
});

Handlebars.registerHelper("shopCartView",function(cartResponse,options) {

    //1:no offer, no free trial
    //2:no offer, has free trial
    //3:has offer, has free trial
    //4:has offer, no free trial
    var state = 0;

    if(cartResponse.hasFreeTrial){
        if(cartResponse.quote.monthlyCostItems.length >1){
            state = 3;
        }else{
            state = 2;
        }
    }else{
         if(cartResponse.quote.monthlyCostItems.length >1){
            state = 4;
         }else{
            state = 1;
         }
    }
    cartResponse.viewState = state;
});