
/**
 * User story link :https://confluence.aws.foxtel.com.au/pages/viewpage.action?pageId=46077595
 * JIRA : PRF-22
 */


$(document).ready(function(){
    var $cmp = $("[data-cmp-id='checkoutWithoutStarterPack']");
    if($cmp.length == 0){
        return;
    }

    var modelData = FOX.context.getModel("checkoutWithoutStarterPackModel").attributes;

    //Update title Text when having cart object
    FOX.context.subscribe("SHOP_CART_LOADED",function(cartResponse){
        var titleText = modelData.title;

        //get premium tier names
        var premiumTierNames = [];
        $.each(cartResponse.play.tiers,function(idx,item){
            if("PREMIUM" == item.type){
                premiumTierNames.push(item.title);
            }
        })
        var replaceText = "";
        var len = premiumTierNames.length;
        for(var idx=0;idx<len;idx++){
            replaceText += premiumTierNames[idx];
            if(idx< len -2){
                replaceText += ",";
            }
            if(idx == len -2){
                replaceText += "&";
            }
        }
        titleText = titleText.replace("[selected_tier_names]",replaceText);
        if(len==1){
            titleText = titleText.replace("[be]","is");
        }else{
            titleText = titleText.replace("[be]","are");
        }

        $cmp.find("[data-id='title']").html(titleText);
    });

    //click event handler
    $cmp.on('click',"[data-id='moreOptionsBtn']",function(){
        Foxtel.navigator(modelData.moreOptionsBtnLink);
    });

    $cmp.on('click',"[data-id='addStarterBtn']",function(){
        Foxtel.ShopCartManager.addPlayTier(modelData.starterTierId,function(){
            Foxtel.navigator(modelData.moreOptionsBtnLink);
        });
    });
});