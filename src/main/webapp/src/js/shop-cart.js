
/**
 * Foxtel now shop cart
 * All the frontend interaction with cart or cart servlet should be put here
 * Use standard JS event to handle click events and UI changes
 */

// (function($) {

//     com.foxtel.ShopCartManager = function() {

//         //Constants are defined here, but variables are defined in init function
//         var MODEL_NAME_FOR_CART_SERVLET ="modelShopCart";
//         var CART_SERVLET_URL = "/bin/foxtel/now/cart";

//         function init(){
//             //shop cart servlet response
//             this.shopCartResponseData = null;
//             var self = this;

//             FOX.dyc.subscribeEvent(MODEL_NAME_FOR_CART_SERVLET,function(data){
//                 self.shopCartResponseData = data;
//             });
//         }

//         function addTier(tierId){
//             var self = this;
//             var postData  =
//                 {
//                     "play" : {
//                         "tiers" : [
//                             {
//                                 "tierId" : 990690
//                             }
//                         ]
//                     }
//                 };

//             $.ajax({
//                 type: "POST",
//                 url: CART_SERVLET_URL,
//                 contentType: "application/json; charset=utf-8",
//                 dataType: "json",
//                 data: JSON.stringify(postData),
//                 success: function(data) {
//                     self.shopCartResponseData = data;
//                 }
//             });

//         }

//         return {
//                 init:init,
//                 addTier:addTier

//             }

//     };

//      Foxtel.ShopCartManager = new com.foxtel.ShopCartManager();
//      Foxtel.ShopCartManager.init();

// })(jQuery);
