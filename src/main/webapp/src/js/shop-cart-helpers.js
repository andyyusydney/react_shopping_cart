
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

    var monthlyOfferItems = [];
    for(var i=0;i<cartResponse.quote.monthlyOfferItems.length;i++){
        var monthlyOfferItem = cartResponse.quote.monthlyOfferItems[i];
        if(monthlyOfferItem.length != 0){
            monthlyOfferItems.push(monthlyOfferItem);
        }
    }
    cartResponse.quote.monthlyOfferItems = monthlyOfferItems;

});

Handlebars.registerHelper("shopCartEmptyCart",function(cartResponse,options) {
    if (cartResponse.play.tiers.length > 0) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("shopDefaultPackage",function(cartResponse,options) {
    if (Foxtel.ShopCartManager.hasStarter()) {
        return options.fn(this);
    }else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper("shopPremiumPackage",function(cartResponse,options) {
    if (Foxtel.ShopCartManager.hasPremium()) {
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

Handlebars.registerHelper("shopCartTimeConverter",function(cartResponse,options) {

  //minus one day to retrieve the desired date from next billing date
  var UNIX_timestamp = parseInt(cartResponse) - 86400;
  var a = new Date(UNIX_timestamp);
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + ' ' + month + ', ' + year;
//  var hour = a.getHours();
//  var min = a.getMinutes();
//  var sec = a.getSeconds();
//  if(hrs_flag){
//    var time = date + ' ' + month + ', ' + year + ' ' + hour + ':' + min + ':' + sec ;
//  } else {
//    var time = date + ' ' + month + ', ' + year;
//  }

  return time;

});

Handlebars.registerHelper("shopCartStringToDateConverter",function(cartResponse,options) {

 // var months = {'Jan':'01', 'Feb':'02', 'Mar':'03', 'Apr':'04', 'May':'05', 'Jun':'06', 'Jul':'07', 'Aug':'08', 'Sep':'09', 'Oct':'10', 'Nov':'11', 'Dec':'12'};
    var months = {'January':'01', 'February':'02', 'March':'03', 'April':'04', 'May':'05', 'June':'06', 'July':'07', 'August':'08', 'September':'09', 'October':'10', 'November':'11', 'December':'12'};

    var dateStr = cartResponse.split(" ");
  var yearStr = dateStr[1];
  var monthStr = dateStr[0];
  var year = yearStr.slice(-2);
  var month = months[monthStr];
  var date = month + '-' + year;

  return date;

});

Handlebars.registerHelper("shopCartDecimalConverter",function(DecimalPos,totalValue,options) {

  if (totalValue == "") totalValue = 0;
  var sum = totalValue / Math.pow(10,DecimalPos);

  return sum.toFixed(2);

});