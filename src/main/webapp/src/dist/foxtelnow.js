/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        return React.createElement("h1", null,
            "Hello aaabbb from ",
            this.props.compiler,
            " and ",
            this.props.framework,
            "!");
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(48);
var Hello_1 = __webpack_require__(0);
ReactDOM.render(React.createElement(Hello_1.Hello, { compiler: "TypeScript", framework: "React" }), document.getElementById("example"));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * This file is for Analytics in Foxtel Now pages.
 */

$(function() {
    if (typeof digitalData === "undefined") {
        return;
    }

    var pathName = $(location).attr('href');
    if(!pathName){
        return;
    }

    //URL normalisation,see more at https://en.wikipedia.org/wiki/URL_normalization
    // 1) double slash
    // 2) lower case
    pathName = pathName.replace(/\/\//g,'/').toLowerCase();

    function doPageAnalytics(pathName){
       var start = pathName.indexOf("/now/");
       var end = pathName.indexOf(".html");
       if (start < 0 || end < 0) {
           return;
       }
       var pageName = pathName.substring(start, end);

        digitalDataManager.analyseBase();
        switch (pageName) {
            case "/now/index":
                digitalDataManager.analyseHome();
                break;
            case "/now/shop/sign-up":
                digitalDataManager.analyseSignUpPersonalDetails();
                break;
            case "/now/shop/payment":
                digitalDataManager.analyseSignUpCreditCard();
                break;
            case "/now/shop/welcome":
                digitalDataManager.analyseSignUpThankYou();
                break;
            case "/now/shop":
                digitalDataManager.analysePackListing();
                break;
            case "/now/pop":
            case "/now/drama":
            case "/now/docos":
            case "/now/lifestyle":
            case "/now/kids":
            case "/now/movies":
            case "/now/sport":
                digitalDataManager.analysePackDetail();
                break;
            case "/now/my-account":
                digitalDataManager.analyseMyAccountHome();
                break;
            case "/now/my-account/personal-details":
                digitalDataManager.analyseMyAccountUpdatePersonalDetails();
                break;
            case "/now/my-account/billing-details":
                digitalDataManager.analyseMyAccountUpdateBilling();
                break;
            case "/now/my-account/view-bills":
                digitalDataManager.analyseMyAccountViewBills();
                break;
            case "/now/my-account/deactivate":
                digitalDataManager.analyseMyAccountDeactivate();
                break;
            case "/now/my-account/manage-your-package":
                digitalDataManager.analyseMyAccountManagePackage();
                break;
            case "/now/my-account/reactivate":
                digitalDataManager.analyseMyAccountReactivateChoosePackages();
                break;
            case "/now/my-account/reactivate/personal-details":
                digitalDataManager.analyseMyAccountReactivateEnterDetails();
                break;
            case "/now/my-account/reactivate/welcome-back":
                digitalDataManager.analyseMyAccountReactivateComplete();
                break;

            // need to implement for each offer page
            case "/now/offer/tvpass.html":
            case "/now/offer/presto.html":
                digitalDataManager.analyseOfferPage();
                break;

            case "/now/error/404":
                digitalDataManager.analyseError();
                break;
        }
    }

    try {
        doPageAnalytics(pathName);
    }
    catch (e) {
        console.log(e);
    }

});

var digitalDataManager = {
    analyseBase : function() {
        // initialize analytics object
        digitalData.pldl = {};
        digitalData.pldl.event = {};
        digitalData.site.section = "";
        digitalData.site.subSection = "";
        digitalData.site.subSubSection = "";
        digitalData.page = {};
        digitalData.page.pageInfo = {};
        digitalData.page.pageInfo.pageName = "";
        digitalData.page.pageInfo.funnelName = "";
        digitalData.user.account = {};
        digitalData.user.account.loginStatus = "logged out";
        digitalData.user.account.type = "";
        digitalData.user.account.userId = "";
        digitalData.transaction = {};
        digitalData.cart = {};

        FOX.context.subscribe("ANALYTICS_USER_NOT_LOGGED_IN", function() {
            try {
                digitalData.user.account.loginStatus = "logged out";
                digitalData.user.account.userId = "";

                var accountType = $.cookie("analytics-account-type");
                if (typeof accountType === "undefined" || accountType != "existing") {
                    digitalData.user.account.type = "prospect";
                    $.cookie("analytics-account-type", "prospect", {path: '/'});
                }
            }
            catch (e) {
                console.log(e);
            }
        });
        FOX.context.subscribe("ANALYTICS_USER_LOGGED_IN", function(user) {
            try {
                digitalData.user.account.loginStatus = "logged in";
                digitalData.user.account.type = "existing";
                $.cookie("analytics-account-type", "existing", {path: '/'});
                digitalData.user.account.userId = user.userId;
            }
            catch (e) {
                console.log(e);
            }
        });

        digitalDataManager.analyseShoppingCartOnEvent("SHOP_CART_LOADED");
        digitalDataManager.analyseShoppingCartOnEvent("SHOP_CART_REFRESHED");

        $("div[data-id='freeTrial'] a").on("click", function() {
            digitalData.pldl.event.eventName = "button_click";
            digitalData.pldl.event.eventInfo = {
                eventAction: "free trial click"
            };
         });
        $("div[data-id='logIn'] a").on("click", function() {
            digitalData.pldl.event.eventName = "button_click";
            digitalData.pldl.event.eventInfo = {
                eventAction: "login click"
            };
         });
    },
    analyseHome : function() {
        digitalData.site.section = "";
        digitalData.site.subSection = "";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "home";
    },
    analyseSignUpPersonalDetails : function() {
        digitalData.site.section = "checkout";
        digitalData.site.subSection = "";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "signup details";
        digitalData.page.formName = "sign up";
        digitalData.page.formStep = "personal details";
        digitalData.page.clientSideFormErrors = "";
        digitalData.page.serverSideFormErrors = "";

        digitalDataManager.analyseServerFormErrorsOnMessage();

        $("#shop-sign-up-form input").on("focus", function() {
            if (digitalDataManager.formStarted == false) {
                digitalData.pldl.event.eventName = "form_start";
                digitalData.pldl.event.eventInfo = {
                    eventAction: "form start",
                    time: new Date().getTime()
                };
                digitalDataManager.formStarted = true;
            }
        });

        $("#shop-sign-up-form input").on("blur", function() {
            digitalData.page.clientSideFormErrors = $("#shop-sign-up-form ul.parsley-errors-list.filled li")
                    .map(function() {
                        return $(this).text();
                    }).get().join("|");
        });

        $("#shop-sign-up-form input").on("change", function() {
            digitalData.pldl.event.eventName = "form_field_interaction";
            digitalData.pldl.event.eventInfo = {
                eventAction: "form field interaction",
                fieldName: this.getAttribute("data-id")
            };
        });

        $("#sign-up-form-submit").on("click", function() {
            //get user email id
            var analyticsInfo = digitalDataManager.readAnalyticsInfo();
            analyticsInfo.userId = $("[data-id='email']").val();
            digitalDataManager.updateAnalyticsInfo(analyticsInfo);
        });
    },
    analyseSignUpCreditCard : function() {
        digitalData.site.section = "checkout";
        digitalData.site.subSection = "";
        digitalData.site.subSubSection = "";
        digitalData.page.formName = "sign up";
        digitalData.page.pageInfo.pageName = "signup credit card";
        digitalData.page.formStep = "credit card";
        digitalData.page.clientSideFormErrors = "";
        digitalData.page.serverSideFormErrors = "";

        digitalDataManager.analyseServerFormErrorsOnMessage();

        digitalDataManager.storeShoppingCart("SHOP_CART_LOADED");

        $("#shop-credit-card-form input").on("focus", function() {
            if (digitalDataManager.formStarted == false) {
                digitalData.pldl.event.eventName = "form_start";
                digitalData.pldl.event.eventInfo = {
                    eventAction: "form start",
                    time: new Date().getTime()
                };
                digitalDataManager.formStarted = true;
            }
        });

        $("#shop-credit-card-form input").on("blur", function() {
            digitalData.page.clientSideFormErrors = $("#shop-credit-card-form ul.parsley-errors-list.filled li")
                    .map(function() {
                        return $(this).text();
                    }).get().join("|");
        });

        $("#shop-credit-card-form input").on("change", function() {
            digitalData.pldl.event.eventName = "form_field_interaction";
            digitalData.pldl.event.eventInfo = {
                eventAction: "form field interaction",
                fieldName: this.getAttribute("data-id")
            };
        });

        $("#credit-card-form-submit").on("click", function() {
            digitalData.pldl.event.eventName = "form_submit";
            digitalData.pldl.event.eventInfo = {
                eventAction: "form submit",
                time: new Date().getTime()
            };
        });
    },
    analyseSignUpThankYou : function() {
        digitalData.site.section = "checkout";
        digitalData.site.subSection = "";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "signup thank you";
        digitalData.page.formName = "sign up";
        digitalData.page.formStep = "thank you";

        digitalData.user.account.type = "existing";
        $.cookie("analytics-account-type", "existing", {path: '/'});

        digitalDataManager.loadAndAnalyseShoppingCart();

        $(".foxtel-now-welcome-message-wrapper a").on("click", function() {
            digitalData.pldl.event.eventName = "button_click";
            digitalData.pldl.event.eventInfo = {
                eventAction: "start watching click"
            };
        });
    },
    analysePackListing : function() {
        digitalData.site.section = "shop";
        digitalData.site.subSection = "";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "all packs";

        digitalDataManager.analyseAllProductsInPage();
    },
    analysePackDetail : function() {
        digitalData.site.section = "shop";
        digitalData.site.subSection = "";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = document.title;

        digitalData.page.products = [];
        var $product = $(".foxtel-now-pack-details");
        var name = $product.find("[itemprop='name']").text();
        var price = $product.find("[itemprop='price']").text();
        var id = $product.find(".add-to-cart[data-tier-id]").attr("data-tier-id");
        var product = {
            product_name: name,
            product_id: id,
            product_price: price,
            qty: 1
        };
        digitalData.page.products.push(product);
    },
    analyseMyAccountHome : function() {
        digitalData.site.section = "build";
        digitalData.site.subSection = "";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "manage";
    },
    analyseMyAccountUpdatePersonalDetails : function() {
        digitalData.site.section = "build";
        digitalData.site.subSection = "manage";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "personaldetails";
        digitalData.page.formName = "personal details";
        digitalData.page.formStep = "update personal details";

        //record user id
        $("#sign-up-form-submit").on("click", function() {
            //get user email id
            var analyticsInfo = digitalDataManager.readAnalyticsInfo();
            analyticsInfo.userId = $("[data-id='email']").val();
            digitalDataManager.updateAnalyticsInfo(analyticsInfo);
        });
    },
    analyseMyAccountUpdateBilling : function() {
        digitalData.site.section = "build";
        digitalData.site.subSection = "manage";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "billingdetails";
        digitalData.page.formName = "billing details";
        digitalData.page.formStep = "update billing details";
    },
    analyseMyAccountViewBills : function() {
        digitalData.site.section = "build";
        digitalData.site.subSection = "manage";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "viewbills";
    },
    analyseMyAccountCreateSecondaryAccount : function() {
        digitalData.site.section = "build";
        digitalData.site.subSection = "manage";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "secondaryaccount";
    },
    analyseMyAccountDeactivate : function() {
        digitalData.site.section = "build";
        digitalData.site.subSection = "manage";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "deactivate";

        $("#cancel-member-form-submit").on("click", function() {
            digitalData.pldl.event.eventName = "form_submit";
            digitalData.pldl.event.eventInfo = {
                eventAction: "deactivate_account",
                time: new Date().getTime(),
                deactivateReason: $("[data-id='deactiveReason']").attr("data-text"),
                deactivateDeviceUsed: $("[data-id='deviceUsed']").attr("data-text")
            };
        });
    },
    analyseMyAccountManagePackage : function() {
        digitalData.site.section = "build";
        digitalData.site.subSection = "manage";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "package";

        FOX.context.subscribe("SHOP_CART_LOADED", function(data) {
            var shoppingCart = data.play;
            digitalData.transaction.productsAdded = "";
            digitalData.transaction.productsRemoved = "";
            digitalData.transaction.oldRevenue = shoppingCart.monthlyCostIncludingOffer;
            digitalData.transaction.newRevenue = shoppingCart.monthlyCostIncludingOffer;
            digitalData.transaction.oldQty = shoppingCart.tiers.length;
            digitalData.transaction.newQty = shoppingCart.tiers.length;

            for (var i = 0; i < shoppingCart.tiers.length; i++) {
                digitalDataManager.oldShoppingCart.push(shoppingCart.tiers[i].title);
            }
        });

        FOX.context.subscribe("SHOP_CART_REFRESHED", function(data) {
            var shoppingCart = data.play;
            digitalData.transaction.oldRevenue = digitalData.transaction.newRevenue;
            digitalData.transaction.newRevenue = shoppingCart.monthlyCostIncludingOffer;
            digitalData.transaction.oldQty = digitalData.transaction.newQty;
            digitalData.transaction.newQty = shoppingCart.tiers.length;

            var newShoppingCart = [];
            for (var i = 0; i < shoppingCart.tiers.length; i++) {
                newShoppingCart.push(shoppingCart.tiers[i].title);
            }

            digitalData.transaction.productsAdded = digitalDataManager.getAdditionalProducts(digitalDataManager.oldShoppingCart, newShoppingCart);
            digitalData.transaction.productsRemoved = digitalDataManager.getAdditionalProducts(newShoppingCart, digitalDataManager.oldShoppingCart);

            digitalDataManager.oldShoppingCart = newShoppingCart;
        });
    },
    analyseMyAccountReactivateChoosePackages : function() {
        digitalData.site.section = "build";
        digitalData.site.subSection = "manage";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "reactivate - choose packages"
        digitalData.page.formName = "reactivate";
        digitalData.page.formStep = "choose packages";
        digitalData.page.clientSideFormErrors = "";
        digitalData.page.serverSideFormErrors = "";

        digitalDataManager.storeShoppingCartOnEvent("SHOP_CART_LOADED");
        digitalDataManager.storeShoppingCartOnEvent("SHOP_CART_REFRESHED");

        digitalDataManager.analyseServerFormErrorsOnMessage();

        digitalDataManager.analyseAllProductsInPage();
    },
    analyseMyAccountReactivateEnterDetails : function() {
        digitalData.site.section = "build";
        digitalData.site.subSection = "manage";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "reactivate - enter details"
        digitalData.page.formName = "reactivate";
        digitalData.page.formStep = "enter details";
        digitalData.page.clientSideFormErrors = "";
        digitalData.page.serverSideFormErrors = "";

        digitalDataManager.analyseServerFormErrorsOnMessage();

        $("#reactivation-personal-details-form input").on("focus", function() {
            if (digitalDataManager.formStarted == false) {
                digitalData.pldl.event.eventName = "form_start";
                digitalData.pldl.event.eventInfo = {
                    eventAction: "form start",
                    time: new Date().getTime()
                };
                digitalDataManager.formStarted = true;
            }
        });

        $("#reactivation-personal-details-form input").on("blur", function() {
            digitalData.page.clientSideFormErrors = $("#reactivation-personal-details-form ul.parsley-errors-list.filled li")
                    .map(function() {
                        return $(this).text();
                    }).get().join("|");
        });

        $("#reactivation-personal-details-form input").on("change", function() {
            digitalData.pldl.event.eventName = "form_field_interaction";
            digitalData.pldl.event.eventInfo = {
                eventAction: "form field interaction",
                fieldName: this.getAttribute("data-id")
            };
        });

        $("#sign-up-form-submit").on("click", function() {
            digitalData.pldl.event.eventName = "form_submit";
            digitalData.pldl.event.eventInfo = {
                eventAction: "form submit",
                time: new Date().getTime()
            };
        });
    },
    analyseMyAccountReactivateComplete : function() {
        digitalData.site.section = "build";
        digitalData.site.subSection = "manage";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "reactivate - complete"
        digitalData.page.formName = "reactivate";
        digitalData.page.formStep = "complete";

        digitalDataManager.loadAndAnalyseShoppingCart();
    },
    analyseError : function() {
        digitalData.site.section = "error";
        digitalData.site.subSection = "";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "404 Not Found";
    },
    formStarted : false,
    oldShoppingCart : [],
    analyseServerFormErrorsOnMessage : function() {
        FOX.context.subscribe("SHOW_BANNER", function(data) {
            switch (data.name) {
                case "EMAIL_TAKEN":
                case "PAYMENT_GATEWAY_ERROR":
                case "KENAN_ERROR":
                    digitalData.page.serverSideFormErrors = data.name;
                    break;
            }
        });
    },
    getAdditionalProducts : function(arrayOfProducts, arrayWithAdditionalProducts) {
        var additionalProducts = "";
        for (var i = 0; i < arrayWithAdditionalProducts.length; i++) {
            if (arrayOfProducts.indexOf(arrayWithAdditionalProducts[i]) < 0) {
                if (additionalProducts.length > 0) {
                    additionalProducts += "|";
                }
                additionalProducts += arrayWithAdditionalProducts[i];
            }
        }
        return additionalProducts;
    },
    analyseAllProductsInPage : function() {
        try {
            var products = [];
            $(".foxtel-now-card").each(
                function() {
                    var priceText = $(this).find(".foxtel-now-card__title__price").text();
                    var start = priceText.indexOf("$");
                    var end = priceText.indexOf("/");
                    var price = priceText.substring(start + 1, end);
                    if (price != "0") {
                        var name = $(this).find(".foxtel-now-card__title__name").text();
                        var id = $(this).find(".foxtelNowProductAddToCart [data-tier-id]").attr("data-tier-id");
                        var product = {
                            product_name: name,
                            product_id: id,
                            product_price: price,
                            qty: 1
                        };
                        products.push(product);
                    }
                }
            )
            digitalData.page.products = products;
        }
        catch (e) {
            console.log(e);
        }
    },
    analyseOfferPage : function(){
        FOX.context.subscribe("PROMO_CODE_SUBMITTED",function(data){
            var analyticsInfo = digitalDataManager.readAnalyticsInfo();
            analyticsInfo.promoCode = data.code;
            digitalDataManager.updateAnalyticsInfo(analyticsInfo);
        });
    },
    analyseShoppingCartOnEvent : function(eventName) {
        FOX.context.subscribe(eventName, function(data) {
            try {
                var shoppingCart = data.play;
                var products = [];

                for (var i = 0; i < shoppingCart.tiers.length; i++) {
                    var product = {
                        product_name: shoppingCart.tiers[i].title,
                        product_id: shoppingCart.tiers[i].tierId,
                        product_price: shoppingCart.tiers[i].price,
                        qty: 1
                    };
                    products.push(product);
                }

                digitalData.cart.products = products;
                digitalData.cart.totalvalue = shoppingCart.monthlyCostIncludingOffer;
                digitalData.cart.totalQty = shoppingCart.tiers.length;
            }
            catch (e) {
                console.log(e);
            }
        });
    },
    storeShoppingCartOnEvent : function(eventName) {
        FOX.context.subscribe(eventName, function(data) {
            try {
                FOX.storage.data("analytics-shopping-cart", JSON.stringify(data.play));
            }
            catch (e) {
                console.log(e);
            }
        });
    },
    updateAnalyticsInfo : function(analyticsInfo) {
        try{
            if(!analyticsInfo.transactionId){
                analyticsInfo.transactionId = new Date().valueOf();
            }
            FOX.storage.data("analytics-info", JSON.stringify(analyticsInfo));
        }catch (e) {
             console.log(e);
         }
    },
    readAnalyticsInfo : function() {
        try {
            var analyticsInfoText = FOX.storage.data("analytics-info");

            if(!analyticsInfoText){
                return {}
            }

            var analyticsInfo = JSON.parse(analyticsInfoText);
            return analyticsInfo?analyticsInfo:{};
        }
        catch (e) {
            console.log(e);
        }
        return {};
    },
    loadAndAnalyseShoppingCart : function() {
        try {
            var shoppingCart = JSON.parse(FOX.storage.data("analytics-shopping-cart"));
            var products = [];

            var discountInfo = "";

            for (var i = 0; i < shoppingCart.tiers.length; i++) {
                var product = {
                    product_name: shoppingCart.tiers[i].title,
                    product_id: shoppingCart.tiers[i].tierId,
                    product_price: shoppingCart.tiers[i].discountedPrice,
                    qty: 1
                };
                products.push(product);

                //calculate discount price
                var priceDiscount = shoppingCart.tiers[i].price - shoppingCart.tiers[i].discountedPrice
                if(priceDiscount > 0){
                    discountInfo += shoppingCart.tiers[i].title+" "+priceDiscount+" DISCOUNT";
                }
            }

            digitalData.transaction.products = products;
            digitalData.transaction.totalRevenue = shoppingCart.monthlyCostIncludingOffer;
            digitalData.transaction.totalQty = shoppingCart.tiers.length;

            //add discount information
            digitalData.transaction.discountType = discountInfo;

            //user id & transaction id
            var analyticsInfo = digitalDataManager.readAnalyticsInfo();
            digitalData.user.account.userId = analyticsInfo.userId;
            digitalData.transaction.transactionId = analyticsInfo.transactionId;

            //promo code
            if(analyticsInfo.promoCode){
                digitalData.transaction.offerCode = analyticsInfo.promoCode;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*!
 * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.')
}

+function ($) {
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
  }
}(jQuery);


+function () {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Util = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var transition = false;

  var MAX_UID = 1000000;

  var TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };

  // shoutout AngusCroll (https://goo.gl/pxwQGp)
  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType;
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }
        return undefined;
      }
    };
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement('bootstrap');

    for (var name in TransitionEndEvent) {
      if (el.style[name] !== undefined) {
        return {
          end: TransitionEndEvent[name]
        };
      }
    }

    return false;
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;

    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });

    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);

    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();

    $.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  var Util = {

    TRANSITION_END: 'bsTransitionEnd',

    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));
      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector) {
        selector = element.getAttribute('href') || '';
        selector = /^#[a-z]/i.test(selector) ? selector : null;
      }

      return selector;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
          }
        }
      }
    }
  };

  setTransitionEndSupport();

  return Util;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Alert = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };

  var Event = {
    CLOSE: 'close' + EVENT_KEY,
    CLOSED: 'closed' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = function () {
    function Alert(element) {
      _classCallCheck(this, Alert);

      this._element = element;
    }

    // getters

    // public

    Alert.prototype.close = function close(element) {
      element = element || this._element;

      var rootElement = this._getRootElement(element);
      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    Alert.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // private

    Alert.prototype._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = $(selector)[0];
      }

      if (!parent) {
        parent = $(element).closest('.' + ClassName.ALERT)[0];
      }

      return parent;
    };

    Alert.prototype._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);

      $(element).trigger(closeEvent);
      return closeEvent;
    };

    Alert.prototype._removeElement = function _removeElement(element) {
      var _this2 = this;

      $(element).removeClass(ClassName.SHOW);

      if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);
        return;
      }

      $(element).one(Util.TRANSITION_END, function (event) {
        return _this2._destroyElement(element, event);
      }).emulateTransitionEnd(TRANSITION_DURATION);
    };

    Alert.prototype._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    };

    // static

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  return Alert;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Button = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'button';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var ClassName = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };

  var Selector = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };

  var Event = {
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = function () {
    function Button(element) {
      _classCallCheck(this, Button);

      this._element = element;
    }

    // getters

    // public

    Button.prototype.toggle = function toggle() {
      var triggerChangeEvent = true;
      var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = $(this._element).find(Selector.INPUT)[0];

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

              if (activeElement) {
                $(activeElement).removeClass(ClassName.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
        }
      }

      this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName.ACTIVE);
      }
    };

    Button.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // static

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Button;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();

    var button = event.target;

    if (!$(button).hasClass(ClassName.BUTTON)) {
      button = $(button).closest(Selector.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector.BUTTON)[0];
    $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Button._jQueryInterface;
  $.fn[NAME].Constructor = Button;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Button._jQueryInterface;
  };

  return Button;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Carousel = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'carousel';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.carousel';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key
  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true
  };

  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean'
  };

  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };

  var Event = {
    SLIDE: 'slide' + EVENT_KEY,
    SLID: 'slid' + EVENT_KEY,
    KEYDOWN: 'keydown' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item'
  };

  var Selector = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = function () {
    function Carousel(element, config) {
      _classCallCheck(this, Carousel);

      this._items = null;
      this._interval = null;
      this._activeElement = null;

      this._isPaused = false;
      this._isSliding = false;

      this._config = this._getConfig(config);
      this._element = $(element)[0];
      this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];

      this._addEventListeners();
    }

    // getters

    // public

    Carousel.prototype.next = function next() {
      if (this._isSliding) {
        throw new Error('Carousel is sliding');
      }
      this._slide(Direction.NEXT);
    };

    Carousel.prototype.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      if (!document.hidden) {
        this.next();
      }
    };

    Carousel.prototype.prev = function prev() {
      if (this._isSliding) {
        throw new Error('Carousel is sliding');
      }
      this._slide(Direction.PREVIOUS);
    };

    Carousel.prototype.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if ($(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    Carousel.prototype.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    Carousel.prototype.to = function to(index) {
      var _this3 = this;

      this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event.SLID, function () {
          return _this3.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREVIOUS;

      this._slide(direction, this._items[index]);
    };

    Carousel.prototype.dispose = function dispose() {
      $(this._element).off(EVENT_KEY);
      $.removeData(this._element, DATA_KEY);

      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    };

    // private

    Carousel.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Carousel.prototype._addEventListeners = function _addEventListeners() {
      var _this4 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN, function (event) {
          return _this4._keydown(event);
        });
      }

      if (this._config.pause === 'hover' && !('ontouchstart' in document.documentElement)) {
        $(this._element).on(Event.MOUSEENTER, function (event) {
          return _this4.pause(event);
        }).on(Event.MOUSELEAVE, function (event) {
          return _this4.cycle(event);
        });
      }
    };

    Carousel.prototype._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;
        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
        default:
          return;
      }
    };

    Carousel.prototype._getItemIndex = function _getItemIndex(element) {
      this._items = $.makeArray($(element).parent().find(Selector.ITEM));
      return this._items.indexOf(element);
    };

    Carousel.prototype._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREVIOUS;
      var activeIndex = this._getItemIndex(activeElement);
      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREVIOUS ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;

      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    Carousel.prototype._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var slideEvent = $.Event(Event.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName
      });

      $(this._element).trigger(slideEvent);

      return slideEvent;
    };

    Carousel.prototype._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName.ACTIVE);
        }
      }
    };

    Carousel.prototype._slide = function _slide(direction, element) {
      var _this5 = this;

      var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];
      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var isCycling = Boolean(this._interval);

      var directionalClassName = void 0;
      var orderClassName = void 0;
      var eventDirectionName = void 0;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName.LEFT;
        orderClassName = ClassName.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName.RIGHT;
        orderClassName = ClassName.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName
      });

      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {

        $(nextElement).addClass(orderClassName);

        Util.reflow(nextElement);

        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);

        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + ' ' + orderClassName).addClass(ClassName.ACTIVE);

          $(activeElement).removeClass(ClassName.ACTIVE + ' ' + orderClassName + ' ' + directionalClassName);

          _this5._isSliding = false;

          setTimeout(function () {
            return $(_this5._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        $(activeElement).removeClass(ClassName.ACTIVE);
        $(nextElement).addClass(ClassName.ACTIVE);

        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    };

    // static

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = $.extend({}, Default, $(this).data());

        if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
          $.extend(_config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (data[action] === undefined) {
            throw new Error('No method named "' + action + '"');
          }
          data[action]();
        } else if (_config.interval) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
        return;
      }

      var config = $.extend({}, $(target).data(), $(this).data());
      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);

  $(window).on(Event.LOAD_DATA_API, function () {
    $(Selector.DATA_RIDE).each(function () {
      var $carousel = $(this);
      Carousel._jQueryInterface.call($carousel, $carousel.data());
    });
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Carousel._jQueryInterface;
  $.fn[NAME].Constructor = Carousel;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Carousel._jQueryInterface;
  };

  return Carousel;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'collapse';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;

  var Default = {
    toggle: true,
    parent: ''
  };

  var DefaultType = {
    toggle: 'boolean',
    parent: 'string'
  };

  var Event = {
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };

  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };

  var Selector = {
    ACTIVES: '.card > .show, .card > .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = function () {
    function Collapse(element, config) {
      _classCallCheck(this, Collapse);

      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    }

    // getters

    // public

    Collapse.prototype.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    Collapse.prototype.show = function show() {
      var _this6 = this;

      if (this._isTransitioning) {
        throw new Error('Collapse is transitioning');
      }

      if ($(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var actives = void 0;
      var activesData = void 0;

      if (this._parent) {
        actives = $.makeArray($(this._parent).find(Selector.ACTIVES));
        if (!actives.length) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).data(DATA_KEY);
        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event.SHOW);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives), 'hide');
        if (!activesData) {
          $(actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

      this._element.style[dimension] = 0;
      this._element.setAttribute('aria-expanded', true);

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this6._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);

        _this6._element.style[dimension] = '';

        _this6.setTransitioning(false);

        $(_this6._element).trigger(Event.SHOWN);
      };

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = 'scroll' + capitalizedDimension;

      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);

      this._element.style[dimension] = this._element[scrollSize] + 'px';
    };

    Collapse.prototype.hide = function hide() {
      var _this7 = this;

      if (this._isTransitioning) {
        throw new Error('Collapse is transitioning');
      }

      if (!$(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event.HIDE);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();
      var offsetDimension = dimension === Dimension.WIDTH ? 'offsetWidth' : 'offsetHeight';

      this._element.style[dimension] = this._element[offsetDimension] + 'px';

      Util.reflow(this._element);

      $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

      this._element.setAttribute('aria-expanded', false);

      if (this._triggerArray.length) {
        $(this._triggerArray).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this7.setTransitioning(false);
        $(_this7._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
      };

      this._element.style[dimension] = '';

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
    };

    Collapse.prototype.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    Collapse.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);

      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    };

    // private

    Collapse.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      config.toggle = Boolean(config.toggle); // coerce string values
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Collapse.prototype._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    Collapse.prototype._getParent = function _getParent() {
      var _this8 = this;

      var parent = $(this._config.parent)[0];
      var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';

      $(parent).find(selector).each(function (i, element) {
        _this8._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });

      return parent;
    };

    Collapse.prototype._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        var isOpen = $(element).hasClass(ClassName.SHOW);
        element.setAttribute('aria-expanded', isOpen);

        if (triggerArray.length) {
          $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
        }
      }
    };

    // static

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? $(selector)[0] : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);
        var _config = $.extend({}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Collapse;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    var target = Collapse._getTargetFromElement(this);
    var data = $(target).data(DATA_KEY);
    var config = data ? 'toggle' : $(this).data();

    Collapse._jQueryInterface.call($(target), config);
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Collapse._jQueryInterface;
  $.fn[NAME].Constructor = Collapse;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Dropdown = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'dropdown';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    FOCUSIN_DATA_API: 'focusin' + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    BACKDROP: 'dropdown-backdrop',
    DISABLED: 'disabled',
    SHOW: 'show'
  };

  var Selector = {
    BACKDROP: '.dropdown-backdrop',
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    ROLE_MENU: '[role="menu"]',
    ROLE_LISTBOX: '[role="listbox"]',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, ' + '[role="listbox"] li:not(.disabled) a'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = function () {
    function Dropdown(element) {
      _classCallCheck(this, Dropdown);

      this._element = element;

      this._addEventListeners();
    }

    // getters

    // public

    Dropdown.prototype.toggle = function toggle() {
      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return false;
      }

      var parent = Dropdown._getParentFromElement(this);
      var isActive = $(parent).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return false;
      }

      if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {

        // if mobile we use a backdrop because click events don't delegate
        var dropdown = document.createElement('div');
        dropdown.className = ClassName.BACKDROP;
        $(dropdown).insertBefore(this);
        $(dropdown).on('click', Dropdown._clearMenus);
      }

      var relatedTarget = {
        relatedTarget: this
      };
      var showEvent = $.Event(Event.SHOW, relatedTarget);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return false;
      }

      this.focus();
      this.setAttribute('aria-expanded', true);

      $(parent).toggleClass(ClassName.SHOW);
      $(parent).trigger($.Event(Event.SHOWN, relatedTarget));

      return false;
    };

    Dropdown.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._element).off(EVENT_KEY);
      this._element = null;
    };

    // private

    Dropdown.prototype._addEventListeners = function _addEventListeners() {
      $(this._element).on(Event.CLICK, this.toggle);
    };

    // static

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        if (!data) {
          data = new Dropdown(this);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config].call(this);
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && event.which === RIGHT_MOUSE_BUTTON_WHICH) {
        return;
      }

      var backdrop = $(Selector.BACKDROP)[0];
      if (backdrop) {
        backdrop.parentNode.removeChild(backdrop);
      }

      var toggles = $.makeArray($(Selector.DATA_TOGGLE));

      for (var i = 0; i < toggles.length; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (!$(parent).hasClass(ClassName.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'focusin') && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);
        if (hideEvent.isDefaultPrevented()) {
          continue;
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent = void 0;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = $(selector)[0];
      }

      return parent || element.parentNode;
    };

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      if (!/(38|40|27|32)/.test(event.which) || /input|textarea/i.test(event.target.tagName)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);
      var isActive = $(parent).hasClass(ClassName.SHOW);

      if (!isActive && event.which !== ESCAPE_KEYCODE || isActive && event.which === ESCAPE_KEYCODE) {

        if (event.which === ESCAPE_KEYCODE) {
          var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = $(parent).find(Selector.VISIBLE_ITEMS).get();

      if (!items.length) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Dropdown;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_MENU, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_LISTBOX, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + ' ' + Event.FOCUSIN_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Dropdown.prototype.toggle).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    e.stopPropagation();
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Dropdown._jQueryInterface;
  $.fn[NAME].Constructor = Dropdown;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Modal = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'modal';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;
  var BACKDROP_TRANSITION_DURATION = 150;
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };

  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    RESIZE: 'resize' + EVENT_KEY,
    CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
    KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
    MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
    MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = function () {
    function Modal(element, config) {
      _classCallCheck(this, Modal);

      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = $(element).find(Selector.DIALOG)[0];
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth = 0;
    }

    // getters

    // public

    Modal.prototype.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    Modal.prototype.show = function show(relatedTarget) {
      var _this9 = this;

      if (this._isTransitioning) {
        throw new Error('Modal is transitioning');
      }

      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }
      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });

      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();
      this._setScrollbar();

      $(document.body).addClass(ClassName.OPEN);

      this._setEscapeEvent();
      this._setResizeEvent();

      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this9.hide(event);
      });

      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $(_this9._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this9._element)) {
            _this9._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this9._showElement(relatedTarget);
      });
    };

    Modal.prototype.hide = function hide(event) {
      var _this10 = this;

      if (event) {
        event.preventDefault();
      }

      if (this._isTransitioning) {
        throw new Error('Modal is transitioning');
      }

      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);
      if (transition) {
        this._isTransitioning = true;
      }

      var hideEvent = $.Event(Event.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;

      this._setEscapeEvent();
      this._setResizeEvent();

      $(document).off(Event.FOCUSIN);

      $(this._element).removeClass(ClassName.SHOW);

      $(this._element).off(Event.CLICK_DISMISS);
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this10._hideModal(event);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideModal();
      }
    };

    Modal.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);

      $(window, document, this._element, this._backdrop).off(EVENT_KEY);

      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._originalBodyPadding = null;
      this._scrollbarWidth = null;
    };

    // private

    Modal.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Modal.prototype._showElement = function _showElement(relatedTarget) {
      var _this11 = this;

      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // don't move modals dom position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.scrollTop = 0;

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this11._config.focus) {
          _this11._element.focus();
        }
        _this11._isTransitioning = false;
        $(_this11._element).trigger(shownEvent);
      };

      if (transition) {
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    };

    Modal.prototype._enforceFocus = function _enforceFocus() {
      var _this12 = this;

      $(document).off(Event.FOCUSIN) // guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        if (document !== event.target && _this12._element !== event.target && !$(_this12._element).has(event.target).length) {
          _this12._element.focus();
        }
      });
    };

    Modal.prototype._setEscapeEvent = function _setEscapeEvent() {
      var _this13 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            _this13.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    Modal.prototype._setResizeEvent = function _setResizeEvent() {
      var _this14 = this;

      if (this._isShown) {
        $(window).on(Event.RESIZE, function (event) {
          return _this14._handleUpdate(event);
        });
      } else {
        $(window).off(Event.RESIZE);
      }
    };

    Modal.prototype._hideModal = function _hideModal() {
      var _this15 = this;

      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', 'true');
      this._isTransitioning = false;
      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName.OPEN);
        _this15._resetAdjustments();
        _this15._resetScrollbar();
        $(_this15._element).trigger(Event.HIDDEN);
      });
    };

    Modal.prototype._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    Modal.prototype._showBackdrop = function _showBackdrop(callback) {
      var _this16 = this;

      var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        var doAnimate = Util.supportsTransitionEnd() && animate;

        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          $(this._backdrop).addClass(animate);
        }

        $(this._backdrop).appendTo(document.body);

        $(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (_this16._ignoreBackdropClick) {
            _this16._ignoreBackdropClick = false;
            return;
          }
          if (event.target !== event.currentTarget) {
            return;
          }
          if (_this16._config.backdrop === 'static') {
            _this16._element.focus();
          } else {
            _this16.hide();
          }
        });

        if (doAnimate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!doAnimate) {
          callback();
          return;
        }

        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function callbackRemove() {
          _this16._removeBackdrop();
          if (callback) {
            callback();
          }
        };

        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    };

    // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------

    Modal.prototype._handleUpdate = function _handleUpdate() {
      this._adjustDialog();
    };

    Modal.prototype._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + 'px';
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + 'px';
      }
    };

    Modal.prototype._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    Modal.prototype._checkScrollbar = function _checkScrollbar() {
      this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    Modal.prototype._setScrollbar = function _setScrollbar() {
      var bodyPadding = parseInt($(Selector.FIXED_CONTENT).css('padding-right') || 0, 10);

      this._originalBodyPadding = document.body.style.paddingRight || '';

      if (this._isBodyOverflowing) {
        document.body.style.paddingRight = bodyPadding + this._scrollbarWidth + 'px';
      }
    };

    Modal.prototype._resetScrollbar = function _resetScrollbar() {
      document.body.style.paddingRight = this._originalBodyPadding;
    };

    Modal.prototype._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    };

    // static

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = $.extend({}, Modal.Default, $(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Modal;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this17 = this;

    var target = void 0;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = $(selector)[0];
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($(_this17).is(':visible')) {
          _this17.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Modal._jQueryInterface;
  $.fn[NAME].Constructor = Modal;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var ScrollSpy = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'scrollspy';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.scrollspy';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Default = {
    offset: 10,
    method: 'auto',
    target: ''
  };

  var DefaultType = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };

  var Event = {
    ACTIVATE: 'activate' + EVENT_KEY,
    SCROLL: 'scroll' + EVENT_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    NAV_LINK: 'nav-link',
    NAV: 'nav',
    ACTIVE: 'active'
  };

  var Selector = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    LIST_ITEM: '.list-item',
    LI: 'li',
    LI_DROPDOWN: 'li.dropdown',
    NAV_LINKS: '.nav-link',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };

  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = function () {
    function ScrollSpy(element, config) {
      var _this18 = this;

      _classCallCheck(this, ScrollSpy);

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;

      $(this._scrollElement).on(Event.SCROLL, function (event) {
        return _this18._process(event);
      });

      this.refresh();
      this._process();
    }

    // getters

    // public

    ScrollSpy.prototype.refresh = function refresh() {
      var _this19 = this;

      var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;

      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;

      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;

      this._offsets = [];
      this._targets = [];

      this._scrollHeight = this._getScrollHeight();

      var targets = $.makeArray($(this._selector));

      targets.map(function (element) {
        var target = void 0;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = $(targetSelector)[0];
        }

        if (target && (target.offsetWidth || target.offsetHeight)) {
          // todo (fat): remove sketch reliance on jQuery position/offset
          return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
        }
        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this19._offsets.push(item[0]);
        _this19._targets.push(item[1]);
      });
    };

    ScrollSpy.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._scrollElement).off(EVENT_KEY);

      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    };

    // private

    ScrollSpy.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');
        if (!id) {
          id = Util.getUID(NAME);
          $(config.target).attr('id', id);
        }
        config.target = '#' + id;
      }

      Util.typeCheckConfig(NAME, config, DefaultType);

      return config;
    };

    ScrollSpy.prototype._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    ScrollSpy.prototype._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    ScrollSpy.prototype._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight;
    };

    ScrollSpy.prototype._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;
      var scrollHeight = this._getScrollHeight();
      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }
        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;
        this._clear();
        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    ScrollSpy.prototype._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',');
      queries = queries.map(function (selector) {
        return selector + '[data-target="' + target + '"],' + (selector + '[href="' + target + '"]');
      });

      var $link = $(queries.join(','));

      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        $link.addClass(ClassName.ACTIVE);
      } else {
        // todo (fat) this is kinda sus...
        // recursively add actives to tested nav-links
        $link.parents(Selector.LI).find('> ' + Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
      }

      $(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      });
    };

    ScrollSpy.prototype._clear = function _clear() {
      $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
    };

    // static

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return ScrollSpy;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(window).on(Event.LOAD_DATA_API, function () {
    var scrollSpys = $.makeArray($(Selector.DATA_SPY));

    for (var i = scrollSpys.length; i--;) {
      var $spy = $(scrollSpys[i]);
      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = ScrollSpy._jQueryInterface;
  $.fn[NAME].Constructor = ScrollSpy;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollSpy._jQueryInterface;
  };

  return ScrollSpy;
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tab = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tab';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };

  var Selector = {
    A: 'a',
    LI: 'li',
    DROPDOWN: '.dropdown',
    LIST: 'ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)',
    FADE_CHILD: '> .nav-item .fade, > .fade',
    ACTIVE: '.active',
    ACTIVE_CHILD: '> .nav-item > .active, > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = function () {
    function Tab(element) {
      _classCallCheck(this, Tab);

      this._element = element;
    }

    // getters

    // public

    Tab.prototype.show = function show() {
      var _this20 = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var target = void 0;
      var previous = void 0;
      var listElement = $(this._element).closest(Selector.LIST)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        previous = $.makeArray($(listElement).find(Selector.ACTIVE));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event.HIDE, {
        relatedTarget: this._element
      });

      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = $(selector)[0];
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event.HIDDEN, {
          relatedTarget: _this20._element
        });

        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: previous
        });

        $(previous).trigger(hiddenEvent);
        $(_this20._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    Tab.prototype.dispose = function dispose() {
      $.removeClass(this._element, DATA_KEY);
      this._element = null;
    };

    // private

    Tab.prototype._activate = function _activate(element, container, callback) {
      var _this21 = this;

      var active = $(container).find(Selector.ACTIVE_CHILD)[0];
      var isTransitioning = callback && Util.supportsTransitionEnd() && (active && $(active).hasClass(ClassName.FADE) || Boolean($(container).find(Selector.FADE_CHILD)[0]));

      var complete = function complete() {
        return _this21._transitionComplete(element, active, isTransitioning, callback);
      };

      if (active && isTransitioning) {
        $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      if (active) {
        $(active).removeClass(ClassName.SHOW);
      }
    };

    Tab.prototype._transitionComplete = function _transitionComplete(element, active, isTransitioning, callback) {
      if (active) {
        $(active).removeClass(ClassName.ACTIVE);

        var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName.ACTIVE);
        }

        active.setAttribute('aria-expanded', false);
      }

      $(element).addClass(ClassName.ACTIVE);
      element.setAttribute('aria-expanded', true);

      if (isTransitioning) {
        Util.reflow(element);
        $(element).addClass(ClassName.SHOW);
      } else {
        $(element).removeClass(ClassName.FADE);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {

        var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
        if (dropdownElement) {
          $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    };

    // static

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Tab;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    Tab._jQueryInterface.call($(this), 'show');
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tab._jQueryInterface;
  $.fn[NAME].Constructor = Tab;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };

  return Tab;
}(jQuery);

/* global Tether */

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

//var Tooltip = function ($) {
//
//  /**
//   * Check for Tether dependency
//   * Tether - http://tether.io/
//   */
//  if (typeof Tether === 'undefined') {
//    throw new Error('Bootstrap tooltips require Tether (http://tether.io/)');
//  }
//
//  /**
//   * ------------------------------------------------------------------------
//   * Constants
//   * ------------------------------------------------------------------------
//   */
//
//  var NAME = 'tooltip';
//  var VERSION = '4.0.0-alpha.6';
//  var DATA_KEY = 'bs.tooltip';
//  var EVENT_KEY = '.' + DATA_KEY;
//  var JQUERY_NO_CONFLICT = $.fn[NAME];
//  var TRANSITION_DURATION = 150;
//  var CLASS_PREFIX = 'bs-tether';
//
//  var Default = {
//    animation: true,
//    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-inner"></div></div>',
//    trigger: 'hover focus',
//    title: '',
//    delay: 0,
//    html: false,
//    selector: false,
//    placement: 'top',
//    offset: '0 0',
//    constraints: [],
//    container: false
//  };
//
//  var DefaultType = {
//    animation: 'boolean',
//    template: 'string',
//    title: '(string|element|function)',
//    trigger: 'string',
//    delay: '(number|object)',
//    html: 'boolean',
//    selector: '(string|boolean)',
//    placement: '(string|function)',
//    offset: 'string',
//    constraints: 'array',
//    container: '(string|element|boolean)'
//  };
//
//  var AttachmentMap = {
//    TOP: 'bottom center',
//    RIGHT: 'middle left',
//    BOTTOM: 'top center',
//    LEFT: 'middle right'
//  };
//
//  var HoverState = {
//    SHOW: 'show',
//    OUT: 'out'
//  };
//
//  var Event = {
//    HIDE: 'hide' + EVENT_KEY,
//    HIDDEN: 'hidden' + EVENT_KEY,
//    SHOW: 'show' + EVENT_KEY,
//    SHOWN: 'shown' + EVENT_KEY,
//    INSERTED: 'inserted' + EVENT_KEY,
//    CLICK: 'click' + EVENT_KEY,
//    FOCUSIN: 'focusin' + EVENT_KEY,
//    FOCUSOUT: 'focusout' + EVENT_KEY,
//    MOUSEENTER: 'mouseenter' + EVENT_KEY,
//    MOUSELEAVE: 'mouseleave' + EVENT_KEY
//  };
//
//  var ClassName = {
//    FADE: 'fade',
//    SHOW: 'show'
//  };
//
//  var Selector = {
//    TOOLTIP: '.tooltip',
//    TOOLTIP_INNER: '.tooltip-inner'
//  };
//
//  var TetherClass = {
//    element: false,
//    enabled: false
//  };
//
//  var Trigger = {
//    HOVER: 'hover',
//    FOCUS: 'focus',
//    CLICK: 'click',
//    MANUAL: 'manual'
//  };
//
//  /**
//   * ------------------------------------------------------------------------
//   * Class Definition
//   * ------------------------------------------------------------------------
//   */
//
//  var Tooltip = function () {
//    function Tooltip(element, config) {
//      _classCallCheck(this, Tooltip);
//
//      // private
//      this._isEnabled = true;
//      this._timeout = 0;
//      this._hoverState = '';
//      this._activeTrigger = {};
//      this._isTransitioning = false;
//      this._tether = null;
//
//      // protected
//      this.element = element;
//      this.config = this._getConfig(config);
//      this.tip = null;
//
//      this._setListeners();
//    }
//
//    // getters
//
//    // public
//
//    Tooltip.prototype.enable = function enable() {
//      this._isEnabled = true;
//    };
//
//    Tooltip.prototype.disable = function disable() {
//      this._isEnabled = false;
//    };
//
//    Tooltip.prototype.toggleEnabled = function toggleEnabled() {
//      this._isEnabled = !this._isEnabled;
//    };
//
//    Tooltip.prototype.toggle = function toggle(event) {
//      if (event) {
//        var dataKey = this.constructor.DATA_KEY;
//        var context = $(event.currentTarget).data(dataKey);
//
//        if (!context) {
//          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
//          $(event.currentTarget).data(dataKey, context);
//        }
//
//        context._activeTrigger.click = !context._activeTrigger.click;
//
//        if (context._isWithActiveTrigger()) {
//          context._enter(null, context);
//        } else {
//          context._leave(null, context);
//        }
//      } else {
//
//        if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
//          this._leave(null, this);
//          return;
//        }
//
//        this._enter(null, this);
//      }
//    };
//
//    Tooltip.prototype.dispose = function dispose() {
//      clearTimeout(this._timeout);
//
//      this.cleanupTether();
//
//      $.removeData(this.element, this.constructor.DATA_KEY);
//
//      $(this.element).off(this.constructor.EVENT_KEY);
//      $(this.element).closest('.modal').off('hide.bs.modal');
//
//      if (this.tip) {
//        $(this.tip).remove();
//      }
//
//      this._isEnabled = null;
//      this._timeout = null;
//      this._hoverState = null;
//      this._activeTrigger = null;
//      this._tether = null;
//
//      this.element = null;
//      this.config = null;
//      this.tip = null;
//    };
//
//    Tooltip.prototype.show = function show() {
//      var _this22 = this;
//
//      if ($(this.element).css('display') === 'none') {
//        throw new Error('Please use show on visible elements');
//      }
//
//      var showEvent = $.Event(this.constructor.Event.SHOW);
//      if (this.isWithContent() && this._isEnabled) {
//        if (this._isTransitioning) {
//          throw new Error('Tooltip is transitioning');
//        }
//        $(this.element).trigger(showEvent);
//
//        var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);
//
//        if (showEvent.isDefaultPrevented() || !isInTheDom) {
//          return;
//        }
//
//        var tip = this.getTipElement();
//        var tipId = Util.getUID(this.constructor.NAME);
//
//        tip.setAttribute('id', tipId);
//        this.element.setAttribute('aria-describedby', tipId);
//
//        this.setContent();
//
//        if (this.config.animation) {
//          $(tip).addClass(ClassName.FADE);
//        }
//
//        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;
//
//        var attachment = this._getAttachment(placement);
//
//        var container = this.config.container === false ? document.body : $(this.config.container);
//
//        $(tip).data(this.constructor.DATA_KEY, this).appendTo(container);
//
//        $(this.element).trigger(this.constructor.Event.INSERTED);
//
//        this._tether = new Tether({
//          attachment: attachment,
//          element: tip,
//          target: this.element,
//          classes: TetherClass,
//          classPrefix: CLASS_PREFIX,
//          offset: this.config.offset,
//          constraints: this.config.constraints,
//          addTargetClasses: false
//        });
//
//        Util.reflow(tip);
//        this._tether.position();
//
//        $(tip).addClass(ClassName.SHOW);
//
//        var complete = function complete() {
//          var prevHoverState = _this22._hoverState;
//          _this22._hoverState = null;
//          _this22._isTransitioning = false;
//
//          $(_this22.element).trigger(_this22.constructor.Event.SHOWN);
//
//          if (prevHoverState === HoverState.OUT) {
//            _this22._leave(null, _this22);
//          }
//        };
//
//        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
//          this._isTransitioning = true;
//          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
//          return;
//        }
//
//        complete();
//      }
//    };
//
//    Tooltip.prototype.hide = function hide(callback) {
//      var _this23 = this;
//
//      var tip = this.getTipElement();
//      var hideEvent = $.Event(this.constructor.Event.HIDE);
//      if (this._isTransitioning) {
//        throw new Error('Tooltip is transitioning');
//      }
//      var complete = function complete() {
//        if (_this23._hoverState !== HoverState.SHOW && tip.parentNode) {
//          tip.parentNode.removeChild(tip);
//        }
//
//        _this23.element.removeAttribute('aria-describedby');
//        $(_this23.element).trigger(_this23.constructor.Event.HIDDEN);
//        _this23._isTransitioning = false;
//        _this23.cleanupTether();
//
//        if (callback) {
//          callback();
//        }
//      };
//
//      $(this.element).trigger(hideEvent);
//
//      if (hideEvent.isDefaultPrevented()) {
//        return;
//      }
//
//      $(tip).removeClass(ClassName.SHOW);
//
//      this._activeTrigger[Trigger.CLICK] = false;
//      this._activeTrigger[Trigger.FOCUS] = false;
//      this._activeTrigger[Trigger.HOVER] = false;
//
//      if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
//        this._isTransitioning = true;
//        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
//      } else {
//        complete();
//      }
//
//      this._hoverState = '';
//    };
//
//    // protected
//
//    Tooltip.prototype.isWithContent = function isWithContent() {
//      return Boolean(this.getTitle());
//    };
//
//    Tooltip.prototype.getTipElement = function getTipElement() {
//      return this.tip = this.tip || $(this.config.template)[0];
//    };
//
//    Tooltip.prototype.setContent = function setContent() {
//      var $tip = $(this.getTipElement());
//
//      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
//
//      $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
//
//      this.cleanupTether();
//    };
//
//    Tooltip.prototype.setElementContent = function setElementContent($element, content) {
//      var html = this.config.html;
//      if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && (content.nodeType || content.jquery)) {
//        // content is a DOM node or a jQuery
//        if (html) {
//          if (!$(content).parent().is($element)) {
//            $element.empty().append(content);
//          }
//        } else {
//          $element.text($(content).text());
//        }
//      } else {
//        $element[html ? 'html' : 'text'](content);
//      }
//    };
//
//    Tooltip.prototype.getTitle = function getTitle() {
//      var title = this.element.getAttribute('data-original-title');
//
//      if (!title) {
//        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
//      }
//
//      return title;
//    };
//
//    Tooltip.prototype.cleanupTether = function cleanupTether() {
//      if (this._tether) {
//        this._tether.destroy();
//      }
//    };
//
//    // private
//
//    Tooltip.prototype._getAttachment = function _getAttachment(placement) {
//      return AttachmentMap[placement.toUpperCase()];
//    };
//
//    Tooltip.prototype._setListeners = function _setListeners() {
//      var _this24 = this;
//
//      var triggers = this.config.trigger.split(' ');
//
//      triggers.forEach(function (trigger) {
//        if (trigger === 'click') {
//          $(_this24.element).on(_this24.constructor.Event.CLICK, _this24.config.selector, function (event) {
//            return _this24.toggle(event);
//          });
//        } else if (trigger !== Trigger.MANUAL) {
//          var eventIn = trigger === Trigger.HOVER ? _this24.constructor.Event.MOUSEENTER : _this24.constructor.Event.FOCUSIN;
//          var eventOut = trigger === Trigger.HOVER ? _this24.constructor.Event.MOUSELEAVE : _this24.constructor.Event.FOCUSOUT;
//
//          $(_this24.element).on(eventIn, _this24.config.selector, function (event) {
//            return _this24._enter(event);
//          }).on(eventOut, _this24.config.selector, function (event) {
//            return _this24._leave(event);
//          });
//        }
//
//        $(_this24.element).closest('.modal').on('hide.bs.modal', function () {
//          return _this24.hide();
//        });
//      });
//
//      if (this.config.selector) {
//        this.config = $.extend({}, this.config, {
//          trigger: 'manual',
//          selector: ''
//        });
//      } else {
//        this._fixTitle();
//      }
//    };
//
//    Tooltip.prototype._fixTitle = function _fixTitle() {
//      var titleType = _typeof(this.element.getAttribute('data-original-title'));
//      if (this.element.getAttribute('title') || titleType !== 'string') {
//        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
//        this.element.setAttribute('title', '');
//      }
//    };
//
//    Tooltip.prototype._enter = function _enter(event, context) {
//      var dataKey = this.constructor.DATA_KEY;
//
//      context = context || $(event.currentTarget).data(dataKey);
//
//      if (!context) {
//        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
//        $(event.currentTarget).data(dataKey, context);
//      }
//
//      if (event) {
//        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
//      }
//
//      if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
//        context._hoverState = HoverState.SHOW;
//        return;
//      }
//
//      clearTimeout(context._timeout);
//
//      context._hoverState = HoverState.SHOW;
//
//      if (!context.config.delay || !context.config.delay.show) {
//        context.show();
//        return;
//      }
//
//      context._timeout = setTimeout(function () {
//        if (context._hoverState === HoverState.SHOW) {
//          context.show();
//        }
//      }, context.config.delay.show);
//    };
//
//    Tooltip.prototype._leave = function _leave(event, context) {
//      var dataKey = this.constructor.DATA_KEY;
//
//      context = context || $(event.currentTarget).data(dataKey);
//
//      if (!context) {
//        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
//        $(event.currentTarget).data(dataKey, context);
//      }
//
//      if (event) {
//        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
//      }
//
//      if (context._isWithActiveTrigger()) {
//        return;
//      }
//
//      clearTimeout(context._timeout);
//
//      context._hoverState = HoverState.OUT;
//
//      if (!context.config.delay || !context.config.delay.hide) {
//        context.hide();
//        return;
//      }
//
//      context._timeout = setTimeout(function () {
//        if (context._hoverState === HoverState.OUT) {
//          context.hide();
//        }
//      }, context.config.delay.hide);
//    };
//
//    Tooltip.prototype._isWithActiveTrigger = function _isWithActiveTrigger() {
//      for (var trigger in this._activeTrigger) {
//        if (this._activeTrigger[trigger]) {
//          return true;
//        }
//      }
//
//      return false;
//    };
//
//    Tooltip.prototype._getConfig = function _getConfig(config) {
//      config = $.extend({}, this.constructor.Default, $(this.element).data(), config);
//
//      if (config.delay && typeof config.delay === 'number') {
//        config.delay = {
//          show: config.delay,
//          hide: config.delay
//        };
//      }
//
//      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
//
//      return config;
//    };
//
//    Tooltip.prototype._getDelegateConfig = function _getDelegateConfig() {
//      var config = {};
//
//      if (this.config) {
//        for (var key in this.config) {
//          if (this.constructor.Default[key] !== this.config[key]) {
//            config[key] = this.config[key];
//          }
//        }
//      }
//
//      return config;
//    };
//
//    // static
//
//    Tooltip._jQueryInterface = function _jQueryInterface(config) {
//      return this.each(function () {
//        var data = $(this).data(DATA_KEY);
//        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;
//
//        if (!data && /dispose|hide/.test(config)) {
//          return;
//        }
//
//        if (!data) {
//          data = new Tooltip(this, _config);
//          $(this).data(DATA_KEY, data);
//        }
//
//        if (typeof config === 'string') {
//          if (data[config] === undefined) {
//            throw new Error('No method named "' + config + '"');
//          }
//          data[config]();
//        }
//      });
//    };
//
//    _createClass(Tooltip, null, [{
//      key: 'VERSION',
//      get: function get() {
//        return VERSION;
//      }
//    }, {
//      key: 'Default',
//      get: function get() {
//        return Default;
//      }
//    }, {
//      key: 'NAME',
//      get: function get() {
//        return NAME;
//      }
//    }, {
//      key: 'DATA_KEY',
//      get: function get() {
//        return DATA_KEY;
//      }
//    }, {
//      key: 'Event',
//      get: function get() {
//        return Event;
//      }
//    }, {
//      key: 'EVENT_KEY',
//      get: function get() {
//        return EVENT_KEY;
//      }
//    }, {
//      key: 'DefaultType',
//      get: function get() {
//        return DefaultType;
//      }
//    }]);
//
//    return Tooltip;
//  }();
//
//  /**
//   * ------------------------------------------------------------------------
//   * jQuery
//   * ------------------------------------------------------------------------
//   */
//
//  $.fn[NAME] = Tooltip._jQueryInterface;
//  $.fn[NAME].Constructor = Tooltip;
//  $.fn[NAME].noConflict = function () {
//    $.fn[NAME] = JQUERY_NO_CONFLICT;
//    return Tooltip._jQueryInterface;
//  };
//
//  return Tooltip;
//}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

//var Popover = function ($) {
//
//  /**
//   * ------------------------------------------------------------------------
//   * Constants
//   * ------------------------------------------------------------------------
//   */
//
//  var NAME = 'popover';
//  var VERSION = '4.0.0-alpha.6';
//  var DATA_KEY = 'bs.popover';
//  var EVENT_KEY = '.' + DATA_KEY;
//  var JQUERY_NO_CONFLICT = $.fn[NAME];
//
//  var Default = $.extend({}, Tooltip.Default, {
//    placement: 'right',
//    trigger: 'click',
//    content: '',
//    template: '<div class="popover" role="tooltip">' + '<h3 class="popover-title"></h3>' + '<div class="popover-content"></div></div>'
//  });
//
//  var DefaultType = $.extend({}, Tooltip.DefaultType, {
//    content: '(string|element|function)'
//  });
//
//  var ClassName = {
//    FADE: 'fade',
//    SHOW: 'show'
//  };
//
//  var Selector = {
//    TITLE: '.popover-title',
//    CONTENT: '.popover-content'
//  };
//
//  var Event = {
//    HIDE: 'hide' + EVENT_KEY,
//    HIDDEN: 'hidden' + EVENT_KEY,
//    SHOW: 'show' + EVENT_KEY,
//    SHOWN: 'shown' + EVENT_KEY,
//    INSERTED: 'inserted' + EVENT_KEY,
//    CLICK: 'click' + EVENT_KEY,
//    FOCUSIN: 'focusin' + EVENT_KEY,
//    FOCUSOUT: 'focusout' + EVENT_KEY,
//    MOUSEENTER: 'mouseenter' + EVENT_KEY,
//    MOUSELEAVE: 'mouseleave' + EVENT_KEY
//  };
//
//  /**
//   * ------------------------------------------------------------------------
//   * Class Definition
//   * ------------------------------------------------------------------------
//   */
//
//  var Popover = function (_Tooltip) {
//    _inherits(Popover, _Tooltip);
//
//    function Popover() {
//      _classCallCheck(this, Popover);
//
//      return _possibleConstructorReturn(this, _Tooltip.apply(this, arguments));
//    }
//
//    // overrides
//
//    Popover.prototype.isWithContent = function isWithContent() {
//      return this.getTitle() || this._getContent();
//    };
//
//    Popover.prototype.getTipElement = function getTipElement() {
//      return this.tip = this.tip || $(this.config.template)[0];
//    };
//
//    Popover.prototype.setContent = function setContent() {
//      var $tip = $(this.getTipElement());
//
//      // we use append for html objects to maintain js events
//      this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
//      this.setElementContent($tip.find(Selector.CONTENT), this._getContent());
//
//      $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
//
//      this.cleanupTether();
//    };
//
//    // private
//
//    Popover.prototype._getContent = function _getContent() {
//      return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
//    };
//
//    // static
//
//    Popover._jQueryInterface = function _jQueryInterface(config) {
//      return this.each(function () {
//        var data = $(this).data(DATA_KEY);
//        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;
//
//        if (!data && /destroy|hide/.test(config)) {
//          return;
//        }
//
//        if (!data) {
//          data = new Popover(this, _config);
//          $(this).data(DATA_KEY, data);
//        }
//
//        if (typeof config === 'string') {
//          if (data[config] === undefined) {
//            throw new Error('No method named "' + config + '"');
//          }
//          data[config]();
//        }
//      });
//    };
//
//    _createClass(Popover, null, [{
//      key: 'VERSION',
//
//
//      // getters
//
//      get: function get() {
//        return VERSION;
//      }
//    }, {
//      key: 'Default',
//      get: function get() {
//        return Default;
//      }
//    }, {
//      key: 'NAME',
//      get: function get() {
//        return NAME;
//      }
//    }, {
//      key: 'DATA_KEY',
//      get: function get() {
//        return DATA_KEY;
//      }
//    }, {
//      key: 'Event',
//      get: function get() {
//        return Event;
//      }
//    }, {
//      key: 'EVENT_KEY',
//      get: function get() {
//        return EVENT_KEY;
//      }
//    }, {
//      key: 'DefaultType',
//      get: function get() {
//        return DefaultType;
//      }
//    }]);
//
//    return Popover;
//  }(Tooltip);
//
//  /**
//   * ------------------------------------------------------------------------
//   * jQuery
//   * ------------------------------------------------------------------------
//   */
//
//  $.fn[NAME] = Popover._jQueryInterface;
//  $.fn[NAME].Constructor = Popover;
//  $.fn[NAME].noConflict = function () {
//    $.fn[NAME] = JQUERY_NO_CONFLICT;
//    return Popover._jQueryInterface;
//  };
//
//  return Popover;
//}(jQuery);

}();


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* Credit card UI related JS */

// Generated by CoffeeScript 1.8.0

/*
jQuery Credit Card Validator 1.0

Copyright 2012-2015 Pawel Decowski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
 */

(function() {
  var $,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $ = jQuery;

  $.fn.validateCreditCard = function(callback, options) {
    var bind, card, card_type, card_types, get_card_type, is_valid_length, is_valid_luhn, normalize, validate, validate_number, _i, _len, _ref;
    card_types = [
      {
        name: 'amex',
        pattern: /^3[47]/,
        valid_length: [15]
      }, {
        name: 'diners_club_carte_blanche',
        pattern: /^30[0-5]/,
        valid_length: [14]
      }, {
        name: 'diners_club_international',
        pattern: /^36/,
        valid_length: [14]
      }, {
        name: 'jcb',
        pattern: /^35(2[89]|[3-8][0-9])/,
        valid_length: [16]
      }, {
        name: 'laser',
        pattern: /^(6304|670[69]|6771)/,
        valid_length: [16, 17, 18, 19]
      }, {
        name: 'visa_electron',
        pattern: /^(4026|417500|4508|4844|491(3|7))/,
        valid_length: [16]
      }, {
        name: 'visa',
        pattern: /^4/,
        valid_length: [16]
      }, {
        name: 'mastercard',
        pattern: /^5[1-5]/,
        valid_length: [16]
      }, {
        name: 'maestro',
        pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
        valid_length: [12, 13, 14, 15, 16, 17, 18, 19]
      }, {
        name: 'discover',
        pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
        valid_length: [16]
      }
    ];
    bind = false;
    if (callback) {
      if (typeof callback === 'object') {
        options = callback;
        bind = false;
        callback = null;
      } else if (typeof callback === 'function') {
        bind = true;
      }
    }
    if (options == null) {
      options = {};
    }
    if (options.accept == null) {
      options.accept = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = card_types.length; _i < _len; _i++) {
          card = card_types[_i];
          _results.push(card.name);
        }
        return _results;
      })();
    }
    _ref = options.accept;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      card_type = _ref[_i];
      if (__indexOf.call((function() {
        var _j, _len1, _results;
        _results = [];
        for (_j = 0, _len1 = card_types.length; _j < _len1; _j++) {
          card = card_types[_j];
          _results.push(card.name);
        }
        return _results;
      })(), card_type) < 0) {
        throw "Credit card type '" + card_type + "' is not supported";
      }
    }
    get_card_type = function(number) {
      var _j, _len1, _ref1;
      _ref1 = (function() {
        var _k, _len1, _ref1, _results;
        _results = [];
        for (_k = 0, _len1 = card_types.length; _k < _len1; _k++) {
          card = card_types[_k];
          if (_ref1 = card.name, __indexOf.call(options.accept, _ref1) >= 0) {
            _results.push(card);
          }
        }
        return _results;
      })();
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        card_type = _ref1[_j];
        if (number.match(card_type.pattern)) {
          return card_type;
        }
      }
      return null;
    };
    is_valid_luhn = function(number) {
      var digit, n, sum, _j, _len1, _ref1;
      sum = 0;
      _ref1 = number.split('').reverse();
      for (n = _j = 0, _len1 = _ref1.length; _j < _len1; n = ++_j) {
        digit = _ref1[n];
        digit = +digit;
        if (n % 2) {
          digit *= 2;
          if (digit < 10) {
            sum += digit;
          } else {
            sum += digit - 9;
          }
        } else {
          sum += digit;
        }
      }
      return sum % 10 === 0;
    };
    is_valid_length = function(number, card_type) {
      var _ref1;
      return _ref1 = number.length, __indexOf.call(card_type.valid_length, _ref1) >= 0;
    };
    validate_number = (function(_this) {
      return function(number) {
        var length_valid, luhn_valid;
        card_type = get_card_type(number);
        luhn_valid = false;
        length_valid = false;
        if (card_type != null) {
          luhn_valid = is_valid_luhn(number);
          length_valid = is_valid_length(number, card_type);
        }
        return {
          card_type: card_type,
          valid: luhn_valid && length_valid,
          luhn_valid: luhn_valid,
          length_valid: length_valid
        };
      };
    })(this);
    validate = (function(_this) {
      return function() {
        var number;
        number = normalize($(_this).val());
        return validate_number(number);
      };
    })(this);
    normalize = function(number) {
      return number.replace(/[ -]/g, '');
    };
    if (!bind) {
      return validate();
    }
    this.on('input.jccv', (function(_this) {
      return function() {
        $(_this).off('keyup.jccv');
        return callback.call(_this, validate());
      };
    })(this));
    this.on('keyup.jccv', (function(_this) {
      return function() {
        return callback.call(_this, validate());
      };
    })(this));
    callback.call(this, validate());
    return this;
  };
}).call(this);


$(document).ready(function(){
    //display the correct credit card image
    var creditCard = $('[data-input-type="creditcard"]');
    if (creditCard.length){
        creditCard.validateCreditCard(function(result) {
            var $allCards = $('.visa, .mastercard, .amex, .dc');

            if(result.card_type !== null){
                var type = result.card_type.name;
                switch (type)
                {
                  case "visa":
                    $(".visa").addClass("active").siblings('img').removeClass('active').addClass('inactive');
                    break;

                  case "mastercard":
                    $(".mastercard").addClass("active").siblings('img').removeClass('active').addClass('inactive');
                    break;

                  case "amex":
                    $(".amex").addClass("active").siblings('img').removeClass('active').addClass('inactive');
                    break;

                  case "diners_club_international":
                    $(".dc").addClass("active").siblings('img').removeClass('active').addClass('inactive');
                    break;

                  case "diners_club_carte_blanche":
                    $(".dc").addClass("active").siblings('img').removeClass('active').addClass('inactive');
                    break;

	                default:
	                $('img').removeClass('active');
                  $allCards.removeClass('inactive');
	                //don't do anything
                }
            }else{
			    	$('img').removeClass('active');
            $allCards.removeClass('inactive');
			    }
        });
    }
//Toggle tooltips
	$('.tooltips-target').
		on('mouseenter',function(){
			$(this).siblings('.tooltips-container').css('opacity',1)
		}).
		on('mouseleave',function(){
			$(this).siblings('.tooltips-container').css('opacity',0)
		}).
    on('click', function () {
      var $tooltip = $(this).siblings('.tooltips-container');
      if ($tooltip.length && parseInt($tooltip.css('opacity')) === 0) {
        $tooltip.css('opacity', 1);
      } else {
        $tooltip.css('opacity', 0);
      }
    });
//Toggle password
	$('.show-password-target').on('click',function(){
		if($('[data-password-mask]').attr('type') == 'text'){
			$('[data-password-mask]').attr('type','password');
		}else{
			$('[data-password-mask]').attr('type','text');
		}

	})
})


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* Foxtel now floating label */

$(document).ready(function(){

  $('form[data-animation="float-label"]').find('input, textarea').on('keyup blur focus', function (e) {
    
    var $this = $(this),
        label = $this.prev('label');

      if (e.type === 'focus') {
        label.addClass('active highlight');
      } else if (e.type === 'blur') {
        if( $this.val() === '' ) {
          label.removeClass('active highlight'); 
        } else {
          label.removeClass('highlight');   
        }   
      }
  });

  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
  });
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* Foxtel now progress bar */



/**************** status bar *****************************************/
$(document).ready(function(){

  $progressBarComp = $(".foxtel-now-progress-bar-cont");
  if($progressBarComp.length==0){
    return;
  }

  //detect data-default-step and set status value when page load
  var dataDefaultStep = $progressBarComp.attr('data-default-step');

  if(typeof dataDefaultStep != 'undefined' && dataDefaultStep != null && dataDefaultStep != ''){console.log(dataDefaultStep);

    switch(dataDefaultStep) {
      case '1':
        $('#progress-bar').val('0');
        $progressBarComp.find('div.first').addClass('border-change').find('p').css({'font-weight':'bold','opacity':'1'});
        break;
      case '2':
        $('#progress-bar').val('34');
        $progressBarComp.find('div.first').addClass('border-change');
        $progressBarComp.find('div.second').addClass('border-change').find('p').css({'font-weight':'bold','opacity':'1'});
        break;
      case '3':
        $('#progress-bar').val('67');
        $progressBarComp.find('div.first').addClass('border-change');
        $progressBarComp.find('div.second').addClass('border-change');
        $progressBarComp.find('div.third').addClass('border-change').find('p').css({'font-weight':'bold','opacity':'1'});
        break;
      case '4':
        $('#progress-bar').val('100');
        $progressBarComp.find('div.first').addClass('border-change');
        $progressBarComp.find('div.second').addClass('border-change');
        $progressBarComp.find('div.third').addClass('border-change');
        $progressBarComp.find('div.fourth').addClass('border-change').find('p').css({'font-weight':'bold','opacity':'1'});
        break;
      default:
        $('#progress-bar').val('34');
        $progressBarComp.find('div.first').addClass('border-change');
        $progressBarComp.find('div.second').addClass('border-change').find('p').css({'font-weight':'bold','opacity':'1'});
        break;  
    }
  }else{
    $('#progress-bar').val('34');
    $progressBarComp.find('div.first').addClass('border-change');
    $progressBarComp.find('div.second').addClass('border-change').find('p').css({'font-weight':'bold','opacity':'1'});
  }

  //click event
  $progressBarComp.on('click',".foxtel-now-progress-bar-dot-wrapper",function(){
        var href = $(this).data('status-link');
        if(href && href.length>0){
            Foxtel.navigator(href);
        }
  })
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* Foxtel now form validation */

//Make the first letter uppercase, leave the remaining in lower case
$(document).on('change',"[data-name-formatter]",function(){
    var $this = $(this);
    var value = $this.val();

    if(!value){
        return;
    }

    var newNameString = "";
    //split by space
    var strArrayBySpace = value.split(" ");
    for(var i=0;i<strArrayBySpace.length;i++){
        var tmpStr = strArrayBySpace[i];
        newNameString += tmpStr.charAt(0).toUpperCase() + tmpStr.substr(1).toLowerCase();
        if(i <strArrayBySpace.length-1){
            newNameString+=" ";
        }
    }


    //rest and then split by -

    value = newNameString;
    newNameString = "";

    var strArrayBySpace = value.split("-");
    for(var i=0;i<strArrayBySpace.length;i++){
        var tmpStr = strArrayBySpace[i];
        newNameString += tmpStr.charAt(0).toUpperCase() + tmpStr.substr(1).toLowerCase();
        if(i <strArrayBySpace.length-1){
            newNameString+="-";
        }
    }

    $this.val(newNameString);
});

$(document).on('keyup',"[data-ccexpiry-formatter]",function(e){
    var $this = $(this);
    var value = $this.val();

    if(!value || e.keyCode == 8){
        return;
    }
    var replacedValue = value.replace(/-/g, "");
    var replacedLength = replacedValue.length;
    var newValue;
    if (replacedLength > 1) {
        newValue = replacedValue.slice(0, 2) + "-" + replacedValue.slice(2);
    }
    else {
        newValue = replacedValue;
    }
    $this.val(newValue);
});

$(document).on('keyup',"[data-ccnumber-formatter]",function(e){
    if($(this).val().length == 4 && e.keyCode != 8) {
        $(this).val($(this).val()+" ");
    }
    else {
        var str = $(this).val();
        if((str.length - str.lastIndexOf(" "))%5 == 0 && str.length > 4 && e.keyCode != 8){
            $(this).val(str+" ");
        }
    }
});

$(function () {
  $('[data-dob-formatter]').on('keyup', function (event) {
    var value = $(this).val();

    if(!value || event.keyCode === 8){
        return;
    }

    var replacedValue = value.replace(/-/g, "");
    var replacedLength = replacedValue.length;
    var newValue;

    // Ensure the format dd-mm-yyyy is maintained.
    if (replacedLength > 1) {
      newValue = replacedValue.slice(0, 2)
        + "-" + replacedValue.slice(2, 4);

      if (replacedLength > 3) {
        newValue += "-" + replacedValue.slice(4);
      }
    } else {
      newValue = replacedValue;
    }

    // Update the value if there is a change to make.
    if (value !== newValue) {
      // Store current position in variables.
      var start = this.selectionStart;
      var end = this.selectionEnd;

      // If the next character is a delimiter, increment the position.
      var nextChar = newValue.slice(start, start + 1);
      if (nextChar === '-') {
        start += 1;
        end += 1;
      }

      $(this).val(newValue);

      // Restore position from variables.
      this.setSelectionRange(start, end);
    }
  });

  $('[data-dob-formatter]').on('keydown', function (event) {
    var value = $(this).val();

    var replacedValue = value.replace(/-/g, "");
    var replacedLength = replacedValue.length;

    var controlKeys = [
      37, 38, 39, 40, 8, 9
    ];

    // Do nothing if the key pressed is not a number.
    if (!((event.keyCode >= 48 && event.keyCode <= 57)
      || (event.keyCode >= 96 && event.keyCode <= 105)
      // Allow control keys
      || _(controlKeys).contains(event.keyCode))) {
      return false;
    }

    // Do nothing if we've reached the right length.
    if (replacedLength > 7 && !_(controlKeys).contains(event.keyCode)) {
      return false;
    }
  });
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

$(document).ready(function(){
    topnavMobileFunc.dropdown();

    var displayNameFunc = new DisplayNameFunc();

    displayNameFunc.init("logged-in");

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 3;
    var navbarHeight = $('.foxtel-header-breadcrumb-wrapper').outerHeight();
    if ($('.foxtel-header-breadcrumb-wrapper').length) {
        $("body").css("padding-top", navbarHeight);
    }

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.foxtel-header-breadcrumb-wrapper').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.foxtel-header-breadcrumb-wrapper').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }
});

var DisplayNameFunc = window.DisplayNameFunc || function () {
        var displayName = "";
        var loginNameDisplayObj_desktop = $("#gheader a[for='loginBtn_desktop']");
        var loginNameDisplayObj_mobile_log_in = $("#gheader li[for='loginBtn_mobile']");
        var loginNameDisplayObj_mobile_logged_in = $("#gheader li[for='logged_in_mobile']");
        var logoutDivObj = $("#gheader div.foxtel-header__right__login__wrapper");

        this.init = function (logoutObj) {
            if($("#" + logoutObj) && $("#" + logoutObj).length > 0){
                $("#" + logoutObj).submit(cleanUpCookie);
                $("#" + logoutObj + "-m").submit(cleanUpCookie);
            }
            checkLogged();
        };

        var checkLogged = function () {

            var isFoxtelPlay = function () {
                return location.href.indexOf("/foxtelplay/") > -1;
            };

            var servletURL = "/bin/foxtel/display-name.json";
            if (document.cookie && document.cookie.indexOf("DProPCookie") >= 0) {
                servletURL = "/bin/secure/display-name.json";
            }

            $.ajax({
                url: servletURL,
                dataType: 'json',
                type: 'GET',
                jsonp: false,
                success: function (data) {
                    if (typeof data === "undefined" || typeof data.first_name === "undefined") {
                        toggleLogIn("", false);
                        window.userObj = new Object();
                    } else if (isFoxtelPlay() === data.isPlayRole || !isFoxtelPlay() === !data.isPlayRole) {
                        // begin trim string length > 14 characters
                        $usrName = data.first_name.trim();
                        if ($usrName.length > 14) {
                            $usrName = $usrName.slice(0, 14) + "....";
                        }
                        // end trim string
                        $("#account-login-text").html($usrName);
                        //$("#account-login-text").html(data.first_name);
                        if ($(".customer-greeting-name-js").length > 0) {
                            $(".customer-greeting-name-js").html(" " + data.first_name);
                        }
                        displayName = data.first_name;
                        toggleLogIn($usrName, true);
                    } else {
                        toggleLogIn("", false);
                        window.userObj = new Object();
                    }
                },
                error: function () {
                    toggleLogIn("", false);
                },
                complete: function () {
                }
            });
        };

        var toggleLogIn = function (username, loggedIn) {
            if (username.length > 7) {
                username = username.slice(0, 7) + "...";
            }
            username = username || "";
            loggedIn = loggedIn || false;

            if(loggedIn){
                loginNameDisplayObj_desktop.removeClass("foxtel-header__right__login");
                loginNameDisplayObj_desktop.addClass("foxtel-header__right__logged-in");
                loginNameDisplayObj_desktop.unbind("click");

                loginNameDisplayObj_mobile_log_in.hide();
                loginNameDisplayObj_mobile_logged_in.show();

                loginNameDisplayObj_desktop.text(username);
                logoutDivObj.addClass("active");
            }else{
                loginNameDisplayObj_desktop.removeClass("foxtel-header__right__logged-in");
                loginNameDisplayObj_desktop.addClass("foxtel-header__right__login");

                loginNameDisplayObj_desktop.text(loginNameDisplayObj_desktop.attr("loginTxt"));
                loginNameDisplayObj_desktop.click(function(){
                    window.location = $(this).data("login-url");
                });

                loginNameDisplayObj_mobile_log_in.show();
                loginNameDisplayObj_mobile_logged_in.hide();

                logoutDivObj.removeClass("active");
            }
        };

        var cleanUpCookie = function () {
            if (accountData.user.account) {
                var foxtelaccountid = accountData.user.account.accountNumber;
                FOX.storage.removeData('data' + foxtelaccountid);
            }
            return true;
        };


    };

var topnavMobileFunc = {
    dropdown: function(){
        var $topnavMobileMore = $('#topnavMobileMore');
        var $topnavMobileMoreDropdown = $('#topnavMobileMoreDropdown');

        $topnavMobileMore.on("click touch", function(e) {
            e.stopPropagation();
            $topnavMobileMoreDropdown.toggle();
        });
        $topnavMobileMoreDropdown.on("click touchstart", function(e) {
            e.stopPropagation();
        });
        $(document).on("click touchstart", function(e) {
            $topnavMobileMoreDropdown.hide();
        });
    }
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

$(function () {
  var $header = $('.foxtel-now-header');

  if ($header.length) {
    // HeaderView
    // ----------

    var HeaderView = Backbone.View.extend({
      initialize: function () {
        $(window).on('click', this.closeSettingsDropdown.bind(this));
        this.model.on('fetched:userInfo', this.handleUserInfo.bind(this));
        this.$dropdown = this.$el.find('.dropdown');
        this.state = {
          open: false
        };
      },

      events: {
        'click .settings-icon': 'handleSettingsClick'
      },

      // Event handlers
      // --------------

      handleSettingsClick: function (event) {
        var $icon = $(event.currentTarget);

        this.$dropdown.toggleClass('open');
        this.state.open = !this.state.open;
      },

      closeSettingsDropdown: function (event) {
        var $target = $(event.target);
        var $settings = this.$el.find('.settings');

        if (this.state.open && !$settings.is($target) && $settings.has($target).length === 0) {
          event.preventDefault();
          this.state.open = false;
          this.$dropdown.removeClass('open');
        }
      },

      handleUserInfo: function () {
        var $logoLink = this.$el.find('.logo a');

        // Set the logged-in status of the header.
        if (this.model.get('loggedIn')) {
          this.$el.addClass('is-logged-in');
          // Update the username in settings.
          this.$el.find('.settings .username').html('Hi, ' + this.model.get('name'));
          // Update logo link
          $logoLink.attr('href', $logoLink.data('logged-in-url'));
        } else {
          if (this.model.onLoginPage()) {
            this.$el.addClass('log-in');
          }
          this.$el.addClass('container');
        }
        // Show the header.
        this.$el.addClass('is-loaded');
      }
    });

    // Header
    // ------

    var Header = Backbone.Model.extend({
      userInfoEndpoint: '/bin/foxtel/userInfo',

      getUserInfo: function () {
        $.get(this.userInfoEndpoint, this.handleUserInfoResponse.bind(this));
      },

      onLoginPage: function () {
        return window.location.href.match(/\/now\/login\.html/);
      },

      // Event handlers
      // --------------

      handleUserInfoResponse: function (response) {
        if (response.user && response.user.account && response.user.account.accountNumber) {
          this.set({
            name: response.user.account.firstName,
            loggedIn: true
          });
          FOX.context.broadcast('ANALYTICS_USER_LOGGED_IN', {
            userId: response.user.account.accountNumber
          });
          if(!response.user.account.accountStatus){
            $('.menu-item.f-title').remove();
          }
        }
        else {
          FOX.context.broadcast('ANALYTICS_USER_NOT_LOGGED_IN');
        }
        this.trigger('fetched:userInfo');
      }
    });

    var header = new Header();

    new HeaderView({
      el: $header,
      model: header
    });

    header.getUserInfo();
  }
});


/***/ }),
/* 11 */
/***/ (function(module, exports) {

$(document).ready(function () {
  var $infoBarTemplates = $('.foxtel-now-info-bar-template');

  if ($infoBarTemplates.length > 0) {
    var InfoBarView = Backbone.View.extend({
      initialize: function (options) {
        var self = this;

        self.template = Handlebars.compile(options.$template.html());
        self.slideDuration = 150; // ms
        FOX.context.subscribe('HIDE_BANNER', function (data) {
          if (data.name === self.model.get('name')) {
            self.handleClose();
          }
        });
      },

      events: {
        'show': 'handleShow',
        'click .foxtel-now-info-bar__close': 'handleClose'
      },

      render: function () {
        // Collect the data to be rendered.
        var data = this.getTemplateData()
        // Use Handlebars to render the template.
        if (this.template && typeof this.template === 'function') {
          this.$el.html(this.template(data))
        }
        return this
      },

      // Retrieve data to be rendered.
      getTemplateData: function () {
        return this.model && this.model.toJSON() || {};
      },

      // Event Handlers
      // --------------

      handleShow: function () {
        this.$el.hide().slideDown({
          duration: this.slideDuration
        });
      },

      handleClose: function () {
        var self = this;

        self.$el.slideUp(function () {
          self.$el.remove();
        })
      }
    });

    var bannerViewList = [];

    FOX.context.subscribe('SHOW_BANNER', function (data) {
      var $template = $('#foxtel-now-info-bar-template--' + data.name);
      var $infoBar = $('#foxtel-now-info-bar-container--' + data.name + ' .foxtel-now-info-bar');

      // Instantiate if no info bar of this name already exists and there is a
      // template to render.
      if (!$infoBar.length && $template.length) {
        var view = new InfoBarView({
          model: new Backbone.Model(data),
          $template: $template
        }).render();

        $('#foxtel-now-info-bar-container--' + data.name).append(view.$el);
        view.$el.trigger('show');

        bannerViewList.push(view);
      }
    });

    FOX.context.subscribe('HIDE_ALL_BANNER', function () {
        _.each(bannerViewList,function(item){
            if(item){
                item.handleClose();
            }
        });
    });


  }
});


/***/ }),
/* 12 */
/***/ (function(module, exports) {

$(document).ready(function () {

    function Utils() {}
    Utils.prototype = {
        constructor: Utils,
        isElementInView: function (element, fullyInView) {
            var pageTop = $(window).scrollTop()+350;
            var pageBottom = pageTop + $(window).height();
            var elementTop = $(element).offset().top;
            var elementBottom = elementTop + $(element).height();

            if (fullyInView === true) {
                return ((pageTop < elementTop) && (pageBottom > elementBottom));
            } else {
                return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
            }
        }
    };
    var Utils = new Utils();

    var inView = function() {
        //remove all active
        for (var i=0; i<$(".iq-nav").children('a').length;i++) {
            var $elem = $(".iq-nav").children('a')[i];
            if ($elem.hasAttribute("class")) {
            	$elem.removeAttribute("class");
            }
        }
        for (var i=0; i<$(".iq-nav").children('a').length;i++) {
            var isVisible = Utils.isElementInView($('#anchor_loop_' + i), false);
            if (isVisible) {
                $('a[href="#anchor_loop_' + i + '"]').addClass('active');
                break;
            } else if (i >= $(".iq-nav").children('a').length-1) {//active the last one if all else is invisible
				$('a[href="#anchor_loop_' + i + '"]').addClass('active');
            }
        }
    }

    var arr = jQuery(".channel-pack-combos");
    var max = Math.max.apply(Math, arr.map(
               function(index, el) {
                   return jQuery(el).height();
               }
           ));
          if(arr){
           arr.map(function(index, el) {
               jQuery(el).css("height", Math.ceil(max));
           });
    }

    var ancnav = $('.iq-nav');
    if (ancnav.length > 0) {
        var currentScroll = 0;
        var initAnchorTop = ancnav.offset().top;
        var previousTop = 0;

        $(window).scroll(function() {
            var nextScroll = $(this).scrollTop();
            // WHEN SCROLLED UP TO THE ANCHOR NAV POSITION
            if($(this).scrollTop() > ancnav.offset().top) {
                // WHEN SCROLL DOWNWARDS
                if (nextScroll > currentScroll){
                    ancnav.addClass('iq-nav-position__fixed');
                }
            } else {
                // WHEN SCROLL UPWARDS
                if (nextScroll < currentScroll){
                    ancnav.removeClass('iq-nav-position__fixed');
                }
            }
            // SET CURRENT AS LAST SCROLL
            currentScroll = nextScroll;
            inView();
        });

        // SMOOTH SCROLLING FOR ANCHOR NAVIGATION
        $(document).on('click', '.iq-nav a', function(event){
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top - 50
            }, 300);
        });

         /* the following code is used to shrink the Foxtel Store image, the really wide one, from both side when tablets or mobile hit. */
        jQuery(".inclusions-cmp-img__overflow")
            .css("height",  jQuery(".inclusions-cmp-img__overflow img").height())
                .addClass("inclusions-cmp-img__overflow-shrink");
    }
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// JavaScript for manage my package page
// -------------------------------------

$(function () {
  var onManageYourPackagePage = window.location.pathname.match(/manage-your-package/);
  var $cart = $('#cartCollection-container');

  if (onManageYourPackagePage && $cart.length) {
    var ManageYourPackageView = Backbone.View.extend({
      initialize: function () {
        FOX.context.subscribe("updated:cart", this.handleCartUpdated.bind(this));
        this.buttonContainerSelector = '.foxtel-now-jumbotron--shopping-cart__summary__checkout';
        this.$submitButton = $(this.buttonContainerSelector + ' button');
        this.$submitButton.removeClass('disabled');
      },

      events: {
        'click .foxtel-now-jumbotron--shopping-cart__summary button': 'handleSubmit'
      },

      // Event handlers
      // --------------

      handleSubmit: function (event) {
        event.preventDefault();
        var $submitButton = $(event.currentTarget);
        var $buttonContainer = $submitButton.parents(this.buttonContainerSelector);

        $buttonContainer.css('min-width', $buttonContainer.width());
        $submitButton.addClass('is-loading');

        // If the cart is empty redirect the user to cancel subscription
        if (Foxtel.ShopCartManager.isEmpty()) {
          window.location = '/now/my-account/deactivate.html';
          return false;
        // Otherwise, make the update call.
        } else if(Foxtel.ShopCartManager.hasPremiumPackAndNoStarter()) {
            var buttonWithoutStarterUrl = $(this).data("button-without-starter-url");
            Foxtel.navigator(buttonWithoutStarterUrl);
        } else {

            var self = this;
            $.ajax({
                url: '/bin/foxtel/now/updatecart',
                data:JSON.stringify({}),
                type:"POST",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success:function(data){
                    self.handleUpdateSuccess(data);
                },
                error:function(){
                    self.handleUpdateError(data);
                }
             });
        }
        // Prevent default shop handlers from running.
        return false;
      },

      handleUpdateSuccess: function (response) {
        var $submitButton = $(this.buttonContainerSelector + ' button');
        var $buttonContainer = $submitButton.parents(this.buttonContainerSelector);

        if (response.status === 'ERROR') {
          this.genericError();
        } else {
          FOX.context.broadcast('SHOW_BANNER', {
            name: 'PACKAGE_UPDATE_SUCCESS',
            closeEnabled: true
          });
        }

        $submitButton.removeClass('is-loading').addClass('is-valid');
        Utilities.setUpdatePackage();
        setTimeout(function () {
          window.location = '/now/my-account.html';
        }, 2000);
      },

      handleUpdateError: function (xhr, status, error) {
        var $submitButton = $('.foxtel-now-jumbotron--shopping-cart__summary button');
        var $buttonContainer = $submitButton.parents(this.buttonContainerSelector);

        this.genericError();
        $submitButton.removeClass('is-loading');
        $buttonContainer.css('min-width', 'initial');
      },

      handleCartUpdated: function (data) {
        var $submitButton = $(this.buttonContainerSelector + ' button');

        if (this.loaded) {
            if (Foxtel.ShopCartManager.isEmpty()) {
              $submitButton.html(this.$submitButton.data('button-cancel-label'));
              $submitButton.removeClass('disabled');
            } else {
              $submitButton.html(this.$submitButton.data('button-edit-label'));
            }
        } else {
            this.loaded = true;
        }
      },

      // Private
      // -------

      genericError: function () {
        FOX.context.broadcast('SHOW_BANNER', {
          name: 'PACKAGE_UPDATE_ERROR',
          closeEnabled: true
        });
      }
    });

    new ManageYourPackageView({
      el: $cart
    });
  }
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/* Multi Tab List Of Images */
$(document).ready(function(){

            var applyMaxHeight = function() {

                var arr = jQuery(".content-container .combo-content__right__row__cell");
                var max = Math.max.apply(Math, arr.map(
                    function(index, el) {
                        return jQuery(el).height();
                    }
                ));
                arr.map(function(index, el) {
                    jQuery(el).css("height", Math.ceil(max));
                });

            }
            applyMaxHeight();
            /*
             * Replace all SVG images with inline SVG
             */
            jQuery('img').filter(function() {
                return this.src.match(/.*\.svg$/);
            }).each(function(){
                var $img = jQuery(this);
                var imgID = $img.attr('id');
                var imgClass = $img.attr('class');
                var imgURL = $img.attr('src');

                jQuery.get(imgURL, function(data) {
                    // Get the SVG tag, ignore the rest
                    var $svg = jQuery(data).find('svg');

                    // Add replaced image's ID to the new SVG
                    if(typeof imgID !== 'undefined') {
                        $svg = $svg.attr('id', imgID);
                    }
                    // Add replaced image's classes to the new SVG
                    if(typeof imgClass !== 'undefined') {
                        $svg = $svg.attr('class', imgClass+' replaced-svg');
                    }

                    // Remove any invalid XML tags as per http://validator.w3.org
                    $svg = $svg.removeAttr('xmlns:a');

                    // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
                    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                    }

                    // Replace image with new SVG
                    $img.replaceWith($svg);

                }, 'xml');

            });

            /* show more */
           	jQuery(".show-more-combo-content").on("click", function() {
                if ($(".active .combo-content__right__row__cell:hidden").length <=0) {
                    jQuery(".combo-content__right__row__cell").css('display', '')
           	        jQuery(".show-more-combo-content").html("show more&#133;")
           	    } else {
                    jQuery(".combo-content__right__row__cell").css("display", "inline-block");
           	        jQuery(".show-more-combo-content").html("show less&#133;")
           	    }
                applyMaxHeight();
            });

            /* left tab button */
            jQuery(".combo-content-btn").on("click", function() {
                jQuery(".combo-content-btn").removeClass("active");
                var loop = jQuery(this).data("loop");
                jQuery(this).addClass("active");
                jQuery(".combo-content__right__table").removeClass("active").hide();
                jQuery(".combo-content-tab-" + loop).addClass("active").show();

                jQuery(".combo-content__right__row__cell").css('display', '');
                jQuery(".show-more-combo-content").html("show more&#133;")
                applyMaxHeight();
            });
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * This javascript is for view my bills in my account
 */

$(document).ready(function(){

    if($('#foxtel-now-cancel-membership-form').length < 1){
        return;
    }

    Utilities.selectDropDownText();

    $formDirectDebit = $('#foxtel-now-cancel-membership-form');
    $submitBtn = $('#cancel-member-form-submit');

    $submitBtn.on('click', function (e) {
        e.preventDefault();

        //hide notification bar
        FOX.context.broadcast('HIDE_BANNER', {
          name: 'KENAN_ERROR',
          closeEnabled: true
        });

        $this = $(this);

        //validated form?
        if(!$formDirectDebit.parsley().validate()){
            return;
        }

        $this.attr("disabled","disabled");
        $this.addClass('is-loading');

        var postDataObj = {
            reason: {code:"",text:""},
            device: {code:"",text:""},
            extraComment: ""
        }

        postDataObj.reason.code = parseInt($("[data-id='deactiveReason']").attr('data-code'));
        postDataObj.reason.text = $("[data-id='deactiveReason']").attr('data-text');
        postDataObj.device.code = $("[data-id='deviceUsed']").attr('data-code');
        postDataObj.device.text = $("[data-id='deviceUsed']").attr('data-text');
        postDataObj.extraComment = $("[data-id='extraComment']").val();

        var $complete = function(){
            $this.removeAttr('disabled').removeClass('is-loading');
        }

        var $callback = function(data){
            if ((typeof data !== 'undefined') || !($.isEmptyObject(data))) {
               Foxtel.navigator($this.data("redirect-url"));
            }

            //notification bar
            FOX.context.broadcast('SHOW_BANNER', {
              name: 'KENAN_ERROR',
              closeEnabled: true
            });
        };

        Utilities.getPostData(JSON.stringify(postDataObj),"/bin/foxtel/now/my-account/deactivate",$callback,$complete);
    });
});


/***/ }),
/* 16 */
/***/ (function(module, exports) {


/**
 * These helper functions are for myaccount home page
 */

/**
 * showState:
 * 1: show disabled icon & link
 * 2: show active icon & link
 */
Handlebars.registerHelper("myAccountHomeUserPanelPermission",function(secondaryAllowed,inactiveAllowed,accountStatus,options) {

    var showState = -1;

    // hide if active && inactive not allowed
    if( !accountStatus.activated && inactiveAllowed === 'NO'){
        accountStatus.showState = 1;
        return;
    }

    // secondary account
    if(!accountStatus.primary && secondaryAllowed ==='NO'){
        accountStatus.showState = 1;
        return;
    }

    accountStatus.showState = 2;
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * This file is for my account home page
 */

$(document).ready(function () {
    var $myAccountHomePanel = $('#divMyAccountPanel');
    if($myAccountHomePanel.length == 0){
        return ;
    }

    FOX.dyc.subscribeEvent("modelAccountSummary",function(data){

        //free trial accounts
        if(data.accountStatus.freeTrial){
            var then = moment(data.accountStatus.freeTrialEndDate,"YYYY-MM-DD");
            var now = moment();
            if(now > then){
                FOX.context.broadcast('SHOW_BANNER', {
                  name: 'FREE_TRIAL_MY_ACCOUNT_HOME',
                  freeTrialEndDate: moment(data.accountStatus.freeTrialEndDate).format('DD MMMM, YYYY'),
                  closeEnabled: true
                });
            }
        }

        //eligible for free trail
        if(data.accountStatus.eligibleFreeTrial && !data.accountStatus.activated && !data.accountStatus.pendingDeactivated){
            FOX.context.broadcast('SHOW_BANNER', {
              name: 'ELIGIBLE_FREE_TRIAL_MY_ACCOUNT_HOME',
              isAndroid:true,
              closeEnabled: true
            });
        }

        //secondary account
        if(!data.accountStatus.primary){
            FOX.context.broadcast('SHOW_BANNER', {
              name: 'SECONDARY_ACCOUNT_MY_ACCOUNT_HOME',
              closeEnabled: true
            });
            $("#divCancelMemberShipLink .foxtel-now-btn--ghost").addClass('disabled');
            $("#divChangeMyPackageButton .foxtel-now-btn").addClass('disabled');
        }

        //deactivated account
        if(!data.accountStatus.activated){
            FOX.context.broadcast('SHOW_BANNER', {
              name: 'DEACTIVATED_ACCOUNT_MY_ACCOUNT_HOME',
              closeEnabled: true
            });
        }

        if(data.accountStatus.pendingDeactivated) {
            $("#divCancelMemberShipLink .foxtel-now-btn--ghost").show().addClass('disabled');
            $("#divChangeMyPackageButton .foxtel-now-btn").addClass('disabled');
        }

        //pending deactivation account
        if(data.accountStatus.pendingDeactivated && data.accountStatus.activated){
            var nextBillingDateMinusOneDay = moment(data.accountStatus.nextBillingDate).add(-1,'days');
            FOX.context.broadcast('SHOW_BANNER', {
              name: 'PENDING_DEACTIVATION_MY_ACCOUNT_HOME',
              nextBillingDate:nextBillingDateMinusOneDay.format('DD MMMM, YYYY'),
              closeEnabled: true
            });
        }

        //active primary account
        if(!data.accountStatus.pendingDeactivated && data.accountStatus.activated && data.accountStatus.primary){
            FOX.context.broadcast('SHOW_BANNER', {
                name: 'CART_PREFILLED',
                closeEnabled: true
            });
        }

        //show change my package button for activate accounts
        if(data.accountStatus.activated){
            $("#divChangeMyPackageButton").removeClass("hidden");
            $("#divChangeMyPackageButton button").click(function(e){
                e.preventDefault();
                Foxtel.navigator($(this).data('url'));
            });
        }

        //show update banner
        if(Utilities.getUpdatePackage()){
            FOX.context.broadcast('SHOW_BANNER', {
              name: 'PACKAGE_UPDATE_SUCCESS',
              closeEnabled: true
            });
            Utilities.removeUpdatePackageCookie();
         }

    });


});


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * This file is for my account login page
 */


$(document).ready(function () {

});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// My account edit page JavaScript
// -------------------------------

$(function () {
  var $form = $('#my-profile-edit');

  if ($form.length) {

    // UpdateDetailsView
    // -----------------

    var UpdateDetailsView = Backbone.View.extend({
      initialize: function () {
        this.$el.parsley();
        this.$submitButton = this.$el.find('#update-details-button');
        this.model.on('fetched:details', this.handleFetchedDetails.bind(this));
        this.model.on('completed:update', this.handleUpdateComplete.bind(this));
        this.$emailField = this.$el.find("[data-id='email']");
        this.$emailField.parsley().subscribe('parsley:field:error', this.handleEmailError);
        this.$emailField.parsley().subscribe('parsley:field:success', this.handleEmailValid);
        this.$emailField.data('unchanged', true);
        this.$dobField = this.$el.find("[data-id='dateOfBirth']");
        this.$dobField.parsley().subscribe('parsley:field:error', this.handleDobError);
        this.$dobField.parsley().subscribe('parsley:field:success', this.handleDobValid);
        this.model.getProfile();

        $(".dropdown-menu").on('click touchend', '.dropdown-item', function(e){
          $(this).parents(".dropdown").find('.btn').find('span').text($(this).text());
          $(this).parents(".dropdown").find('.btn').attr('data-text',$(this).text());
          $(this).parents(".dropdown").find('.btn').attr('data-code',$(this).attr('value'));
        })
      },

      handleEmailValid: function () {
        FOX.context.broadcast('HIDE_BANNER', {
          name: 'EMAIL_TAKEN'
        });
      },

      handleEmailError: function ($parsleyField) {
        var assertName = $parsleyField.validationResult[0].assert.name;

        if (assertName === "verifyemail") {
          FOX.context.broadcast('SHOW_BANNER', {
            name: 'EMAIL_TAKEN',
            email: $parsleyField.$element.val(),
            closeEnabled: true
          });
        }
      },

      handleDobValid: function () {
        FOX.context.broadcast('HIDE_BANNER', {
          name: 'UNDER_18'
        });
      },

      handleDobError: function ($parsleyField) {
        var assertName = $parsleyField.validationResult[0].assert.name;

        if (assertName === "overeighteennow") {
          FOX.context.broadcast('SHOW_BANNER', {
            name: 'UNDER_18',
            closeEnabled: true
          });
        }
      },

      events: {
        'click #update-details-button': 'handleSubmit',
        'keyup [data-id="email"]': 'handleEmailTyping'
      },

      // Event handlers
      // --------------

      handleFetchedDetails: function () {
        var self = this;
        var formData = self.model.get('prefillFormData');

        _(formData).chain().keys().each(function (key) {
          var $field = $('[data-id="' + key + '"]');

          switch ($field.prop('tagName')) {
            case 'BUTTON': // dropdown
                if(''!= formData[key]){
                    $field.find('span').html(formData[key]);
                }
            case 'INPUT':
              var textTypes = ['text', 'tel'];
              if (_(textTypes).contains($field.attr('type'))) {
                // Prefill the value.
                $field.val(formData[key])
                  // Add active value to label to show populated state.
                      .siblings('label').addClass('active');
              } else if ($field.attr('type') === 'checkbox') {
                  if (!!formData[key]) {
                      $field.click();
                  }
              }
          }
        })
      },

      handleSubmit: function (event) {
        var personalDetailsData = this.$el.serializeFormJSON();

        if(!this.$el.parsley().validate()){
          return;
        }

        // Add 'select' element value for state.
        personalDetailsData.state = this.$el.find('[data-id="state"]').data('code');

        // Mark request as pending.
        this.$submitButton.addClass('is-loading');
        // Trigger the update details request.
        this.model.updateDetails(personalDetailsData);
      },

      handleUpdateComplete: function (event) {
        var self = this;

        // Update button state to show successful update.
        self.$submitButton.removeClass('is-loading').addClass('is-valid');
        setTimeout(function () {
          self.$submitButton.removeClass('is-valid');
        }, 1000);
      },

      handleEmailTyping: function (event) {
        // Only check if the email is registered if the user changes it.
        var prefillFormData = this.model.get('prefillFormData');
        var $emailField = $(event.currentTarget)
        var value = $emailField.val();

        $emailField.data('unchanged', false);
        if (prefillFormData && value === prefillFormData.email) {
          $emailField.data('unchanged', true);
        }
      }
    });

    var UpdateDetails = Backbone.Model.extend({
      getDetailsEndpoint: '/bin/secure/my-account/profile-settings',
      updateDetailsEndpoint: '/bin/secure/now/accountProfileSubmit',

      updateDetails: function (formData) {
        this.updateAllDetails(formData);
      },

      getProfile: function () {
        var self = this;
        $.ajax({
            type: "POST",
            url: this.getDetailsEndpoint,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data) {
              self.handleGetDetailsResponse(data);
              return;
            }

          });
      },

      // Event handlers
      // --------------

      handleGetDetailsResponse: function (response) {
        // Store non-form data in the model.
        this.setNonFormData(response);

        // Hide default addresses
        var defaultAddresses = [
          '5 THOMAS HOLT DRIVE',
          '1 FOXTEL NOW ROAD'
        ];
        for (var defaultAddressIx in defaultAddresses) {
            var defaultAddress = defaultAddresses[defaultAddressIx];
            var billAddress = response.kBillAddress1;
            if(billAddress){
                var trimmedBillAddress = billAddress.trim().toUpperCase();
                if (defaultAddress == trimmedBillAddress) {
                    response.kBillAddress1 = "";
                    response.kBillCity = "";
                    response.kBillState = "";
                    break;
                }
            }
        }

        // Prepare data for the html form.
        var dobValue = response.kDOB;
        if(dobValue){
            dobValue = dobValue.replace(/\//g, '-');
        }

        var formData =  {
          primary: response.roles.primary,
          firstName: response.iFirstName,
          lastName: response.iLastName,
          email: response.kCustEmail,
          password: 'password',
          mobile: response.iContactTelephone,
          dateOfBirth: dobValue,
          address: response.kBillAddress1,
          suburb: response.kBillCity,
          state: response.kBillState,
          postcode: response.kBillZip,
          marketOpt: response.kenanMktFlag === "ON"
        };

        if(!formData.primary){
            formData.email = "";
            formData.dateOfBirth = "";
            formData.address = "";
            formData.suburb = "";
            formData.mobile = "";
            formData.state = "";
            formData.postcode = "";
            $("[data-id='email']").closest('.field-wrap').hide();
            $("[data-id='email']").closest('.form-group').siblings('.wysiwyg').hide();
            $("[data-id='suburb']").closest('.field-wrap').hide();
            $("[data-id='mobile']").closest('.field-wrap').hide();
            $("[data-id='dateOfBirth']").closest('.field-wrap').hide();
            $("[data-id='address']").closest('.field-wrap').hide();
            $("[data-id='suburb']").closest('.field-wrap').hide();
            $("[data-id='state']").hide();
            $("[data-id='postcode']").closest('.field-wrap').hide();
        }
        this.set({
          prefillFormData: formData
        });
        this.trigger('fetched:details');
      },

      handleUpdateResponse: function (response) {

        // Show notification banner for successful update.
        FOX.context.broadcast('SHOW_BANNER', {
          name: 'PROFILE_UPDATED',
          closeEnabled: true
        });

        this.trigger('completed:update');
      },

      handleUpdateFailed: function (response) {
        FOX.context.broadcast('SHOW_BANNER', {
            name: 'KENAN_ERROR',
            closeEnabled: true
        });

        this.trigger('completed:update');
      },

      // Private
      // -------

      updateAllDetails: function (formData) {
            var self = this;

            //hide all banner first
            FOX.context.broadcast('HIDE_ALL_BANNER');

            var payload = {
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              contactTelephone: formData.mobile,
              dateOfBirth:(formData.dateOfBirth?moment(formData.dateOfBirth,"DD-MM-YYYY").format("YYYY-MM-DD"):''),
              address: formData.address,
              suburb: formData.suburb,
              state: formData.state,
              postcode: formData.postcode,
              marketOpt:formData['market-opt'] === "on"
            };

            var payloadNonPrimary = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: "",
                contactTelephone: "",
                dateOfBirth:"",
                address: "",
                suburb: "",
                state: "",
                postcode: "",
                marketOpt:formData['market-opt'] === "on"
            };

            // secondary?
            if(!self.get('prefillFormData').primary){
                payload = payloadNonPrimary;
            }

            $.ajax({
              type: "POST",
              url: this.updateDetailsEndpoint,
              contentType: "application/json; charset=utf-8",
              data:JSON.stringify(payload),
              dataType: "json",
              success: function(data) {

                //check response to see if there is any error
                if(!Foxtel.checkResponseErrorObj(data)){
                    updateDetails.handleUpdateFailed();
                    return;
                }

                updateDetails.handleUpdateResponse(data);
              },
              error: function (jqXHR, textStatus, errorThrown) {
                updateDetails.handleUpdateFailed();
              }

            });
      },

      // Parse response and set user meta data.
      setNonFormData: function (response) {
        this.set({
          accountId: response.iFoxtelAccountId,
          username: response.iUsername
        });
      }
    });

    // Instantiate model.
    var updateDetails = new UpdateDetails();

    // Instantiate view.
    new UpdateDetailsView({
      el: $form,
      model: updateDetails
    });
  }
});


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * This javascript is for update billing details in my account
 */

$(document).ready(function(){

    if($('#foxtel-now-credit-card-details-form').length < 1){
        return;
    }

    $formDirectDebit = $('#foxtel-now-credit-card-details-form');
    $submitBtn = $('#credit-card-form-submit');

    $('.foxtel-now-display-div-template-container').on('click','.edit-link',function(){
        $formDirectDebit.slideToggle();
    })

    $submitBtn.on('click', function (e) {
        e.preventDefault();

        //hide notification bar
        FOX.context.broadcast('HIDE_BANNER', {
          name: 'PROFILE_UPDATED',
          closeEnabled: true
        });

        $this = $(this);

        //validated form?
        if(!$formDirectDebit.parsley().validate()){
            return;
        }

        $this.attr("disabled","disabled");
        $this.addClass('is-loading');

        var postDataObj = {
            accountType: "creditCard",
            type: "modifyDirectDebit",
            cardNumber: "",
            customerName: "",
            cardExpireMonth: "",
            cardExpireYear: "",
            cvc: ""
        }

        postDataObj.cardNumber = $("input[data-id='cardNumber']").val().replace(/ /g, "");
        postDataObj.cardExpireMonth = $("input[data-id='cardExpiry']").val().split("-")[0];
        postDataObj.cardExpireYear = $("input[data-id='cardExpiry']").val().split("-")[1];
        postDataObj.cvc = $("input[data-id='cvc']").val();
        postDataObj.customerName = $("div.customer-name").text().trim();

        var postData = "";

        Object.keys(postDataObj).forEach(function(key){
            postData += key + "=" + postDataObj[key] + "&";
        })

        postData = postData.slice(0,-1);

        var $complete = function(){
            $this.removeAttr('disabled').removeClass('is-loading');
        };

        var updateBillingDetailsError = function () {
            FOX.context.broadcast('SHOW_BANNER', {
              name: 'PROFILE_UPDATE_ERROR',
              closeEnabled: true
            });
        };

        var invalidCreditCardError = function () {
            FOX.context.broadcast('SHOW_BANNER', {
              name: 'PAYMENT_GATEWAY_ERROR',
              closeEnabled: true
            });
        };

        var $callback = function(data){
            if ((typeof data !== 'undefined') || !($.isEmptyObject(data))) {
                if(data.DirectDebit.success){
                    //Show success notification bar.
                    FOX.context.broadcast('SHOW_BANNER', {
                      name: 'PROFILE_UPDATED',
                      closeEnabled: true
                    });

                    // Show success button state.
                    $this.addClass('is-valid');

                    // Redirect
                    setTimeout(function () {
                      Foxtel.navigator($this.data("redirect-url"));
                    }, 2000);
                } else {
                  var kenanError = data.DirectDebit.kenanError;
                  if (kenanError == 'Invalid credit card') {
                    invalidCreditCardError();
                  } else {
                    updateBillingDetailsError();
                  }
                }
            }
        };

        //clear all the banners
        FOX.context.broadcast('HIDE_ALL_BANNER');

        var xhr = Utilities.getPostData(postData,"/bin/secure/bills-and-payments",$callback,$complete);
        xhr.fail(updateBillingDetailsError);
    });
});


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * This javascript is for view my bills in my account
 */



$(document).ready(function(){

    if($('#foxtel-now-bill-history-template-container').length < 1){
        return;
    }

    $(".foxtel-now-view-my-bill-wrapper").on('click','.foxtel-now-view-my-bills-container a',function(e){
        e.preventDefault();
        var linkUrl = $(this).data("href");
        linkUrl = $.trim(linkUrl);
        window.open(linkUrl,'_blank');
    })
});


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// JavaScript for Pack Details Page
// --------------------------------

$(document).ready(function () {
  var $packDetails = $('.foxtel-now-pack-details');

  if ($packDetails.length) {

    // PackDetailsView
    // ---------------

    var PackDetailsView = Backbone.View.extend({
      initialize: function (options) {
        this.$actions = this.$el.find('.foxtel-now-pack-details__meta__actions');
        this.$links = this.$actions.find('a');
        this.$slider = this.$actions.find('.slide-bg');
        this.cart = options.cart
        this.updateSlidingBackground();
        FOX.context.subscribe('SHOP_CART_LOADED', this.handleShopCartLoaded);
        $(window).on('resize', this.triggerButtonUpdate);
      },

      events: {
        'mouseover .foxtel-now-pack-details__meta__actions a': 'handleActionHover',
        'click a.add-to-cart': 'handleAddToCartClick',
        'click a.buy-it-now': 'handleBuyItNowClick'
      },

      // Event handlers
      // --------------

      handleActionHover: function (event) {
        this.$links.removeClass('active');
        $(event.currentTarget).addClass('active');
        this.updateSlidingBackground();
      },

      // Add the item to the cart and update the button text.
      handleAddToCartClick: function (event) {
        var $link = $(event.currentTarget);
        var text = $link.data('added-text');
        var tierId = $link.data('tier-id');

        event.preventDefault();
        this.addToCart(tierId);
        $link.addClass('is-disabled');
        $link.html(text);
        $link.removeClass('active');
        $link.siblings('.buy-it-now').addClass('active');
        this.updateSlidingBackground();
      },

      // Check the add to cart button is disabled when pack is already in cart.
      handleShopCartLoaded: function (data) {
        // Can't pass through context, so use a global $ selector.
        var $addToCartButton = $('.foxtel-now-pack-details .add-to-cart');
        var buttonData = $addToCartButton.data();

        _(data.play.tiers).select(function (tier) {
          if (tier.tierId === parseInt(buttonData.tierId, 10)) {
            $addToCartButton.addClass('is-disabled').html(buttonData.addedText);
            // Update the sliding background to the buy it now button.
            $addToCartButton.siblings('.buy-it-now').trigger('mouseover');
          }
        });
      },

      // Add the item to the cart then redirect to the buy it now link's URL.
      handleBuyItNowClick: function (event) {
        var self = this;
        var $link = $(event.currentTarget);
        var tierId = $link.data('tier-id');

        event.preventDefault();

        var callback = function () {
            // If the cart contains a premium pack but no starter ones,
            // redirect to the page to prompt them to add a starter pack.
            if (self.cart.hasPremiumPackAndNoStarter()) {
              window.location.href = $link.data('add-starter-pack-url');
            // Otherwise, redirect to the checkout.
            } else {
              window.location.href = $link.attr('href');
            }
        };

        if (!this.model.get('addedToCart')) {
          self.addToCart(tierId, callback);
        }else{
          callback();
        }
      },

      triggerButtonUpdate: function () {
        $('.foxtel-now-pack-details a.active').trigger('mouseover');
      },

      // Private
      // -------

      addToCart: function (tierId, cb) {
        var self = this;

        self.cart.addPlayTier(tierId, function () {
          self.model.set({
            addedToCart: true
          });
          if (typeof cb === 'function') {
            cb();
          }
        });
      },

      updateSlidingBackground: function () {
        var $activeAnchor = this.$actions.find('.active');
		if($activeAnchor.length<1)return;

        this.$slider.show().css({
          'left': $activeAnchor.position().left,
          'top': $activeAnchor.position().top,
          'width': $activeAnchor.outerWidth(),
          'height': $activeAnchor.outerHeight()
        });
      }
    });

    // PackContentItemView
    // -------------------

    var PackContentItemView = Backbone.View.extend({
      initialize: function () {
        $(window).on('resize', this.handleResize.bind(this));
        this.$inner = this.$el.find('.pack-content__item__inner');
        this.hoverDelay = 400;
      },

      events: {
        'mouseenter .pack-content__item__inner': 'handleMouseEnter',
        'mouseleave .pack-content__item__inner': 'handleMouseLeave'
      },

      // Event handlers
      // --------------

      handleMouseEnter: function (event) {
        var self = this;

        self.hoverTimeout = setTimeout(function () {
          self.setHeight();
          self.$inner.addClass('is-active');
        }, self.hoverDelay);
      },

      handleMouseLeave: function (event) {
        clearTimeout(this.hoverTimeout);
        this.$inner.removeClass('is-active');
      },

      handleResize: function () {
        this.setHeight();
      },

      // Private
      // -------

      setHeight: function () {
        this.$el.css('height', 'auto');
        this.$el.css('height', this.$el.outerHeight());
      }
    });

    // Instantiate PackContentItemView
    $('.pack-content__item').each(function () {
      new PackContentItemView({
        el: $(this)
      });
    });

    // Instantiate PackDetailsView
    $packDetails.each(function () {
      new PackDetailsView({
        el: $(this),
        cart: Foxtel.ShopCartManager,
        model: new Backbone.Model()
      });
    });
  }
});


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// JavaScript for Edit Password Page
// ---------------------------------

$(function () {
  var $form = $('#password-edit');

  if ($form.length) {
    var EditPasswordView = Backbone.View.extend({
      initialize: function () {
        this.$el.parsley();
        this.$submitButton = this.$el.find('button');
        this.model.on('success:update', this.handleUpdateSuccess.bind(this));
        this.model.on('error:update', this.handleUpdateError.bind(this));
      },

      events: {
        'click #update-password-button': 'handleSubmit'
      },

      // Event handlers
      // --------------

      handleSubmit: function (event) {
        var formData = this.$el.serializeFormJSON();

        if(!this.$el.parsley().validate()){
          return;
        }

        event.preventDefault();
        this.$submitButton.addClass('is-loading');
        this.model.updatePassword(formData);
      },

      handleUpdateSuccess: function () {
        var self = this;

        this.$submitButton.removeClass('is-loading').addClass('is-valid');
        setTimeout(function () {
          self.$submitButton.removeClass('is-valid');
        }, 1000);
      },

      handleUpdateError: function () {
        this.$submitButton.removeClass('is-loading');
      }
    });

    var EditPassword = Backbone.Model.extend({
      updatePasswordEndpoint: '/bin/secure/profile-settings/update-login-details',
      getDetailsEndpoint: '/bin/secure/profileSettings',

      initialize: function () {
        this.getDetails();
      },

      updatePassword: function (formData) {
        var payload = {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
          "profile-confpwd": formData.newPassword,
          foxtelAccountId: this.get('accountId')
        };

        $.post(this.updatePasswordEndpoint, payload)
          .done(this.updatePasswordSuccess.bind(this))
          .fail(this.updatePasswordError.bind(this));
      },

      // Event handlers
      // --------------

      updatePasswordSuccess: function (response) {
        if (response.isSuccess) {
          FOX.context.broadcast('SHOW_BANNER', {
            name: 'PASSWORD_UPDATE_SUCCESS',
            closeEnabled: true
          });
          this.trigger('success:update');
        } else {
          this.updatePasswordError(response);
        }
      },

      updatePasswordError: function (response) {
        FOX.context.broadcast('SHOW_BANNER', {
          name: 'PASSWORD_UPDATE_ERROR',
          closeEnabled: true
        });
        this.trigger('error:update');
      },

      // Private
      // -------

      getDetails: function () {
        var self = this;

        $.get(this.getDetailsEndpoint, function (response) {
          self.set({
            accountId: response.iFoxtelAccountId,
          });
        });
      }
    });

    var editPassword = new EditPassword();

    new EditPasswordView({
      el: $form,
      model: editPassword
    });
  }
});


/***/ }),
/* 24 */
/***/ (function(module, exports) {


/**
 * This file is for promo code
 * 1) Capture the code
 * 2) Validate
 * 3) Navigate to shop page
 * 4) Show error message for invalid codes
 */

//form submit
$(document).ready(function(){

    var hasForm = false;

    var $form = $("#promo-code-form");
    if($form.length > 0){
     hasForm = true;
    }

    //stop executing if there is no form
    if(!hasForm){
    return;
    }

    var ajaxUrl = "/bin/foxtel/now/promo/validate";
    $form.parsley();
    var $submitButton = $("#promo-code-submit");
    $submitButton.click(function(){
        $this = $(this);

        //validated form?
        if(!$form.parsley().validate()){
            return;
        }

        $this.attr("disabled","disabled");
        $this.addClass('is-loading');

        var promoCode = $form.find("[data-id='promo-code']").val();
        var requestObject = {};
        requestObject.code = promoCode;

        $promoErrorMsg = $form.find("#promoErrorMsg").val();

        $.ajax({
            url: ajaxUrl,
            data:JSON.stringify(requestObject),
            type:"POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:function(data){

                //checking result
                var validResult = data.result;
                if("VALID" === validResult){
                    FOX.context.broadcast("PROMO_CODE_SUBMITTED",{"code":promoCode});
                    Foxtel.navigator($this.data("redirect-url"));
                }else if("EXPIRED" === validResult){
                    FOX.context.broadcast('SHOW_BANNER', {
                      name: 'PROMO_CODE_EXPIRED',
                      closeEnabled: true
                    });
                }else if("NOT_FOUND" === validResult){
                    FOX.context.broadcast('SHOW_BANNER', {
                      name: 'PROMO_CODE_NOT_FOUND',
                      closeEnabled: true
                    });
                }else if("ALREADY_USED" === validResult){
                     FOX.context.broadcast('SHOW_BANNER', {
                       name: 'PROMO_CODE_ALREADY_USED',
                       closeEnabled: true
                     });
                 }else{
                    FOX.context.broadcast('SHOW_BANNER', {
                      name: 'PROMO_CODE_GENERAL_ERROR',
                      closeEnabled: true
                    });
                }
            },
            complete:function(){
                $this.removeClass("is-loading");
                $this.removeAttr("disabled","disabled");
            }
        });

    });


    //check if it's logged in customer
    var servletURL = "/bin/foxtel/display-name.json";

    $.get(servletURL, function (response) {
        if(response && response.first_name){
            //logged in
            FOX.context.broadcast('SHOW_BANNER', {
              name: 'PROMO_CODE_LOGGED_CUSTOMER',
              closeEnabled: true
            });
        }
    });
});

/***/ }),
/* 25 */
/***/ (function(module, exports) {


/**
 * reset password page
 * users follow th link in reset password email to reset their password
 * The token validation servlet (com.foxtel.charlotte.servlets.ValidateToken.java) will add the following cookies
 * CKEResetPasswordFirstName
 * CKEResetPasswordEmail
 * CKEResetPasswordUsername
 * CKEResetPasswordToken
 *
 */

$(document).ready(function(){

    var ajaxUrl = "/bin/foxtel/forgotUsernameAndPassword/resetPassword";

    var $form = $("#reset-password-form");
    if($form.length==0){
        return;
    }

    if(Foxtel.isEditOrDesignMode()){
        //allow author the page
        return;
    }

    $form.parsley();

    //check the cookie and update value in page

    var token = $.cookie("CKEResetPasswordToken");
    var firstName = $.cookie("CKEResetPasswordFirstName");
    if(!token || token.length == 0){
        Foxtel.navigator($form.data("invalid-token-url"));
        return;
    }

    //update first name
    $("[data-id='firstName']").text(firstName);

    var $submitButton = $("#reset-password-submit");

    $submitButton.click(function(){
        $this = $(this);

        //validated form?
        if(!$form.parsley().validate()){
            return;
        }

        $this.attr("disabled","disabled");
        $this.addClass('is-loading');

        var requestObject = {};
        requestObject.token = token;
        requestObject.password = $form.find("[data-id='password']").val();

        $.ajax({
            url: ajaxUrl,
            data:JSON.stringify(requestObject),
            type:"POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:function(data){
                var rSuccess = data.success;
                if (rSuccess) {
                    Foxtel.navigator($this.data("redirect-url"));
                }else{
                    //TODO what to do
                }
            },
            complete:function(){
                $this.removeClass("is-loading");
                $this.removeAttr("disabled","disabled");
            }
        });
    });
});



/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Manage session timeout and notification.  After the user has been
// inactive for a certain period of time, the cart is emptied and personal
// information is cleared.

$(document).ready(function () {
  // Start the inactivity timer if configured on the page.
  $timeout = $('.foxtel-now-timeout');
  if ($timeout.length) {

    // Timeout Model
    // ------------

    var Timeout = Backbone.Model.extend({
      initialize: function () {
        this.setTimer(this.get('timeoutMinutes'));
        if (this.get('deleteData')) {
          this.on('timeout', this.removeAllCookies, this);
        }
      },

      setTimer: function (minutes) {
        var self = this;
        var ms = minutes * 60 * 1000;

        setTimeout(function () {
          self.trigger('timeout');
        }, ms);
      },

      removeAllCookies: function () {
        var cookies = document.cookie.split(";");
        _(cookies).each(function (cookie) {
          var key = (cookie.split("=")[0]).trim();
          $.removeCookie(key, {
            path: '/'
          });
        });
      }
    });

    var options = $timeout.first().data();
    var timeout = new Timeout(options);

    // Timeout View
    // -----------

    var TimeoutView = Backbone.View.extend({
      initialize: function (options) {
        this.model.on('timeout', this.handleTimeout, this);
        this.formIdsToClear = [
          'shop-sign-up-form',
          'shop-credit-card-form'
        ];
      },

      events: {
        'click .restart-session': 'handleRestartSessionClick'
      },

      // Event handlers
      // --------------

      handleTimeout: function () {
        this.showModal();
        if (this.model.get('clearFormFields')) {
          this.clearPersonalFields();
        }
      },

      handleRestartSessionClick: function (event) {
        event.preventDefault();
        window.location.href = this.model.get('redirectUrl');
      },

      // Private
      // -------

      clearPersonalFields: function () {
        _(this.formIdsToClear).each(function (id) {
          $('#' + id).find(':input').val('');
        });
      },

      showModal: function () {
        this.$el.modal({
          backdrop: 'static'
        });
        $('.modal-backdrop').addClass('foxtel-now-modal-backdrop');
      }
    });

    var timeoutView = new TimeoutView({
      model: timeout,
      el: $('#foxtel-now-time-expired')
    });
  }
})


/***/ }),
/* 27 */
/***/ (function(module, exports) {


/**
 * Foxtel now shop cart backbone logic
 * Backbone view for all shop cart components
 */


/* Cart Item Model*/
var CartItem = Backbone.Model.extend({

  defaults: {
    tierId: 10,
    price: 15.0,
    title: 'pop'
  },

  setCart: function(tierData) {
    this.set({
      tierId: tierData.tierID,
      price: tierData.price,
      title: tierData.title
    });
  }

});

/* Cart Collection */
var CartCollection = Backbone.Collection.extend({
    model: CartItem
});


/* Cart Collection View */
var CartCollectionView = Backbone.View.extend({

  initialize: function(){
    this.collection.on('add',this.render,this);
  },

  render: function(){
    var source = $('#cartCollection-template').html();
    var template = Handlebars.compile(source);
    var html = template(this.collection.toJSON());

    this.$el.html(html);
  }

});

/* Execution Backbones */
$(document).ready(function(){

  var cart_collection = new CartCollection();
  var cart_collection_view = new CartCollectionView({collection: cart_collection});
  cart_collection_view.$el = $('#cartCollection-container');

  //cart load & cart refresh event
  function updateCart(cartResponse){
      var cartTemplate = $('#cartCollection-template');
      if(cartTemplate.length==0){
        return;
      }
      var source = $('#cartCollection-template').html();
      var template = Handlebars.compile(source);
      var html = template(cartResponse);
      $('#cartCollection-container').html(html);
      FOX.context.broadcast('updated:cart');
  };

  //basket load refresh
  function updateIcon(cartResponse){
      var basketTemplate = $('#icon-basket-template');
      if(basketTemplate.length==0){
        return;
      }
      var $container = $('.foxtel-now-header__btn-cart');
      // Filter out the epl channels in the cart quantity display.
      var templateData = $.extend(true, {}, cartResponse);
      templateData.play.tiers = _(templateData.play.tiers).select(function (pack) {
        var eplIds = _(Foxtel.ShopCartManager.EPL_CHANNEL_TIERS).map(function (epl) {
          return epl.tierIdWithSports;
        });
        return !_(eplIds).contains(pack.tierId);
      });
      if (templateData.play.tiers.length > 0) {
        $container.show();
      } else {
        $container.hide();
        return;
      }
      var source = $('#icon-basket-template').html();
      var template = Handlebars.compile(source);
      var html = template(templateData);
      $('#icon-basket-template-container').html(html);
  };

  FOX.context.subscribe("SHOP_CART_LOADED",function(data){
      updateCart(data);
      updateIcon(data);
  });

  FOX.context.subscribe("SHOP_CART_REFRESHED",function(data){
      updateCart(data);
      updateIcon(data);
  });
})


/***/ }),
/* 28 */
/***/ (function(module, exports) {


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
    if(ShopCartHelpers.hasSportTier(cartResponse) && cartResponse.play.showFirstMonthCost){
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

    if(cartResponse.hasFreeTrial || cartResponse.play.eligibleFreeTrial){
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

/***/ }),
/* 29 */
/***/ (function(module, exports) {


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


/***/ }),
/* 30 */
/***/ (function(module, exports) {


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

        var eplWithSportTierIds = Foxtel.ShopCartManager.getEPLWithSportTierIds();

        //get premium tier names
        var premiumTierNames = [];
        $.each(cartResponse.play.tiers,function(idx,item){
            if("PREMIUM" == item.type){
                premiumTierNames.push(item.title);
            }
            if("EXTRA" == item.type){
                //ingore free tiers
                if(!_.contains(eplWithSportTierIds, item.tierId)){
                    premiumTierNames.push(item.title);
                }
            }
        })

        var replaceText = "";
        var len = premiumTierNames.length;
        for(var idx=0;idx<len;idx++){
            replaceText += premiumTierNames[idx];
            if(idx< len -2){
                replaceText += ", ";
            }
            if(idx == len -2){
                replaceText += " & ";
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
            Foxtel.navigator(modelData.addStarterBtnLink);
        });
    });
});

/***/ }),
/* 31 */
/***/ (function(module, exports) {


/**
 * This js is for both sales and reactivation flows
 */

$(document).ready(function(){
    var ajaxUrl = "/bin/foxtel/now/payment";
    var $form = $("#shop-credit-card-form");
    if($form.length==0){

        //try reactivation form
        $form = $("#reactivation-bill-details-form");
        ajaxUrl = "/bin/foxtel/now/my-account/reactivation/payment";
        if($form.length ==0 ){
            return;
        }
    }

    $form.parsley();

    //see at com.foxtel.now.common.ErrorCodes.java
    var PAYMENT_ERROR_CODE = "800";

    var $submitButton = $("#credit-card-form-submit");

    $submitButton.click(function(){
        $this = $(this);

        //validated form?
        if(!$form.parsley().validate()){
            return;
        }

        //clear all the banners
        FOX.context.broadcast('HIDE_ALL_BANNER');

        $this.attr("disabled","disabled");
        $this.addClass('is-loading');

        var requestObject = {};
        requestObject.cardNumber = $form.find("[data-id='cardNumber']").val().replace(/ /g, "");
        requestObject.cardExpiry = $form.find("[data-id='cardExpiry']").val().replace(/-/g, "");
        requestObject.cvc = $form.find("[data-id='cvc']").val();

        $.ajax({
            url: ajaxUrl,
            data:JSON.stringify(requestObject),
            type:"POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:function(data){

                //check response to see if there is any error
                if(!Foxtel.checkResponseErrorObj(data)){

                    //payment error?
                    if(data.error && data.error.code && PAYMENT_ERROR_CODE == data.error.code){
                        FOX.context.broadcast('SHOW_BANNER', {
                          name: 'PAYMENT_GATEWAY_ERROR',
                          closeEnabled: true
                        });
                    }else{
                        FOX.context.broadcast('SHOW_BANNER', {
                          name: 'KENAN_ERROR',
                          closeEnabled: true
                        });
                    }
                    return;
                }

                Foxtel.navigator($this.data("redirect-url"));

            },
            complete:function(){
                $this.removeClass("is-loading");
                $this.removeAttr("disabled","disabled");
            }
        });

    });

});


/***/ }),
/* 32 */
/***/ (function(module, exports) {


/**
 * sign up form in sales flow
 * personal details form in reactivation flow
 */

(function($) {
    com.foxtel.now.CustomerDetailsForm =  {

        config:function (options){
            this.options = options;
            var $submitButton = $(this.options.submitBtnSelector);
            var self = this;

            //pre fill form data
            self.loadFormData();

            self.options.$form.parsley();

            //submit event handler
            $submitButton.click(function(){
                $this = $(this);

                //validated form?
                if(!self.options.$form.parsley().validate()){
                    return;
                }

                $this.attr("disabled","disabled");
                $this.addClass('is-loading');
                var requestObject = self.getSubmitRequestObject();

                $.ajax({
                    url: self.options.submitAjaxUrl,
                    data:JSON.stringify(requestObject),
                    type:"POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success:function(data){
                        Foxtel.navigator($this.data("redirect-url"));
                    },
                    complete:function(){
                        $this.removeClass("is-loading");
                        $this.removeAttr("disabled","disabled");
                    }
                });
            });

            //update submit button text
            FOX.dyc.subscribeEvent("modelShopCart",function(data){
                var hasFreeTrial = false;
                for(var i=0;i<data.quote.monthlyCostItems.length;i++){
                    var monthlyCostItem = data.quote.monthlyCostItems[i];
                    if(monthlyCostItem.len == 0){
                        //free trial
                        hasFreeTrial = true;
                        break;
                    }
                }
                if(hasFreeTrial){
                    var btnTextWithFreeTrial = $submitButton.data("text-with-free-trial");
                    if(btnTextWithFreeTrial){
                        $submitButton.text(btnTextWithFreeTrial);
                    }
                }
            });
        },

        updateField:function ($field,value){
          $field.val(value);;
          if(value&&value!=''){
            $field.siblings('label').addClass('active highlight');
          }
        },

        loadFormData:function (){
            var self = this;

            //empty request
            $.ajax({
                url: self.options.loadAjaxUrl,
                type:"POST",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success:function(data){
                    if(self.fillForm){
                        self.fillForm(data);
                    }
                }
            });
        },
        getSubmitRequestObject:function (){
            //do nothing, implement in child class
        },

        fillForm:function (data){
            //do nothing, implement in child class
        },

    };

    com.foxtel.now.SalesCustomerDetailsForm = function () {};
    com.foxtel.now.ReactivationCustomerDetailsForm = function () {};

    _.extend(com.foxtel.now.SalesCustomerDetailsForm.prototype,com.foxtel.now.CustomerDetailsForm,{

        getSubmitRequestObject:function(){
            var self = this;

            var requestObject = {};
            requestObject.firstName = self.options.$form.find("[data-id='firstName']").val();
            requestObject.lastName = self.options.$form.find("[data-id='lastName']").val();
            requestObject.email = self.options.$form.find("[data-id='email']").val();
            requestObject.password = self.options.$form.find("[data-id='password']").val();
            requestObject.mobile = self.options.$form.find("[data-id='mobile']").val();
            requestObject.postcode = self.options.$form.find("[data-id='postcode']").val();
            requestObject.primaryDevice = self.options.$form.find("[data-id='primaryDevice']").attr('data-code');
            return requestObject;
        },
        fillForm:function(data){
            var self = this;
            self.updateField(self.options.$form.find("[data-id='firstName']"),data.firstName);
            self.updateField(self.options.$form.find("[data-id='lastName']"),data.lastName);
            self.updateField(self.options.$form.find("[data-id='email']"),data.email);
            self.updateField(self.options.$form.find("[data-id='mobile']"),data.mobileNumber);
            self.updateField(self.options.$form.find("[data-id='postcode']"),data.postCode);

        }

    });

    _.extend(com.foxtel.now.ReactivationCustomerDetailsForm.prototype,com.foxtel.now.CustomerDetailsForm,{
        getSubmitRequestObject:function(){
            var self = this;

            var requestObject = {};
            requestObject.firstName = self.options.$form.find("[data-id='firstName']").val();
            requestObject.lastName = self.options.$form.find("[data-id='lastName']").val();
            requestObject.mobile = self.options.$form.find("[data-id='mobile']").val();
            requestObject.postcode = self.options.$form.find("[data-id='postcode']").val();
            requestObject.primaryDevice = self.options.$form.find("[data-id='primaryDevice']").attr('data-code');
            return requestObject;
        },
        fillForm:function(data){
            var self = this;
            self.updateField(self.options.$form.find("[data-id='firstName']"),data.firstName);
            self.updateField(self.options.$form.find("[data-id='lastName']"),data.lastName);
            self.updateField(self.options.$form.find("[data-id='email']"),data.email);
            self.updateField(self.options.$form.find("[data-id='mobile']"),data.mobileNumber);
            self.updateField(self.options.$form.find("[data-id='postcode']"),data.postCode);
            self.options.$form.find("[data-id='email']").addClass('disabled');
        }
    });

})(jQuery);

//form submit
$(document).ready(function(){

    var hasForm = false;

    var $form = $("#shop-sign-up-form");
    if($form.length > 0){
        hasForm = true;

        new com.foxtel.now.SalesCustomerDetailsForm().config({
            submitBtnSelector:"#sign-up-form-submit",
            $form:$form,
            submitAjaxUrl:"/bin/foxtel/now/customerDetails",
            loadAjaxUrl:"/bin/foxtel/now/customerDetailLanding"
        });
    }

    if(!hasForm){
        $form = $("#reactivation-personal-details-form");
        if($form.length > 0){
            hasForm = true;
            new com.foxtel.now.ReactivationCustomerDetailsForm().config({
                submitBtnSelector:"#sign-up-form-submit",
                $form:$form,
                submitAjaxUrl:"/bin/foxtel/now/my-account/reactivation/customerDetails",
                loadAjaxUrl:"/bin/foxtel/now/my-account/reactivation/customerDetailLanding"
            });
        }
    }

    //stop loading if there is no form
    if(!hasForm){
        return;
    }



    Utilities.selectDropDownText();

    $emailField = $form.find("[data-id='email']");
    //email in use listener
    $emailField.parsley().subscribe('parsley:field:error', function($parsleyField) {
        var assertName = $parsleyField.validationResult[0].assert.name;
        if("verifyemail" == assertName){
          FOX.context.broadcast('SHOW_BANNER', {
              name: 'EMAIL_TAKEN',
              email: $parsleyField.$element.val(),
              closeEnabled: true
          });
        }
    });
    $emailField.parsley().subscribe('parsley:field:success', function() {
        FOX.context.broadcast('HIDE_BANNER', {
            name: 'EMAIL_TAKEN'
        });
    });

});


/***/ }),
/* 33 */
/***/ (function(module, exports) {


/**
 * This is for welcome and welcome-back page
 */



$(document).ready(function(){
    var $welcomeWrapper = $(".foxtel-now-welcome-message-wrapper");
    if($welcomeWrapper.length < 1){
        return;
    }

    //show info bar
    FOX.dyc.subscribeEvent("welcomeModel",function(data){
        var email = data.email;
        if(email){
            FOX.context.broadcast('SHOW_BANNER', {
              name: 'WELCOME_BANNER',
              email: email,
              closeEnabled: true
            });
        }
    });
});

/***/ }),
/* 34 */
/***/ (function(module, exports) {

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
        if(target.has("a span")||target.has("a.foxtelNowProductAddToCart")){
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


/***/ }),
/* 35 */
/***/ (function(module, exports) {

(function(){
	var _createClass = function() {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function(Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	var OptionParser = function() {
		function OptionParser() {
			_classCallCheck(this, OptionParser);
		}

		_createClass(OptionParser, [{
			key: 'parse',
			value: function parse() {
				var metas = document.getElementsByTagName('meta');
				var options = {};
				var optionName = null;
				Array.from(metas).forEach(function(meta) {
					var name = meta.getAttribute('name');
					var content = meta.getAttribute('content');
					if (name && content && valid(name) && content.length > 0) {
						optionName = name.split(':')[1];
						if (Array.from(optionName).includes('-')) {
							optionName = convertToCamelCase(optionName);
						}
						options[optionName] = content;
					}
				});
				return options;
			}
		}]);

		return OptionParser;
	}();

	var Detector = function() {
		function Detector() {
			_classCallCheck(this, Detector);
		}

		_createClass(Detector, null, [{
			key: 'platform',
			value: function platform() {
				if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
					return 'ios';
				} else if (/Android/i.test(window.navigator.userAgent)) {
					return 'android';
				}
			}
		}, {
			key: 'userAgentMatchesRegex',
			value: function userAgentMatchesRegex(regexString) {
				return new RegExp(regexString).test(window.navigator.userAgent);
			}
		}, {
			key: 'jQueryMobilePage',
			value: function jQueryMobilePage() {
				return typeof window.$ !== 'undefined' && window.$.mobile !== 'undefined' && document.querySelector('.ui-page') !== null;
			}
		}, {
			key: 'wrapperElement',
			value: function wrapperElement() {
				var selector = Detector.jQueryMobilePage() ? '.ui-page' : 'html';
				return document.querySelectorAll(selector);
			}
		}]);

		return Detector;
	}();

	var Bakery = function() {
		function Bakery() {
			_classCallCheck(this, Bakery);
		}

		_createClass(Bakery, null, [{
			key: 'bake',
			value: function bake() {
				document.cookie = 'smartbanner_exited=1';
			}
		}, {
			key: 'unbake',
			value: function unbake() {
				document.cookie = 'smartbanner_exited=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
			}
		}, {
			key: 'baked',
			get: function get() {
				var value = document.cookie.replace(/(?:(?:^|.*;\s*)smartbanner_exited\s*\=\s*([^;]*).*$)|^.*$/, '$1');
				return value === '1';
			}
		}]);

		return Bakery;
	}();

	var _optionparser = OptionParser;

	var _optionparser2 = _interopRequireDefault(_optionparser);

	var _detector = Detector;

	var _detector2 = _interopRequireDefault(_detector);

	var _bakery = Bakery;

	var _bakery2 = _interopRequireDefault(_bakery);

	// 1:
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	// 2:

	// 3:
	var SmartBanner = function() {
		function SmartBanner() {
			_classCallCheck(this, SmartBanner);

			var parser = new _optionparser2['default']();
			this.options = parser.parse();
			console.log("this.options=", this.options);
			this.platform = _detector2['default'].platform();
			//this.platform = 'android';
		}

		// DEPRECATED. Will be removed.

		_createClass(SmartBanner, [{
			key: 'publish',
			value: function publish() {
				if (Object.keys(this.options).length === 0) {
					//throw new Error('No options detected. Please consult documentation.');
					return false;
				}

				if (_bakery2['default'].baked) {
					return false;
				}

				// User Agent was explicetely excluded by defined excludeUserAgentRegex
				if (this.userAgentExcluded) {
					return false;
				}

				// User agent was neither included by platformEnabled,
				// nor by defined includeUserAgentRegex
				if (!(this.platformEnabled || this.userAgentIncluded)) {
					return false;
				}
				
				//this.options.containerId = "foxtel-now-info-bar-container--MOBILE_DEVICE_USER_MY_ACCOUNT_HOME";
				if (this.options.containerId && document.querySelector('#'+this.options.containerId)) {
				  $(document.querySelector('#' + this.options.containerId)).css('height', '90px');

				  var bannerDiv = document.createElement('div');
				  document.querySelector('#'+this.options.containerId).appendChild(bannerDiv);
				  bannerDiv.outerHTML = this.html;
				  if (!this.positioningDisabled) {
					setContentPosition(this.height);
				  }
				  addEventListeners(this);
				}
			}
		}, {
			key: 'exit',
			value: function exit() {
				removeEventListeners();
				if (!this.positioningDisabled) {
					restoreContentPosition();
				}
				var banner = document.querySelector('.js_smartbanner');
				document.querySelector('#' + this.options.containerId).removeChild(banner);
				_bakery2['default'].bake();

                $(document.querySelector('#' + this.options.containerId)).css('height', '0');
			}
		}, {
			key: 'originalTop',
			get: function get() {
				var wrapper = _detector2['default'].wrapperElement()[0];
				return parseFloat(wrapper.getAttribute(datas.originalTop));
			}

			// DEPRECATED. Will be removed.

		}, {
			key: 'originalTopMargin',
			get: function get() {
				var wrapper = _detector2['default'].wrapperElement()[0];
				return parseFloat(wrapper.getAttribute(datas.originalMarginTop));
			}
		}, {
			key: 'priceSuffix',
			get: function get() {
				if (this.platform === 'ios') {
					return this.options.priceSuffixApple;
				} else if (this.platform === 'android') {
					return this.options.priceSuffixGoogle;
				}
				return '';
			}
		}, {
			key: 'icon',
			get: function get() {
				if (this.platform === 'android') {
					return this.options.iconGoogle;
				} else {
					return this.options.iconApple;
				}
			}
		}, {
			key: 'buttonUrl',
			get: function get() {
				if (this.platform === 'android') {
					return this.options.buttonUrlGoogle;
				} else if (this.platform === 'ios') {
					return this.options.buttonUrlApple;
				}
				return '#';
			}
		}, {
			key: 'html',
			get: function get() {
				return '<div class="smartbanner smartbanner--' + this.platform + ' js_smartbanner">\n      <a href="javascript:void();" class="smartbanner__exit js_smartbanner__exit"></a>\n      <div class="smartbanner__icon" style="background-image: url(' + this.icon + ');"></div>\n      <div class="smartbanner__info">\n        <div>\n          <div class="smartbanner__info__title">' + this.options.title + '</div>\n          <div class="smartbanner__info__author">' + this.options.author + '</div>\n          <div class="smartbanner__info__price">' + this.options.price + this.priceSuffix + '</div>\n        </div>\n      </div>\n      <a href="' + this.buttonUrl + '" class="smartbanner__button"><span class="smartbanner__button__label">' + this.options.button + '</span></a>\n    </div>';
			}
		}, {
			key: 'height',
			get: function get() {
				var height = document.querySelector('.js_smartbanner').offsetHeight;
				return height !== undefined ? height : 0;
			}
		}, {
			key: 'platformEnabled',
			get: function get() {
				var enabledPlatforms = this.options.enabledPlatforms || DEFAULT_PLATFORMS;
				return enabledPlatforms && enabledPlatforms.replace(/\s+/g, '').split(',').indexOf(this.platform) !== -1;
			}
		}, {
			key: 'positioningDisabled',
			get: function get() {
				return this.options.disablePositioning === 'true';
			}
		}, {
			key: 'userAgentExcluded',
			get: function get() {
				if (!this.options.excludeUserAgentRegex) {
					return false;
				}
				return _detector2['default'].userAgentMatchesRegex(this.options.excludeUserAgentRegex);
			}
		}, {
			key: 'userAgentIncluded',
			get: function get() {
				if (!this.options.includeUserAgentRegex) {
					return false;
				}
				return _detector2['default'].userAgentMatchesRegex(this.options.includeUserAgentRegex);
			}
		}]);

		return SmartBanner;
	}();

	//var _smartbanner = SmartBanner();
	//var _smartbanner2 = _interopRequireDefault(_smartbanner);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			'default': obj
		};
	}

	var smartbanner = void 0;

	window.addEventListener('load', function() {
		smartbanner = new SmartBanner();
		smartbanner.publish();
	});

	// 4:
	function valid(name) {
		// TODO: validate against options dictionary
		return name.indexOf('smartbanner:') !== -1 && name.split(':')[1].length > 0;
	}

	function convertToCamelCase(name) {
		var parts = name.split('-');
		parts.map(function(part, index) {
			if (index > 0) {
				parts[index] = part.charAt(0).toUpperCase() + part.substring(1);
			}
		});
		return parts.join('');
	}

	// 5:
	// Production steps of ECMA-262, Edition 6, 22.1.2.1
	// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
	if (!Array.from) {
		Array.from = function() {
			var toStr = Object.prototype.toString;
			var isCallable = function isCallable(fn) {
				return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
			};
			var toInteger = function toInteger(value) {
				var number = Number(value);
				if (isNaN(number)) {
					return 0;
				}
				if (number === 0 || !isFinite(number)) {
					return number;
				}
				return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
			};
			var maxSafeInteger = Math.pow(2, 53) - 1;
			var toLength = function toLength(value) {
				var len = toInteger(value);
				return Math.min(Math.max(len, 0), maxSafeInteger);
			};

			// The length property of the from method is 1.
			return function from(arrayLike /*, mapFn, thisArg */ ) {
				// 1. Let C be the this value.
				var C = this;

				// 2. Let items be ToObject(arrayLike).
				var items = Object(arrayLike);

				// 3. ReturnIfAbrupt(items).
				if (arrayLike == null) {
					throw new TypeError("Array.from requires an array-like object - not null or undefined");
				}

				// 4. If mapfn is undefined, then let mapping be false.
				var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
				var T;
				if (typeof mapFn !== 'undefined') {
					// 5. else
					// 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
					if (!isCallable(mapFn)) {
						throw new TypeError('Array.from: when provided, the second argument must be a function');
					}

					// 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
					if (arguments.length > 2) {
						T = arguments[2];
					}
				}

				// 10. Let lenValue be Get(items, "length").
				// 11. Let len be ToLength(lenValue).
				var len = toLength(items.length);

				// 13. If IsConstructor(C) is true, then
				// 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
				// 14. a. Else, Let A be ArrayCreate(len).
				var A = isCallable(C) ? Object(new C(len)) : new Array(len);

				// 16. Let k be 0.
				var k = 0;
				// 17. Repeat, while k < len… (also steps a - h)
				var kValue;
				while (k < len) {
					kValue = items[k];
					if (mapFn) {
						A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
					} else {
						A[k] = kValue;
					}
					k += 1;
				}
				// 18. Let putStatus be Put(A, "length", len, true).
				A.length = len;
				// 20. Return A.
				return A;
			};
		}();
	}

	// 6:
	if (!Array.prototype.includes) {
		Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
			'use strict';

			if (this == null) {
				throw new TypeError('Array.prototype.includes called on null or undefined');
			}

			var O = Object(this);
			var len = parseInt(O.length, 10) || 0;
			if (len === 0) {
				return false;
			}
			var n = parseInt(arguments[1], 10) || 0;
			var k;
			if (n >= 0) {
				k = n;
			} else {
				k = len + n;
				if (k < 0) {
					k = 0;
				}
			}
			var currentElement;
			while (k < len) {
				currentElement = O[k];
				if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
					// NaN !== NaN
					return true;
				}
				k++;
			}
			return false;
		};
	}


	// 7:
	var DEFAULT_PLATFORMS = 'android,ios';

	var datas = {
		originalTop: 'data-smartbanner-original-top',
		originalMarginTop: 'data-smartbanner-original-margin-top'
	};

	function handleExitClick(event, self) {
		self.exit();
		event.preventDefault();
	}

	function handleViewClick(event, self) {
		//event.preventDefault();
		var redirectLink = event.currentTarget.getAttribute("href");

		/*
		setTimeout(function() {
			window.location = redirectLink;
		}, 25);
		*/

		// If "custom-uri://" is registered the app will launch immediately and your
		// timer won't fire. If it's not set, you'll get an ugly "Cannot Open Page"
		// dialogue prior to the App Store application launching
		//window.location = "custom-uri://";
		window.location = "unknown://nowhere";
		//window.location = "http://foxtel.com.au";
	}

	function handleJQueryMobilePageLoad(event) {
		if (!this.positioningDisabled) {
			setContentPosition(event.data.height);
		}
	}

	function addEventListeners(self) {
		var closeIcon = document.querySelector('.js_smartbanner__exit');
		closeIcon.addEventListener('click', function(event) {
			return handleExitClick(event, self);
		});
		if (_detector2['default'].jQueryMobilePage()) {
			$(document).on('pagebeforeshow', self, handleJQueryMobilePageLoad);
		}

		var viewButton = document.querySelector('.smartbanner__button');
		viewButton.addEventListener('click', function(event) {
			return handleViewClick(event, self);
		});
	}

	function removeEventListeners() {
		if (_detector2['default'].jQueryMobilePage()) {
			$(document).off('pagebeforeshow', handleJQueryMobilePageLoad);
		}
	}

	function setContentPosition(value) {
		var wrappers = _detector2['default'].wrapperElement();
		for (var i = 0, l = wrappers.length, wrapper; i < l; i++) {
			wrapper = wrappers[i];
			if (_detector2['default'].jQueryMobilePage()) {
				if (wrapper.getAttribute(datas.originalTop)) {
					continue;
				}
				var top = parseFloat(getComputedStyle(wrapper).top);
				wrapper.setAttribute(datas.originalTop, isNaN(top) ? 0 : top);
				wrapper.style.top = value + 'px';
			} else {
				if (wrapper.getAttribute(datas.originalMarginTop)) {
					continue;
				}
				var margin = parseFloat(getComputedStyle(wrapper).marginTop);
				wrapper.setAttribute(datas.originalMarginTop, isNaN(margin) ? 0 : margin);
				wrapper.style.marginTop = value + 'px';
			}
		}
	}

	function restoreContentPosition() {
		var wrappers = _detector2['default'].wrapperElement();
		for (var i = 0, l = wrappers.length, wrapper; i < l; i++) {
			wrapper = wrappers[i];
			if (_detector2['default'].jQueryMobilePage() && wrapper.getAttribute(datas.originalTop)) {
				wrapper.style.top = wrapper.getAttribute(datas.originalTop) + 'px';
			} else if (wrapper.getAttribute(datas.originalMarginTop)) {
				wrapper.style.marginTop = wrapper.getAttribute(datas.originalMarginTop) + 'px';
			}
		}
	}
})()

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/* Store Utilities Functions */
var Utilities = {};

Utilities.getPostData = function($requestObj, $url, $callback,$complete){
    return $.ajax({
            url: $url,
            data:$requestObj || JSON.stringify($requestObj),
            type:"POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:function(data){
                if(typeof $callback == 'function') $callback(data);
            },
            error: function(data){
                console.log("data error:" + data)
            },
            complete: function(){
                if (typeof $complete === 'function') {
                  $complete();
                }
            }
        });
};

Utilities.timeConverter = function (UNIX_timestamp,hrs_flag){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  if(hrs_flag){
    var time = date + ' ' + month + ', ' + year + ' ' + hour + ':' + min + ':' + sec ;
  } else {
    var time = date + ' ' + month + ', ' + year;
  }

  return time;
}

Utilities.registerJqueryExtensions = function () {
  (function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
  })(jQuery);
};
Utilities.registerJqueryExtensions();

Utilities.selectDropDownText = function () {

    (function($){
        $(".dropdown-menu").on('click touchend', '.dropdown-item', function(e){
                var $btnElem = $(this).parents(".dropdown").find('.btn');
                $btnElem.find('span').text($(this).text());
                $btnElem.attr('data-text',$(this).text());
                $btnElem.attr('data-code',$(this).attr('value'));
                $btnElem.val($(this).attr('value'));
        })
    })(jQuery)
}

Utilities.setUpdatePackage = function () {
    FOX.storage.data("isPackUpdated", 1);
}

Utilities.getUpdatePackage = function () {
    return FOX.storage.data("isPackUpdated");

}

Utilities.removeUpdatePackageCookie = function () {
    return FOX.storage.removeData("isPackUpdated");
}

Utilities.checkEditMode = function () {
    if(window.location.origin.includes("localhost")){
        if(!window.location.href.includes("?wcmmode=disabled")){
            return true;
        }
    }
    return false;
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)(true);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*********************\r\nfont variables\r\n*********************/\n/*********************\r\ncolor variables\r\n*********************/\n/*********************\r\nBACKGROUND\r\n*********************/\n.foxtel-now-background-green {\n  background-color: #FF5050 !important; }\n\n.foxtel-now-background-black {\n  background-color: black !important; }\n\n.foxtel-now-background-off-white {\n  background-color: #f0f0f0 !important; }\n\n.foxtel-now-background-lightgrey {\n  background-color: #f7f7f7 !important; }\n\n.foxtel-now-background-transparent {\n  background-color: transparent !important;\n  box-shadow: none !important; }\n\n/*********************\r\nCOLOR\r\n*********************/\n.foxtel-now-color-whilte {\n  color: white !important; }\n\n.foxtel-now-color-black {\n  color: black !important; }\n\n.foxtel-now-color-grey {\n  color: #F0EDEB !important; }\n\n.foxtel-now-color-darkgrey {\n  color: #32323C !important; }\n\n.foxtel-now-color-orange {\n  color: #FF5050 !important; }\n\n/*********************\r\nSHADOW\r\n*********************/\n.foxtel-now-box-shadow {\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2) !important; }\n\n/*********************\r\nFONT\r\n*********************/\n@font-face {\n  font-family: \"ProximaNova\";\n  src: url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.woff\") format(\"woff\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.ttf\") format(\"truetype\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.svg#wf\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"ProximaNova-Bold\";\n  src: url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.woff\") format(\"woff\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.ttf\") format(\"truetype\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.svg#wf\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n/*********************\r\nVARIABLE\r\n*********************/\n/*********************\r\nMIXIN\r\n*********************/\n/*********************\r\nCOMMON STYLE\r\n*********************/\n.foxtel-container {\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin: 0 auto; }\n  @media (min-width: 768px) {\n    .foxtel-container {\n      width: 690px;\n      padding-left: 0;\n      padding-right: 0; } }\n  @media (min-width: 992px) {\n    .foxtel-container {\n      width: 930px;\n      padding-left: 0;\n      padding-right: 0; } }\n  @media (min-width: 1200px) {\n    .foxtel-container {\n      width: 1110px;\n      padding-left: 0;\n      padding-right: 0; } }\n\n/*********************\r\nBUTTON STYLE\r\n*********************/\n.foxtel-header__btn--white {\n  display: flex;\n  height: 52px;\n  border-radius: 2px;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  color: #32323c;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-right: 15px;\n  border: 1px solid #bec0c2; }\n  .foxtel-header__btn--white:hover {\n    color: #32323c; }\n\n.foxtel-header__btn--black {\n  display: flex;\n  height: 52px;\n  border-radius: 2px;\n  justify-content: center;\n  align-items: center;\n  background-color: #32323c;\n  color: #fff;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-right: 15px; }\n  .foxtel-header__btn--black:hover {\n    color: #fff; }\n\n.foxtel-now-header {\n  height: 70px;\n  max-width: 1140px;\n  margin-left: auto;\n  margin-right: auto;\n  opacity: 0; }\n  .foxtel-now-header.is-loaded {\n    transition: opacity 100ms ease-in;\n    opacity: 1.0; }\n  .foxtel-now-header.is-logged-in {\n    max-width: none;\n    padding-left: 5%;\n    padding-right: 5%; }\n    @media (min-width: 768px) {\n      .foxtel-now-header.is-logged-in .menu-bar .left-section .menu-item {\n        display: inline-block; } }\n    .foxtel-now-header.is-logged-in .menu-bar .right-section .settings {\n      display: inline-block; }\n    .foxtel-now-header.is-logged-in .menu-bar .right-section .foxtel-now-header__btn-container {\n      display: none; }\n  .foxtel-now-header.log-in .menu-bar .right-section .foxtel-now-header__btn-container {\n    display: none; }\n  .foxtel-now-header .menu-bar {\n    font-family: \"ProximaNova\", arial, sans-serif;\n    min-width: 300px;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n    .foxtel-now-header .menu-bar .left-section {\n      display: inline-block;\n      font-size: 0; }\n      .foxtel-now-header .menu-bar .left-section .logo {\n        height: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        float: left;\n        margin-right: 25px; }\n        .foxtel-now-header .menu-bar .left-section .logo .wysiwyg p {\n          margin-bottom: 0; }\n          .foxtel-now-header .menu-bar .left-section .logo .wysiwyg p img {\n            height: 45px;\n            width: 156px;\n            padding-bottom: 5px; }\n      .foxtel-now-header .menu-bar .left-section .menu-item {\n        display: none;\n        color: #9b9b9b;\n        cursor: pointer;\n        padding: 0;\n        margin: 0 25px;\n        font-size: 18px;\n        position: relative;\n        height: 100%;\n        line-height: 70px;\n        font-weight: 400; }\n        .foxtel-now-header .menu-bar .left-section .menu-item a {\n          transition: color .3s ease;\n          color: #32323C;\n          text-decoration: none; }\n          .foxtel-now-header .menu-bar .left-section .menu-item a:hover {\n            color: black; }\n          .foxtel-now-header .menu-bar .left-section .menu-item a img.kids {\n            padding-bottom: 10px;\n            transition: opacity .3s ease;\n            opacity: 0.7; }\n            .foxtel-now-header .menu-bar .left-section .menu-item a img.kids:hover {\n              opacity: 1.0; }\n    .foxtel-now-header .menu-bar .right-section {\n      -ms-flex-item-align: end;\n      align-self: flex-end;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 100%;\n      box-sizing: border-box; }\n      .foxtel-now-header .menu-bar .right-section .settings {\n        display: none;\n        margin-left: 20px;\n        height: 100%;\n        outline: 0;\n        width: 17px; }\n        @media (max-width: 767px) {\n          .foxtel-now-header .menu-bar .right-section .settings {\n            margin-right: 10px; } }\n        .foxtel-now-header .menu-bar .right-section .settings .settings-icon {\n          vertical-align: middle;\n          cursor: pointer;\n          color: #9b9b9b;\n          transition: color .3s ease;\n          height: 100%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center; }\n        .foxtel-now-header .menu-bar .right-section .settings .dropdown {\n          display: none;\n          margin-left: 5%;\n          position: relative;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          width: 150px; }\n          .foxtel-now-header .menu-bar .right-section .settings .dropdown.open {\n            display: block; }\n          .foxtel-now-header .menu-bar .right-section .settings .dropdown .options {\n            width: 130px;\n            z-index: 101;\n            -webkit-transform: translateX(-102px) translateY(-20px);\n            -ms-transform: translateX(-102px) translateY(-20px);\n            transform: translateX(-102px) translateY(-20px);\n            opacity: 1;\n            pointer-events: auto;\n            position: absolute;\n            transition: opacity .3s ease;\n            text-overflow: ellipsis; }\n            .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box {\n              padding: 0;\n              position: relative;\n              border: 1px solid #32323C;\n              background: white;\n              min-width: 100%;\n              margin-top: 10px; }\n              .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box:before, .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box:after {\n                content: \" \";\n                bottom: 100%;\n                right: 10px;\n                border: solid transparent;\n                height: 0;\n                width: 0;\n                position: absolute;\n                pointer-events: none;\n                border-color: transparent;\n                border-bottom-color: white;\n                border-width: 10px; }\n              .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box:before {\n                border-bottom-color: #32323C;\n                border-width: 12px;\n                right: 8px; }\n              .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box span {\n                text-align: right;\n                color: #32323C;\n                transition: color .1s ease;\n                cursor: pointer;\n                display: block;\n                padding: 5px 0;\n                padding-right: 1em;\n                font-size: 16px; }\n                .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box span.username {\n                  color: black;\n                  font-weight: bold;\n                  word-wrap: break-word; }\n                .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box span.hr {\n                  width: 100%;\n                  border-bottom: 1px solid #32323C;\n                  padding: 0; }\n      .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart {\n        display: none; }\n        .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart .foxtel-now-header__btn-cart__icon {\n          position: relative;\n          display: inline-block;\n          margin-right: 20px;\n          margin-top: 12px; }\n          @media (min-width: 768px) {\n            .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart .foxtel-now-header__btn-cart__icon {\n              margin-right: 50px; } }\n          .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart .foxtel-now-header__btn-cart__icon .foxtel-now-header__btn-cart__icon__quantity {\n            position: absolute;\n            top: -5px;\n            right: -15px;\n            background-color: #FF5050;\n            color: white;\n            border-radius: 50%;\n            width: 30px;\n            height: 30px;\n            text-align: center;\n            font-weight: 700;\n            line-height: 30px; }\n          .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart .foxtel-now-header__btn-cart__icon .icon {\n            display: inline-block;\n            width: 1em;\n            height: 1em;\n            stroke-width: 0;\n            stroke: currentcolor;\n            fill: currentcolor;\n            width: 30px;\n            height: 30px;\n            margin-top: 15px; }\n      .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-container {\n        margin-left: 20px;\n        display: flex;\n        vertical-align: middle;\n        -ms-flex-align: center; }\n\n/*foxtel header breadcrumb scrolling up pop state*/\n.foxtel-now-header-breadcrumb--pop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);\n  z-index: 9999; }\n\n/*********************\r\nBACKGROUND\r\n*********************/\n.foxtel-now-background-green {\n  background-color: #FF5050 !important; }\n\n.foxtel-now-background-black {\n  background-color: black !important; }\n\n.foxtel-now-background-off-white {\n  background-color: #f0f0f0 !important; }\n\n.foxtel-now-background-lightgrey {\n  background-color: #f7f7f7 !important; }\n\n.foxtel-now-background-transparent {\n  background-color: transparent !important;\n  box-shadow: none !important; }\n\n/*********************\r\nCOLOR\r\n*********************/\n.foxtel-now-color-whilte {\n  color: white !important; }\n\n.foxtel-now-color-black {\n  color: black !important; }\n\n.foxtel-now-color-grey {\n  color: #F0EDEB !important; }\n\n.foxtel-now-color-darkgrey {\n  color: #32323C !important; }\n\n.foxtel-now-color-orange {\n  color: #FF5050 !important; }\n\n/*********************\r\nSHADOW\r\n*********************/\n.foxtel-now-box-shadow {\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2) !important; }\n\n/*********************\r\nFONT\r\n*********************/\n@font-face {\n  font-family: \"ProximaNova\";\n  src: url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.woff\") format(\"woff\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.ttf\") format(\"truetype\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.svg#wf\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"ProximaNova-Bold\";\n  src: url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.woff\") format(\"woff\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.ttf\") format(\"truetype\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.svg#wf\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n/*********************\r\nVARIABLE\r\n*********************/\n/*********************\r\nMIXIN\r\n*********************/\n/*********************\r\nCOMMON STYLE\r\n*********************/\n.foxtel-container {\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin: 0 auto; }\n  @media (min-width: 768px) {\n    .foxtel-container {\n      width: 690px;\n      padding-left: 0;\n      padding-right: 0; } }\n  @media (min-width: 992px) {\n    .foxtel-container {\n      width: 930px;\n      padding-left: 0;\n      padding-right: 0; } }\n  @media (min-width: 1200px) {\n    .foxtel-container {\n      width: 1110px;\n      padding-left: 0;\n      padding-right: 0; } }\n\n/*********************\r\nBUTTON STYLE\r\n*********************/\n.foxtel-header__btn--white {\n  display: flex;\n  height: 52px;\n  border-radius: 2px;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  color: #32323c;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-right: 15px;\n  border: 1px solid #bec0c2; }\n  .foxtel-header__btn--white:hover {\n    color: #32323c; }\n\n.foxtel-header__btn--black {\n  display: flex;\n  height: 52px;\n  border-radius: 2px;\n  justify-content: center;\n  align-items: center;\n  background-color: #32323c;\n  color: #fff;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-right: 15px; }\n  .foxtel-header__btn--black:hover {\n    color: #fff; }\n\n.foxtel-now-header {\n  height: 70px;\n  max-width: 1140px;\n  margin-left: auto;\n  margin-right: auto;\n  opacity: 0; }\n  .foxtel-now-header.is-loaded {\n    transition: opacity 100ms ease-in;\n    opacity: 1.0; }\n  .foxtel-now-header.is-logged-in {\n    max-width: none;\n    padding-left: 5%;\n    padding-right: 5%; }\n    @media (min-width: 768px) {\n      .foxtel-now-header.is-logged-in .menu-bar .left-section .menu-item {\n        display: inline-block; } }\n    .foxtel-now-header.is-logged-in .menu-bar .right-section .settings {\n      display: inline-block; }\n    .foxtel-now-header.is-logged-in .menu-bar .right-section .foxtel-now-header__btn-container {\n      display: none; }\n  .foxtel-now-header.log-in .menu-bar .right-section .foxtel-now-header__btn-container {\n    display: none; }\n  .foxtel-now-header .menu-bar {\n    font-family: \"ProximaNova\", arial, sans-serif;\n    min-width: 300px;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n    .foxtel-now-header .menu-bar .left-section {\n      display: inline-block;\n      font-size: 0; }\n      .foxtel-now-header .menu-bar .left-section .logo {\n        height: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        float: left;\n        margin-right: 25px; }\n        .foxtel-now-header .menu-bar .left-section .logo .wysiwyg p {\n          margin-bottom: 0; }\n          .foxtel-now-header .menu-bar .left-section .logo .wysiwyg p img {\n            height: 45px;\n            width: 156px;\n            padding-bottom: 5px; }\n      .foxtel-now-header .menu-bar .left-section .menu-item {\n        display: none;\n        color: #9b9b9b;\n        cursor: pointer;\n        padding: 0;\n        margin: 0 25px;\n        font-size: 18px;\n        position: relative;\n        height: 100%;\n        line-height: 70px;\n        font-weight: 400; }\n        .foxtel-now-header .menu-bar .left-section .menu-item a {\n          transition: color .3s ease;\n          color: #32323C;\n          text-decoration: none; }\n          .foxtel-now-header .menu-bar .left-section .menu-item a:hover {\n            color: black; }\n          .foxtel-now-header .menu-bar .left-section .menu-item a img.kids {\n            padding-bottom: 10px;\n            transition: opacity .3s ease;\n            opacity: 0.7; }\n            .foxtel-now-header .menu-bar .left-section .menu-item a img.kids:hover {\n              opacity: 1.0; }\n    .foxtel-now-header .menu-bar .right-section {\n      -ms-flex-item-align: end;\n      align-self: flex-end;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 100%;\n      box-sizing: border-box; }\n      .foxtel-now-header .menu-bar .right-section .settings {\n        display: none;\n        margin-left: 20px;\n        height: 100%;\n        outline: 0;\n        width: 17px; }\n        @media (max-width: 767px) {\n          .foxtel-now-header .menu-bar .right-section .settings {\n            margin-right: 10px; } }\n        .foxtel-now-header .menu-bar .right-section .settings .settings-icon {\n          vertical-align: middle;\n          cursor: pointer;\n          color: #9b9b9b;\n          transition: color .3s ease;\n          height: 100%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center; }\n        .foxtel-now-header .menu-bar .right-section .settings .dropdown {\n          display: none;\n          margin-left: 5%;\n          position: relative;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          width: 150px; }\n          .foxtel-now-header .menu-bar .right-section .settings .dropdown.open {\n            display: block; }\n          .foxtel-now-header .menu-bar .right-section .settings .dropdown .options {\n            width: 130px;\n            z-index: 101;\n            -webkit-transform: translateX(-102px) translateY(-20px);\n            -ms-transform: translateX(-102px) translateY(-20px);\n            transform: translateX(-102px) translateY(-20px);\n            opacity: 1;\n            pointer-events: auto;\n            position: absolute;\n            transition: opacity .3s ease;\n            text-overflow: ellipsis; }\n            .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box {\n              padding: 0;\n              position: relative;\n              border: 1px solid #32323C;\n              background: white;\n              min-width: 100%;\n              margin-top: 10px; }\n              .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box:before, .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box:after {\n                content: \" \";\n                bottom: 100%;\n                right: 10px;\n                border: solid transparent;\n                height: 0;\n                width: 0;\n                position: absolute;\n                pointer-events: none;\n                border-color: transparent;\n                border-bottom-color: white;\n                border-width: 10px; }\n              .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box:before {\n                border-bottom-color: #32323C;\n                border-width: 12px;\n                right: 8px; }\n              .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box span {\n                text-align: right;\n                color: #32323C;\n                transition: color .1s ease;\n                cursor: pointer;\n                display: block;\n                padding: 5px 0;\n                padding-right: 1em;\n                font-size: 16px; }\n                .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box span.username {\n                  color: black;\n                  font-weight: bold;\n                  word-wrap: break-word; }\n                .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box span.hr {\n                  width: 100%;\n                  border-bottom: 1px solid #32323C;\n                  padding: 0; }\n      .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart {\n        display: none; }\n        .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart .foxtel-now-header__btn-cart__icon {\n          position: relative;\n          display: inline-block;\n          margin-right: 20px;\n          margin-top: 12px; }\n          @media (min-width: 768px) {\n            .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart .foxtel-now-header__btn-cart__icon {\n              margin-right: 50px; } }\n          .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart .foxtel-now-header__btn-cart__icon .foxtel-now-header__btn-cart__icon__quantity {\n            position: absolute;\n            top: -5px;\n            right: -15px;\n            background-color: #FF5050;\n            color: white;\n            border-radius: 50%;\n            width: 30px;\n            height: 30px;\n            text-align: center;\n            font-weight: 700;\n            line-height: 30px; }\n          .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart .foxtel-now-header__btn-cart__icon .icon {\n            display: inline-block;\n            width: 1em;\n            height: 1em;\n            stroke-width: 0;\n            stroke: currentcolor;\n            fill: currentcolor;\n            width: 30px;\n            height: 30px;\n            margin-top: 15px; }\n      .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-container {\n        margin-left: 20px;\n        display: flex;\n        vertical-align: middle;\n        -ms-flex-align: center; }\n\n/*foxtel header breadcrumb scrolling up pop state*/\n.foxtel-now-header-breadcrumb--pop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);\n  z-index: 9999; }\n\n/*********************\r\nBACKGROUND\r\n*********************/\n.foxtel-now-background-green {\n  background-color: #FF5050 !important; }\n\n.foxtel-now-background-black {\n  background-color: black !important; }\n\n.foxtel-now-background-off-white {\n  background-color: #f0f0f0 !important; }\n\n.foxtel-now-background-lightgrey {\n  background-color: #f7f7f7 !important; }\n\n.foxtel-now-background-transparent {\n  background-color: transparent !important;\n  box-shadow: none !important; }\n\n/*********************\r\nCOLOR\r\n*********************/\n.foxtel-now-color-whilte {\n  color: white !important; }\n\n.foxtel-now-color-black {\n  color: black !important; }\n\n.foxtel-now-color-grey {\n  color: #F0EDEB !important; }\n\n.foxtel-now-color-darkgrey {\n  color: #32323C !important; }\n\n.foxtel-now-color-orange {\n  color: #FF5050 !important; }\n\n/*********************\r\nSHADOW\r\n*********************/\n.foxtel-now-box-shadow {\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2) !important; }\n\n/* Store mixins or re-usable classes */\n@keyframes rotating {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n.border--top {\n  border-top: 1px solid #F0EDEB; }\n\n.border--right {\n  border-right: 1px solid #F0EDEB; }\n\n.border--bottom {\n  border-bottom: 1px solid #F0EDEB; }\n\n.border--left {\n  border-left: 1px solid #F0EDEB; }\n\n.border--bold {\n  border-width: 2px; }\n\n.border--black {\n  border-color: #4a4a4a; }\n\n.border--grey {\n  border-color: #F0EDEB; }\n\n.foxtel-now-table-row {\n  display: table-row; }\n\n.foxtel-flex {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.with-underline {\n  text-decoration: underline; }\n\n.hidden {\n  display: none !important; }\n\n.disabled {\n  background-color: #b4b4b4 !important;\n  cursor: default;\n  pointer-events: none;\n  tab-index: -1; }\n\n.h2-sub {\n  font-weight: 400; }\n\n.overlay:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0.2;\n  background: black; }\n\n.ribbon-wrapper {\n  z-index: 2;\n  width: 170px;\n  height: 120px;\n  overflow: hidden;\n  position: absolute;\n  top: -2px;\n  left: -2px; }\n  .ribbon-wrapper .ribbon {\n    color: white;\n    text-align: center;\n    position: relative;\n    padding: 7px 30px 7px 0;\n    float: right;\n    right: -5px;\n    top: 15px;\n    width: 230px;\n    background-color: #FF5050;\n    transform: rotate(-45deg); }\n    .ribbon-wrapper .ribbon:before, .ribbon-wrapper .ribbon:after {\n      content: \"\";\n      border-top: 3px solid scale-lightness(#FF5050, -40%);\n      border-left: 3px solid transparent;\n      border-right: 3px solid transparent;\n      position: absolute;\n      bottom: -3px; }\n    .ribbon-wrapper .ribbon:before {\n      left: 0; }\n    .ribbon-wrapper .ribbon:after {\n      right: 0; }\n\n.foxtel-now-list, .foxtel-now-list--inline {\n  padding-left: 0;\n  margin-top: 1rem;\n  list-style-position: inside;\n  list-style: none; }\n  .foxtel-now-list li, .foxtel-now-list--inline li {\n    color: #32323C;\n    margin-top: 10px; }\n    .foxtel-now-list li:before, .foxtel-now-list--inline li:before {\n      content: \"\\2022   \";\n      color: #FF5050;\n      font-size: 20px; }\n    .foxtel-now-list li p, .foxtel-now-list--inline li p {\n      color: initial;\n      display: inline; }\n\n.foxtel-now-list--inline {\n  display: flex;\n  justify-content: space-between; }\n  @media (max-width: 767px) {\n    .foxtel-now-list--inline {\n      flex-direction: column; } }\n  .foxtel-now-list--inline li {\n    display: inline; }\n\n/* Styles for containers */\n.wysiwyg img {\n  max-width: 100%; }\n\n/* Extend bootstrap/main website typography class | Redefine Foxtel typography class */\nbody {\n  font-family: \"ProximaNova\", arial, sans-serif; }\n\n/*********************\r\nBACKGROUND\r\n*********************/\n.foxtel-now-background-green {\n  background-color: #FF5050 !important; }\n\n.foxtel-now-background-black {\n  background-color: black !important; }\n\n.foxtel-now-background-off-white {\n  background-color: #f0f0f0 !important; }\n\n.foxtel-now-background-lightgrey {\n  background-color: #f7f7f7 !important; }\n\n.foxtel-now-background-transparent {\n  background-color: transparent !important;\n  box-shadow: none !important; }\n\n/*********************\r\nCOLOR\r\n*********************/\n.foxtel-now-color-whilte {\n  color: white !important; }\n\n.foxtel-now-color-black {\n  color: black !important; }\n\n.foxtel-now-color-grey {\n  color: #F0EDEB !important; }\n\n.foxtel-now-color-darkgrey {\n  color: #32323C !important; }\n\n.foxtel-now-color-orange {\n  color: #FF5050 !important; }\n\n/*********************\r\nSHADOW\r\n*********************/\n.foxtel-now-box-shadow {\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2) !important; }\n\n/* Extend bootstrap button class | Redefine Foxtel button class */\n.foxtel-now-btn, .foxtel-now-btn--wide, .foxtel-now-btn--ghost, .foxtel-now-btn--transparent, .foxtel-now-btn--profile {\n  margin: auto;\n  border-style: hidden;\n  display: block;\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  padding: 15px;\n  color: white;\n  background-color: #FF5050;\n  cursor: pointer;\n  width: 100%;\n  max-width: 480px;\n  text-align: center;\n  transition: border 250ms ease, border-radius 250ms ease, background-color 250ms ease, width 250ms ease, height 250ms ease; }\n  .foxtel-now-btn:hover, .foxtel-now-btn--wide:hover, .foxtel-now-btn--ghost:hover, .foxtel-now-btn--transparent:hover, .foxtel-now-btn--profile:hover {\n    text-decoration: none;\n    color: white;\n    opacity: 0.8; }\n  .foxtel-now-btn:focus, .foxtel-now-btn--wide:focus, .foxtel-now-btn--ghost:focus, .foxtel-now-btn--transparent:focus, .foxtel-now-btn--profile:focus {\n    outline: 0; }\n  .foxtel-now-btn.is-loading, .is-loading.foxtel-now-btn--wide, .is-loading.foxtel-now-btn--ghost, .is-loading.foxtel-now-btn--transparent, .is-loading.foxtel-now-btn--profile {\n    color: transparent;\n    background-color: transparent;\n    pointer-events: none;\n    content: \"\";\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background-color: transparent;\n    border: 3px solid #f0f0f0;\n    border-left-color: #FF5050;\n    animation: rotating 2s 250ms linear infinite, in 2s 0 ease-in; }\n  .foxtel-now-btn.is-valid, .is-valid.foxtel-now-btn--wide, .is-valid.foxtel-now-btn--ghost, .is-valid.foxtel-now-btn--transparent, .is-valid.foxtel-now-btn--profile {\n    text-indent: -1000em;\n    width: 100px;\n    height: 40px;\n    margin: auto;\n    padding: 0; }\n    .foxtel-now-btn.is-valid span, .is-valid.foxtel-now-btn--wide span, .is-valid.foxtel-now-btn--ghost span, .is-valid.foxtel-now-btn--transparent span, .is-valid.foxtel-now-btn--profile span {\n      display: none; }\n    .foxtel-now-btn.is-valid:after, .is-valid.foxtel-now-btn--wide:after, .is-valid.foxtel-now-btn--ghost:after, .is-valid.foxtel-now-btn--transparent:after, .is-valid.foxtel-now-btn--profile:after {\n      display: inherit;\n      content: \"\\F00C\";\n      background-image: url(/content/dam/now/icons/check.svg);\n      background-size: 30%;\n      background-position: 50%;\n      background-repeat: no-repeat;\n      width: 100%;\n      height: 100%; }\n  .foxtel-now-btn.is-disabled, .is-disabled.foxtel-now-btn--wide, .is-disabled.foxtel-now-btn--ghost, .is-disabled.foxtel-now-btn--transparent, .is-disabled.foxtel-now-btn--profile {\n    background-color: #BEC0C2;\n    color: #32323C;\n    pointer-events: none; }\n    .foxtel-now-btn.is-disabled:hover, .is-disabled.foxtel-now-btn--wide:hover, .is-disabled.foxtel-now-btn--ghost:hover, .is-disabled.foxtel-now-btn--transparent:hover, .is-disabled.foxtel-now-btn--profile:hover {\n      opacity: 1.0; }\n\n.foxtel-now-card__add-to-card-btn > .foxtel-now-btn, .foxtel-now-card__add-to-card-btn > .foxtel-now-btn--wide, .foxtel-now-card__add-to-card-btn > .foxtel-now-btn--ghost, .foxtel-now-card__add-to-card-btn > .foxtel-now-btn--transparent, .foxtel-now-card__add-to-card-btn > .foxtel-now-btn--profile {\n  font-weight: bold; }\n  .foxtel-now-card__add-to-card-btn > .foxtel-now-btn.enable, .foxtel-now-card__add-to-card-btn > .enable.foxtel-now-btn--wide, .foxtel-now-card__add-to-card-btn > .enable.foxtel-now-btn--ghost, .foxtel-now-card__add-to-card-btn > .enable.foxtel-now-btn--transparent, .foxtel-now-card__add-to-card-btn > .enable.foxtel-now-btn--profile {\n    color: white; }\n  .foxtel-now-card__add-to-card-btn > .foxtel-now-btn.disabled, .foxtel-now-card__add-to-card-btn > .disabled.foxtel-now-btn--wide, .foxtel-now-card__add-to-card-btn > .disabled.foxtel-now-btn--ghost, .foxtel-now-card__add-to-card-btn > .disabled.foxtel-now-btn--transparent, .foxtel-now-card__add-to-card-btn > .disabled.foxtel-now-btn--profile {\n    color: #32323C; }\n\n.foxtel-now-btn--round {\n  margin: auto;\n  border-style: hidden;\n  display: block;\n  border-radius: 5em;\n  -webkit-border-radius: 5em;\n  -moz-border-radius: 5em;\n  -ms-border-radius: 5em;\n  padding: 15px;\n  color: white;\n  background-color: #FF5050;\n  cursor: pointer;\n  width: 100%;\n  max-width: 480px;\n  text-align: center;\n  transition: border 250ms ease, border-radius 250ms ease, background-color 250ms ease, width 250ms ease, height 250ms ease; }\n  .foxtel-now-btn--round:hover {\n    text-decoration: none;\n    color: white;\n    opacity: 0.8; }\n  .foxtel-now-btn--round:focus {\n    outline: 0; }\n  .foxtel-now-btn--round.is-loading {\n    color: transparent;\n    background-color: transparent;\n    pointer-events: none;\n    content: \"\";\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background-color: transparent;\n    border: 3px solid #f0f0f0;\n    border-left-color: #FF5050;\n    animation: rotating 2s 250ms linear infinite, in 2s 0 ease-in; }\n  .foxtel-now-btn--round.is-valid {\n    text-indent: -1000em;\n    width: 100px;\n    height: 40px;\n    margin: auto;\n    padding: 0; }\n    .foxtel-now-btn--round.is-valid span {\n      display: none; }\n    .foxtel-now-btn--round.is-valid:after {\n      display: inherit;\n      content: \"\\F00C\";\n      background-image: url(/content/dam/now/icons/check.svg);\n      background-size: 30%;\n      background-position: 50%;\n      background-repeat: no-repeat;\n      width: 100%;\n      height: 100%; }\n\n.foxtel-now-btn--black {\n  background-color: black;\n  color: white; }\n  .foxtel-now-btn--black:hover {\n    color: white; }\n\n.foxtel-now-btn--wide {\n  display: inline-block;\n  width: auto;\n  padding-left: 50px;\n  padding-right: 50px; }\n\n.foxtel-now-btn--ghost {\n  background: transparent;\n  border: 1px solid #FF5050;\n  color: #32323C; }\n  .foxtel-now-btn--ghost:hover {\n    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n    color: #32323C; }\n\n.foxtel-now-btn--transparent {\n  background-color: transparent;\n  color: black; }\n\n.foxtel-now-btn--profile {\n  background-color: transparent;\n  color: white;\n  border: solid 1px #dedede;\n  padding: 10px; }\n\n/*********************\r\nFORM VARIABLE\r\n*********************/\n.foxtel-now-form-container {\n  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.15);\n  /* Parsley classes */\n  /* Form classes */\n  font-family: \"ProximaNova\",arial,sans-serif;\n  font-size: 18px;\n  color: #666666;\n  padding: 40px;\n  border-radius: 4px;\n  /* Base for label styling */\n  /* checked mark aspect */\n  /* checked mark aspect changes */\n  /* disabled checkbox */\n  /* hover style just for information */ }\n  .foxtel-now-form-container input::-webkit-input-placeholder {\n    color: transparent; }\n  .foxtel-now-form-container input::-moz-placeholder {\n    color: transparent; }\n  .foxtel-now-form-container input:-ms-input-placeholder {\n    color: transparent; }\n  .foxtel-now-form-container input:focus::-webkit-input-placeholder {\n    color: #32323C; }\n  .foxtel-now-form-container input:focus::-moz-placeholder {\n    color: #32323C; }\n  .foxtel-now-form-container input:focus:-ms-input-placeholder {\n    color: #32323C; }\n  .foxtel-now-form-container .parsley-error {\n    border: solid 0.5px #b60000; }\n  .foxtel-now-form-container .parsley-errors-list {\n    color: #b60000;\n    list-style: none;\n    display: table-row; }\n    .foxtel-now-form-container .parsley-errors-list li {\n      color: #da6e2f;\n      font-size: 12px; }\n  .foxtel-now-form-container .field-description {\n    margin-top: -1rem; }\n  @media (max-width: 767px) {\n    .foxtel-now-form-container {\n      padding: 20px; } }\n  .foxtel-now-form-container .foxtel-now-form-container__tab-group {\n    list-style: none;\n    padding: 0;\n    margin: 0 0 40px 0; }\n    .foxtel-now-form-container .foxtel-now-form-container__tab-group:after {\n      content: \"\";\n      display: table;\n      clear: both; }\n    .foxtel-now-form-container .foxtel-now-form-container__tab-group li a {\n      display: block;\n      text-decoration: none;\n      padding: 15px;\n      background: rgba(160, 179, 176, 0.25);\n      color: #a0b3b0;\n      font-size: 20px;\n      float: left;\n      width: 50%;\n      text-align: center;\n      cursor: pointer;\n      transition: .5s ease; }\n      .foxtel-now-form-container .foxtel-now-form-container__tab-group li a:hover {\n        background: #179b77;\n        color: #ffffff; }\n    .foxtel-now-form-container .foxtel-now-form-container__tab-group .active a {\n      background: #1ab188;\n      color: #ffffff; }\n  .foxtel-now-form-container label {\n    position: absolute;\n    transform: translateY(6px);\n    left: 13px;\n    top: 7px;\n    color: lightgrey;\n    transition: all 0.25s ease;\n    -webkit-backface-visibility: hidden;\n    pointer-events: none; }\n    .foxtel-now-form-container label .req {\n      margin: 2px;\n      color: #1ab188; }\n    .foxtel-now-form-container label.checkbox-label {\n      margin: 0.5rem 0.75rem;\n      top: 0;\n      margin-bottom: 1.2em; }\n  .foxtel-now-form-container label.active {\n    transform: translateY(-5px);\n    left: 12px;\n    font-size: 12px;\n    color: initial; }\n    .foxtel-now-form-container label.active .req {\n      opacity: 0; }\n  .foxtel-now-form-container input, .foxtel-now-form-container textarea {\n    background: none;\n    background-image: none;\n    border: solid 0.5px #999999;\n    border-radius: 0;\n    height: 3em;\n    transition: border-color .25s ease, box-shadow .25s ease; }\n    .foxtel-now-form-container input:focus, .foxtel-now-form-container textarea:focus {\n      outline: 0;\n      border-color: initial; }\n    .foxtel-now-form-container input::-ms-clear, .foxtel-now-form-container textarea::-ms-clear {\n      display: none; }\n  .foxtel-now-form-container textarea {\n    padding: 0; }\n  .foxtel-now-form-container .dropdown.open .custom-select {\n    background-image: url(/content/dam/now/icons/arrow-top.svg); }\n  .foxtel-now-form-container .dropdown .custom-select {\n    border: solid 0.5px #999999;\n    border-radius: 0;\n    transition: border-color .25s ease, box-shadow .25s ease;\n    width: 100%;\n    font-size: 90%;\n    -webkit-appearance: listbox;\n    white-space: normal;\n    min-height: 3.4em;\n    text-align: left;\n    background-image: url(/content/dam/now/icons/arrow-bottom.svg);\n    background-size: 12px 10px; }\n    .foxtel-now-form-container .dropdown .custom-select:focus {\n      outline: 0;\n      border-color: initial; }\n    .foxtel-now-form-container .dropdown .custom-select span {\n      display: inline-block;\n      text-align: left;\n      margin-bottom: initial; }\n  .foxtel-now-form-container .dropdown .dropdown-menu {\n    width: 100%; }\n  .foxtel-now-form-container .dropdown .dropdown-item {\n    white-space: normal; }\n  .foxtel-now-form-container .dropdown .dropdown-toggle::after {\n    content: \"\";\n    display: none; }\n  .foxtel-now-form-container .dropdown .show > .dropdown-menu {\n    width: 100%; }\n  .foxtel-now-form-container [type=\"checkbox\"]:not(:checked),\n  .foxtel-now-form-container [type=\"checkbox\"]:checked {\n    position: absolute;\n    left: -9999px; }\n  .foxtel-now-form-container [type=\"checkbox\"]:not(:checked) + label,\n  .foxtel-now-form-container [type=\"checkbox\"]:checked + label {\n    position: relative;\n    padding-left: 2.95em;\n    cursor: pointer;\n    left: initial;\n    color: initial;\n    pointer-events: auto; }\n  .foxtel-now-form-container [type=\"checkbox\"]:not(:checked) + label:before,\n  .foxtel-now-form-container [type=\"checkbox\"]:checked + label:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 30px;\n    height: 30px;\n    border: 1px solid #999999;\n    background: #fff;\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); }\n  .foxtel-now-form-container [type=\"checkbox\"]:not(:checked) + label:after,\n  .foxtel-now-form-container [type=\"checkbox\"]:checked + label:after {\n    content: '\\2714';\n    position: absolute;\n    top: .7em;\n    left: .7em;\n    font-size: .8em;\n    line-height: 0.8;\n    color: white;\n    transition: all .2s; }\n  .foxtel-now-form-container [type=\"checkbox\"]:not(:checked) + label:after {\n    opacity: 0;\n    transform: scale(0); }\n  .foxtel-now-form-container [type=\"checkbox\"]:checked + label:after {\n    opacity: 1;\n    transform: scale(1); }\n  .foxtel-now-form-container [type=\"checkbox\"]:checked + label:before {\n    background: #FF5050; }\n  .foxtel-now-form-container [type=\"checkbox\"]:disabled:not(:checked) + label:before,\n  .foxtel-now-form-container [type=\"checkbox\"]:disabled:checked + label:before {\n    box-shadow: none;\n    border-color: #999999;\n    background-color: #ddd; }\n  .foxtel-now-form-container [type=\"checkbox\"]:disabled:checked + label:after {\n    color: #999; }\n  .foxtel-now-form-container [type=\"checkbox\"]:disabled + label {\n    color: #aaa; }\n  .foxtel-now-form-container [type=\"checkbox\"] + label:hover:before {\n    border: 2px solid #4778d9 !important; }\n  .foxtel-now-form-container .field-wrap {\n    position: relative;\n    align-self: flex-start; }\n    .foxtel-now-form-container .field-wrap .input-icon {\n      position: absolute;\n      top: 12px;\n      right: 20px; }\n      .foxtel-now-form-container .field-wrap .input-icon .icon {\n        display: inline-block;\n        width: 1em;\n        height: 1em; }\n        .foxtel-now-form-container .field-wrap .input-icon .icon:hover path:first-child {\n          fill: var(--color1, black); }\n        .foxtel-now-form-container .field-wrap .input-icon .icon:hover path:last-child {\n          stroke: var(--color1, black); }\n      .foxtel-now-form-container .field-wrap .input-icon .icon-Show-password {\n        width: 1.5em; }\n      .foxtel-now-form-container .field-wrap .input-icon img {\n        opacity: 0.5; }\n        .foxtel-now-form-container .field-wrap .input-icon img:hover {\n          opacity: 1; }\n        .foxtel-now-form-container .field-wrap .input-icon img.inactive {\n          display: none; }\n    .foxtel-now-form-container .field-wrap .show-password-target {\n      cursor: pointer;\n      top: 17px; }\n    .foxtel-now-form-container .field-wrap .active {\n      opacity: 1 !important; }\n    .foxtel-now-form-container .field-wrap .tooltips-target {\n      cursor: pointer; }\n      .foxtel-now-form-container .field-wrap .tooltips-target:hover {\n        opacity: 1; }\n    .foxtel-now-form-container .field-wrap .tooltips-container {\n      position: absolute;\n      bottom: 65px;\n      right: 2px;\n      opacity: 0; }\n    .foxtel-now-form-container .field-wrap.required:after {\n      content: \"*\";\n      color: red;\n      position: absolute;\n      top: 5px;\n      right: 25px; }\n  .foxtel-now-form-container .button {\n    border: 0;\n    outline: none;\n    border-radius: 5rem;\n    padding: 15px 0;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: .1em;\n    background: #1ab188;\n    color: #ffffff;\n    transition: all 0.5s ease;\n    -webkit-appearance: none; }\n    .foxtel-now-form-container .button:hover, .foxtel-now-form-container .button:focus {\n      background: #179b77; }\n  .foxtel-now-form-container .button-block {\n    display: block;\n    width: 100%; }\n  .foxtel-now-form-container .forgot {\n    margin-top: -20px;\n    text-align: right; }\n  .foxtel-now-form-container sub {\n    line-height: normal; }\n  .foxtel-now-form-container .form-control--has-button {\n    padding-right: 160px; }\n  .foxtel-now-form-container .password-edit {\n    position: absolute;\n    top: 0;\n    right: 0; }\n    .foxtel-now-form-container .password-edit .btn {\n      margin-top: 20px;\n      border-radius: 0; }\n    .foxtel-now-form-container .password-edit .btn {\n      background-color: white;\n      margin-top: 0;\n      height: 3em;\n      line-height: 3em;\n      padding: 0 20px; }\n  .foxtel-now-form-container .choices .choices__inner {\n    border: solid 0.5px #999999;\n    height: 60px;\n    border-radius: 0;\n    background-color: white; }\n    .foxtel-now-form-container .choices .choices__inner .choices__list--single {\n      padding-left: 8px;\n      font-size: 19px;\n      color: lightgrey; }\n      .foxtel-now-form-container .choices .choices__inner .choices__list--single [aria-selected=true] {\n        color: #32323C; }\n  .foxtel-now-form-container .choices.is-focused .choices__inner .choices__list--single {\n    color: #32323C; }\n\n/* Requirement specific styles */\n#foxtel-now-credit-card-details-form {\n  display: none; }\n\n/* Styles for all icons */\n[class^='icon-'] {\n  cursor: pointer; }\n\n/* Extend bootstrap modal class | Redefine Foxtel modal class */\n.modal.foxtel-now-modal .modal-dialog {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 auto; }\n  .modal.foxtel-now-modal .modal-dialog .modal-content {\n    border-radius: 0;\n    border: 1px solid #F0EDEB;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); }\n    .modal.foxtel-now-modal .modal-dialog .modal-content .modal-body {\n      padding: 50px; }\n      .modal.foxtel-now-modal .modal-dialog .modal-content .modal-body h1,\n      .modal.foxtel-now-modal .modal-dialog .modal-content .modal-body p {\n        color: #32323C;\n        margin-bottom: 30px; }\n\n.modal-backdrop.foxtel-now-modal-backdrop {\n  background-color: white; }\n\n.foxtel-now-cinematic-call-to-action {\n  color: white; }\n  @media (max-width: 767px) {\n    .foxtel-now-cinematic-call-to-action {\n      text-align: center; } }\n  .foxtel-now-cinematic-call-to-action h1 {\n    font-size: 25px;\n    margin-bottom: 20px; }\n    @media (min-width: 768px) {\n      .foxtel-now-cinematic-call-to-action h1 {\n        font-size: 40px; } }\n  .foxtel-now-cinematic-call-to-action h3 {\n    font-size: 16px;\n    margin-bottom: 20px;\n    font-weight: 300; }\n  .foxtel-now-cinematic-call-to-action a {\n    background-color: #FF5050;\n    color: white; }\n\n/* Extend Bootstrap album.scss card class */\n.foxtel-now-album {\n  background: transparent; }\n\n.foxtel-now-card {\n  width: 376px;\n  height: 465px;\n  padding: 15px;\n  background-color: white;\n  border: solid 2px #f0f0f0; }\n  .foxtel-now-card:hover {\n    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2); }\n  .foxtel-now-card.is-disabled:hover {\n    box-shadow: none;\n    border: solid 2px #f0f0f0; }\n  .foxtel-now-card .v.enable {\n    color: black; }\n    .foxtel-now-card .v.enable span:before {\n      content: '+';\n      padding-right: 10px; }\n  .foxtel-now-card .foxtel-now-card__image-wrapper {\n    text-align: center;\n    margin-bottom: 20px; }\n    .foxtel-now-card .foxtel-now-card__image-wrapper .foxtel-now-card__image-wrapper__promo {\n      text-align: left;\n      color: #4a4a4a;\n      height: 36px;\n      display: table;\n      margin-left: -15px;\n      padding-left: 15px;\n      padding-right: 35px;\n      margin-bottom: 15px; }\n      .foxtel-now-card .foxtel-now-card__image-wrapper .foxtel-now-card__image-wrapper__promo p {\n        margin-top: 1rem;\n        display: table-cell;\n        vertical-align: middle; }\n    .foxtel-now-card .foxtel-now-card__image-wrapper figure {\n      width: 100%;\n      height: 208px; }\n      .foxtel-now-card .foxtel-now-card__image-wrapper figure img {\n        width: 100%; }\n    .foxtel-now-card .foxtel-now-card__image-wrapper figcaption {\n      text-align: right;\n      color: #BEC0C2; }\n  .foxtel-now-card .foxtel-now-card__title-wrapper .foxtel-now-card__title {\n    color: white;\n    display: flex;\n    justify-content: space-between; }\n    .foxtel-now-card .foxtel-now-card__title-wrapper .foxtel-now-card__title p {\n      margin-bottom: 0; }\n  .foxtel-now-card .foxtel-now-card__title-wrapper .foxtel-now-card__title--middle {\n    vertical-align: middle; }\n  .foxtel-now-card .foxtel-now-card__title-wrapper .foxtel-now-card__title__name {\n    display: inline;\n    color: #282828; }\n  .foxtel-now-card .foxtel-now-card__title-wrapper .foxtel-now-card__title__link a {\n    color: #4a4a4a;\n    text-decoration: underline; }\n  .foxtel-now-card .foxtel-now-card__title-wrapper .foxtel-now-card__title__price {\n    color: #282828;\n    margin-bottom: 0; }\n  .foxtel-now-card .foxtel-now-card__legal-text-wrapper {\n    color: #BEC0C2;\n    line-height: 1em;\n    margin-top: 1em; }\n  .foxtel-now-card .foxtel-now-price-symbol sup {\n    vertical-align: sub;\n    padding-right: 5px; }\n  .foxtel-now-card .foxtel-now-price-symbol sub {\n    font-size: 10px;\n    bottom: 0;\n    left: 0; }\n  .foxtel-now-card.foxtel-now-price-symbol sup {\n    vertical-align: sub;\n    padding-right: 5px; }\n  .foxtel-now-card.foxtel-now-price-symbol sub {\n    font-size: 10px;\n    bottom: 0;\n    left: 0; }\n  .foxtel-now-card .foxtel-now-btn.enable, .foxtel-now-card .enable.foxtel-now-btn--wide, .foxtel-now-card .enable.foxtel-now-btn--ghost, .foxtel-now-card .enable.foxtel-now-btn--transparent, .foxtel-now-card .enable.foxtel-now-btn--profile {\n    color: black; }\n\n.foxtel-now-card--myaccount {\n  width: 376px;\n  height: 465px;\n  padding: 15px;\n  background-color: white;\n  border: solid 2px #f0f0f0;\n  width: inherit;\n  height: 204px;\n  margin-bottom: 27px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer; }\n  .foxtel-now-card--myaccount:hover {\n    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2); }\n  .foxtel-now-card--myaccount.is-disabled:hover {\n    box-shadow: none;\n    border: solid 2px #f0f0f0; }\n  .foxtel-now-card--myaccount .v.enable {\n    color: black; }\n    .foxtel-now-card--myaccount .v.enable span:before {\n      content: '+';\n      padding-right: 10px; }\n  .foxtel-now-card--myaccount .foxtel-now-card__image-wrapper {\n    text-align: center;\n    margin-bottom: 20px; }\n    .foxtel-now-card--myaccount .foxtel-now-card__image-wrapper .foxtel-now-card__image-wrapper__promo {\n      text-align: left;\n      color: #4a4a4a;\n      height: 36px;\n      display: table;\n      margin-left: -15px;\n      padding-left: 15px;\n      padding-right: 35px;\n      margin-bottom: 15px; }\n      .foxtel-now-card--myaccount .foxtel-now-card__image-wrapper .foxtel-now-card__image-wrapper__promo p {\n        margin-top: 1rem;\n        display: table-cell;\n        vertical-align: middle; }\n    .foxtel-now-card--myaccount .foxtel-now-card__image-wrapper figure {\n      width: 100%;\n      height: 208px; }\n      .foxtel-now-card--myaccount .foxtel-now-card__image-wrapper figure img {\n        width: 100%; }\n    .foxtel-now-card--myaccount .foxtel-now-card__image-wrapper figcaption {\n      text-align: right;\n      color: #BEC0C2; }\n  .foxtel-now-card--myaccount .foxtel-now-card__title-wrapper .foxtel-now-card__title {\n    color: white;\n    display: flex;\n    justify-content: space-between; }\n    .foxtel-now-card--myaccount .foxtel-now-card__title-wrapper .foxtel-now-card__title p {\n      margin-bottom: 0; }\n  .foxtel-now-card--myaccount .foxtel-now-card__title-wrapper .foxtel-now-card__title--middle {\n    vertical-align: middle; }\n  .foxtel-now-card--myaccount .foxtel-now-card__title-wrapper .foxtel-now-card__title__name {\n    display: inline;\n    color: #282828; }\n  .foxtel-now-card--myaccount .foxtel-now-card__title-wrapper .foxtel-now-card__title__link a {\n    color: #4a4a4a;\n    text-decoration: underline; }\n  .foxtel-now-card--myaccount .foxtel-now-card__title-wrapper .foxtel-now-card__title__price {\n    color: #282828;\n    margin-bottom: 0; }\n  .foxtel-now-card--myaccount .foxtel-now-card__legal-text-wrapper {\n    color: #BEC0C2;\n    line-height: 1em;\n    margin-top: 1em; }\n  .foxtel-now-card--myaccount .foxtel-now-price-symbol sup {\n    vertical-align: sub;\n    padding-right: 5px; }\n  .foxtel-now-card--myaccount .foxtel-now-price-symbol sub {\n    font-size: 10px;\n    bottom: 0;\n    left: 0; }\n  .foxtel-now-card--myaccount .foxtel-now-card--myaccount__content > img {\n    width: 80px;\n    height: 80px; }\n  .foxtel-now-card--myaccount .foxtel-now-card--myaccount__content > p {\n    text-align: center;\n    margin-top: 20px; }\n  .foxtel-now-card--myaccount.is-disabled {\n    cursor: none;\n    pointer-events: none; }\n    .foxtel-now-card--myaccount.is-disabled .foxtel-now-card--myaccount__content > p {\n      opacity: 0.5; }\n\n.foxtel-now-card--basic {\n  border-radius: 0;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  -ms-border-radius: 0; }\n  .foxtel-now-card--basic .foxtel-now-card__title {\n    background-color: transparent; }\n  .foxtel-now-card--basic .foxtel-now-card__title__price {\n    font-size: 29px; }\n\n/* Extend Bootstrap jumbotron class */\n.foxtel-now-jumbotron {\n  color: white;\n  border-radius: 2px;\n  background-color: #32323C;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  box-shadow: 0 2px 2px 0 rgba(71, 80, 109, 0.2);\n  -webkit-box-shadow: 2px 3px 10px 0px #ccc;\n  -moz-box-shadow: 2px 3px 10px 0px #ccc;\n  box-shadow: 2px 3px 10px 0px #ccc;\n  z-index: 99999;\n  top: 0; }\n  .foxtel-now-jumbotron .shoppingCart-nav-up {\n    padding-top: -80px; }\n\n@media (max-width: 767px) {\n  .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description,\n  .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary {\n    display: table-row; } }\n\n.foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description {\n  padding: 0 20px 0 0; }\n\n.foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary {\n  display: -webkit-box;\n  /* OLD - iOS 6-, Safari 3.1-6 */\n  display: -moz-box;\n  /* OLD - Firefox 19- (buggy but mostly works) */\n  display: -ms-flexbox;\n  /* TWEENER - IE 10 */\n  display: -webkit-flex;\n  /* NEW - Chrome */\n  display: flex;\n  flex-direction: row;\n  flex-wrap: inherit; }\n\n.foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description {\n  float: left; }\n  .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper {\n    display: table; }\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-title-wrapper {\n      display: table-cell; }\n      @media (max-width: 767px) {\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-title-wrapper {\n          display: table-row; } }\n      .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-title-wrapper p {\n        margin-right: 20px; }\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper {\n      display: table-cell; }\n      .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag,\n      .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--ghost,\n      .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--transparent {\n        display: inline-block;\n        color: black;\n        border-radius: 50px;\n        background-color: white;\n        padding: 10px 30px;\n        white-space: nowrap; }\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag sub,\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--ghost sub,\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--transparent sub {\n          bottom: -5px;\n          font-size: 36px;\n          left: 10px;\n          cursor: pointer;\n          padding: 0 10px; }\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag:hover sub,\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--ghost:hover sub,\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--transparent:hover sub {\n          background: #F0EDEB;\n          border-radius: 1em; }\n      .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--ghost {\n        border: 1px dashed white;\n        background: transparent;\n        color: white; }\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--ghost:hover {\n          background: white;\n          color: black;\n          border: none; }\n          .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--ghost:hover sub {\n            padding: 0 13px; }\n      .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--transparent {\n        display: none;\n        background: transparent;\n        color: white;\n        padding: 10px; }\n\n.foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary {\n  border-left: solid 1px rgba(255, 255, 255, 0.2); }\n  @media (max-width: 767px) {\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary {\n      border: none;\n      border-top: solid 1px rgba(255, 255, 255, 0.2); } }\n  .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost,\n  .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout {\n    display: table;\n    width: 100%;\n    min-width: 258px;\n    padding: 5px 0; }\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost sub,\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout sub {\n      font-weight: normal;\n      bottom: 0;\n      font-size: 0.6em;\n      margin-left: 0.5em; }\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost sup,\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout sup {\n      font-weight: normal; }\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost p,\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout p {\n      display: table-cell; }\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost p:last-child,\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout p:last-child {\n      text-align: right; }\n  .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost.total {\n    font-family: \"ProximaNova-Bold\", arial, sans-serif; }\n    @media (max-width: 767px) {\n      .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost.total {\n        font-family: \"ProximaNova\", arial, sans-serif; }\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost.total p:last-child {\n          font-size: 2em; } }\n  .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout {\n    font-size: 18px; }\n\n.foxtel-now-jumbotron--minimized {\n  position: fixed;\n  left: 0;\n  right: 0; }\n  @media (max-width: 767px) {\n    .foxtel-now-jumbotron--minimized {\n      padding-top: 0; } }\n  .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__description {\n    width: 60%; }\n    @media (max-width: 767px) {\n      .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__description {\n        display: none; } }\n    .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag {\n      display: none; }\n    .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper p:first-child,\n    .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper p:nth-child(2),\n    .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper p.foxtel-now-jumbotron__pack-tag--transparent {\n      display: inline-block; }\n  .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost {\n    display: none;\n    flex: 0 1 100%; }\n    .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost.total {\n      flex: 1 0 50%;\n      display: -webkit-box;\n      /* OLD - iOS 6-, Safari 3.1-6 */\n      display: -moz-box;\n      /* OLD - Firefox 19- (buggy but mostly works) */\n      display: -ms-flexbox;\n      /* TWEENER - IE 10 */\n      display: -webkit-flex;\n      /* NEW - Chrome */\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      align-items: center; }\n      @media (max-width: 767px) {\n        .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost.total p:last-child {\n          font-size: inherit; } }\n    @media (max-width: 767px) {\n      .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost {\n        width: initial;\n        padding-top: 0;\n        padding-bottom: 0; }\n        .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost p {\n          margin-bottom: 0; } }\n    .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost p {\n      display: inline-block; }\n    .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost p:last-child {\n      white-space: nowrap; }\n  .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout {\n    display: table-cell;\n    flex: 1 0 50%; }\n    @media (max-width: 767px) {\n      .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout .foxtel-now-btn, .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout .foxtel-now-btn--wide, .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout .foxtel-now-btn--ghost, .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout .foxtel-now-btn--transparent, .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout .foxtel-now-btn--profile {\n        margin-top: 15px; } }\n  .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost,\n  .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout {\n    min-width: initial; }\n\n.foxtel-now-progress-bar-cont {\n  width: 576px;\n  left: calc(50% - 288px);\n  padding: 0;\n  margin: 50px auto;\n  color: #F0EDEB; }\n  @media (max-width: 767px) {\n    .foxtel-now-progress-bar-cont {\n      -ms-transform: rotate(90deg);\n      /* IE 9 */\n      -webkit-transform: rotate(90deg);\n      /* Chrome, Safari, Opera */\n      transform: rotate(90deg);\n      width: 135px;\n      margin-top: 100px;\n      margin-bottom: 100px;\n      margin-left: -30px; } }\n  .foxtel-now-progress-bar-cont .foxtel-now-cont-flex-box {\n    display: flex;\n    justify-content: space-between;\n    height: 0; }\n  .foxtel-now-progress-bar-cont .foxtel-now-progress-bar {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    width: 100%;\n    height: 3px;\n    margin: 0 auto; }\n    @media (max-width: 767px) {\n      .foxtel-now-progress-bar-cont .foxtel-now-progress-bar {\n        width: 146px; } }\n  .foxtel-now-progress-bar-cont .foxtel-now-progress-bar-dot {\n    height: 10px;\n    width: 10px;\n    opacity: 0;\n    border-radius: 100%;\n    border: 3px solid grey;\n    background: grey;\n    cursor: pointer;\n    transition: all 0.4s ease-in-out; }\n  .foxtel-now-progress-bar-cont .foxtel-now-progress-bar-dot-wrapper {\n    position: relative;\n    width: 0;\n    top: -50px; }\n    .foxtel-now-progress-bar-cont .foxtel-now-progress-bar-dot-wrapper p:first-child {\n      min-width: 100px;\n      white-space: nowrap; }\n      @media (max-width: 767px) {\n        .foxtel-now-progress-bar-cont .foxtel-now-progress-bar-dot-wrapper p:first-child {\n          transform: rotate(-90deg);\n          margin-left: -45px;\n          padding-left: 50px;\n          margin-top: -1px; } }\n  @media (min-width: 768px) {\n    .foxtel-now-progress-bar-cont .second p:first-child {\n      margin-left: -20px; } }\n  @media (min-width: 768px) {\n    .foxtel-now-progress-bar-cont .third p:first-child {\n      margin-left: -30px; } }\n  @media (min-width: 768px) {\n    .foxtel-now-progress-bar-cont .fourth p:first-child {\n      margin-left: -30px; } }\n  .foxtel-now-progress-bar-cont progress[value]::-webkit-progress-value {\n    /* Changes line color */\n    background-color: #FF5050;\n    -webkit-transition: all 0.4s ease-in-out;\n    -moz-transition: all 0.4s ease-in-out;\n    -o-transition: all 0.4s ease-in-out;\n    transition: all 0.4s ease-in-out; }\n  .foxtel-now-progress-bar-cont progress[value]::-webkit-progress-bar {\n    /* Changes background color */\n    background-color: #F0EDEB; }\n  .foxtel-now-progress-bar-cont .border-change {\n    color: black;\n    border-color: grey;\n    -webkit-transition: all 0.4s ease-in-out;\n    -moz-transition: all 0.4s ease-in-out;\n    -o-transition: all 0.4s ease-in-out;\n    transition: all 0.4s ease-in-out; }\n\n.pack-content-programs {\n  background-color: #32323C;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  font-weight: 300;\n  margin-bottom: 70px; }\n  .pack-content-programs h3,\n  .pack-content-programs h4 {\n    font-weight: 300; }\n  .pack-content-programs h3 {\n    font-size: 16px;\n    color: white;\n    margin-bottom: 20px; }\n    @media (min-width: 768px) {\n      .pack-content-programs h3 {\n        margin-bottom: 40px; } }\n  .pack-content-programs .pack-content__item {\n    position: relative;\n    margin-bottom: 20px; }\n    .pack-content-programs .pack-content__item .pack-content__item__inner {\n      border: 1px solid transparent;\n      transition: margin-top 100ms linear;\n      background-color: #32323C; }\n      .pack-content-programs .pack-content__item .pack-content__item__inner.is-active {\n        z-index: 1;\n        position: absolute;\n        top: 0;\n        left: 0;\n        border-color: #44444d;\n        margin-top: -30px; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner.is-active .pack-content__item__details {\n          height: auto; }\n          .pack-content-programs .pack-content__item .pack-content__item__inner.is-active .pack-content__item__details .pack-content__item__description,\n          .pack-content-programs .pack-content__item .pack-content__item__inner.is-active .pack-content__item__details .pack-content__item__link {\n            display: block; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner.is-active .pack-content__item__image {\n          margin-bottom: 30px; }\n      .pack-content-programs .pack-content__item .pack-content__item__inner h4,\n      .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__channel,\n      .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__description {\n        font-size: 12px; }\n        @media (min-width: 992px) {\n          .pack-content-programs .pack-content__item .pack-content__item__inner h4,\n          .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__channel,\n          .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__description {\n            font-size: 14px; } }\n      .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__image {\n        margin-bottom: 20px;\n        transition: margin-bottom 75ms linear; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__image img {\n          max-width: 100%; }\n      .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details {\n        height: 80px; }\n        @media (min-width: 768px) {\n          .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details {\n            padding: 0 10px 20px 10px;\n            height: 110px; } }\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details h4 {\n          color: white;\n          margin-bottom: 5px; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details .pack-content__item__channel,\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details p {\n          color: #F0EDEB; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details .pack-content__item__description,\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details .pack-content__item__link {\n          display: none; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details .pack-content__item__description,\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details .pack-content__item__channel {\n          opacity: 0.7; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details .pack-content__item__channel {\n          margin-bottom: 20px; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details p {\n          font-size: 14px;\n          margin-bottom: 10px; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details a {\n          color: white;\n          text-decoration: underline;\n          font-size: 14px;\n          font-weight: 400;\n          text-decoration: none; }\n          .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details a:hover {\n            text-decoration: underline; }\n          .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details a:after {\n            display: inline-block;\n            content: \" \";\n            background-image: url(/content/dam/now/Icons/arrow-right-white.svg);\n            background-repeat: no-repeat;\n            background-size: 100%;\n            width: 11px;\n            height: 11px;\n            margin-left: 4px; }\n\n.pack-content-channels h4 {\n  font-size: 12px;\n  color: #32323C; }\n\n.pack-content-channels ul.channel-icons {\n  padding-left: 0;\n  margin-bottom: 30px; }\n  @media (min-width: 768px) {\n    .pack-content-channels ul.channel-icons {\n      margin-bottom: 70px; } }\n  .pack-content-channels ul.channel-icons li {\n    list-style: none;\n    display: inline-block;\n    padding: 30px 40px; }\n    .pack-content-channels ul.channel-icons li img {\n      max-width: 100%; }\n  @media (min-width: 768px) {\n    .pack-content-channels ul.channel-icons.channel-icons--universal li {\n      padding: 20px 25px; } }\n  @media (min-width: 992px) {\n    .pack-content-channels ul.channel-icons.channel-icons--universal li {\n      padding: 20px 15px; } }\n\n/* Pack Summary styles */\n.foxtel-now-pack-summary-container {\n  font-family: \"ProximaNova\",arial,sans-serif;\n  font-size: 18px;\n  padding: 40px;\n  color: #666666; }\n  @media (max-width: 767px) {\n    .foxtel-now-pack-summary-container {\n      padding: 20px; } }\n  .foxtel-now-pack-summary-container .row {\n    font-size: 22px; }\n  .foxtel-now-pack-summary-container .foxtel-now-pack-summary-container__pack-wrapper .row .foxtel-now-pack-summary-container__pack-wrapper__price {\n    text-align: right; }\n  .foxtel-now-pack-summary-container .foxtel-now-pack-summary-container__pack-wrapper .row sub {\n    margin-top: -10px;\n    margin-bottom: 10px;\n    line-height: normal; }\n\n.foxtel-now-pack-details {\n  position: relative;\n  margin-bottom: 50px; }\n  .foxtel-now-pack-details h3 {\n    margin-bottom: 20px; }\n  .foxtel-now-pack-details p {\n    margin-bottom: 20px; }\n  @media (max-width: 767px) {\n    .foxtel-now-pack-details .foxtel-now-pack-details__meta {\n      text-align: center; } }\n  @media (min-width: 768px) {\n    .foxtel-now-pack-details .foxtel-now-pack-details__meta {\n      position: relative;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center; } }\n  .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__inner {\n    padding-right: 50px; }\n  .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__offers {\n    margin-bottom: 20px; }\n  .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__description {\n    font-size: 14px;\n    color: black;\n    margin-bottom: 30px; }\n  .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__actions {\n    margin-bottom: 10px;\n    position: relative; }\n    .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__actions .btn {\n      display: inline-block;\n      position: relative;\n      width: 80%;\n      max-width: 200px;\n      margin-bottom: 30px; }\n      @media (min-width: 768px) {\n        .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__actions .btn {\n          margin-right: 20px;\n          width: auto;\n          margin-bottom: 0; } }\n      .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__actions .btn.active {\n        color: white; }\n      .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__actions .btn.slide-bg {\n        display: none;\n        position: absolute;\n        top: 0;\n        height: 100%;\n        background-color: #FF5050; }\n  .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__extra {\n    color: #32323C;\n    font-size: 11px; }\n  .foxtel-now-pack-details .foxtel-now-pack-details__image {\n    margin-bottom: 50px; }\n    .foxtel-now-pack-details .foxtel-now-pack-details__image img {\n      max-width: 100%;\n      display: block;\n      margin: 0 auto; }\n\n.foxtel-now-pack-list {\n  padding-left: 0;\n  margin-bottom: 100px; }\n\n.foxtel-now-pack-list__item {\n  margin-bottom: 30px;\n  list-style: none; }\n  .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner {\n    position: relative;\n    border-radius: 3px;\n    border: 1px solid transparent; }\n    .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner.as-text-link {\n      display: none;\n      height: 100%;\n      min-height: 150px;\n      border: 1px solid #32323C; }\n      @media (min-width: 768px) {\n        .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner.as-text-link {\n          display: block; } }\n      .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner.as-text-link h3 {\n        font-weight: 400;\n        color: #32323C;\n        bottom: 50%;\n        left: 0%;\n        width: 100%;\n        text-align: center;\n        transform: translateY(50%);\n        font-size: 26px; }\n        .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner.as-text-link h3 .icon {\n          font-weight: 300;\n          padding-left: 5px; }\n    .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner.overlay:after {\n      opacity: 0.4;\n      border-radius: 3px; }\n    @media (max-width: 767px) {\n      .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner .ribbon {\n        display: none; } }\n    .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner img {\n      width: 100%;\n      border-radius: 3px; }\n    .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner h3,\n    .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner .legal {\n      z-index: 1;\n      position: absolute; }\n    .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner h3 {\n      margin-bottom: 0;\n      bottom: 15px;\n      left: 15px;\n      color: white;\n      font-size: 18px;\n      font-weight: 700; }\n    .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner .legal {\n      bottom: 15px;\n      right: 20px;\n      color: white;\n      font-size: 11px;\n      opacity: 0.5;\n      font-weight: 300;\n      text-align: right;\n      max-width: 45%; }\n\n.foxtel-now-pack-navigation-wrapper {\n  background-color: #F0F0F0;\n  border-bottom: 2px solid #d7d7d7;\n  margin-bottom: 50px; }\n  .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation {\n    font-size: 14px; }\n    .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation h3 {\n      color: #888;\n      font-weight: 400;\n      font-size: 14px;\n      margin-bottom: 40px;\n      padding-left: 10px; }\n    .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation .foxtel-now-pack-navigation__pack-list {\n      padding-left: 0; }\n      .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation .foxtel-now-pack-navigation__pack-list li {\n        display: inline-block;\n        list-style: none;\n        padding-bottom: 16px;\n        padding-left: 10px;\n        padding-right: 10px;\n        border-bottom: 2px solid transparent;\n        margin-bottom: 20px; }\n        .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation .foxtel-now-pack-navigation__pack-list li.active {\n          border-bottom: 2px solid #FF5050; }\n          .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation .foxtel-now-pack-navigation__pack-list li.active a {\n            font-weight: 700;\n            pointer-events: none; }\n        .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation .foxtel-now-pack-navigation__pack-list li a {\n          color: black;\n          text-decoration: none; }\n    @media (min-width: 768px) {\n      .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation {\n        padding-top: 30px; }\n        .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation.first {\n          border-right: 2px solid #d7d7d7; } }\n    .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation.first {\n      padding-top: 30px; }\n\n.foxtel-now-info-bar {\n  background-color: #00F0A0; }\n  .foxtel-now-info-bar.warn {\n    background-color: #FFB64F; }\n  .foxtel-now-info-bar.neutral {\n    background-color: #F0EDEB; }\n  .foxtel-now-info-bar .foxtel-now-info-bar__inner {\n    position: relative; }\n    .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content {\n      padding: 15px;\n      color: #32323C;\n      line-height: 34px; }\n      @media (min-width: 768px) {\n        .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content {\n          padding: 15px 70px 15px 30px;\n          line-height: 46px; } }\n      .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content p {\n        margin-bottom: 0; }\n        @media (max-width: 767px) {\n          .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content p {\n            text-align: center; } }\n      .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content .foxtel-now-info-bar__icon-main {\n        display: block;\n        width: 50px;\n        height: 50px;\n        background-size: 100%;\n        margin: 0 auto 15px auto; }\n        @media (min-width: 768px) {\n          .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content .foxtel-now-info-bar__icon-main {\n            display: inline-block;\n            margin-right: 20px;\n            margin-bottom: 0;\n            width: 30px;\n            height: auto;\n            background-size: 30px;\n            background-repeat: no-repeat;\n            background-position: 0 5px; } }\n        .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content .foxtel-now-info-bar__icon-main.icon-info {\n          background-image: url(/content/dam/now/icons/info.svg); }\n        .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content .foxtel-now-info-bar__icon-main.icon-tick {\n          background-image: url(/content/dam/now/icons/check.svg); }\n      .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content .wysiwyg {\n        display: inline-block; }\n        @media (max-width: 767px) {\n          .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content .wysiwyg {\n            display: initial; } }\n      .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content .btn {\n        display: inline-block;\n        background-color: #32323C;\n        color: white;\n        padding: 12px 30px;\n        width: 100%;\n        margin-top: 20px; }\n        @media (min-width: 768px) {\n          .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content .btn {\n            width: auto;\n            margin-left: 20px;\n            margin-top: 0; } }\n      .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content a {\n        color: white; }\n    .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__close {\n      position: absolute;\n      color: #32323C;\n      transition: color 300ms ease-in;\n      top: 15px;\n      right: 15px;\n      font-size: 30px; }\n      @media (min-width: 768px) {\n        .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__close {\n          top: 50%;\n          transform: translateY(-50%);\n          right: 25px;\n          font-size: 24px; } }\n      .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__close:hover {\n        color: black;\n        text-decoration: none; }\n\n.streaming-teaser {\n  margin-bottom: 80px; }\n  .streaming-teaser h2 {\n    font-size: 28px;\n    font-weight: 700;\n    margin-bottom: 60px;\n    text-align: center; }\n  .streaming-teaser .streaming-teaser__streaming-type {\n    margin-bottom: 60px; }\n    .streaming-teaser .streaming-teaser__streaming-type h3,\n    .streaming-teaser .streaming-teaser__streaming-type h4,\n    .streaming-teaser .streaming-teaser__streaming-type a {\n      text-align: center; }\n    .streaming-teaser .streaming-teaser__streaming-type h3,\n    .streaming-teaser .streaming-teaser__streaming-type h4 {\n      font-weight: 400; }\n    .streaming-teaser .streaming-teaser__streaming-type h3 {\n      margin-bottom: 20px; }\n    .streaming-teaser .streaming-teaser__streaming-type img {\n      margin-bottom: 30px;\n      max-width: 100%; }\n    .streaming-teaser .streaming-teaser__streaming-type h4 {\n      color: #32323C;\n      font-size: 16px;\n      line-height: 22px; }\n    .streaming-teaser .streaming-teaser__streaming-type a {\n      display: block;\n      font-size: 12px;\n      font-weight: 500;\n      color: black;\n      text-decoration: underline;\n      margin-bottom: 20px; }\n\n/* Styles for welcome message */\n.foxtel-now-welcome-message-wrapper {\n  text-align: left;\n  max-width: 500px;\n  color: #fff; }\n  @media (max-width: 767px) {\n    .foxtel-now-welcome-message-wrapper {\n      text-align: center; } }\n  .foxtel-now-welcome-message-wrapper h1 {\n    font-weight: bold; }\n  .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title,\n  .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links {\n    margin-top: 15px; }\n    .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn, .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn--wide, .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn--ghost, .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn--transparent, .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn--profile,\n    .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn,\n    .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn--wide,\n    .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn--ghost,\n    .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn--transparent,\n    .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn--profile {\n      max-width: 308px;\n      margin-bottom: 30px; }\n      @media (max-width: 767px) {\n        .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn, .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn--wide, .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn--ghost, .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn--transparent, .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn--profile,\n        .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn,\n        .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn--wide,\n        .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn--ghost,\n        .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn--transparent,\n        .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn--profile {\n          margin-left: auto;\n          margin-right: auto; } }\n    .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-logo-wrapper,\n    .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-logo-wrapper {\n      display: flex;\n      justify-content: flex-start; }\n      @media (max-width: 767px) {\n        .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-logo-wrapper,\n        .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-logo-wrapper {\n          justify-content: space-around; } }\n      .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-logo-wrapper img,\n      .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-logo-wrapper img {\n        width: 120px; }\n        @media (min-width: 768px) {\n          .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-logo-wrapper img,\n          .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-logo-wrapper img {\n            width: 165px; }\n            .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-logo-wrapper img:first-child,\n            .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-logo-wrapper img:first-child {\n              margin-right: 20px; } }\n  .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title {\n    margin-bottom: 30px; }\n\n/* Styles for device list component */\n.foxtel-now-device-container {\n  margin-bottom: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  border-top: solid 1px #F0EDEB;\n  border-bottom: solid 1px #F0EDEB; }\n  @media (min-width: 768px) {\n    .foxtel-now-device-container {\n      padding: 0 100px; } }\n  .foxtel-now-device-container .container-breakout {\n    display: flex;\n    flex-wrap: wrap; }\n  .foxtel-now-device-container .foxtel-now-device-wrapper {\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    border-right: solid 1px #F0EDEB;\n    border-bottom: solid 1px #F0EDEB;\n    border-left: solid 1px #F0EDEB;\n    margin-bottom: -1px;\n    margin-left: -1px;\n    padding-top: 25px;\n    padding-bottom: 25px;\n    padding-left: 30px;\n    padding-right: 30px; }\n    @media (max-width: 767px) {\n      .foxtel-now-device-container .foxtel-now-device-wrapper {\n        border-left: none;\n        border-right: none;\n        border-bottom: none; } }\n    .foxtel-now-device-container .foxtel-now-device-wrapper a {\n      border-bottom: 3px solid transparent;\n      color: #32323C;\n      display: inline-block;\n      padding-bottom: 3px; }\n    .foxtel-now-device-container .foxtel-now-device-wrapper .foxtel-now-device-image {\n      text-align: center;\n      min-height: 60px;\n      min-width: 70px;\n      line-height: 50px; }\n      .foxtel-now-device-container .foxtel-now-device-wrapper .foxtel-now-device-image:after {\n        content: \"\";\n        display: inline-block; }\n      .foxtel-now-device-container .foxtel-now-device-wrapper .foxtel-now-device-image img {\n        max-width: 80px;\n        max-height: 50px; }\n    .foxtel-now-device-container .foxtel-now-device-wrapper .foxtel-now-device-link {\n      text-align: center;\n      font-size: 12px; }\n    .foxtel-now-device-container .foxtel-now-device-wrapper:hover {\n      cursor: pointer;\n      -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n      -moz-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2); }\n      .foxtel-now-device-container .foxtel-now-device-wrapper:hover a {\n        border-bottom: 3px solid #FF5050;\n        text-decoration: none; }\n\n.main-support.main {\n  padding: 0; }\n  .main-support.main .accord-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    text-decoration: none;\n    color: #888;\n    padding: 30px;\n    transition: border .25s ease-in;\n    border: 1px solid #F0EDEB;\n    margin-top: 15px; }\n    .main-support.main .accord-header:hover, .main-support.main .accord-header:focus {\n      text-decoration: none;\n      cursor: pointer; }\n    .main-support.main .accord-header::after {\n      content: \"\\E901\";\n      font-family: 'foxtel-icons';\n      speak: none;\n      font-style: normal;\n      font-weight: normal;\n      font-variant: normal;\n      text-transform: none;\n      line-height: 1;\n      font-size: 1.25em;\n      -webkit-font-smoothing: antialiased; }\n    .main-support.main .accord-header.active::after {\n      content: '\\E909'; }\n  .main-support.main .landing-nav-block.content-landing {\n    background: none; }\n    .main-support.main .landing-nav-block.content-landing::before, .main-support.main .landing-nav-block.content-landing::after {\n      display: none; }\n    .main-support.main .landing-nav-block.content-landing .landing-list {\n      padding-top: 15px; }\n      .main-support.main .landing-nav-block.content-landing .landing-list p {\n        color: #32323C; }\n  .main-support.main .header-support {\n    background-color: #32323C;\n    min-height: 240px;\n    display: flex;\n    align-items: center;\n    margin-top: 20px; }\n    .main-support.main .header-support .heading h3 span {\n      color: white; }\n    .main-support.main .header-support .bg-line {\n      display: none; }\n    .main-support.main .header-support .search-block #search-text {\n      box-shadow: none;\n      border: none;\n      height: 50px;\n      border-radius: 5px;\n      font-size: 16px;\n      max-width: 450px; }\n    .main-support.main .header-support .search-block input[type=\"submit\"] {\n      background-image: url(\"/content/dam/now/icons/magnifier.svg\");\n      right: 15px;\n      top: 15px;\n      width: 22px;\n      height: 22px;\n      cursor: pointer; }\n  .main-support.main h3 {\n    font-weight: bold; }\n  .main-support.main .jump-link-2 .link-list li {\n    list-style: disc; }\n  .main-support.main .related-block {\n    padding: 20px; }\n    .main-support.main .related-block h3 {\n      margin-top: 0; }\n  .main-support.main .wysiwyg {\n    padding: 0;\n    margin: 20px 0; }\n\n@media (min-width: 992px) {\n  .main-support.main .header-support .search-block {\n    width: 450px; } }\n\n@media (max-width: 767px) {\n  .main-support.main .accord-header {\n    flex-direction: column; } }\n\n/* Styles for cinematic block */\n.cineWrapper {\n  position: relative; }\n\n.foxtel-now-cinematic-highlight-block {\n  z-index: 1;\n  position: absolute; }\n  @media (max-width: 767px) {\n    .foxtel-now-cinematic-highlight-block {\n      top: 20%;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 80%; } }\n  @media (min-width: 768px) {\n    .foxtel-now-cinematic-highlight-block {\n      left: 80px;\n      bottom: 10%; } }\n\n.foxtel-now-meta-information .foxtel-now-cinematic-info {\n  position: absolute;\n  right: 50px;\n  bottom: 10%;\n  text-align: right; }\n  .foxtel-now-meta-information .foxtel-now-cinematic-info p,\n  .foxtel-now-meta-information .foxtel-now-cinematic-info span,\n  .foxtel-now-meta-information .foxtel-now-cinematic-info a {\n    color: rgba(255, 255, 255, 0.8);\n    font-size: 12px;\n    margin-bottom: 0;\n    font-weight: 300; }\n    .foxtel-now-meta-information .foxtel-now-cinematic-info p.name,\n    .foxtel-now-meta-information .foxtel-now-cinematic-info span.name,\n    .foxtel-now-meta-information .foxtel-now-cinematic-info a.name {\n      margin-bottom: .4rem; }\n  .foxtel-now-meta-information .foxtel-now-cinematic-info img {\n    max-height: 40px; }\n\n.foxtel-now-meta-information.left-index .foxtel-now-cinematic-info {\n  left: 50px; }\n\n.image-cinematic picture img {\n  width: 100%; }\n\n.image-cinematic .dark-shadow {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0.5;\n  background: linear-gradient(90deg, black, transparent 50%); }\n\n/* Styles for checkoutWithoutStarterPack component */\n.foxtel-now-no-starter-pack-container {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n  padding: 30px 80px; }\n  @media (max-width: 767px) {\n    .foxtel-now-no-starter-pack-container {\n      width: 100%;\n      padding-left: 15px;\n      padding-right: 15px; }\n      .foxtel-now-no-starter-pack-container h1 {\n        font-size: 29px; } }\n  .foxtel-now-no-starter-pack-container .foxtel-now-no-starter-pack-container__title-wrapper {\n    text-align: center; }\n  .foxtel-now-no-starter-pack-container .foxtel-now-no-starter-pack-container__list-wrapper {\n    border-top: 1px solid lightgrey;\n    border-bottom: 1px solid lightgrey;\n    margin-top: 25px;\n    margin-bottom: 25px; }\n  .foxtel-now-no-starter-pack-container .foxtel-now-no-starter-pack-container__button-wrapper {\n    display: flex;\n    justify-content: space-between; }\n    .foxtel-now-no-starter-pack-container .foxtel-now-no-starter-pack-container__button-wrapper .foxtel-now-btn--round {\n      max-width: 200px; }\n      .foxtel-now-no-starter-pack-container .foxtel-now-no-starter-pack-container__button-wrapper .foxtel-now-btn--round:first-child {\n        margin-right: 10px; }\n    @media (max-width: 767px) {\n      .foxtel-now-no-starter-pack-container .foxtel-now-no-starter-pack-container__button-wrapper {\n        display: block; }\n        .foxtel-now-no-starter-pack-container .foxtel-now-no-starter-pack-container__button-wrapper .foxtel-now-btn--round {\n          max-width: inherit;\n          margin-bottom: 15px; } }\n\n/* View my bills component related class */\n.foxtel-now-view-my-bill-wrapper {\n  margin-top: 30px; }\n  .foxtel-now-view-my-bill-wrapper .foxtel-now-bill-history-template-container {\n    margin-top: 30px; }\n    .foxtel-now-view-my-bill-wrapper .foxtel-now-bill-history-template-container .foxtel-now-view-my-bills-container {\n      display: table;\n      width: 40%; }\n      .foxtel-now-view-my-bill-wrapper .foxtel-now-bill-history-template-container .foxtel-now-view-my-bills-container .foxtel-now-view-my-bills-container__th p {\n        font-weight: bold; }\n      .foxtel-now-view-my-bill-wrapper .foxtel-now-bill-history-template-container .foxtel-now-view-my-bills-container .foxtel-now-view-my-bills-container__row {\n        display: table-row;\n        cursor: pointer; }\n        .foxtel-now-view-my-bill-wrapper .foxtel-now-bill-history-template-container .foxtel-now-view-my-bills-container .foxtel-now-view-my-bills-container__row:hover {\n          background-color: #f0edeb; }\n        .foxtel-now-view-my-bill-wrapper .foxtel-now-bill-history-template-container .foxtel-now-view-my-bills-container .foxtel-now-view-my-bills-container__row p {\n          display: table-cell;\n          padding-top: 10px;\n          padding-bottom: 10px; }\n          .foxtel-now-view-my-bill-wrapper .foxtel-now-bill-history-template-container .foxtel-now-view-my-bills-container .foxtel-now-view-my-bills-container__row p:last-child a {\n            cursor: pointer;\n            color: black;\n            border-bottom: 1px solid lightgrey; }\n\n/* Billing details component related class */\n.foxtel-now-display-div-template-container {\n  margin-bottom: 1em; }\n  .foxtel-now-display-div-template-container .foxtel-now-display-div-wrapper {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 15px;\n    padding-bottom: 15px; }\n    .foxtel-now-display-div-template-container .foxtel-now-display-div-wrapper .card-details {\n      white-space: nowrap; }\n\n/*!\r\n * smartbanner.js v1.5.0 <https://github.com/ain/smartbanner.js>\r\n * Copyright © 2017 Ain Tohvri, contributors. Licensed under GPL-3.0.\r\n */\n.smartbanner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow-x: hidden;\n  width: 100%;\n  height: 90px;\n  background: #f3f3f3;\n  font-family: Helvetica, sans, sans-serif; }\n\n.smartbanner__exit {\n  position: absolute;\n  top: calc(50% - 6px);\n  left: 9px;\n  display: block;\n  margin: 0;\n  width: 12px;\n  height: 12px;\n  border: 0;\n  text-align: center; }\n\n.smartbanner__exit::before,\n.smartbanner__exit::after {\n  position: absolute;\n  width: 1px;\n  height: 12px;\n  background: #767676;\n  content: ' '; }\n\n.smartbanner__exit::before {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n.smartbanner__exit::after {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg); }\n\n.smartbanner__icon {\n  position: absolute;\n  top: 10px;\n  left: 30px;\n  width: 64px;\n  height: 64px;\n  border-radius: 15px;\n  background-size: 64px 64px; }\n\n.smartbanner__info {\n  position: absolute;\n  top: 10px;\n  left: 104px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow-y: hidden;\n  width: 60%;\n  height: 64px;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.smartbanner__info__title {\n  font-size: 14px; }\n\n.smartbanner__info__author,\n.smartbanner__info__price {\n  font-size: 12px; }\n\n.smartbanner__button {\n  position: absolute;\n  top: 32px;\n  right: 10px;\n  z-index: 1;\n  display: block;\n  padding: 0 10px;\n  min-width: 10%;\n  border-radius: 5px;\n  background: #f3f3f3;\n  color: #1474fc;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none; }\n\n.smartbanner__button__label {\n  text-align: center; }\n", "", {"version":3,"sources":["C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/foxtel-now-main-style.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\core-components\\variables.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\core-components\\color.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\header-footer\\common.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\header-footer\\header.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\core-components\\mixins.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\core-components\\containers.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\core-components\\typography.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\core-components\\button.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\core-components\\form.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\core-components\\icon.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\core-components\\modal.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\cinematic-call-to-action.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\card.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\jumbotron.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\status-bar.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\pack-content-programs.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\pack-content-channels.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\pack-summary.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\pack-details.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\pack-list.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\pack-list-item.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\pack-navigation.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\info-bar.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\streaming-teaser.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\welcome-message.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\device-list.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\support-page-transitional.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\cinematic.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\starter-pack.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\view-my-bills.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\display-credit-card-div.scss","C:/foxtel/foxtel-website/foxtel-website/foxtel-aem-frontend/src/main/webapp/src/scss/main/minisite/foxtel-now/stylesheet/C:\\foxtel\\foxtel-website\\foxtel-website\\foxtel-aem-frontend/src\\main\\webapp\\src\\scss\\main\\minisite\\foxtel-now\\components\\smart-app-banner.scss"],"names":[],"mappings":"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","file":"foxtel-now-main-style.scss","sourcesContent":["@charset \"UTF-8\";\n/*********************\r\nfont variables\r\n*********************/\n/*********************\r\ncolor variables\r\n*********************/\n/*********************\r\nBACKGROUND\r\n*********************/\n.foxtel-now-background-green {\n  background-color: #FF5050 !important; }\n\n.foxtel-now-background-black {\n  background-color: black !important; }\n\n.foxtel-now-background-off-white {\n  background-color: #f0f0f0 !important; }\n\n.foxtel-now-background-lightgrey {\n  background-color: #f7f7f7 !important; }\n\n.foxtel-now-background-transparent {\n  background-color: transparent !important;\n  box-shadow: none !important; }\n\n/*********************\r\nCOLOR\r\n*********************/\n.foxtel-now-color-whilte {\n  color: white !important; }\n\n.foxtel-now-color-black {\n  color: black !important; }\n\n.foxtel-now-color-grey {\n  color: #F0EDEB !important; }\n\n.foxtel-now-color-darkgrey {\n  color: #32323C !important; }\n\n.foxtel-now-color-orange {\n  color: #FF5050 !important; }\n\n/*********************\r\nSHADOW\r\n*********************/\n.foxtel-now-box-shadow {\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2) !important; }\n\n/*********************\r\nFONT\r\n*********************/\n@font-face {\n  font-family: \"ProximaNova\";\n  src: url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.woff\") format(\"woff\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.ttf\") format(\"truetype\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.svg#wf\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"ProximaNova-Bold\";\n  src: url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.woff\") format(\"woff\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.ttf\") format(\"truetype\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.svg#wf\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n/*********************\r\nVARIABLE\r\n*********************/\n/*********************\r\nMIXIN\r\n*********************/\n/*********************\r\nCOMMON STYLE\r\n*********************/\n.foxtel-container {\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin: 0 auto; }\n  @media (min-width: 768px) {\n    .foxtel-container {\n      width: 690px;\n      padding-left: 0;\n      padding-right: 0; } }\n  @media (min-width: 992px) {\n    .foxtel-container {\n      width: 930px;\n      padding-left: 0;\n      padding-right: 0; } }\n  @media (min-width: 1200px) {\n    .foxtel-container {\n      width: 1110px;\n      padding-left: 0;\n      padding-right: 0; } }\n\n/*********************\r\nBUTTON STYLE\r\n*********************/\n.foxtel-header__btn--white {\n  display: flex;\n  height: 52px;\n  border-radius: 2px;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  color: #32323c;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-right: 15px;\n  border: 1px solid #bec0c2; }\n  .foxtel-header__btn--white:hover {\n    color: #32323c; }\n\n.foxtel-header__btn--black {\n  display: flex;\n  height: 52px;\n  border-radius: 2px;\n  justify-content: center;\n  align-items: center;\n  background-color: #32323c;\n  color: #fff;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-right: 15px; }\n  .foxtel-header__btn--black:hover {\n    color: #fff; }\n\n.foxtel-now-header {\n  height: 70px;\n  max-width: 1140px;\n  margin-left: auto;\n  margin-right: auto;\n  opacity: 0; }\n  .foxtel-now-header.is-loaded {\n    transition: opacity 100ms ease-in;\n    opacity: 1.0; }\n  .foxtel-now-header.is-logged-in {\n    max-width: none;\n    padding-left: 5%;\n    padding-right: 5%; }\n    @media (min-width: 768px) {\n      .foxtel-now-header.is-logged-in .menu-bar .left-section .menu-item {\n        display: inline-block; } }\n    .foxtel-now-header.is-logged-in .menu-bar .right-section .settings {\n      display: inline-block; }\n    .foxtel-now-header.is-logged-in .menu-bar .right-section .foxtel-now-header__btn-container {\n      display: none; }\n  .foxtel-now-header.log-in .menu-bar .right-section .foxtel-now-header__btn-container {\n    display: none; }\n  .foxtel-now-header .menu-bar {\n    font-family: \"ProximaNova\", arial, sans-serif;\n    min-width: 300px;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n    .foxtel-now-header .menu-bar .left-section {\n      display: inline-block;\n      font-size: 0; }\n      .foxtel-now-header .menu-bar .left-section .logo {\n        height: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        float: left;\n        margin-right: 25px; }\n        .foxtel-now-header .menu-bar .left-section .logo .wysiwyg p {\n          margin-bottom: 0; }\n          .foxtel-now-header .menu-bar .left-section .logo .wysiwyg p img {\n            height: 45px;\n            width: 156px;\n            padding-bottom: 5px; }\n      .foxtel-now-header .menu-bar .left-section .menu-item {\n        display: none;\n        color: #9b9b9b;\n        cursor: pointer;\n        padding: 0;\n        margin: 0 25px;\n        font-size: 18px;\n        position: relative;\n        height: 100%;\n        line-height: 70px;\n        font-weight: 400; }\n        .foxtel-now-header .menu-bar .left-section .menu-item a {\n          transition: color .3s ease;\n          color: #32323C;\n          text-decoration: none; }\n          .foxtel-now-header .menu-bar .left-section .menu-item a:hover {\n            color: black; }\n          .foxtel-now-header .menu-bar .left-section .menu-item a img.kids {\n            padding-bottom: 10px;\n            transition: opacity .3s ease;\n            opacity: 0.7; }\n            .foxtel-now-header .menu-bar .left-section .menu-item a img.kids:hover {\n              opacity: 1.0; }\n    .foxtel-now-header .menu-bar .right-section {\n      -ms-flex-item-align: end;\n      align-self: flex-end;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 100%;\n      box-sizing: border-box; }\n      .foxtel-now-header .menu-bar .right-section .settings {\n        display: none;\n        margin-left: 20px;\n        height: 100%;\n        outline: 0;\n        width: 17px; }\n        @media (max-width: 767px) {\n          .foxtel-now-header .menu-bar .right-section .settings {\n            margin-right: 10px; } }\n        .foxtel-now-header .menu-bar .right-section .settings .settings-icon {\n          vertical-align: middle;\n          cursor: pointer;\n          color: #9b9b9b;\n          transition: color .3s ease;\n          height: 100%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center; }\n        .foxtel-now-header .menu-bar .right-section .settings .dropdown {\n          display: none;\n          margin-left: 5%;\n          position: relative;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          width: 150px; }\n          .foxtel-now-header .menu-bar .right-section .settings .dropdown.open {\n            display: block; }\n          .foxtel-now-header .menu-bar .right-section .settings .dropdown .options {\n            width: 130px;\n            z-index: 101;\n            -webkit-transform: translateX(-102px) translateY(-20px);\n            -ms-transform: translateX(-102px) translateY(-20px);\n            transform: translateX(-102px) translateY(-20px);\n            opacity: 1;\n            pointer-events: auto;\n            position: absolute;\n            transition: opacity .3s ease;\n            text-overflow: ellipsis; }\n            .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box {\n              padding: 0;\n              position: relative;\n              border: 1px solid #32323C;\n              background: white;\n              min-width: 100%;\n              margin-top: 10px; }\n              .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box:before, .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box:after {\n                content: \" \";\n                bottom: 100%;\n                right: 10px;\n                border: solid transparent;\n                height: 0;\n                width: 0;\n                position: absolute;\n                pointer-events: none;\n                border-color: transparent;\n                border-bottom-color: white;\n                border-width: 10px; }\n              .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box:before {\n                border-bottom-color: #32323C;\n                border-width: 12px;\n                right: 8px; }\n              .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box span {\n                text-align: right;\n                color: #32323C;\n                transition: color .1s ease;\n                cursor: pointer;\n                display: block;\n                padding: 5px 0;\n                padding-right: 1em;\n                font-size: 16px; }\n                .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box span.username {\n                  color: black;\n                  font-weight: bold;\n                  word-wrap: break-word; }\n                .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box span.hr {\n                  width: 100%;\n                  border-bottom: 1px solid #32323C;\n                  padding: 0; }\n      .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart {\n        display: none; }\n        .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart .foxtel-now-header__btn-cart__icon {\n          position: relative;\n          display: inline-block;\n          margin-right: 20px;\n          margin-top: 12px; }\n          @media (min-width: 768px) {\n            .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart .foxtel-now-header__btn-cart__icon {\n              margin-right: 50px; } }\n          .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart .foxtel-now-header__btn-cart__icon .foxtel-now-header__btn-cart__icon__quantity {\n            position: absolute;\n            top: -5px;\n            right: -15px;\n            background-color: #FF5050;\n            color: white;\n            border-radius: 50%;\n            width: 30px;\n            height: 30px;\n            text-align: center;\n            font-weight: 700;\n            line-height: 30px; }\n          .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart .foxtel-now-header__btn-cart__icon .icon {\n            display: inline-block;\n            width: 1em;\n            height: 1em;\n            stroke-width: 0;\n            stroke: currentcolor;\n            fill: currentcolor;\n            width: 30px;\n            height: 30px;\n            margin-top: 15px; }\n      .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-container {\n        margin-left: 20px;\n        display: flex;\n        vertical-align: middle;\n        -ms-flex-align: center; }\n\n/*foxtel header breadcrumb scrolling up pop state*/\n.foxtel-now-header-breadcrumb--pop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);\n  z-index: 9999; }\n\n/*********************\r\nBACKGROUND\r\n*********************/\n.foxtel-now-background-green {\n  background-color: #FF5050 !important; }\n\n.foxtel-now-background-black {\n  background-color: black !important; }\n\n.foxtel-now-background-off-white {\n  background-color: #f0f0f0 !important; }\n\n.foxtel-now-background-lightgrey {\n  background-color: #f7f7f7 !important; }\n\n.foxtel-now-background-transparent {\n  background-color: transparent !important;\n  box-shadow: none !important; }\n\n/*********************\r\nCOLOR\r\n*********************/\n.foxtel-now-color-whilte {\n  color: white !important; }\n\n.foxtel-now-color-black {\n  color: black !important; }\n\n.foxtel-now-color-grey {\n  color: #F0EDEB !important; }\n\n.foxtel-now-color-darkgrey {\n  color: #32323C !important; }\n\n.foxtel-now-color-orange {\n  color: #FF5050 !important; }\n\n/*********************\r\nSHADOW\r\n*********************/\n.foxtel-now-box-shadow {\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2) !important; }\n\n/*********************\r\nFONT\r\n*********************/\n@font-face {\n  font-family: \"ProximaNova\";\n  src: url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.woff\") format(\"woff\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.ttf\") format(\"truetype\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.svg#wf\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"ProximaNova-Bold\";\n  src: url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.woff\") format(\"woff\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.ttf\") format(\"truetype\"), url(\"/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.svg#wf\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n/*********************\r\nVARIABLE\r\n*********************/\n/*********************\r\nMIXIN\r\n*********************/\n/*********************\r\nCOMMON STYLE\r\n*********************/\n.foxtel-container {\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin: 0 auto; }\n  @media (min-width: 768px) {\n    .foxtel-container {\n      width: 690px;\n      padding-left: 0;\n      padding-right: 0; } }\n  @media (min-width: 992px) {\n    .foxtel-container {\n      width: 930px;\n      padding-left: 0;\n      padding-right: 0; } }\n  @media (min-width: 1200px) {\n    .foxtel-container {\n      width: 1110px;\n      padding-left: 0;\n      padding-right: 0; } }\n\n/*********************\r\nBUTTON STYLE\r\n*********************/\n.foxtel-header__btn--white {\n  display: flex;\n  height: 52px;\n  border-radius: 2px;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  color: #32323c;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-right: 15px;\n  border: 1px solid #bec0c2; }\n  .foxtel-header__btn--white:hover {\n    color: #32323c; }\n\n.foxtel-header__btn--black {\n  display: flex;\n  height: 52px;\n  border-radius: 2px;\n  justify-content: center;\n  align-items: center;\n  background-color: #32323c;\n  color: #fff;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-right: 15px; }\n  .foxtel-header__btn--black:hover {\n    color: #fff; }\n\n.foxtel-now-header {\n  height: 70px;\n  max-width: 1140px;\n  margin-left: auto;\n  margin-right: auto;\n  opacity: 0; }\n  .foxtel-now-header.is-loaded {\n    transition: opacity 100ms ease-in;\n    opacity: 1.0; }\n  .foxtel-now-header.is-logged-in {\n    max-width: none;\n    padding-left: 5%;\n    padding-right: 5%; }\n    @media (min-width: 768px) {\n      .foxtel-now-header.is-logged-in .menu-bar .left-section .menu-item {\n        display: inline-block; } }\n    .foxtel-now-header.is-logged-in .menu-bar .right-section .settings {\n      display: inline-block; }\n    .foxtel-now-header.is-logged-in .menu-bar .right-section .foxtel-now-header__btn-container {\n      display: none; }\n  .foxtel-now-header.log-in .menu-bar .right-section .foxtel-now-header__btn-container {\n    display: none; }\n  .foxtel-now-header .menu-bar {\n    font-family: \"ProximaNova\", arial, sans-serif;\n    min-width: 300px;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n    .foxtel-now-header .menu-bar .left-section {\n      display: inline-block;\n      font-size: 0; }\n      .foxtel-now-header .menu-bar .left-section .logo {\n        height: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        float: left;\n        margin-right: 25px; }\n        .foxtel-now-header .menu-bar .left-section .logo .wysiwyg p {\n          margin-bottom: 0; }\n          .foxtel-now-header .menu-bar .left-section .logo .wysiwyg p img {\n            height: 45px;\n            width: 156px;\n            padding-bottom: 5px; }\n      .foxtel-now-header .menu-bar .left-section .menu-item {\n        display: none;\n        color: #9b9b9b;\n        cursor: pointer;\n        padding: 0;\n        margin: 0 25px;\n        font-size: 18px;\n        position: relative;\n        height: 100%;\n        line-height: 70px;\n        font-weight: 400; }\n        .foxtel-now-header .menu-bar .left-section .menu-item a {\n          transition: color .3s ease;\n          color: #32323C;\n          text-decoration: none; }\n          .foxtel-now-header .menu-bar .left-section .menu-item a:hover {\n            color: black; }\n          .foxtel-now-header .menu-bar .left-section .menu-item a img.kids {\n            padding-bottom: 10px;\n            transition: opacity .3s ease;\n            opacity: 0.7; }\n            .foxtel-now-header .menu-bar .left-section .menu-item a img.kids:hover {\n              opacity: 1.0; }\n    .foxtel-now-header .menu-bar .right-section {\n      -ms-flex-item-align: end;\n      align-self: flex-end;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 100%;\n      box-sizing: border-box; }\n      .foxtel-now-header .menu-bar .right-section .settings {\n        display: none;\n        margin-left: 20px;\n        height: 100%;\n        outline: 0;\n        width: 17px; }\n        @media (max-width: 767px) {\n          .foxtel-now-header .menu-bar .right-section .settings {\n            margin-right: 10px; } }\n        .foxtel-now-header .menu-bar .right-section .settings .settings-icon {\n          vertical-align: middle;\n          cursor: pointer;\n          color: #9b9b9b;\n          transition: color .3s ease;\n          height: 100%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center; }\n        .foxtel-now-header .menu-bar .right-section .settings .dropdown {\n          display: none;\n          margin-left: 5%;\n          position: relative;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          width: 150px; }\n          .foxtel-now-header .menu-bar .right-section .settings .dropdown.open {\n            display: block; }\n          .foxtel-now-header .menu-bar .right-section .settings .dropdown .options {\n            width: 130px;\n            z-index: 101;\n            -webkit-transform: translateX(-102px) translateY(-20px);\n            -ms-transform: translateX(-102px) translateY(-20px);\n            transform: translateX(-102px) translateY(-20px);\n            opacity: 1;\n            pointer-events: auto;\n            position: absolute;\n            transition: opacity .3s ease;\n            text-overflow: ellipsis; }\n            .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box {\n              padding: 0;\n              position: relative;\n              border: 1px solid #32323C;\n              background: white;\n              min-width: 100%;\n              margin-top: 10px; }\n              .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box:before, .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box:after {\n                content: \" \";\n                bottom: 100%;\n                right: 10px;\n                border: solid transparent;\n                height: 0;\n                width: 0;\n                position: absolute;\n                pointer-events: none;\n                border-color: transparent;\n                border-bottom-color: white;\n                border-width: 10px; }\n              .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box:before {\n                border-bottom-color: #32323C;\n                border-width: 12px;\n                right: 8px; }\n              .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box span {\n                text-align: right;\n                color: #32323C;\n                transition: color .1s ease;\n                cursor: pointer;\n                display: block;\n                padding: 5px 0;\n                padding-right: 1em;\n                font-size: 16px; }\n                .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box span.username {\n                  color: black;\n                  font-weight: bold;\n                  word-wrap: break-word; }\n                .foxtel-now-header .menu-bar .right-section .settings .dropdown .options .arrow-box span.hr {\n                  width: 100%;\n                  border-bottom: 1px solid #32323C;\n                  padding: 0; }\n      .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart {\n        display: none; }\n        .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart .foxtel-now-header__btn-cart__icon {\n          position: relative;\n          display: inline-block;\n          margin-right: 20px;\n          margin-top: 12px; }\n          @media (min-width: 768px) {\n            .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart .foxtel-now-header__btn-cart__icon {\n              margin-right: 50px; } }\n          .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart .foxtel-now-header__btn-cart__icon .foxtel-now-header__btn-cart__icon__quantity {\n            position: absolute;\n            top: -5px;\n            right: -15px;\n            background-color: #FF5050;\n            color: white;\n            border-radius: 50%;\n            width: 30px;\n            height: 30px;\n            text-align: center;\n            font-weight: 700;\n            line-height: 30px; }\n          .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-cart .foxtel-now-header__btn-cart__icon .icon {\n            display: inline-block;\n            width: 1em;\n            height: 1em;\n            stroke-width: 0;\n            stroke: currentcolor;\n            fill: currentcolor;\n            width: 30px;\n            height: 30px;\n            margin-top: 15px; }\n      .foxtel-now-header .menu-bar .right-section .foxtel-now-header__btn-container {\n        margin-left: 20px;\n        display: flex;\n        vertical-align: middle;\n        -ms-flex-align: center; }\n\n/*foxtel header breadcrumb scrolling up pop state*/\n.foxtel-now-header-breadcrumb--pop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);\n  z-index: 9999; }\n\n/*********************\r\nBACKGROUND\r\n*********************/\n.foxtel-now-background-green {\n  background-color: #FF5050 !important; }\n\n.foxtel-now-background-black {\n  background-color: black !important; }\n\n.foxtel-now-background-off-white {\n  background-color: #f0f0f0 !important; }\n\n.foxtel-now-background-lightgrey {\n  background-color: #f7f7f7 !important; }\n\n.foxtel-now-background-transparent {\n  background-color: transparent !important;\n  box-shadow: none !important; }\n\n/*********************\r\nCOLOR\r\n*********************/\n.foxtel-now-color-whilte {\n  color: white !important; }\n\n.foxtel-now-color-black {\n  color: black !important; }\n\n.foxtel-now-color-grey {\n  color: #F0EDEB !important; }\n\n.foxtel-now-color-darkgrey {\n  color: #32323C !important; }\n\n.foxtel-now-color-orange {\n  color: #FF5050 !important; }\n\n/*********************\r\nSHADOW\r\n*********************/\n.foxtel-now-box-shadow {\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2) !important; }\n\n/* Store mixins or re-usable classes */\n@keyframes rotating {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n.border--top {\n  border-top: 1px solid #F0EDEB; }\n\n.border--right {\n  border-right: 1px solid #F0EDEB; }\n\n.border--bottom {\n  border-bottom: 1px solid #F0EDEB; }\n\n.border--left {\n  border-left: 1px solid #F0EDEB; }\n\n.border--bold {\n  border-width: 2px; }\n\n.border--black {\n  border-color: #4a4a4a; }\n\n.border--grey {\n  border-color: #F0EDEB; }\n\n.foxtel-now-table-row {\n  display: table-row; }\n\n.foxtel-flex {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.with-underline {\n  text-decoration: underline; }\n\n.hidden {\n  display: none !important; }\n\n.disabled {\n  background-color: #b4b4b4 !important;\n  cursor: default;\n  pointer-events: none;\n  tab-index: -1; }\n\n.h2-sub {\n  font-weight: 400; }\n\n.overlay:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0.2;\n  background: black; }\n\n.ribbon-wrapper {\n  z-index: 2;\n  width: 170px;\n  height: 120px;\n  overflow: hidden;\n  position: absolute;\n  top: -2px;\n  left: -2px; }\n  .ribbon-wrapper .ribbon {\n    color: white;\n    text-align: center;\n    position: relative;\n    padding: 7px 30px 7px 0;\n    float: right;\n    right: -5px;\n    top: 15px;\n    width: 230px;\n    background-color: #FF5050;\n    transform: rotate(-45deg); }\n    .ribbon-wrapper .ribbon:before, .ribbon-wrapper .ribbon:after {\n      content: \"\";\n      border-top: 3px solid scale-lightness(#FF5050, -40%);\n      border-left: 3px solid transparent;\n      border-right: 3px solid transparent;\n      position: absolute;\n      bottom: -3px; }\n    .ribbon-wrapper .ribbon:before {\n      left: 0; }\n    .ribbon-wrapper .ribbon:after {\n      right: 0; }\n\n.foxtel-now-list, .foxtel-now-list--inline {\n  padding-left: 0;\n  margin-top: 1rem;\n  list-style-position: inside;\n  list-style: none; }\n  .foxtel-now-list li, .foxtel-now-list--inline li {\n    color: #32323C;\n    margin-top: 10px; }\n    .foxtel-now-list li:before, .foxtel-now-list--inline li:before {\n      content: \"• \";\n      color: #FF5050;\n      font-size: 20px; }\n    .foxtel-now-list li p, .foxtel-now-list--inline li p {\n      color: initial;\n      display: inline; }\n\n.foxtel-now-list--inline {\n  display: flex;\n  justify-content: space-between; }\n  @media (max-width: 767px) {\n    .foxtel-now-list--inline {\n      flex-direction: column; } }\n  .foxtel-now-list--inline li {\n    display: inline; }\n\n/* Styles for containers */\n.wysiwyg img {\n  max-width: 100%; }\n\n/* Extend bootstrap/main website typography class | Redefine Foxtel typography class */\nbody {\n  font-family: \"ProximaNova\", arial, sans-serif; }\n\n/*********************\r\nBACKGROUND\r\n*********************/\n.foxtel-now-background-green {\n  background-color: #FF5050 !important; }\n\n.foxtel-now-background-black {\n  background-color: black !important; }\n\n.foxtel-now-background-off-white {\n  background-color: #f0f0f0 !important; }\n\n.foxtel-now-background-lightgrey {\n  background-color: #f7f7f7 !important; }\n\n.foxtel-now-background-transparent {\n  background-color: transparent !important;\n  box-shadow: none !important; }\n\n/*********************\r\nCOLOR\r\n*********************/\n.foxtel-now-color-whilte {\n  color: white !important; }\n\n.foxtel-now-color-black {\n  color: black !important; }\n\n.foxtel-now-color-grey {\n  color: #F0EDEB !important; }\n\n.foxtel-now-color-darkgrey {\n  color: #32323C !important; }\n\n.foxtel-now-color-orange {\n  color: #FF5050 !important; }\n\n/*********************\r\nSHADOW\r\n*********************/\n.foxtel-now-box-shadow {\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2) !important; }\n\n/* Extend bootstrap button class | Redefine Foxtel button class */\n.foxtel-now-btn, .foxtel-now-btn--wide, .foxtel-now-btn--ghost, .foxtel-now-btn--transparent, .foxtel-now-btn--profile {\n  margin: auto;\n  border-style: hidden;\n  display: block;\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  -ms-border-radius: 5px;\n  padding: 15px;\n  color: white;\n  background-color: #FF5050;\n  cursor: pointer;\n  width: 100%;\n  max-width: 480px;\n  text-align: center;\n  transition: border 250ms ease, border-radius 250ms ease, background-color 250ms ease, width 250ms ease, height 250ms ease; }\n  .foxtel-now-btn:hover, .foxtel-now-btn--wide:hover, .foxtel-now-btn--ghost:hover, .foxtel-now-btn--transparent:hover, .foxtel-now-btn--profile:hover {\n    text-decoration: none;\n    color: white;\n    opacity: 0.8; }\n  .foxtel-now-btn:focus, .foxtel-now-btn--wide:focus, .foxtel-now-btn--ghost:focus, .foxtel-now-btn--transparent:focus, .foxtel-now-btn--profile:focus {\n    outline: 0; }\n  .foxtel-now-btn.is-loading, .is-loading.foxtel-now-btn--wide, .is-loading.foxtel-now-btn--ghost, .is-loading.foxtel-now-btn--transparent, .is-loading.foxtel-now-btn--profile {\n    color: transparent;\n    background-color: transparent;\n    pointer-events: none;\n    content: \"\";\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background-color: transparent;\n    border: 3px solid #f0f0f0;\n    border-left-color: #FF5050;\n    animation: rotating 2s 250ms linear infinite, in 2s 0 ease-in; }\n  .foxtel-now-btn.is-valid, .is-valid.foxtel-now-btn--wide, .is-valid.foxtel-now-btn--ghost, .is-valid.foxtel-now-btn--transparent, .is-valid.foxtel-now-btn--profile {\n    text-indent: -1000em;\n    width: 100px;\n    height: 40px;\n    margin: auto;\n    padding: 0; }\n    .foxtel-now-btn.is-valid span, .is-valid.foxtel-now-btn--wide span, .is-valid.foxtel-now-btn--ghost span, .is-valid.foxtel-now-btn--transparent span, .is-valid.foxtel-now-btn--profile span {\n      display: none; }\n    .foxtel-now-btn.is-valid:after, .is-valid.foxtel-now-btn--wide:after, .is-valid.foxtel-now-btn--ghost:after, .is-valid.foxtel-now-btn--transparent:after, .is-valid.foxtel-now-btn--profile:after {\n      display: inherit;\n      content: \"\\f00c\";\n      background-image: url(/content/dam/now/icons/check.svg);\n      background-size: 30%;\n      background-position: 50%;\n      background-repeat: no-repeat;\n      width: 100%;\n      height: 100%; }\n  .foxtel-now-btn.is-disabled, .is-disabled.foxtel-now-btn--wide, .is-disabled.foxtel-now-btn--ghost, .is-disabled.foxtel-now-btn--transparent, .is-disabled.foxtel-now-btn--profile {\n    background-color: #BEC0C2;\n    color: #32323C;\n    pointer-events: none; }\n    .foxtel-now-btn.is-disabled:hover, .is-disabled.foxtel-now-btn--wide:hover, .is-disabled.foxtel-now-btn--ghost:hover, .is-disabled.foxtel-now-btn--transparent:hover, .is-disabled.foxtel-now-btn--profile:hover {\n      opacity: 1.0; }\n\n.foxtel-now-card__add-to-card-btn > .foxtel-now-btn, .foxtel-now-card__add-to-card-btn > .foxtel-now-btn--wide, .foxtel-now-card__add-to-card-btn > .foxtel-now-btn--ghost, .foxtel-now-card__add-to-card-btn > .foxtel-now-btn--transparent, .foxtel-now-card__add-to-card-btn > .foxtel-now-btn--profile {\n  font-weight: bold; }\n  .foxtel-now-card__add-to-card-btn > .foxtel-now-btn.enable, .foxtel-now-card__add-to-card-btn > .enable.foxtel-now-btn--wide, .foxtel-now-card__add-to-card-btn > .enable.foxtel-now-btn--ghost, .foxtel-now-card__add-to-card-btn > .enable.foxtel-now-btn--transparent, .foxtel-now-card__add-to-card-btn > .enable.foxtel-now-btn--profile {\n    color: white; }\n  .foxtel-now-card__add-to-card-btn > .foxtel-now-btn.disabled, .foxtel-now-card__add-to-card-btn > .disabled.foxtel-now-btn--wide, .foxtel-now-card__add-to-card-btn > .disabled.foxtel-now-btn--ghost, .foxtel-now-card__add-to-card-btn > .disabled.foxtel-now-btn--transparent, .foxtel-now-card__add-to-card-btn > .disabled.foxtel-now-btn--profile {\n    color: #32323C; }\n\n.foxtel-now-btn--round {\n  margin: auto;\n  border-style: hidden;\n  display: block;\n  border-radius: 5em;\n  -webkit-border-radius: 5em;\n  -moz-border-radius: 5em;\n  -ms-border-radius: 5em;\n  padding: 15px;\n  color: white;\n  background-color: #FF5050;\n  cursor: pointer;\n  width: 100%;\n  max-width: 480px;\n  text-align: center;\n  transition: border 250ms ease, border-radius 250ms ease, background-color 250ms ease, width 250ms ease, height 250ms ease; }\n  .foxtel-now-btn--round:hover {\n    text-decoration: none;\n    color: white;\n    opacity: 0.8; }\n  .foxtel-now-btn--round:focus {\n    outline: 0; }\n  .foxtel-now-btn--round.is-loading {\n    color: transparent;\n    background-color: transparent;\n    pointer-events: none;\n    content: \"\";\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background-color: transparent;\n    border: 3px solid #f0f0f0;\n    border-left-color: #FF5050;\n    animation: rotating 2s 250ms linear infinite, in 2s 0 ease-in; }\n  .foxtel-now-btn--round.is-valid {\n    text-indent: -1000em;\n    width: 100px;\n    height: 40px;\n    margin: auto;\n    padding: 0; }\n    .foxtel-now-btn--round.is-valid span {\n      display: none; }\n    .foxtel-now-btn--round.is-valid:after {\n      display: inherit;\n      content: \"\\f00c\";\n      background-image: url(/content/dam/now/icons/check.svg);\n      background-size: 30%;\n      background-position: 50%;\n      background-repeat: no-repeat;\n      width: 100%;\n      height: 100%; }\n\n.foxtel-now-btn--black {\n  background-color: black;\n  color: white; }\n  .foxtel-now-btn--black:hover {\n    color: white; }\n\n.foxtel-now-btn--wide {\n  display: inline-block;\n  width: auto;\n  padding-left: 50px;\n  padding-right: 50px; }\n\n.foxtel-now-btn--ghost {\n  background: transparent;\n  border: 1px solid #FF5050;\n  color: #32323C; }\n  .foxtel-now-btn--ghost:hover {\n    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n    color: #32323C; }\n\n.foxtel-now-btn--transparent {\n  background-color: transparent;\n  color: black; }\n\n.foxtel-now-btn--profile {\n  background-color: transparent;\n  color: white;\n  border: solid 1px #dedede;\n  padding: 10px; }\n\n/*********************\r\nFORM VARIABLE\r\n*********************/\n.foxtel-now-form-container {\n  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.15);\n  /* Parsley classes */\n  /* Form classes */\n  font-family: \"ProximaNova\",arial,sans-serif;\n  font-size: 18px;\n  color: #666666;\n  padding: 40px;\n  border-radius: 4px;\n  /* Base for label styling */\n  /* checked mark aspect */\n  /* checked mark aspect changes */\n  /* disabled checkbox */\n  /* hover style just for information */ }\n  .foxtel-now-form-container input::-webkit-input-placeholder {\n    color: transparent; }\n  .foxtel-now-form-container input::-moz-placeholder {\n    color: transparent; }\n  .foxtel-now-form-container input:-ms-input-placeholder {\n    color: transparent; }\n  .foxtel-now-form-container input:focus::-webkit-input-placeholder {\n    color: #32323C; }\n  .foxtel-now-form-container input:focus::-moz-placeholder {\n    color: #32323C; }\n  .foxtel-now-form-container input:focus:-ms-input-placeholder {\n    color: #32323C; }\n  .foxtel-now-form-container .parsley-error {\n    border: solid 0.5px #b60000; }\n  .foxtel-now-form-container .parsley-errors-list {\n    color: #b60000;\n    list-style: none;\n    display: table-row; }\n    .foxtel-now-form-container .parsley-errors-list li {\n      color: #da6e2f;\n      font-size: 12px; }\n  .foxtel-now-form-container .field-description {\n    margin-top: -1rem; }\n  @media (max-width: 767px) {\n    .foxtel-now-form-container {\n      padding: 20px; } }\n  .foxtel-now-form-container .foxtel-now-form-container__tab-group {\n    list-style: none;\n    padding: 0;\n    margin: 0 0 40px 0; }\n    .foxtel-now-form-container .foxtel-now-form-container__tab-group:after {\n      content: \"\";\n      display: table;\n      clear: both; }\n    .foxtel-now-form-container .foxtel-now-form-container__tab-group li a {\n      display: block;\n      text-decoration: none;\n      padding: 15px;\n      background: rgba(160, 179, 176, 0.25);\n      color: #a0b3b0;\n      font-size: 20px;\n      float: left;\n      width: 50%;\n      text-align: center;\n      cursor: pointer;\n      transition: .5s ease; }\n      .foxtel-now-form-container .foxtel-now-form-container__tab-group li a:hover {\n        background: #179b77;\n        color: #ffffff; }\n    .foxtel-now-form-container .foxtel-now-form-container__tab-group .active a {\n      background: #1ab188;\n      color: #ffffff; }\n  .foxtel-now-form-container label {\n    position: absolute;\n    transform: translateY(6px);\n    left: 13px;\n    top: 7px;\n    color: lightgrey;\n    transition: all 0.25s ease;\n    -webkit-backface-visibility: hidden;\n    pointer-events: none; }\n    .foxtel-now-form-container label .req {\n      margin: 2px;\n      color: #1ab188; }\n    .foxtel-now-form-container label.checkbox-label {\n      margin: 0.5rem 0.75rem;\n      top: 0;\n      margin-bottom: 1.2em; }\n  .foxtel-now-form-container label.active {\n    transform: translateY(-5px);\n    left: 12px;\n    font-size: 12px;\n    color: initial; }\n    .foxtel-now-form-container label.active .req {\n      opacity: 0; }\n  .foxtel-now-form-container input, .foxtel-now-form-container textarea {\n    background: none;\n    background-image: none;\n    border: solid 0.5px #999999;\n    border-radius: 0;\n    height: 3em;\n    transition: border-color .25s ease, box-shadow .25s ease; }\n    .foxtel-now-form-container input:focus, .foxtel-now-form-container textarea:focus {\n      outline: 0;\n      border-color: initial; }\n    .foxtel-now-form-container input::-ms-clear, .foxtel-now-form-container textarea::-ms-clear {\n      display: none; }\n  .foxtel-now-form-container textarea {\n    padding: 0; }\n  .foxtel-now-form-container .dropdown.open .custom-select {\n    background-image: url(/content/dam/now/icons/arrow-top.svg); }\n  .foxtel-now-form-container .dropdown .custom-select {\n    border: solid 0.5px #999999;\n    border-radius: 0;\n    transition: border-color .25s ease, box-shadow .25s ease;\n    width: 100%;\n    font-size: 90%;\n    -webkit-appearance: listbox;\n    white-space: normal;\n    min-height: 3.4em;\n    text-align: left;\n    background-image: url(/content/dam/now/icons/arrow-bottom.svg);\n    background-size: 12px 10px; }\n    .foxtel-now-form-container .dropdown .custom-select:focus {\n      outline: 0;\n      border-color: initial; }\n    .foxtel-now-form-container .dropdown .custom-select span {\n      display: inline-block;\n      text-align: left;\n      margin-bottom: initial; }\n  .foxtel-now-form-container .dropdown .dropdown-menu {\n    width: 100%; }\n  .foxtel-now-form-container .dropdown .dropdown-item {\n    white-space: normal; }\n  .foxtel-now-form-container .dropdown .dropdown-toggle::after {\n    content: \"\";\n    display: none; }\n  .foxtel-now-form-container .dropdown .show > .dropdown-menu {\n    width: 100%; }\n  .foxtel-now-form-container [type=\"checkbox\"]:not(:checked),\n  .foxtel-now-form-container [type=\"checkbox\"]:checked {\n    position: absolute;\n    left: -9999px; }\n  .foxtel-now-form-container [type=\"checkbox\"]:not(:checked) + label,\n  .foxtel-now-form-container [type=\"checkbox\"]:checked + label {\n    position: relative;\n    padding-left: 2.95em;\n    cursor: pointer;\n    left: initial;\n    color: initial;\n    pointer-events: auto; }\n  .foxtel-now-form-container [type=\"checkbox\"]:not(:checked) + label:before,\n  .foxtel-now-form-container [type=\"checkbox\"]:checked + label:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 30px;\n    height: 30px;\n    border: 1px solid #999999;\n    background: #fff;\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); }\n  .foxtel-now-form-container [type=\"checkbox\"]:not(:checked) + label:after,\n  .foxtel-now-form-container [type=\"checkbox\"]:checked + label:after {\n    content: '✔';\n    position: absolute;\n    top: .7em;\n    left: .7em;\n    font-size: .8em;\n    line-height: 0.8;\n    color: white;\n    transition: all .2s; }\n  .foxtel-now-form-container [type=\"checkbox\"]:not(:checked) + label:after {\n    opacity: 0;\n    transform: scale(0); }\n  .foxtel-now-form-container [type=\"checkbox\"]:checked + label:after {\n    opacity: 1;\n    transform: scale(1); }\n  .foxtel-now-form-container [type=\"checkbox\"]:checked + label:before {\n    background: #FF5050; }\n  .foxtel-now-form-container [type=\"checkbox\"]:disabled:not(:checked) + label:before,\n  .foxtel-now-form-container [type=\"checkbox\"]:disabled:checked + label:before {\n    box-shadow: none;\n    border-color: #999999;\n    background-color: #ddd; }\n  .foxtel-now-form-container [type=\"checkbox\"]:disabled:checked + label:after {\n    color: #999; }\n  .foxtel-now-form-container [type=\"checkbox\"]:disabled + label {\n    color: #aaa; }\n  .foxtel-now-form-container [type=\"checkbox\"] + label:hover:before {\n    border: 2px solid #4778d9 !important; }\n  .foxtel-now-form-container .field-wrap {\n    position: relative;\n    align-self: flex-start; }\n    .foxtel-now-form-container .field-wrap .input-icon {\n      position: absolute;\n      top: 12px;\n      right: 20px; }\n      .foxtel-now-form-container .field-wrap .input-icon .icon {\n        display: inline-block;\n        width: 1em;\n        height: 1em; }\n        .foxtel-now-form-container .field-wrap .input-icon .icon:hover path:first-child {\n          fill: var(--color1, black); }\n        .foxtel-now-form-container .field-wrap .input-icon .icon:hover path:last-child {\n          stroke: var(--color1, black); }\n      .foxtel-now-form-container .field-wrap .input-icon .icon-Show-password {\n        width: 1.5em; }\n      .foxtel-now-form-container .field-wrap .input-icon img {\n        opacity: 0.5; }\n        .foxtel-now-form-container .field-wrap .input-icon img:hover {\n          opacity: 1; }\n        .foxtel-now-form-container .field-wrap .input-icon img.inactive {\n          display: none; }\n    .foxtel-now-form-container .field-wrap .show-password-target {\n      cursor: pointer;\n      top: 17px; }\n    .foxtel-now-form-container .field-wrap .active {\n      opacity: 1 !important; }\n    .foxtel-now-form-container .field-wrap .tooltips-target {\n      cursor: pointer; }\n      .foxtel-now-form-container .field-wrap .tooltips-target:hover {\n        opacity: 1; }\n    .foxtel-now-form-container .field-wrap .tooltips-container {\n      position: absolute;\n      bottom: 65px;\n      right: 2px;\n      opacity: 0; }\n    .foxtel-now-form-container .field-wrap.required:after {\n      content: \"*\";\n      color: red;\n      position: absolute;\n      top: 5px;\n      right: 25px; }\n  .foxtel-now-form-container .button {\n    border: 0;\n    outline: none;\n    border-radius: 5rem;\n    padding: 15px 0;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: .1em;\n    background: #1ab188;\n    color: #ffffff;\n    transition: all 0.5s ease;\n    -webkit-appearance: none; }\n    .foxtel-now-form-container .button:hover, .foxtel-now-form-container .button:focus {\n      background: #179b77; }\n  .foxtel-now-form-container .button-block {\n    display: block;\n    width: 100%; }\n  .foxtel-now-form-container .forgot {\n    margin-top: -20px;\n    text-align: right; }\n  .foxtel-now-form-container sub {\n    line-height: normal; }\n  .foxtel-now-form-container .form-control--has-button {\n    padding-right: 160px; }\n  .foxtel-now-form-container .password-edit {\n    position: absolute;\n    top: 0;\n    right: 0; }\n    .foxtel-now-form-container .password-edit .btn {\n      margin-top: 20px;\n      border-radius: 0; }\n    .foxtel-now-form-container .password-edit .btn {\n      background-color: white;\n      margin-top: 0;\n      height: 3em;\n      line-height: 3em;\n      padding: 0 20px; }\n  .foxtel-now-form-container .choices .choices__inner {\n    border: solid 0.5px #999999;\n    height: 60px;\n    border-radius: 0;\n    background-color: white; }\n    .foxtel-now-form-container .choices .choices__inner .choices__list--single {\n      padding-left: 8px;\n      font-size: 19px;\n      color: lightgrey; }\n      .foxtel-now-form-container .choices .choices__inner .choices__list--single [aria-selected=true] {\n        color: #32323C; }\n  .foxtel-now-form-container .choices.is-focused .choices__inner .choices__list--single {\n    color: #32323C; }\n\n/* Requirement specific styles */\n#foxtel-now-credit-card-details-form {\n  display: none; }\n\n/* Styles for all icons */\n[class^='icon-'] {\n  cursor: pointer; }\n\n/* Extend bootstrap modal class | Redefine Foxtel modal class */\n.modal.foxtel-now-modal .modal-dialog {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 auto; }\n  .modal.foxtel-now-modal .modal-dialog .modal-content {\n    border-radius: 0;\n    border: 1px solid #F0EDEB;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); }\n    .modal.foxtel-now-modal .modal-dialog .modal-content .modal-body {\n      padding: 50px; }\n      .modal.foxtel-now-modal .modal-dialog .modal-content .modal-body h1,\n      .modal.foxtel-now-modal .modal-dialog .modal-content .modal-body p {\n        color: #32323C;\n        margin-bottom: 30px; }\n\n.modal-backdrop.foxtel-now-modal-backdrop {\n  background-color: white; }\n\n.foxtel-now-cinematic-call-to-action {\n  color: white; }\n  @media (max-width: 767px) {\n    .foxtel-now-cinematic-call-to-action {\n      text-align: center; } }\n  .foxtel-now-cinematic-call-to-action h1 {\n    font-size: 25px;\n    margin-bottom: 20px; }\n    @media (min-width: 768px) {\n      .foxtel-now-cinematic-call-to-action h1 {\n        font-size: 40px; } }\n  .foxtel-now-cinematic-call-to-action h3 {\n    font-size: 16px;\n    margin-bottom: 20px;\n    font-weight: 300; }\n  .foxtel-now-cinematic-call-to-action a {\n    background-color: #FF5050;\n    color: white; }\n\n/* Extend Bootstrap album.scss card class */\n.foxtel-now-album {\n  background: transparent; }\n\n.foxtel-now-card {\n  width: 376px;\n  height: 465px;\n  padding: 15px;\n  background-color: white;\n  border: solid 2px #f0f0f0; }\n  .foxtel-now-card:hover {\n    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2); }\n  .foxtel-now-card.is-disabled:hover {\n    box-shadow: none;\n    border: solid 2px #f0f0f0; }\n  .foxtel-now-card .v.enable {\n    color: black; }\n    .foxtel-now-card .v.enable span:before {\n      content: '\\002B';\n      padding-right: 10px; }\n  .foxtel-now-card .foxtel-now-card__image-wrapper {\n    text-align: center;\n    margin-bottom: 20px; }\n    .foxtel-now-card .foxtel-now-card__image-wrapper .foxtel-now-card__image-wrapper__promo {\n      text-align: left;\n      color: #4a4a4a;\n      height: 36px;\n      display: table;\n      margin-left: -15px;\n      padding-left: 15px;\n      padding-right: 35px;\n      margin-bottom: 15px; }\n      .foxtel-now-card .foxtel-now-card__image-wrapper .foxtel-now-card__image-wrapper__promo p {\n        margin-top: 1rem;\n        display: table-cell;\n        vertical-align: middle; }\n    .foxtel-now-card .foxtel-now-card__image-wrapper figure {\n      width: 100%;\n      height: 208px; }\n      .foxtel-now-card .foxtel-now-card__image-wrapper figure img {\n        width: 100%; }\n    .foxtel-now-card .foxtel-now-card__image-wrapper figcaption {\n      text-align: right;\n      color: #BEC0C2; }\n  .foxtel-now-card .foxtel-now-card__title-wrapper .foxtel-now-card__title {\n    color: white;\n    display: flex;\n    justify-content: space-between; }\n    .foxtel-now-card .foxtel-now-card__title-wrapper .foxtel-now-card__title p {\n      margin-bottom: 0; }\n  .foxtel-now-card .foxtel-now-card__title-wrapper .foxtel-now-card__title--middle {\n    vertical-align: middle; }\n  .foxtel-now-card .foxtel-now-card__title-wrapper .foxtel-now-card__title__name {\n    display: inline;\n    color: #282828; }\n  .foxtel-now-card .foxtel-now-card__title-wrapper .foxtel-now-card__title__link a {\n    color: #4a4a4a;\n    text-decoration: underline; }\n  .foxtel-now-card .foxtel-now-card__title-wrapper .foxtel-now-card__title__price {\n    color: #282828;\n    margin-bottom: 0; }\n  .foxtel-now-card .foxtel-now-card__legal-text-wrapper {\n    color: #BEC0C2;\n    line-height: 1em;\n    margin-top: 1em; }\n  .foxtel-now-card .foxtel-now-price-symbol sup {\n    vertical-align: sub;\n    padding-right: 5px; }\n  .foxtel-now-card .foxtel-now-price-symbol sub {\n    font-size: 10px;\n    bottom: 0;\n    left: 0; }\n  .foxtel-now-card.foxtel-now-price-symbol sup {\n    vertical-align: sub;\n    padding-right: 5px; }\n  .foxtel-now-card.foxtel-now-price-symbol sub {\n    font-size: 10px;\n    bottom: 0;\n    left: 0; }\n  .foxtel-now-card .foxtel-now-btn.enable, .foxtel-now-card .enable.foxtel-now-btn--wide, .foxtel-now-card .enable.foxtel-now-btn--ghost, .foxtel-now-card .enable.foxtel-now-btn--transparent, .foxtel-now-card .enable.foxtel-now-btn--profile {\n    color: black; }\n\n.foxtel-now-card--myaccount {\n  width: 376px;\n  height: 465px;\n  padding: 15px;\n  background-color: white;\n  border: solid 2px #f0f0f0;\n  width: inherit;\n  height: 204px;\n  margin-bottom: 27px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer; }\n  .foxtel-now-card--myaccount:hover {\n    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2); }\n  .foxtel-now-card--myaccount.is-disabled:hover {\n    box-shadow: none;\n    border: solid 2px #f0f0f0; }\n  .foxtel-now-card--myaccount .v.enable {\n    color: black; }\n    .foxtel-now-card--myaccount .v.enable span:before {\n      content: '\\002B';\n      padding-right: 10px; }\n  .foxtel-now-card--myaccount .foxtel-now-card__image-wrapper {\n    text-align: center;\n    margin-bottom: 20px; }\n    .foxtel-now-card--myaccount .foxtel-now-card__image-wrapper .foxtel-now-card__image-wrapper__promo {\n      text-align: left;\n      color: #4a4a4a;\n      height: 36px;\n      display: table;\n      margin-left: -15px;\n      padding-left: 15px;\n      padding-right: 35px;\n      margin-bottom: 15px; }\n      .foxtel-now-card--myaccount .foxtel-now-card__image-wrapper .foxtel-now-card__image-wrapper__promo p {\n        margin-top: 1rem;\n        display: table-cell;\n        vertical-align: middle; }\n    .foxtel-now-card--myaccount .foxtel-now-card__image-wrapper figure {\n      width: 100%;\n      height: 208px; }\n      .foxtel-now-card--myaccount .foxtel-now-card__image-wrapper figure img {\n        width: 100%; }\n    .foxtel-now-card--myaccount .foxtel-now-card__image-wrapper figcaption {\n      text-align: right;\n      color: #BEC0C2; }\n  .foxtel-now-card--myaccount .foxtel-now-card__title-wrapper .foxtel-now-card__title {\n    color: white;\n    display: flex;\n    justify-content: space-between; }\n    .foxtel-now-card--myaccount .foxtel-now-card__title-wrapper .foxtel-now-card__title p {\n      margin-bottom: 0; }\n  .foxtel-now-card--myaccount .foxtel-now-card__title-wrapper .foxtel-now-card__title--middle {\n    vertical-align: middle; }\n  .foxtel-now-card--myaccount .foxtel-now-card__title-wrapper .foxtel-now-card__title__name {\n    display: inline;\n    color: #282828; }\n  .foxtel-now-card--myaccount .foxtel-now-card__title-wrapper .foxtel-now-card__title__link a {\n    color: #4a4a4a;\n    text-decoration: underline; }\n  .foxtel-now-card--myaccount .foxtel-now-card__title-wrapper .foxtel-now-card__title__price {\n    color: #282828;\n    margin-bottom: 0; }\n  .foxtel-now-card--myaccount .foxtel-now-card__legal-text-wrapper {\n    color: #BEC0C2;\n    line-height: 1em;\n    margin-top: 1em; }\n  .foxtel-now-card--myaccount .foxtel-now-price-symbol sup {\n    vertical-align: sub;\n    padding-right: 5px; }\n  .foxtel-now-card--myaccount .foxtel-now-price-symbol sub {\n    font-size: 10px;\n    bottom: 0;\n    left: 0; }\n  .foxtel-now-card--myaccount .foxtel-now-card--myaccount__content > img {\n    width: 80px;\n    height: 80px; }\n  .foxtel-now-card--myaccount .foxtel-now-card--myaccount__content > p {\n    text-align: center;\n    margin-top: 20px; }\n  .foxtel-now-card--myaccount.is-disabled {\n    cursor: none;\n    pointer-events: none; }\n    .foxtel-now-card--myaccount.is-disabled .foxtel-now-card--myaccount__content > p {\n      opacity: 0.5; }\n\n.foxtel-now-card--basic {\n  border-radius: 0;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  -ms-border-radius: 0; }\n  .foxtel-now-card--basic .foxtel-now-card__title {\n    background-color: transparent; }\n  .foxtel-now-card--basic .foxtel-now-card__title__price {\n    font-size: 29px; }\n\n/* Extend Bootstrap jumbotron class */\n.foxtel-now-jumbotron {\n  color: white;\n  border-radius: 2px;\n  background-color: #32323C;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  box-shadow: 0 2px 2px 0 rgba(71, 80, 109, 0.2);\n  -webkit-box-shadow: 2px 3px 10px 0px #ccc;\n  -moz-box-shadow: 2px 3px 10px 0px #ccc;\n  box-shadow: 2px 3px 10px 0px #ccc;\n  z-index: 99999;\n  top: 0; }\n  .foxtel-now-jumbotron .shoppingCart-nav-up {\n    padding-top: -80px; }\n\n@media (max-width: 767px) {\n  .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description,\n  .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary {\n    display: table-row; } }\n\n.foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description {\n  padding: 0 20px 0 0; }\n\n.foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary {\n  display: -webkit-box;\n  /* OLD - iOS 6-, Safari 3.1-6 */\n  display: -moz-box;\n  /* OLD - Firefox 19- (buggy but mostly works) */\n  display: -ms-flexbox;\n  /* TWEENER - IE 10 */\n  display: -webkit-flex;\n  /* NEW - Chrome */\n  display: flex;\n  flex-direction: row;\n  flex-wrap: inherit; }\n\n.foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description {\n  float: left; }\n  .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper {\n    display: table; }\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-title-wrapper {\n      display: table-cell; }\n      @media (max-width: 767px) {\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-title-wrapper {\n          display: table-row; } }\n      .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-title-wrapper p {\n        margin-right: 20px; }\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper {\n      display: table-cell; }\n      .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag,\n      .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--ghost,\n      .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--transparent {\n        display: inline-block;\n        color: black;\n        border-radius: 50px;\n        background-color: white;\n        padding: 10px 30px;\n        white-space: nowrap; }\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag sub,\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--ghost sub,\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--transparent sub {\n          bottom: -5px;\n          font-size: 36px;\n          left: 10px;\n          cursor: pointer;\n          padding: 0 10px; }\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag:hover sub,\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--ghost:hover sub,\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--transparent:hover sub {\n          background: #F0EDEB;\n          border-radius: 1em; }\n      .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--ghost {\n        border: 1px dashed white;\n        background: transparent;\n        color: white; }\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--ghost:hover {\n          background: white;\n          color: black;\n          border: none; }\n          .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--ghost:hover sub {\n            padding: 0 13px; }\n      .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag--transparent {\n        display: none;\n        background: transparent;\n        color: white;\n        padding: 10px; }\n\n.foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary {\n  border-left: solid 1px rgba(255, 255, 255, 0.2); }\n  @media (max-width: 767px) {\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary {\n      border: none;\n      border-top: solid 1px rgba(255, 255, 255, 0.2); } }\n  .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost,\n  .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout {\n    display: table;\n    width: 100%;\n    min-width: 258px;\n    padding: 5px 0; }\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost sub,\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout sub {\n      font-weight: normal;\n      bottom: 0;\n      font-size: 0.6em;\n      margin-left: 0.5em; }\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost sup,\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout sup {\n      font-weight: normal; }\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost p,\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout p {\n      display: table-cell; }\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost p:last-child,\n    .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout p:last-child {\n      text-align: right; }\n  .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost.total {\n    font-family: \"ProximaNova-Bold\", arial, sans-serif; }\n    @media (max-width: 767px) {\n      .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost.total {\n        font-family: \"ProximaNova\", arial, sans-serif; }\n        .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost.total p:last-child {\n          font-size: 2em; } }\n  .foxtel-now-jumbotron--shopping-cart .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout {\n    font-size: 18px; }\n\n.foxtel-now-jumbotron--minimized {\n  position: fixed;\n  left: 0;\n  right: 0; }\n  @media (max-width: 767px) {\n    .foxtel-now-jumbotron--minimized {\n      padding-top: 0; } }\n  .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__description {\n    width: 60%; }\n    @media (max-width: 767px) {\n      .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__description {\n        display: none; } }\n    .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper .foxtel-now-jumbotron__pack-tag {\n      display: none; }\n    .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper p:first-child,\n    .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper p:nth-child(2),\n    .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__description .foxtel-now-jumbotron--shopping-cart__description-wrapper .cart-item-wrapper p.foxtel-now-jumbotron__pack-tag--transparent {\n      display: inline-block; }\n  .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost {\n    display: none;\n    flex: 0 1 100%; }\n    .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost.total {\n      flex: 1 0 50%;\n      display: -webkit-box;\n      /* OLD - iOS 6-, Safari 3.1-6 */\n      display: -moz-box;\n      /* OLD - Firefox 19- (buggy but mostly works) */\n      display: -ms-flexbox;\n      /* TWEENER - IE 10 */\n      display: -webkit-flex;\n      /* NEW - Chrome */\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      align-items: center; }\n      @media (max-width: 767px) {\n        .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost.total p:last-child {\n          font-size: inherit; } }\n    @media (max-width: 767px) {\n      .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost {\n        width: initial;\n        padding-top: 0;\n        padding-bottom: 0; }\n        .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost p {\n          margin-bottom: 0; } }\n    .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost p {\n      display: inline-block; }\n    .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost p:last-child {\n      white-space: nowrap; }\n  .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout {\n    display: table-cell;\n    flex: 1 0 50%; }\n    @media (max-width: 767px) {\n      .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout .foxtel-now-btn, .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout .foxtel-now-btn--wide, .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout .foxtel-now-btn--ghost, .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout .foxtel-now-btn--transparent, .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout .foxtel-now-btn--profile {\n        margin-top: 15px; } }\n  .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__total-cost,\n  .foxtel-now-jumbotron--minimized .foxtel-now-jumbotron--shopping-cart__summary .foxtel-now-jumbotron--shopping-cart__summary__checkout {\n    min-width: initial; }\n\n.foxtel-now-progress-bar-cont {\n  width: 576px;\n  left: calc(50% - 288px);\n  padding: 0;\n  margin: 50px auto;\n  color: #F0EDEB; }\n  @media (max-width: 767px) {\n    .foxtel-now-progress-bar-cont {\n      -ms-transform: rotate(90deg);\n      /* IE 9 */\n      -webkit-transform: rotate(90deg);\n      /* Chrome, Safari, Opera */\n      transform: rotate(90deg);\n      width: 135px;\n      margin-top: 100px;\n      margin-bottom: 100px;\n      margin-left: -30px; } }\n  .foxtel-now-progress-bar-cont .foxtel-now-cont-flex-box {\n    display: flex;\n    justify-content: space-between;\n    height: 0; }\n  .foxtel-now-progress-bar-cont .foxtel-now-progress-bar {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    width: 100%;\n    height: 3px;\n    margin: 0 auto; }\n    @media (max-width: 767px) {\n      .foxtel-now-progress-bar-cont .foxtel-now-progress-bar {\n        width: 146px; } }\n  .foxtel-now-progress-bar-cont .foxtel-now-progress-bar-dot {\n    height: 10px;\n    width: 10px;\n    opacity: 0;\n    border-radius: 100%;\n    border: 3px solid grey;\n    background: grey;\n    cursor: pointer;\n    transition: all 0.4s ease-in-out; }\n  .foxtel-now-progress-bar-cont .foxtel-now-progress-bar-dot-wrapper {\n    position: relative;\n    width: 0;\n    top: -50px; }\n    .foxtel-now-progress-bar-cont .foxtel-now-progress-bar-dot-wrapper p:first-child {\n      min-width: 100px;\n      white-space: nowrap; }\n      @media (max-width: 767px) {\n        .foxtel-now-progress-bar-cont .foxtel-now-progress-bar-dot-wrapper p:first-child {\n          transform: rotate(-90deg);\n          margin-left: -45px;\n          padding-left: 50px;\n          margin-top: -1px; } }\n  @media (min-width: 768px) {\n    .foxtel-now-progress-bar-cont .second p:first-child {\n      margin-left: -20px; } }\n  @media (min-width: 768px) {\n    .foxtel-now-progress-bar-cont .third p:first-child {\n      margin-left: -30px; } }\n  @media (min-width: 768px) {\n    .foxtel-now-progress-bar-cont .fourth p:first-child {\n      margin-left: -30px; } }\n  .foxtel-now-progress-bar-cont progress[value]::-webkit-progress-value {\n    /* Changes line color */\n    background-color: #FF5050;\n    -webkit-transition: all 0.4s ease-in-out;\n    -moz-transition: all 0.4s ease-in-out;\n    -o-transition: all 0.4s ease-in-out;\n    transition: all 0.4s ease-in-out; }\n  .foxtel-now-progress-bar-cont progress[value]::-webkit-progress-bar {\n    /* Changes background color */\n    background-color: #F0EDEB; }\n  .foxtel-now-progress-bar-cont .border-change {\n    color: black;\n    border-color: grey;\n    -webkit-transition: all 0.4s ease-in-out;\n    -moz-transition: all 0.4s ease-in-out;\n    -o-transition: all 0.4s ease-in-out;\n    transition: all 0.4s ease-in-out; }\n\n.pack-content-programs {\n  background-color: #32323C;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  font-weight: 300;\n  margin-bottom: 70px; }\n  .pack-content-programs h3,\n  .pack-content-programs h4 {\n    font-weight: 300; }\n  .pack-content-programs h3 {\n    font-size: 16px;\n    color: white;\n    margin-bottom: 20px; }\n    @media (min-width: 768px) {\n      .pack-content-programs h3 {\n        margin-bottom: 40px; } }\n  .pack-content-programs .pack-content__item {\n    position: relative;\n    margin-bottom: 20px; }\n    .pack-content-programs .pack-content__item .pack-content__item__inner {\n      border: 1px solid transparent;\n      transition: margin-top 100ms linear;\n      background-color: #32323C; }\n      .pack-content-programs .pack-content__item .pack-content__item__inner.is-active {\n        z-index: 1;\n        position: absolute;\n        top: 0;\n        left: 0;\n        border-color: #44444d;\n        margin-top: -30px; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner.is-active .pack-content__item__details {\n          height: auto; }\n          .pack-content-programs .pack-content__item .pack-content__item__inner.is-active .pack-content__item__details .pack-content__item__description,\n          .pack-content-programs .pack-content__item .pack-content__item__inner.is-active .pack-content__item__details .pack-content__item__link {\n            display: block; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner.is-active .pack-content__item__image {\n          margin-bottom: 30px; }\n      .pack-content-programs .pack-content__item .pack-content__item__inner h4,\n      .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__channel,\n      .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__description {\n        font-size: 12px; }\n        @media (min-width: 992px) {\n          .pack-content-programs .pack-content__item .pack-content__item__inner h4,\n          .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__channel,\n          .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__description {\n            font-size: 14px; } }\n      .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__image {\n        margin-bottom: 20px;\n        transition: margin-bottom 75ms linear; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__image img {\n          max-width: 100%; }\n      .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details {\n        height: 80px; }\n        @media (min-width: 768px) {\n          .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details {\n            padding: 0 10px 20px 10px;\n            height: 110px; } }\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details h4 {\n          color: white;\n          margin-bottom: 5px; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details .pack-content__item__channel,\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details p {\n          color: #F0EDEB; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details .pack-content__item__description,\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details .pack-content__item__link {\n          display: none; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details .pack-content__item__description,\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details .pack-content__item__channel {\n          opacity: 0.7; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details .pack-content__item__channel {\n          margin-bottom: 20px; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details p {\n          font-size: 14px;\n          margin-bottom: 10px; }\n        .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details a {\n          color: white;\n          text-decoration: underline;\n          font-size: 14px;\n          font-weight: 400;\n          text-decoration: none; }\n          .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details a:hover {\n            text-decoration: underline; }\n          .pack-content-programs .pack-content__item .pack-content__item__inner .pack-content__item__details a:after {\n            display: inline-block;\n            content: \" \";\n            background-image: url(/content/dam/now/Icons/arrow-right-white.svg);\n            background-repeat: no-repeat;\n            background-size: 100%;\n            width: 11px;\n            height: 11px;\n            margin-left: 4px; }\n\n.pack-content-channels h4 {\n  font-size: 12px;\n  color: #32323C; }\n\n.pack-content-channels ul.channel-icons {\n  padding-left: 0;\n  margin-bottom: 30px; }\n  @media (min-width: 768px) {\n    .pack-content-channels ul.channel-icons {\n      margin-bottom: 70px; } }\n  .pack-content-channels ul.channel-icons li {\n    list-style: none;\n    display: inline-block;\n    padding: 30px 40px; }\n    .pack-content-channels ul.channel-icons li img {\n      max-width: 100%; }\n  @media (min-width: 768px) {\n    .pack-content-channels ul.channel-icons.channel-icons--universal li {\n      padding: 20px 25px; } }\n  @media (min-width: 992px) {\n    .pack-content-channels ul.channel-icons.channel-icons--universal li {\n      padding: 20px 15px; } }\n\n/* Pack Summary styles */\n.foxtel-now-pack-summary-container {\n  font-family: \"ProximaNova\",arial,sans-serif;\n  font-size: 18px;\n  padding: 40px;\n  color: #666666; }\n  @media (max-width: 767px) {\n    .foxtel-now-pack-summary-container {\n      padding: 20px; } }\n  .foxtel-now-pack-summary-container .row {\n    font-size: 22px; }\n  .foxtel-now-pack-summary-container .foxtel-now-pack-summary-container__pack-wrapper .row .foxtel-now-pack-summary-container__pack-wrapper__price {\n    text-align: right; }\n  .foxtel-now-pack-summary-container .foxtel-now-pack-summary-container__pack-wrapper .row sub {\n    margin-top: -10px;\n    margin-bottom: 10px;\n    line-height: normal; }\n\n.foxtel-now-pack-details {\n  position: relative;\n  margin-bottom: 50px; }\n  .foxtel-now-pack-details h3 {\n    margin-bottom: 20px; }\n  .foxtel-now-pack-details p {\n    margin-bottom: 20px; }\n  @media (max-width: 767px) {\n    .foxtel-now-pack-details .foxtel-now-pack-details__meta {\n      text-align: center; } }\n  @media (min-width: 768px) {\n    .foxtel-now-pack-details .foxtel-now-pack-details__meta {\n      position: relative;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center; } }\n  .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__inner {\n    padding-right: 50px; }\n  .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__offers {\n    margin-bottom: 20px; }\n  .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__description {\n    font-size: 14px;\n    color: black;\n    margin-bottom: 30px; }\n  .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__actions {\n    margin-bottom: 10px;\n    position: relative; }\n    .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__actions .btn {\n      display: inline-block;\n      position: relative;\n      width: 80%;\n      max-width: 200px;\n      margin-bottom: 30px; }\n      @media (min-width: 768px) {\n        .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__actions .btn {\n          margin-right: 20px;\n          width: auto;\n          margin-bottom: 0; } }\n      .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__actions .btn.active {\n        color: white; }\n      .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__actions .btn.slide-bg {\n        display: none;\n        position: absolute;\n        top: 0;\n        height: 100%;\n        background-color: #FF5050; }\n  .foxtel-now-pack-details .foxtel-now-pack-details__meta .foxtel-now-pack-details__meta__extra {\n    color: #32323C;\n    font-size: 11px; }\n  .foxtel-now-pack-details .foxtel-now-pack-details__image {\n    margin-bottom: 50px; }\n    .foxtel-now-pack-details .foxtel-now-pack-details__image img {\n      max-width: 100%;\n      display: block;\n      margin: 0 auto; }\n\n.foxtel-now-pack-list {\n  padding-left: 0;\n  margin-bottom: 100px; }\n\n.foxtel-now-pack-list__item {\n  margin-bottom: 30px;\n  list-style: none; }\n  .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner {\n    position: relative;\n    border-radius: 3px;\n    border: 1px solid transparent; }\n    .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner.as-text-link {\n      display: none;\n      height: 100%;\n      min-height: 150px;\n      border: 1px solid #32323C; }\n      @media (min-width: 768px) {\n        .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner.as-text-link {\n          display: block; } }\n      .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner.as-text-link h3 {\n        font-weight: 400;\n        color: #32323C;\n        bottom: 50%;\n        left: 0%;\n        width: 100%;\n        text-align: center;\n        transform: translateY(50%);\n        font-size: 26px; }\n        .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner.as-text-link h3 .icon {\n          font-weight: 300;\n          padding-left: 5px; }\n    .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner.overlay:after {\n      opacity: 0.4;\n      border-radius: 3px; }\n    @media (max-width: 767px) {\n      .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner .ribbon {\n        display: none; } }\n    .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner img {\n      width: 100%;\n      border-radius: 3px; }\n    .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner h3,\n    .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner .legal {\n      z-index: 1;\n      position: absolute; }\n    .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner h3 {\n      margin-bottom: 0;\n      bottom: 15px;\n      left: 15px;\n      color: white;\n      font-size: 18px;\n      font-weight: 700; }\n    .foxtel-now-pack-list__item > a .foxtel-now-pack-list__item__inner .legal {\n      bottom: 15px;\n      right: 20px;\n      color: white;\n      font-size: 11px;\n      opacity: 0.5;\n      font-weight: 300;\n      text-align: right;\n      max-width: 45%; }\n\n.foxtel-now-pack-navigation-wrapper {\n  background-color: #F0F0F0;\n  border-bottom: 2px solid #d7d7d7;\n  margin-bottom: 50px; }\n  .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation {\n    font-size: 14px; }\n    .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation h3 {\n      color: #888;\n      font-weight: 400;\n      font-size: 14px;\n      margin-bottom: 40px;\n      padding-left: 10px; }\n    .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation .foxtel-now-pack-navigation__pack-list {\n      padding-left: 0; }\n      .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation .foxtel-now-pack-navigation__pack-list li {\n        display: inline-block;\n        list-style: none;\n        padding-bottom: 16px;\n        padding-left: 10px;\n        padding-right: 10px;\n        border-bottom: 2px solid transparent;\n        margin-bottom: 20px; }\n        .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation .foxtel-now-pack-navigation__pack-list li.active {\n          border-bottom: 2px solid #FF5050; }\n          .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation .foxtel-now-pack-navigation__pack-list li.active a {\n            font-weight: 700;\n            pointer-events: none; }\n        .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation .foxtel-now-pack-navigation__pack-list li a {\n          color: black;\n          text-decoration: none; }\n    @media (min-width: 768px) {\n      .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation {\n        padding-top: 30px; }\n        .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation.first {\n          border-right: 2px solid #d7d7d7; } }\n    .foxtel-now-pack-navigation-wrapper .foxtel-now-pack-navigation.first {\n      padding-top: 30px; }\n\n.foxtel-now-info-bar {\n  background-color: #00F0A0; }\n  .foxtel-now-info-bar.warn {\n    background-color: #FFB64F; }\n  .foxtel-now-info-bar.neutral {\n    background-color: #F0EDEB; }\n  .foxtel-now-info-bar .foxtel-now-info-bar__inner {\n    position: relative; }\n    .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content {\n      padding: 15px;\n      color: #32323C;\n      line-height: 34px; }\n      @media (min-width: 768px) {\n        .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content {\n          padding: 15px 70px 15px 30px;\n          line-height: 46px; } }\n      .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content p {\n        margin-bottom: 0; }\n        @media (max-width: 767px) {\n          .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content p {\n            text-align: center; } }\n      .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content .foxtel-now-info-bar__icon-main {\n        display: block;\n        width: 50px;\n        height: 50px;\n        background-size: 100%;\n        margin: 0 auto 15px auto; }\n        @media (min-width: 768px) {\n          .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content .foxtel-now-info-bar__icon-main {\n            display: inline-block;\n            margin-right: 20px;\n            margin-bottom: 0;\n            width: 30px;\n            height: auto;\n            background-size: 30px;\n            background-repeat: no-repeat;\n            background-position: 0 5px; } }\n        .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content .foxtel-now-info-bar__icon-main.icon-info {\n          background-image: url(/content/dam/now/icons/info.svg); }\n        .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content .foxtel-now-info-bar__icon-main.icon-tick {\n          background-image: url(/content/dam/now/icons/check.svg); }\n      .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content .wysiwyg {\n        display: inline-block; }\n        @media (max-width: 767px) {\n          .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content .wysiwyg {\n            display: initial; } }\n      .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content .btn {\n        display: inline-block;\n        background-color: #32323C;\n        color: white;\n        padding: 12px 30px;\n        width: 100%;\n        margin-top: 20px; }\n        @media (min-width: 768px) {\n          .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content .btn {\n            width: auto;\n            margin-left: 20px;\n            margin-top: 0; } }\n      .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__content a {\n        color: white; }\n    .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__close {\n      position: absolute;\n      color: #32323C;\n      transition: color 300ms ease-in;\n      top: 15px;\n      right: 15px;\n      font-size: 30px; }\n      @media (min-width: 768px) {\n        .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__close {\n          top: 50%;\n          transform: translateY(-50%);\n          right: 25px;\n          font-size: 24px; } }\n      .foxtel-now-info-bar .foxtel-now-info-bar__inner .foxtel-now-info-bar__close:hover {\n        color: black;\n        text-decoration: none; }\n\n.streaming-teaser {\n  margin-bottom: 80px; }\n  .streaming-teaser h2 {\n    font-size: 28px;\n    font-weight: 700;\n    margin-bottom: 60px;\n    text-align: center; }\n  .streaming-teaser .streaming-teaser__streaming-type {\n    margin-bottom: 60px; }\n    .streaming-teaser .streaming-teaser__streaming-type h3,\n    .streaming-teaser .streaming-teaser__streaming-type h4,\n    .streaming-teaser .streaming-teaser__streaming-type a {\n      text-align: center; }\n    .streaming-teaser .streaming-teaser__streaming-type h3,\n    .streaming-teaser .streaming-teaser__streaming-type h4 {\n      font-weight: 400; }\n    .streaming-teaser .streaming-teaser__streaming-type h3 {\n      margin-bottom: 20px; }\n    .streaming-teaser .streaming-teaser__streaming-type img {\n      margin-bottom: 30px;\n      max-width: 100%; }\n    .streaming-teaser .streaming-teaser__streaming-type h4 {\n      color: #32323C;\n      font-size: 16px;\n      line-height: 22px; }\n    .streaming-teaser .streaming-teaser__streaming-type a {\n      display: block;\n      font-size: 12px;\n      font-weight: 500;\n      color: black;\n      text-decoration: underline;\n      margin-bottom: 20px; }\n\n/* Styles for welcome message */\n.foxtel-now-welcome-message-wrapper {\n  text-align: left;\n  max-width: 500px;\n  color: #fff; }\n  @media (max-width: 767px) {\n    .foxtel-now-welcome-message-wrapper {\n      text-align: center; } }\n  .foxtel-now-welcome-message-wrapper h1 {\n    font-weight: bold; }\n  .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title,\n  .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links {\n    margin-top: 15px; }\n    .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn, .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn--wide, .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn--ghost, .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn--transparent, .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn--profile,\n    .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn,\n    .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn--wide,\n    .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn--ghost,\n    .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn--transparent,\n    .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn--profile {\n      max-width: 308px;\n      margin-bottom: 30px; }\n      @media (max-width: 767px) {\n        .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn, .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn--wide, .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn--ghost, .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn--transparent, .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-btn--profile,\n        .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn,\n        .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn--wide,\n        .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn--ghost,\n        .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn--transparent,\n        .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-btn--profile {\n          margin-left: auto;\n          margin-right: auto; } }\n    .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-logo-wrapper,\n    .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-logo-wrapper {\n      display: flex;\n      justify-content: flex-start; }\n      @media (max-width: 767px) {\n        .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-logo-wrapper,\n        .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-logo-wrapper {\n          justify-content: space-around; } }\n      .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-logo-wrapper img,\n      .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-logo-wrapper img {\n        width: 120px; }\n        @media (min-width: 768px) {\n          .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-logo-wrapper img,\n          .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-logo-wrapper img {\n            width: 165px; }\n            .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title .foxtel-now-logo-wrapper img:first-child,\n            .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__links .foxtel-now-logo-wrapper img:first-child {\n              margin-right: 20px; } }\n  .foxtel-now-welcome-message-wrapper .foxtel-now-welcome-message-wrapper__title {\n    margin-bottom: 30px; }\n\n/* Styles for device list component */\n.foxtel-now-device-container {\n  margin-bottom: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  border-top: solid 1px #F0EDEB;\n  border-bottom: solid 1px #F0EDEB; }\n  @media (min-width: 768px) {\n    .foxtel-now-device-container {\n      padding: 0 100px; } }\n  .foxtel-now-device-container .container-breakout {\n    display: flex;\n    flex-wrap: wrap; }\n  .foxtel-now-device-container .foxtel-now-device-wrapper {\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    border-right: solid 1px #F0EDEB;\n    border-bottom: solid 1px #F0EDEB;\n    border-left: solid 1px #F0EDEB;\n    margin-bottom: -1px;\n    margin-left: -1px;\n    padding-top: 25px;\n    padding-bottom: 25px;\n    padding-left: 30px;\n    padding-right: 30px; }\n    @media (max-width: 767px) {\n      .foxtel-now-device-container .foxtel-now-device-wrapper {\n        border-left: none;\n        border-right: none;\n        border-bottom: none; } }\n    .foxtel-now-device-container .foxtel-now-device-wrapper a {\n      border-bottom: 3px solid transparent;\n      color: #32323C;\n      display: inline-block;\n      padding-bottom: 3px; }\n    .foxtel-now-device-container .foxtel-now-device-wrapper .foxtel-now-device-image {\n      text-align: center;\n      min-height: 60px;\n      min-width: 70px;\n      line-height: 50px; }\n      .foxtel-now-device-container .foxtel-now-device-wrapper .foxtel-now-device-image:after {\n        content: \"\";\n        display: inline-block; }\n      .foxtel-now-device-container .foxtel-now-device-wrapper .foxtel-now-device-image img {\n        max-width: 80px;\n        max-height: 50px; }\n    .foxtel-now-device-container .foxtel-now-device-wrapper .foxtel-now-device-link {\n      text-align: center;\n      font-size: 12px; }\n    .foxtel-now-device-container .foxtel-now-device-wrapper:hover {\n      cursor: pointer;\n      -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n      -moz-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2); }\n      .foxtel-now-device-container .foxtel-now-device-wrapper:hover a {\n        border-bottom: 3px solid #FF5050;\n        text-decoration: none; }\n\n.main-support.main {\n  padding: 0; }\n  .main-support.main .accord-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    text-decoration: none;\n    color: #888;\n    padding: 30px;\n    transition: border .25s ease-in;\n    border: 1px solid #F0EDEB;\n    margin-top: 15px; }\n    .main-support.main .accord-header:hover, .main-support.main .accord-header:focus {\n      text-decoration: none;\n      cursor: pointer; }\n    .main-support.main .accord-header::after {\n      content: \"\\e901\";\n      font-family: 'foxtel-icons';\n      speak: none;\n      font-style: normal;\n      font-weight: normal;\n      font-variant: normal;\n      text-transform: none;\n      line-height: 1;\n      font-size: 1.25em;\n      -webkit-font-smoothing: antialiased; }\n    .main-support.main .accord-header.active::after {\n      content: '\\e909'; }\n  .main-support.main .landing-nav-block.content-landing {\n    background: none; }\n    .main-support.main .landing-nav-block.content-landing::before, .main-support.main .landing-nav-block.content-landing::after {\n      display: none; }\n    .main-support.main .landing-nav-block.content-landing .landing-list {\n      padding-top: 15px; }\n      .main-support.main .landing-nav-block.content-landing .landing-list p {\n        color: #32323C; }\n  .main-support.main .header-support {\n    background-color: #32323C;\n    min-height: 240px;\n    display: flex;\n    align-items: center;\n    margin-top: 20px; }\n    .main-support.main .header-support .heading h3 span {\n      color: white; }\n    .main-support.main .header-support .bg-line {\n      display: none; }\n    .main-support.main .header-support .search-block #search-text {\n      box-shadow: none;\n      border: none;\n      height: 50px;\n      border-radius: 5px;\n      font-size: 16px;\n      max-width: 450px; }\n    .main-support.main .header-support .search-block input[type=\"submit\"] {\n      background-image: url(\"/content/dam/now/icons/magnifier.svg\");\n      right: 15px;\n      top: 15px;\n      width: 22px;\n      height: 22px;\n      cursor: pointer; }\n  .main-support.main h3 {\n    font-weight: bold; }\n  .main-support.main .jump-link-2 .link-list li {\n    list-style: disc; }\n  .main-support.main .related-block {\n    padding: 20px; }\n    .main-support.main .related-block h3 {\n      margin-top: 0; }\n  .main-support.main .wysiwyg {\n    padding: 0;\n    margin: 20px 0; }\n\n@media (min-width: 992px) {\n  .main-support.main .header-support .search-block {\n    width: 450px; } }\n\n@media (max-width: 767px) {\n  .main-support.main .accord-header {\n    flex-direction: column; } }\n\n/* Styles for cinematic block */\n.cineWrapper {\n  position: relative; }\n\n.foxtel-now-cinematic-highlight-block {\n  z-index: 1;\n  position: absolute; }\n  @media (max-width: 767px) {\n    .foxtel-now-cinematic-highlight-block {\n      top: 20%;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 80%; } }\n  @media (min-width: 768px) {\n    .foxtel-now-cinematic-highlight-block {\n      left: 80px;\n      bottom: 10%; } }\n\n.foxtel-now-meta-information .foxtel-now-cinematic-info {\n  position: absolute;\n  right: 50px;\n  bottom: 10%;\n  text-align: right; }\n  .foxtel-now-meta-information .foxtel-now-cinematic-info p,\n  .foxtel-now-meta-information .foxtel-now-cinematic-info span,\n  .foxtel-now-meta-information .foxtel-now-cinematic-info a {\n    color: rgba(255, 255, 255, 0.8);\n    font-size: 12px;\n    margin-bottom: 0;\n    font-weight: 300; }\n    .foxtel-now-meta-information .foxtel-now-cinematic-info p.name,\n    .foxtel-now-meta-information .foxtel-now-cinematic-info span.name,\n    .foxtel-now-meta-information .foxtel-now-cinematic-info a.name {\n      margin-bottom: .4rem; }\n  .foxtel-now-meta-information .foxtel-now-cinematic-info img {\n    max-height: 40px; }\n\n.foxtel-now-meta-information.left-index .foxtel-now-cinematic-info {\n  left: 50px; }\n\n.image-cinematic picture img {\n  width: 100%; }\n\n.image-cinematic .dark-shadow {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0.5;\n  background: linear-gradient(90deg, black, transparent 50%); }\n\n/* Styles for checkoutWithoutStarterPack component */\n.foxtel-now-no-starter-pack-container {\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n  padding: 30px 80px; }\n  @media (max-width: 767px) {\n    .foxtel-now-no-starter-pack-container {\n      width: 100%;\n      padding-left: 15px;\n      padding-right: 15px; }\n      .foxtel-now-no-starter-pack-container h1 {\n        font-size: 29px; } }\n  .foxtel-now-no-starter-pack-container .foxtel-now-no-starter-pack-container__title-wrapper {\n    text-align: center; }\n  .foxtel-now-no-starter-pack-container .foxtel-now-no-starter-pack-container__list-wrapper {\n    border-top: 1px solid lightgrey;\n    border-bottom: 1px solid lightgrey;\n    margin-top: 25px;\n    margin-bottom: 25px; }\n  .foxtel-now-no-starter-pack-container .foxtel-now-no-starter-pack-container__button-wrapper {\n    display: flex;\n    justify-content: space-between; }\n    .foxtel-now-no-starter-pack-container .foxtel-now-no-starter-pack-container__button-wrapper .foxtel-now-btn--round {\n      max-width: 200px; }\n      .foxtel-now-no-starter-pack-container .foxtel-now-no-starter-pack-container__button-wrapper .foxtel-now-btn--round:first-child {\n        margin-right: 10px; }\n    @media (max-width: 767px) {\n      .foxtel-now-no-starter-pack-container .foxtel-now-no-starter-pack-container__button-wrapper {\n        display: block; }\n        .foxtel-now-no-starter-pack-container .foxtel-now-no-starter-pack-container__button-wrapper .foxtel-now-btn--round {\n          max-width: inherit;\n          margin-bottom: 15px; } }\n\n/* View my bills component related class */\n.foxtel-now-view-my-bill-wrapper {\n  margin-top: 30px; }\n  .foxtel-now-view-my-bill-wrapper .foxtel-now-bill-history-template-container {\n    margin-top: 30px; }\n    .foxtel-now-view-my-bill-wrapper .foxtel-now-bill-history-template-container .foxtel-now-view-my-bills-container {\n      display: table;\n      width: 40%; }\n      .foxtel-now-view-my-bill-wrapper .foxtel-now-bill-history-template-container .foxtel-now-view-my-bills-container .foxtel-now-view-my-bills-container__th p {\n        font-weight: bold; }\n      .foxtel-now-view-my-bill-wrapper .foxtel-now-bill-history-template-container .foxtel-now-view-my-bills-container .foxtel-now-view-my-bills-container__row {\n        display: table-row;\n        cursor: pointer; }\n        .foxtel-now-view-my-bill-wrapper .foxtel-now-bill-history-template-container .foxtel-now-view-my-bills-container .foxtel-now-view-my-bills-container__row:hover {\n          background-color: #f0edeb; }\n        .foxtel-now-view-my-bill-wrapper .foxtel-now-bill-history-template-container .foxtel-now-view-my-bills-container .foxtel-now-view-my-bills-container__row p {\n          display: table-cell;\n          padding-top: 10px;\n          padding-bottom: 10px; }\n          .foxtel-now-view-my-bill-wrapper .foxtel-now-bill-history-template-container .foxtel-now-view-my-bills-container .foxtel-now-view-my-bills-container__row p:last-child a {\n            cursor: pointer;\n            color: black;\n            border-bottom: 1px solid lightgrey; }\n\n/* Billing details component related class */\n.foxtel-now-display-div-template-container {\n  margin-bottom: 1em; }\n  .foxtel-now-display-div-template-container .foxtel-now-display-div-wrapper {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 15px;\n    padding-bottom: 15px; }\n    .foxtel-now-display-div-template-container .foxtel-now-display-div-wrapper .card-details {\n      white-space: nowrap; }\n\n/*!\r\n * smartbanner.js v1.5.0 <https://github.com/ain/smartbanner.js>\r\n * Copyright © 2017 Ain Tohvri, contributors. Licensed under GPL-3.0.\r\n */\n.smartbanner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow-x: hidden;\n  width: 100%;\n  height: 90px;\n  background: #f3f3f3;\n  font-family: Helvetica, sans, sans-serif; }\n\n.smartbanner__exit {\n  position: absolute;\n  top: calc(50% - 6px);\n  left: 9px;\n  display: block;\n  margin: 0;\n  width: 12px;\n  height: 12px;\n  border: 0;\n  text-align: center; }\n\n.smartbanner__exit::before,\n.smartbanner__exit::after {\n  position: absolute;\n  width: 1px;\n  height: 12px;\n  background: #767676;\n  content: ' '; }\n\n.smartbanner__exit::before {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n.smartbanner__exit::after {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg); }\n\n.smartbanner__icon {\n  position: absolute;\n  top: 10px;\n  left: 30px;\n  width: 64px;\n  height: 64px;\n  border-radius: 15px;\n  background-size: 64px 64px; }\n\n.smartbanner__info {\n  position: absolute;\n  top: 10px;\n  left: 104px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow-y: hidden;\n  width: 60%;\n  height: 64px;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.smartbanner__info__title {\n  font-size: 14px; }\n\n.smartbanner__info__author,\n.smartbanner__info__price {\n  font-size: 12px; }\n\n.smartbanner__button {\n  position: absolute;\n  top: 32px;\n  right: 10px;\n  z-index: 1;\n  display: block;\n  padding: 0 10px;\n  min-width: 10%;\n  border-radius: 5px;\n  background: #f3f3f3;\n  color: #1474fc;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none; }\n\n.smartbanner__button__label {\n  text-align: center; }\n","/*********************\r\nfont variables\r\n*********************/\r\n$font-size--xl:   76px;\r\n$font-size--lg:   47px;\r\n$font-size--md:   29px;\r\n$font-size--base: 18px;\r\n$font-size--sm:   12px;\r\n\r\n$font-family--regular\t:\"ProximaNova\", arial, sans-serif;\r\n$font-family--Thin\t\t:\"ProximaNova-Thin\", arial, sans-serif;\r\n$font-family--Light\t\t:\"ProximaNova-Light\", arial, sans-serif;\r\n$font-family--Bold\t\t:\"ProximaNova-Bold\", arial, sans-serif;\r\n\r\n/*********************\r\ncolor variables\r\n*********************/\r\n$color--brand: #ff5050;\r\n$color--body: #32323c;\r\n$color--white: #fff;\r\n$color--transparent: transparent;\r\n$color--grey-efefef: #efefef;\r\n$color--grey-bec0c2: #bec0c2;\r\n$color--grey-f0edeb: #f0edeb;","// Colour variables\r\n// ----------------\r\n\r\n$grey-blue: #818190;\r\n$grey-light: #F0F0F0;\r\n$grey-dark: #888;\r\n$soft-white: rgba(255, 255, 255, 0.8);\r\n\r\n$foxtel-now-blue: #32323C ;\r\n$foxtel-now-green: #FF5050 ;\r\n$foxtel-now-orange: #FF5050 ;\r\n$foxtel-now-light-grey: #F0EDEB ;\r\n$foxtel-now-disabled-grey: #BEC0C2 ;\r\n$foxtel-now-dark-grey: #32323C ;\r\n$foxtel-now-very-dark-grey: #32323C ;\r\n$foxtel-now-grey: #F0EDEB ;\r\n\r\n/*********************\r\nBACKGROUND\r\n*********************/\r\n\r\n.foxtel-now-background-green {\r\n\tbackground-color: $foxtel-now-orange !important;\r\n}\r\n\r\n.foxtel-now-background-black {\r\n\tbackground-color: rgb(0,0,0) !important;\r\n}\r\n\r\n.foxtel-now-background-off-white {\r\n\tbackground-color: rgb(240,240,240) !important;\r\n}\r\n\r\n.foxtel-now-background-lightgrey {\r\n\tbackground-color: rgb(247,247,247) !important;\r\n}\r\n\r\n.foxtel-now-background-transparent {\r\n\tbackground-color: transparent !important;\r\n\tbox-shadow: none !important;\r\n}\r\n\r\n/*********************\r\nCOLOR\r\n*********************/\r\n\r\n.foxtel-now-color-whilte {\r\n\tcolor: rgb(255,255,255) !important;\r\n}\r\n\r\n.foxtel-now-color-black {\r\n\tcolor: rgb(0,0,0) !important;\r\n}\r\n\r\n.foxtel-now-color-grey {\r\n\tcolor: $foxtel-now-grey !important;\r\n}\r\n\r\n.foxtel-now-color-darkgrey {\r\n\tcolor: $foxtel-now-dark-grey !important;\r\n}\r\n\r\n.foxtel-now-color-orange {\r\n\tcolor: $foxtel-now-orange !important;\r\n}\r\n\r\n/*********************\r\nSHADOW\r\n*********************/\r\n.foxtel-now-box-shadow {\r\n\tbox-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2) !important;\r\n}\r\n","/*********************\r\nFONT\r\n*********************/\r\n\r\n@font-face {\r\n  font-family: \"ProximaNova\";\r\n  src: url('/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.eot?#iefix') format('embedded-opentype'),\r\n  url('/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.woff') format('woff'),\r\n  url('/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.ttf') format('truetype'),\r\n  url('/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Reg-webfont.svg#wf') format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"ProximaNova-Bold\";\r\n  src: url('/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.eot?#iefix') format('embedded-opentype'),\r\n  url('/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.woff') format('woff'),\r\n  url('/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.ttf') format('truetype'),\r\n  url('/etc/designs/foxtel/assets/fonts/proxima-nova/ProximaNova-Bold-webfont.svg#wf') format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n/*********************\r\nVARIABLE\r\n*********************/\r\n$header-footer-image-path: \"/etc/designs/foxtel/assets/foxtel-ui/header-footer/\";\r\n\r\n$color--brand: #ff5050;\r\n$color--body: #32323c;\r\n$color--white: #fff;\r\n$color--grey-efefef: #efefef;\r\n$color--grey-bec0c2: #bec0c2;\r\n$color--grey-f0edeb: #f0edeb;\r\n\r\n/*********************\r\nMIXIN\r\n*********************/\r\n\r\n@mixin breakpoint($point) {\r\n  @if $point == desktop {\r\n    @media (min-width: 1200px) { @content ; }\r\n  }\r\n  @else if $point == laptop {\r\n    @media (min-width: 992px) { @content ; }\r\n  }\r\n  @else if $point == tablet {\r\n    @media (min-width: 768px) { @content ; }\r\n  }\r\n  @else if $point == mobileOnly {\r\n    @media (max-width: 767px)  { @content ; }\r\n  }\r\n}\r\n\r\n//width = bootstrap 4 container width - 30px (as bootstrap 4 container includes 15px on each side)\r\n@mixin make-foxtel-container{\r\n  width:100%;\r\n  padding-left:15px;\r\n  padding-right:15px;\r\n  @include breakpoint(tablet) {\r\n    width:690px;\r\n    padding-left:0;\r\n    padding-right:0;\r\n  }\r\n  @include breakpoint(laptop) {\r\n    width:930px;\r\n    padding-left:0;\r\n    padding-right:0;\r\n  }\r\n  @include breakpoint(desktop) {\r\n    width:1110px;\r\n    padding-left:0;\r\n    padding-right:0;\r\n  }\r\n}\r\n\r\n@mixin make-foxtel-header-btn ($color, $bg-color){\r\n  display:flex;\r\n  height: 52px;\r\n  border-radius: 2px;\r\n  justify-content: center;\r\n  align-items:center;\r\n  background-color: $bg-color;\r\n  color:$color;\r\n  padding-left:20px;\r\n  padding-right:20px;\r\n  margin-right:15px;\r\n  &:hover{\r\n    color:$color;\r\n  }\r\n}\r\n\r\n\r\n/*********************\r\nCOMMON STYLE\r\n*********************/\r\n.foxtel-container{\r\n  @include make-foxtel-container();\r\n  margin:0 auto;\r\n}\r\n\r\n/*********************\r\nBUTTON STYLE\r\n*********************/\r\n.foxtel-header__btn--white{\r\n  @include make-foxtel-header-btn($color--body, $color--white);\r\n  border: 1px solid $color--grey-bec0c2;\r\n}\r\n.foxtel-header__btn--black{\r\n  @include make-foxtel-header-btn($color--white, $color--body);\r\n}","@import \"../core-components/color\";\r\n@import \"../../../../header-footer/common\";\r\n// HEADING FIX:  NO foxtel-header-breadcrumb-wrapper CLASS REQUIRED\r\n.foxtel-now-header{\r\n  height: 70px;\r\n  max-width: 1140px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  opacity: 0;\r\n\r\n  &.is-loaded {\r\n    transition: opacity 100ms ease-in;\r\n    opacity: 1.0;\r\n  }\r\n\r\n  &.is-logged-in {\r\n    max-width: none;\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n\r\n    .menu-bar {\r\n      .left-section {\r\n        .menu-item {\r\n          @include breakpoint(tablet) {\r\n            display: inline-block;\r\n          }\r\n        }\r\n      }\r\n\r\n      .right-section {\r\n        .settings {\r\n          display: inline-block;\r\n        }\r\n\r\n        .foxtel-now-header__btn-container {\r\n          display: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  &.log-in {\r\n    .menu-bar {\r\n      .right-section {\r\n        .foxtel-now-header__btn-container {\r\n          display: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .menu-bar {\r\n    font-family: \"ProximaNova\", arial, sans-serif;\r\n    min-width: 300px;\r\n    width: 100%;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n\r\n    .left-section {\r\n      display: inline-block;\r\n      font-size: 0;\r\n\r\n      .logo {\r\n        height: 100%;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n        align-items: center;\r\n        float: left;\r\n        margin-right: 25px;\r\n\r\n        .wysiwyg {\r\n          p {\r\n            margin-bottom: 0;\r\n\r\n            img {\r\n              height: 45px;\r\n              width: 156px;\r\n              padding-bottom: 5px;\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      .menu-item {\r\n        display: none;\r\n        color: #9b9b9b;\r\n        cursor: pointer;\r\n        padding: 0;\r\n        margin: 0 25px;\r\n        font-size: 18px;\r\n        position: relative;\r\n        height: 100%;\r\n        line-height: 70px;\r\n        font-weight: 400;\r\n\r\n        a {\r\n          transition: color .3s ease;\r\n          color: $foxtel-now-dark-grey;\r\n          text-decoration: none;\r\n\r\n          &:hover {\r\n            color: black;\r\n          }\r\n\r\n          img.kids {\r\n            padding-bottom: 10px;\r\n            transition: opacity .3s ease;\r\n            opacity: 0.7;\r\n\r\n            &:hover {\r\n              opacity: 1.0;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    .right-section {\r\n      -ms-flex-item-align: end;\r\n      align-self: flex-end;\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      height: 100%;\r\n      box-sizing: border-box;\r\n\r\n      .settings {\r\n        display: none;\r\n        margin-left: 20px;\r\n        height: 100%;\r\n        outline: 0;\r\n        width: 17px;\r\n\r\n        @include breakpoint(mobileOnly) {\r\n          margin-right: 10px;\r\n        }\r\n\r\n        .settings-icon {\r\n          vertical-align: middle;\r\n          cursor: pointer;\r\n          color: #9b9b9b;\r\n          transition: color .3s ease;\r\n          height: 100%;\r\n          display: -webkit-box;\r\n          display: -ms-flexbox;\r\n          display: flex;\r\n          -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n          align-items: center;\r\n        }\r\n\r\n        .dropdown {\r\n          display: none;\r\n          margin-left: 5%;\r\n          position: relative;\r\n          -webkit-user-select: none;\r\n          -moz-user-select: none;\r\n          -ms-user-select: none;\r\n          user-select: none;\r\n          width: 150px;\r\n\r\n          &.open {\r\n            display: block;\r\n          }\r\n\r\n          .options {\r\n            $xTransform: -102px;\r\n\r\n            width: 130px;\r\n            z-index: 101;\r\n            -webkit-transform: translateX($xTransform) translateY(-20px);\r\n            -ms-transform: translateX($xTransform) translateY(-20px);\r\n            transform: translateX($xTransform) translateY(-20px);\r\n\r\n            opacity: 1;\r\n            pointer-events: auto;\r\n\r\n            position: absolute;\r\n            transition: opacity .3s ease;\r\n            text-overflow: ellipsis;\r\n\r\n            .arrow-box {\r\n              padding: 0;\r\n\r\n              position: relative;\r\n              border: 1px solid $foxtel-now-dark-grey;\r\n              background: white;\r\n              min-width: 100%;\r\n              margin-top: 10px;\r\n\r\n              &:before,\r\n              &:after {\r\n                content: \" \";\r\n                bottom: 100%;\r\n                right: 10px;\r\n                border: solid transparent;\r\n                height: 0;\r\n                width: 0;\r\n                position: absolute;\r\n                pointer-events: none;\r\n                border-color: transparent;\r\n                border-bottom-color: white;\r\n                border-width: 10px;\r\n              }\r\n\r\n              &:before {\r\n                border-bottom-color: $foxtel-now-dark-grey;\r\n\r\n                border-width: 12px;\r\n                right: 8px;\r\n              }\r\n\r\n              span {\r\n                text-align: right;\r\n\r\n                color: $foxtel-now-dark-grey;\r\n                transition: color .1s ease;\r\n                cursor: pointer;\r\n                display: block;\r\n                padding: 5px 0;\r\n                padding-right: 1em;\r\n                font-size: 16px;\r\n\r\n                &.username {\r\n                  color: black;\r\n                  font-weight: bold;\r\n                  word-wrap: break-word;\r\n                }\r\n\r\n                &.hr {\r\n                  width: 100%;\r\n                  border-bottom: 1px solid $foxtel-now-dark-grey;\r\n                  padding: 0;\r\n                }\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      .foxtel-now-header__btn-cart {\r\n        display: none;\r\n\r\n        .foxtel-now-header__btn-cart__icon {\r\n          position: relative;\r\n          display: inline-block;\r\n          margin-right: 20px;\r\n          margin-top: 12px;\r\n\r\n          @include breakpoint(tablet) {\r\n            margin-right: 50px;\r\n          }\r\n\r\n          .foxtel-now-header__btn-cart__icon__quantity {\r\n            position: absolute;\r\n            top: -5px;\r\n            right: -15px;\r\n            background-color: $foxtel-now-orange;\r\n            color: white;\r\n            border-radius: 50%;\r\n            width: 30px;\r\n            height: 30px;\r\n            text-align: center;\r\n            font-weight: 700;\r\n            line-height: 30px;\r\n          }\r\n\r\n          .icon {\r\n            // generated styles - to be replaced by font and class definitions\r\n            display: inline-block;\r\n            width: 1em;\r\n            height: 1em;\r\n            stroke-width: 0;\r\n            stroke: currentcolor;\r\n            fill: currentcolor;\r\n            // added customisations\r\n            width: 30px;\r\n            height: 30px;\r\n            margin-top: 15px;\r\n          }\r\n        }\r\n      }\r\n\r\n      .foxtel-now-header__btn-container {\r\n        margin-left: 20px;\r\n        display: flex;\r\n        vertical-align: middle;\r\n        -ms-flex-align: center;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/*foxtel header breadcrumb scrolling up pop state*/\r\n.foxtel-now-header-breadcrumb--pop {\r\n  position: fixed;\r\n  left:0;\r\n  right:0;\r\n  box-shadow: 0 0 30px rgba(0,0,0,0.5);\r\n  z-index: 9999;\r\n}\r\n","@import \"./color\";\r\n\r\n/* Store mixins or re-usable classes */\r\n\r\n@mixin foxtel-now-card() {\r\n\twidth: 376px;\r\n\theight: 465px;\r\n\tpadding: 15px;\r\n\tbackground-color: rgb(255, 255, 255);\r\n  \tborder: solid 2px rgb(240, 240, 240);\r\n  \t&:hover {\r\n  \t\tbox-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\r\n  \t}\r\n\r\n  \t&.is-disabled {\r\n  \t      \t&:hover {\r\n          \t\tbox-shadow: none;\r\n          \t\tborder: solid 2px rgb(240, 240, 240);\r\n          \t}\r\n  \t}\r\n  \t.v.enable {\r\n  \t    color: black;\r\n  \t\tspan{\r\n  \t\t\t&:before {\r\n  \t\t\t\tcontent: '\\002B';\r\n  \t\t\t\tpadding-right: 10px;\r\n  \t\t\t}\r\n  \t\t}\r\n  \t}\r\n\t.foxtel-now-card__image-wrapper {\r\n\t\ttext-align: center;\r\n\r\n\t\tmargin-bottom: 20px;\r\n\r\n\t\t.foxtel-now-card__image-wrapper__promo {\r\n\t\t\ttext-align: left;\r\n\t\t\tcolor: rgb(74, 74, 74);\r\n  \t\t\theight: 36px;\r\n  \t\t\tdisplay: table;\r\n  \t\t\tmargin-left: -15px;\r\n  \t\t\tpadding-left: 15px;\r\n  \t\t\tpadding-right: 35px;\r\n  \t\t\tmargin-bottom: 15px;\r\n  \t\t\tp {\r\n  \t\t\t\tmargin-top: 1rem;\r\n  \t\t\t\tdisplay: table-cell;\r\n  \t\t\t\tvertical-align: middle;\r\n  \t\t\t}\r\n\t\t}\r\n\r\n\t\tfigure {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 208px;\r\n\t\t\timg{\r\n\t\t\t    width: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t\tfigcaption {\r\n\t\t\ttext-align: right;\r\n\t\t\tcolor: $foxtel-now-disabled-grey;\r\n\t\t}\r\n\t}\r\n\r\n\t.foxtel-now-card__title-wrapper {\r\n\t\t.foxtel-now-card__title {\r\n\t\t\tcolor: white;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tp {\r\n\t\t\t\tmargin-bottom: 0;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.foxtel-now-card__title--middle {\r\n\t\t\tvertical-align: middle;\r\n\t\t}\r\n\r\n\t\t.foxtel-now-card__title__name {\r\n\t\t\tdisplay: inline;\r\n\t\t\tcolor: rgb(40, 40, 40);\r\n\t\t}\r\n\r\n\t\t.foxtel-now-card__title__link {\r\n\t\t\ta {\r\n\t\t\t\tcolor: rgb(74,74,74);\r\n\t\t\t\ttext-decoration: underline;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.foxtel-now-card__title__price {\r\n\t\t\tcolor: rgb(40, 40, 40);\r\n\t\t\tmargin-bottom: 0;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\t.foxtel-now-card__legal-text-wrapper {\r\n        color: $foxtel-now-disabled-grey;\r\n        line-height: 1em;\r\n        margin-top: 1em;\r\n\t}\r\n\r\n\r\n\t.foxtel-now-price-symbol {\r\n\t\t@include foxtel-now-price-symbol();\r\n\t}\r\n}\r\n\r\n@mixin foxtel-now-price-symbol() {\r\n\tsup {\r\n\t\tvertical-align: sub;\r\n\t\tpadding-right: 5px;\r\n\t}\r\n\tsub {\r\n\t\tfont-size: 10px;\r\n\t\tbottom: 0;\r\n\t\tleft: 0;\r\n\t}\r\n}\r\n\r\n@mixin foxtel-now-btn($radius) {\r\n\t$transition-time: 250ms;\r\n\r\n\tmargin: auto;\r\n\tborder-style: hidden;\r\n\tdisplay: block;\r\n\tborder-radius: $radius;\r\n\t-webkit-border-radius: $radius;\r\n    -moz-border-radius: $radius;\r\n    -ms-border-radius: $radius;\r\n    padding: 15px;\r\n    color: white;\r\n    background-color: $foxtel-now-orange;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    max-width: 480px;\r\n    text-align: center;\r\n\ttransition: border $transition-time ease,\r\n\t\tborder-radius $transition-time ease,\r\n\t\tbackground-color $transition-time ease,\r\n\t\twidth $transition-time ease,\r\n\t\theight $transition-time ease;\r\n\r\n  &:hover {\r\n  \ttext-decoration: none;\r\n  \tcolor: white;\r\n  \topacity: 0.8;\r\n  }\r\n\r\n\t&:focus {\r\n\t\toutline: 0;\r\n\t}\r\n\r\n\t&.is-loading {\r\n\t\tcolor: transparent;\r\n\t\tbackground-color: transparent;\r\n\t\tpointer-events: none;\r\n\t\tcontent: \"\";\r\n\t\twidth: 40px;\r\n\t\theight: 40px;\r\n\t\tborder-radius: 50%;\r\n        background-color: transparent;\r\n        border: 3px solid #f0f0f0;\r\n\t\tborder-left-color: $foxtel-now-orange;\r\n\t\tanimation: rotating 2s 250ms linear infinite, in 2s 0 ease-in;\r\n\t}\r\n\r\n\t&.is-valid {\r\n\t\ttext-indent: -1000em;\r\n\t\twidth: 100px;\r\n\t\theight: 40px;\r\n\t\tmargin: auto;\r\n\t\tpadding: 0;\r\n\r\n\t\tspan {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t\t&:after {\r\n\t\t\tdisplay: inherit;\r\n\t    content: \"\\f00c\";\r\n\t    background-image: url(/content/dam/now/icons/check.svg);\r\n\t    background-size: 30%;\r\n\t    background-position: 50%;\r\n\t    background-repeat: no-repeat;\r\n\t    width: 100%;\r\n\t    height: 100%;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@keyframes rotating {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.border--top {\r\n\tborder-top: 1px solid $foxtel-now-light-grey;\r\n}\r\n\r\n.border--right {\r\n\tborder-right: 1px solid $foxtel-now-light-grey;\r\n}\r\n\r\n.border--bottom {\r\n\tborder-bottom: 1px solid $foxtel-now-light-grey;\r\n}\r\n\r\n.border--left {\r\n\tborder-left: 1px solid $foxtel-now-light-grey;\r\n}\r\n\r\n.border--bold {\r\n\tborder-width: 2px;\r\n}\r\n\r\n.border--black {\r\n\tborder-color: rgb(74, 74, 74);\r\n}\r\n\r\n.border--grey {\r\n\tborder-color: $foxtel-now-grey;\r\n}\r\n\r\n.foxtel-now-table-row {\r\n    display: table-row;\r\n}\r\n\r\n.foxtel-flex {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -moz-box;\r\n  \tdisplay: -ms-flexbox;\r\n  \tdisplay: -webkit-flex;\r\n  \tdisplay: flex;\r\n  \tjustify-content: space-between;\r\n  \talign-items: center;\r\n}\r\n\r\n.with-underline {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.hidden {\r\n\tdisplay: none !important;\r\n}\r\n\r\n.disabled {\r\n\tbackground-color: #b4b4b4 !important;\r\n\tcursor: default;\r\n\tpointer-events:none;\r\n\ttab-index: -1;\r\n}\r\n\r\n@mixin breakpoint($point) {\r\n  @if $point == desktop {\r\n    @media (min-width: 1200px) { @content ; }\r\n  }\r\n  @else if $point == laptop {\r\n    @media (min-width: 992px) { @content ; }\r\n  }\r\n  @else if $point == tablet {\r\n    @media (min-width: 768px) { @content ; }\r\n  }\r\n  @else if $point == mobileOnly {\r\n    @media (max-width: 767px)  { @content ; }\r\n  }\r\n}\r\n\r\n// A subordinated style similar to h2\r\n.h2-sub {\r\n\tfont-weight: 400;\r\n}\r\n\r\n// Re-usable overlay modifier\r\n.overlay {\r\n\t&:after {\r\n\t\tcontent: '';\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tright: 0;\r\n\t\tbottom: 0;\r\n\t\tleft: 0;\r\n\t\topacity: 0.2;\r\n\t\tbackground: black;\r\n\t}\r\n}\r\n\r\n// A Corner ribbon\r\n.ribbon-wrapper {\r\n\t$background-color: $foxtel-now-orange;\r\n\t$font-color: white;\r\n\r\n\tz-index: 2;\r\n\twidth: 170px;\r\n\theight: 120px;\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\ttop: -2px;\r\n\tleft: -2px;\r\n\r\n\t.ribbon {\r\n\t\tcolor: white;\r\n\t\ttext-align: center;\r\n\t\tposition: relative;\r\n\t\tpadding: 7px 30px 7px 0;\r\n\t\tfloat: right;\r\n\t\tright: -5px;\r\n\t\ttop: 15px;\r\n\t\twidth: 230px;\r\n\t\tbackground-color: $background-color;\r\n\t\ttransform: rotate(-45deg);\r\n\r\n\t\t&:before, &:after {\r\n\t\t\tcontent: \"\";\r\n\t\t\tborder-top:   3px solid scale-lightness($background-color, -40%);\r\n\t\t\tborder-left:  3px solid transparent;\r\n\t\t\tborder-right: 3px solid transparent;\r\n\t\t\tposition:absolute;\r\n\t\t\tbottom: -3px;\r\n\t\t}\r\n\r\n\t\t&:before {\r\n\t\t\tleft: 0;\r\n\t\t}\r\n\r\n\t\t&:after {\r\n\t\t\tright: 0;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.foxtel-now-list {\r\n\tpadding-left: 0;\r\n\tmargin-top: 1rem;\r\n\tlist-style-position: inside;\r\n\tlist-style: none;\r\n\tli {\r\n\t\t&:before {\r\n\t\t  content: \"• \";\r\n\t\t  color: $foxtel-now-orange;\r\n\t\t\tfont-size: 20px;\r\n\t\t}\r\n\r\n\t\tcolor: $foxtel-now-dark-grey;\r\n\t\tmargin-top: 10px;\r\n\t\tp {\r\n\t\t    color: initial;\r\n\t\t    display: inline;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.foxtel-now-list--inline {\r\n\t@extend .foxtel-now-list;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\t@include breakpoint(mobileOnly) {\r\n      flex-direction: column;\r\n    }\r\n\tli {\r\n\t\tdisplay: inline;\r\n\t}\r\n}\r\n\r\n@mixin flexbox {\r\n    display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */\r\n    display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */\r\n    display: -ms-flexbox;      /* TWEENER - IE 10 */\r\n    display: -webkit-flex;     /* NEW - Chrome */\r\n    display: flex;\r\n}","/* Styles for containers */\r\n\r\n.wysiwyg{\r\n    img {\r\n        max-width: 100%;\r\n    }\r\n}","/* Extend bootstrap/main website typography class | Redefine Foxtel typography class */\r\n\r\nbody {\r\n    font-family: \"ProximaNova\", arial, sans-serif;\r\n}","/* Extend bootstrap button class | Redefine Foxtel button class */\r\n\r\n.foxtel-now-btn {\r\n\t@include foxtel-now-btn(5px);\r\n\r\n\t&.is-disabled {\r\n\r\n\t\tbackground-color: $foxtel-now-disabled-grey;\r\n\t\tcolor: $foxtel-now-dark-grey;\r\n\t\tpointer-events: none;\r\n\r\n\t\t&:hover {\r\n\t\t\topacity: 1.0;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.foxtel-now-card__add-to-card-btn {\r\n    >.foxtel-now-btn {\r\n        font-weight: bold;\r\n        &.enable {\r\n            color: white;\r\n        }\r\n\r\n        &.disabled {\r\n            color: $foxtel-now-dark-grey;\r\n        }\r\n    }\r\n}\r\n\r\n.foxtel-now-btn--round {\r\n   @include foxtel-now-btn(5em);\r\n}\r\n\r\n.foxtel-now-btn--black {\r\n\tbackground-color: black;\r\n\tcolor: white;\r\n\t&:hover {\r\n\t    color: white;\r\n\t}\r\n}\r\n\r\n.foxtel-now-btn--wide {\r\n\t@extend .foxtel-now-btn;\r\n\r\n\tdisplay: inline-block;\r\n\twidth: auto;\r\n\tpadding: {\r\n\t\tleft: 50px;\r\n\t\tright: 50px;\r\n\t}\r\n}\r\n\r\n.foxtel-now-btn--ghost {\r\n\t@extend .foxtel-now-btn;\r\n\tbackground: transparent;\r\n\tborder: 1px solid $foxtel-now-orange;\r\n\tcolor: $foxtel-now-dark-grey;\r\n\t&:hover{\r\n\t\tbox-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\r\n\t\tcolor: $foxtel-now-dark-grey;\r\n\t}\r\n}\r\n\r\n.foxtel-now-btn--transparent {\r\n\t@extend .foxtel-now-btn;\r\n\r\n\tbackground-color: transparent;\r\n\tcolor: black;\r\n}\r\n\r\n.foxtel-now-btn--profile {\r\n\t@extend .foxtel-now-btn;\r\n\r\n\tbackground-color: transparent;\r\n\tcolor: white;\r\n\tborder: solid 1px rgb(222, 222, 222);\r\n\tpadding: 10px;\r\n}\r\n","@mixin placeholder($selector, $color) {\r\n  #{$selector}::-webkit-input-placeholder {color: $color}\r\n  #{$selector}::-moz-placeholder          {color: $color}\r\n  #{$selector}:-ms-input-placeholder      {color: $color}\r\n}\r\n\r\n/*********************\r\nFORM VARIABLE\r\n*********************/\r\n$body-bg: #c1bdba;\r\n$form-bg: #13232f;\r\n$white: #ffffff;\r\n\r\n$main: #1ab188;\r\n$main-light: lighten($main,5%);\r\n$main-dark: darken($main,5%);\r\n\r\n$gray-light: #a0b3b0;\r\n$gray: #ddd;\r\n\r\n$thin: 300;\r\n$normal: 400;\r\n$bold: 600;\r\n$br: 4px;\r\n\r\n.foxtel-now-form-container {\r\n  @include placeholder('input', transparent);\r\n  @include placeholder('input:focus', $foxtel-now-dark-grey);\r\n  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.15);\r\n\r\n/* Parsley classes */\r\n\r\n  .parsley-error {\r\n  \tborder: solid 0.5px rgb(182, 0, 0);\r\n  }\r\n  .parsley-errors-list {\r\n  \tcolor: rgb(182, 0, 0);\r\n  \tlist-style: none;\r\n  \tdisplay: table-row;\r\n  \tli {\r\n  \t\tcolor: rgb(218, 110, 47);\r\n  \t\tfont-size: 12px;\r\n  \t}\r\n  }\r\n\r\n  .field-description {\r\n  \tmargin-top: -1rem;\r\n  }\r\n\r\n/* Form classes */\r\n\r\n  font-family:\"ProximaNova\",arial,sans-serif;\r\n  font-size: 18px;\r\n  color: rgb(102, 102, 102);\r\n  padding: 40px;\r\n  @include breakpoint(mobileOnly){\r\n    padding: 20px;\r\n  }\r\n  border-radius:$br;\r\n\t.foxtel-now-form-container__tab-group {\r\n\t  list-style:none;\r\n\t  padding:0;\r\n\t  margin:0 0 40px 0;\r\n\t  &:after {\r\n\t    content: \"\";\r\n\t    display: table;\r\n\t    clear: both;\r\n\t  }\r\n\r\n\t  li a {\r\n\t    display:block;\r\n\t    text-decoration:none;\r\n\t    padding:15px;\r\n\t    background:rgba($gray-light,.25);\r\n\t    color:$gray-light;\r\n\t    font-size:20px;\r\n\t    float:left;\r\n\t    width:50%;\r\n\t    text-align:center;\r\n\t    cursor:pointer;\r\n\t    transition:.5s ease;\r\n\t    &:hover {\r\n\t      background:$main-dark;\r\n\t      color:$white;\r\n\t    }\r\n\t  }\r\n\t  .active a {\r\n\t    background:$main;\r\n\t    color:$white;\r\n\t  }\r\n\t}\r\n\r\n\tlabel {\r\n\t  position:absolute;\r\n\t  transform:translateY(6px);\r\n\t  left:13px;\r\n\t  top: 7px;\r\n\t  color: lightgrey;\r\n\t  transition:all 0.25s ease;\r\n\t  -webkit-backface-visibility: hidden;\r\n\t  pointer-events: none;\r\n\t  .req {\r\n\t  \tmargin:2px;\r\n\t  \tcolor:$main;\r\n\t  }\r\n\t  &.checkbox-label {\r\n        margin: 0.5rem 0.75rem;\r\n        top: 0;\r\n        margin-bottom: 1.2em;\r\n\t  }\r\n\t}\r\n\r\n\tlabel.active {\r\n\t  transform:translateY(-5px);\r\n\t  left:12px;\r\n\t  font-size:12px;\r\n\t  color: initial;\r\n\t  .req {\r\n\t    opacity:0;\r\n\t  }\r\n\t}\r\n\r\n\tinput, textarea {\r\n\t  background:none;\r\n\t  background-image:none;\r\n\t  border: solid 0.5px rgb(153, 153, 153);\r\n\t  border-radius:0;\r\n\t  height: 3em;\r\n\t  transition:border-color .25s ease, box-shadow .25s ease;\r\n\t  &:focus {\r\n\t\t\toutline:0;\r\n\t\t\tborder-color:initial;\r\n\t  }\r\n      &::-ms-clear {\r\n        display: none;\r\n      }\r\n\t}\r\n\r\n\ttextarea {\r\n\t    padding: 0;\r\n\t}\r\n\r\n    .dropdown {\r\n        &.open {\r\n            .custom-select {\r\n                background-image: url(/content/dam/now/icons/arrow-top.svg);\r\n            }\r\n        }\r\n        .custom-select {\r\n          border: solid 0.5px rgb(153, 153, 153);\r\n          border-radius:0;\r\n          transition:border-color .25s ease, box-shadow .25s ease;\r\n          width: 100%;\r\n          font-size: 90%;\r\n          -webkit-appearance: listbox;\r\n          white-space: normal;\r\n          min-height: 3.4em;\r\n          text-align: left;\r\n          background-image: url(/content/dam/now/icons/arrow-bottom.svg);\r\n          background-size: 12px 10px;\r\n          &:focus {\r\n                outline:0;\r\n                border-color:initial;\r\n          }\r\n          span {\r\n            display: inline-block;\r\n            text-align: left;\r\n            margin-bottom: initial;\r\n          }\r\n        }\r\n\r\n        .dropdown-menu {\r\n            width: 100%;\r\n        }\r\n\r\n        .dropdown-item {\r\n            white-space: normal;\r\n        }\r\n\r\n        .dropdown-toggle::after {\r\n            content: \"\";\r\n            display: none;\r\n        }\r\n\r\n        .show>.dropdown-menu {\r\n            width: 100%;\r\n        }\r\n    }\r\n\r\n\t/* Base for label styling */\r\n\t[type=\"checkbox\"]:not(:checked),\r\n\t[type=\"checkbox\"]:checked {\r\n\t  position: absolute;\r\n\t  left: -9999px;\r\n\t}\r\n\t[type=\"checkbox\"]:not(:checked) + label,\r\n\t[type=\"checkbox\"]:checked + label {\r\n\t  position: relative;\r\n\t  padding-left: 2.95em;\r\n\t  cursor: pointer;\r\n\t  left: initial;\r\n\t  color: initial;\r\n\t  pointer-events: auto;\r\n\t}\r\n\t[type=\"checkbox\"]:not(:checked) + label:before,\r\n\t[type=\"checkbox\"]:checked + label:before {\r\n\t  content: '';\r\n\t  position: absolute;\r\n\t  left: 0; top: 0;\r\n\t  width: 30px; height: 30px;\r\n\t  border: 1px solid rgb(153, 153, 153);\r\n\t  background: #fff;\r\n\t  box-shadow: inset 0 1px 3px rgba(0,0,0,.1);\r\n\t}\r\n\t/* checked mark aspect */\r\n\t[type=\"checkbox\"]:not(:checked) + label:after,\r\n\t[type=\"checkbox\"]:checked + label:after {\r\n\t  content: '✔';\r\n\t  position: absolute;\r\n\t  top: .7em; left: .7em;\r\n\t  font-size: .8em;\r\n\t  line-height: 0.8;\r\n\t  color: white;\r\n\t  transition: all .2s;\r\n\t}\r\n\t/* checked mark aspect changes */\r\n\t[type=\"checkbox\"]:not(:checked) + label:after {\r\n\t  opacity: 0;\r\n\t  transform: scale(0);\r\n\t}\r\n\t[type=\"checkbox\"]:checked + label:after {\r\n\t  opacity: 1;\r\n\t  transform: scale(1);\r\n\t}\r\n\t[type=\"checkbox\"]:checked + label:before {\r\n\t  background: $foxtel-now-orange;\r\n\t}\r\n\t/* disabled checkbox */\r\n\t[type=\"checkbox\"]:disabled:not(:checked) + label:before,\r\n\t[type=\"checkbox\"]:disabled:checked + label:before {\r\n\t  box-shadow: none;\r\n\t  border-color: rgb(153, 153, 153);\r\n\t  background-color: #ddd;\r\n\t}\r\n\t[type=\"checkbox\"]:disabled:checked + label:after {\r\n\t  color: #999;\r\n\t}\r\n\t[type=\"checkbox\"]:disabled + label {\r\n\t  color: #aaa;\r\n\t}\r\n\r\n\t/* hover style just for information */\r\n\t[type=\"checkbox\"] + label:hover:before {\r\n\t  border: 2px solid #4778d9!important;\r\n\t}\r\n\r\n\t.field-wrap {\r\n\t  position:relative;\r\n\t  align-self: flex-start;\r\n\t  .input-icon {\r\n\t  \tposition: absolute;\r\n\t  \ttop: 12px;\r\n\t  \tright: 20px;\r\n\t  \t.icon {\r\n          display: inline-block;\r\n          width: 1em;\r\n          height: 1em;\r\n          &:hover {\r\n            path:first-child {\r\n                fill: var(--color1, black)\r\n            }\r\n            path:last-child {\r\n                stroke: var(--color1, black)\r\n            }\r\n          }\r\n        }\r\n        .icon-Show-password {\r\n          width: 1.5em;\r\n        }\r\n\t  \timg {\r\n\t\t  \topacity: 0.5;\r\n            &:hover {\r\n                opacity: 1;\r\n            }\r\n        &.inactive {\r\n          display: none;\r\n        }\r\n\t  \t}\r\n\t  }\r\n\t  .show-password-target {\r\n\t  \tcursor: pointer;\r\n\t  \ttop: 17px;\r\n\t  }\r\n\t  .active {\r\n\t  \topacity: 1 !important;\r\n\t  }\r\n\t  .tooltips-target {\r\n\t  \tcursor: pointer;\r\n\t  \t&:hover {\r\n\t  \t\topacity: 1;\r\n\t  \t}\r\n\t  }\r\n\t  .tooltips-container {\r\n\t  \tposition: absolute;\r\n\t  \tbottom: 65px;\r\n\t  \tright: 2px;\r\n\t  \topacity: 0;\r\n\t  }\r\n      &.required {\r\n        &:after {\r\n            content: \"*\";\r\n            color: red;\r\n            position: absolute;\r\n            top: 5px;\r\n            right: 25px;\r\n        }\r\n      }\r\n\t}\r\n\r\n\t.button {\r\n\t  border:0;\r\n\t  outline:none;\r\n\t  border-radius: 5rem;\r\n\t  padding:15px 0;\r\n\t  font-weight:$bold;\r\n\t  text-transform:uppercase;\r\n\t  letter-spacing:.1em;\r\n\t  background:$main;\r\n\t  color:$white;\r\n\t  transition:all.5s ease;\r\n\t  -webkit-appearance: none;\r\n\t  &:hover, &:focus {\r\n\t    background:$main-dark;\r\n\t  }\r\n\t}\r\n\r\n\t.button-block {\r\n\t  display:block;\r\n\t  width:100%;\r\n\t}\r\n\r\n\t.forgot {\r\n\t  margin-top:-20px;\r\n\t  text-align:right;\r\n\t}\r\n\r\n\tsub\t{\r\n\t\tline-height: normal;\r\n\t}\r\n\r\n  .form-control--has-button {\r\n    padding-right: 160px;\r\n  }\r\n\r\n  .password-edit {\r\n    $inputHeight: 3em;\r\n\r\n    .btn {\r\n      margin-top: 20px;\r\n      border-radius: 0;\r\n    }\r\n\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n\r\n    .btn {\r\n      background-color: white;\r\n      margin-top: 0;\r\n      height: $inputHeight;\r\n      line-height: $inputHeight;\r\n      padding: 0 20px;\r\n    }\r\n  }\r\n\r\n  .choices {\r\n    .choices__inner {\r\n      border: solid 0.5px #999999;\r\n      height: 60px;\r\n      border-radius: 0;\r\n      background-color: white;\r\n\r\n      .choices__list--single {\r\n        padding-left: 8px;\r\n        font-size: 19px;\r\n        color: lightgrey;\r\n\r\n        [aria-selected=true] {\r\n          color: $foxtel-now-dark-grey;\r\n        }\r\n      }\r\n    }\r\n\r\n    &.is-focused {\r\n      .choices__inner {\r\n        .choices__list--single {\r\n          color: $foxtel-now-dark-grey;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/* Requirement specific styles */\r\n#foxtel-now-credit-card-details-form {\r\n    display: none;\r\n}","/* Styles for all icons */\r\n\r\n[class^='icon-'] {\r\n\tcursor: pointer;\r\n}","/* Extend bootstrap modal class | Redefine Foxtel modal class */\r\n\r\n.modal.foxtel-now-modal {\r\n  $vertical-rhythm: 30px;\r\n\r\n  .modal-dialog {\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n\r\n    .modal-content {\r\n      border-radius: 0;\r\n      border: 1px solid $foxtel-now-light-grey;\r\n      box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);\r\n\r\n      .modal-body {\r\n        padding: 50px;\r\n\r\n        h1,\r\n        p {\r\n          color: $foxtel-now-dark-grey;\r\n          margin-bottom: $vertical-rhythm;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.modal-backdrop.foxtel-now-modal-backdrop {\r\n  background-color: white;\r\n}\r\n","  .foxtel-now-cinematic-call-to-action {\r\n    $vertical-rhythm: 20px;\r\n\r\n    color: white;\r\n\r\n    @include breakpoint(mobileOnly) {\r\n      text-align: center;\r\n    }\r\n\r\n    h1 {\r\n      font-size: 25px;\r\n      margin-bottom: $vertical-rhythm;\r\n\r\n      @include breakpoint(tablet) {\r\n        font-size: 40px;\r\n      }\r\n    }\r\n\r\n    h3 {\r\n      font-size: 16px;\r\n      margin-bottom: $vertical-rhythm;\r\n      font-weight: 300;\r\n    }\r\n\r\n    a {\r\n      background-color: $foxtel-now-orange;\r\n      color: white;\r\n    }\r\n  }\r\n","/* Extend Bootstrap album.scss card class */\r\n\r\n.foxtel-now-album {\r\n\tbackground: transparent;\r\n}\r\n\r\n.foxtel-now-card {\r\n\t@include foxtel-now-card();\r\n\t&.foxtel-now-price-symbol {\r\n\t\t@include foxtel-now-price-symbol();\r\n\t}\r\n\t.foxtel-now-btn.enable {\r\n\t\tcolor: black;\r\n\t}\r\n}\r\n\r\n.foxtel-now-card--myaccount {\r\n\t@include foxtel-now-card();\r\n\r\n\twidth: inherit;\r\n\theight: 204px;\r\n\tmargin-bottom: 27px;\r\n\ttext-align: center;\r\n\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    cursor: pointer;\r\n    .foxtel-now-card--myaccount__content {\r\n        >img {\r\n            width: 80px;\r\n            height: 80px;\r\n        }\r\n        >p {\r\n            text-align: center;\r\n            margin-top: 20px;\r\n        }\r\n\r\n    }\r\n\r\n    &.is-disabled {\r\n        cursor: none;\r\n        pointer-events: none;\r\n        .foxtel-now-card--myaccount__content {\r\n            >p {\r\n                opacity: 0.5;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.foxtel-now-card--basic {\r\n    border-radius: 0;\r\n    -webkit-border-radius: 0;\r\n    -moz-border-radius: 0;\r\n    -ms-border-radius: 0;\r\n\r\n\t.foxtel-now-card__title {\r\n\t\tbackground-color: transparent;\r\n\t}\r\n\t.foxtel-now-card__title__price {\r\n        font-size: $font-size--md;\r\n    }\r\n}","/* Extend Bootstrap jumbotron class */\r\n\r\n.foxtel-now-jumbotron {\r\n\tcolor: rgb(255, 255, 255);\r\n\tborder-radius: 2px;\r\n  \tbackground-color: $foxtel-now-dark-grey;\r\n  \tpadding-top: 20px;\r\n  \tpadding-bottom: 20px;\r\n  \tbox-shadow: 0 2px 2px 0 rgba(71, 80, 109, 0.2);\r\n\t-webkit-box-shadow: 2px 3px 10px 0px #ccc;\r\n  \t-moz-box-shadow:    2px 3px 10px 0px #ccc;\r\n  \tbox-shadow:         2px 3px 10px 0px #ccc;\r\n  \tz-index: 99999;\r\n  \ttop: 0;\r\n\r\n     .shoppingCart-nav-up {\r\n        padding-top: -80px;\r\n     }\r\n}\r\n\r\n.foxtel-now-jumbotron--shopping-cart {\r\n\t.foxtel-now-jumbotron--shopping-cart__description,\r\n\t.foxtel-now-jumbotron--shopping-cart__summary {\r\n\t\t@media (max-width: 767px)  {\r\n\t\t\tdisplay: table-row;\r\n\t\t}\r\n\t}\r\n\r\n\t.foxtel-now-jumbotron--shopping-cart__description {\r\n\t    padding: 0 20px 0 0;\r\n\t}\r\n\r\n\t.foxtel-now-jumbotron--shopping-cart__summary {\r\n\t    @include flexbox;\r\n\t    flex-direction: row;\r\n        flex-wrap: inherit;\r\n\t}\r\n\r\n\t.foxtel-now-jumbotron--shopping-cart__description {\r\n\t\tfloat: left;\r\n\t\t.foxtel-now-jumbotron--shopping-cart__description-wrapper {\r\n\t\t\tdisplay: table;\r\n\t\t\t.cart-title-wrapper {\r\n\t\t\t\tdisplay: table-cell;\r\n\t\t\t\t@include breakpoint(mobileOnly){\r\n\t\t\t\t    display: table-row;\r\n\t\t\t\t}\r\n\t\t\t\tp {\r\n\t\t\t\t\tmargin-right: 20px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t.cart-item-wrapper {\r\n\t\t\t\tdisplay: table-cell;\r\n\t\t\t\t.foxtel-now-jumbotron__pack-tag,\r\n\t\t\t\t.foxtel-now-jumbotron__pack-tag--ghost,\r\n\t\t\t\t.foxtel-now-jumbotron__pack-tag--transparent {\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\tcolor: black;\r\n\t\t\t\t\tborder-radius: 50px;\r\n\t\t  \t\t\tbackground-color: rgb(255, 255, 255);\r\n\t\t  \t\t\tpadding: 10px 30px;\r\n                    white-space: nowrap;\r\n\t\t  \t\t\tsub {\r\n\t\t  \t\t\t\tbottom: -5px;\r\n\t\t  \t\t\t\tfont-size: 36px;\r\n\t\t  \t\t\t\tleft: 10px;\r\n\t\t  \t\t\t\tcursor: pointer;\r\n\t\t  \t\t\t\tpadding: 0 10px;\r\n\t\t  \t\t\t}\r\n                    &:hover {\r\n                        sub {\r\n                            background: $foxtel-now-light-grey;\r\n                            border-radius: 1em;\r\n                        }\r\n                    }\r\n\t\t\t\t}\r\n\t\t\t\t.foxtel-now-jumbotron__pack-tag--ghost {\r\n\t\t\t\t    border: 1px dashed white;\r\n\t\t\t\t    background: transparent;\r\n\t\t\t\t    color: white;\r\n\r\n\t\t\t\t    &:hover {\r\n\t\t\t\t    \tbackground: white;\r\n\t\t\t\t    \tcolor: black;\r\n\t\t\t\t    \tborder: none;\r\n\t\t\t\t    \tsub {\r\n\t\t\t\t    \t    padding: 0 13px;\r\n\t\t\t\t    \t}\r\n\t\t\t\t    }\r\n\t\t\t\t}\r\n\t\t\t\t.foxtel-now-jumbotron__pack-tag--transparent {\r\n\t\t\t\t\tdisplay: none;\r\n                    background: transparent;\r\n                    color: white;\r\n\t\t\t\t\tpadding: 10px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.foxtel-now-jumbotron--shopping-cart__summary {\r\n\t\t border-left: solid 1px rgba(255, 255, 255, 0.2);\r\n         @include breakpoint(mobileOnly){\r\n             border: none;\r\n             border-top: solid 1px rgba(255, 255, 255, 0.2);\r\n         }\r\n\t\t.foxtel-now-jumbotron--shopping-cart__summary__total-cost,\r\n\t\t.foxtel-now-jumbotron--shopping-cart__summary__checkout {\r\n\t\t\tdisplay: table;\r\n\t\t\twidth: 100%;\r\n\t\t\tmin-width: 258px;\r\n\t\t\tpadding: 5px 0;\r\n\t\t\tsub {\r\n\t\t\t\tfont-weight: normal;\r\n\t\t\t\tbottom: 0;\r\n\t\t\t\tfont-size: 0.6em;\r\n\t\t\t\tmargin-left: 0.5em;\r\n\t\t\t}\r\n\r\n\t\t\tsup {\r\n\t\t\t\tfont-weight: normal;\r\n\t\t\t}\r\n\r\n\t\t\tp{\r\n\t\t\t\tdisplay: table-cell;\r\n\t\t\t}\r\n\r\n\t\t\tp:last-child{\r\n\t\t\t\ttext-align: right;\r\n\t\t\t}\r\n\t\t}\r\n\t\t.foxtel-now-jumbotron--shopping-cart__summary__total-cost {\r\n\t\t\t&.total {\r\n\t\t\t    font-family: $font-family--Bold;\r\n\t\t\t    @include  breakpoint(mobileOnly){\r\n\t\t\t        font-family: $font-family--regular;\r\n                    p:last-child {\r\n                        font-size: 2em;\r\n                    }\r\n\t\t\t    }\r\n\t\t\t}\r\n\t\t}\r\n\t\t.foxtel-now-jumbotron--shopping-cart__summary__checkout {\r\n\t\t\tfont-size: 18px;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.foxtel-now-jumbotron--minimized {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    @include breakpoint(mobileOnly) {\r\n        padding-top: 0;\r\n    }\r\n\t.foxtel-now-jumbotron--shopping-cart__description {\r\n\t    width: 60%;\r\n\t    @include breakpoint(mobileOnly){\r\n\t        display: none;\r\n\t    }\r\n\t\t.foxtel-now-jumbotron--shopping-cart__description-wrapper {\r\n\t\t\t.cart-item-wrapper {\r\n\t\t\t\t.foxtel-now-jumbotron__pack-tag {\r\n\t\t\t\t\tdisplay: none;\r\n\t\t\t\t}\r\n\t\t\t\tp:first-child,\r\n\t\t\t\tp:nth-child(2),\r\n\t\t\t\tp.foxtel-now-jumbotron__pack-tag--transparent {\r\n\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.foxtel-now-jumbotron--shopping-cart__summary {\r\n\t\t.foxtel-now-jumbotron--shopping-cart__summary__total-cost {\r\n\t\t    display: none;\r\n\t\t    flex: 0 1 100%;\r\n\r\n\t\t    &.total {\r\n                flex: 1 0 50%;\r\n                @include flexbox;\r\n                flex-direction: row;\r\n                justify-content: space-around;\r\n                align-items: center;\r\n                @include breakpoint(mobileOnly) {\r\n                    p:last-child {\r\n                        font-size: inherit;\r\n                    }\r\n                }\r\n\t\t    }\r\n\t\t    @include breakpoint(mobileOnly){\r\n\t\t        width: initial;\r\n\t\t        padding-top: 0;\r\n\t\t        padding-bottom: 0;\r\n\t\t        p {\r\n\t\t            margin-bottom: 0;\r\n\t\t        }\r\n\t\t    }\r\n\t\t\tp {\r\n\t\t\t\tdisplay: inline-block;\r\n\t\t\t}\r\n\t\t\tp:last-child {\r\n                white-space: nowrap;\r\n\t\t\t}\r\n\t\t}\r\n\t\t.foxtel-now-jumbotron--shopping-cart__summary__checkout {\r\n            display: table-cell;\r\n            flex: 1 0 50%;\r\n            @include breakpoint(mobileOnly){\r\n                .foxtel-now-btn {\r\n                    margin-top: 15px;\r\n                }\r\n            }\r\n\t\t}\r\n\r\n\t\t.foxtel-now-jumbotron--shopping-cart__summary__total-cost,\r\n\t\t.foxtel-now-jumbotron--shopping-cart__summary__checkout {\r\n            min-width: initial;\r\n\t\t}\r\n\r\n\t}\r\n}\r\n",".foxtel-now-progress-bar-cont{\r\n  width: 576px;\r\n  left: calc(50% - 288px);\r\n  padding: 0;\r\n  margin: 50px auto;\r\n  color: $foxtel-now-light-grey;\r\n  \r\n  @media (max-width: 767px)  {\r\n    -ms-transform: rotate(90deg); /* IE 9 */\r\n    -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */\r\n    transform: rotate(90deg);\r\n    width: 135px;\r\n    margin-top: 100px;\r\n    margin-bottom: 100px;\r\n    margin-left: -30px;\r\n  }\r\n\r\n  .foxtel-now-cont-flex-box {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    height: 0;\r\n  }\r\n\r\n  .foxtel-now-progress-bar {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    width: 100%;\r\n    height: 3px;\r\n    margin: 0 auto;\r\n    @media (max-width: 767px)  {\r\n      width: 146px;\r\n    }\r\n  }\r\n\r\n  .foxtel-now-progress-bar-dot {\r\n    height: 10px;\r\n    width: 10px;\r\n    opacity: 0;\r\n    border-radius: 100%;\r\n    border: 3px solid grey;\r\n    background: grey;\r\n    cursor: pointer;\r\n    transition: all 0.4s ease-in-out;\r\n  }\r\n\r\n  .foxtel-now-progress-bar-dot-wrapper {\r\n    position: relative;\r\n    width: 0;\r\n    top: -50px;\r\n    p:first-child {\r\n      min-width: 100px;\r\n      white-space: nowrap;\r\n      @media (max-width: 767px)  {\r\n        transform: rotate(-90deg);\r\n        margin-left: -45px;\r\n        padding-left: 50px;\r\n        margin-top: -1px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .second{\r\n    p:first-child {\r\n      @media (min-width: 768px)  {\r\n        margin-left: -20px;    \r\n      }\r\n    }\r\n  }\r\n  .third{\r\n    p:first-child {\r\n      @media (min-width: 768px)  {\r\n        margin-left: -30px;\r\n      }\r\n    }\r\n  }\r\n  .fourth{\r\n    p:first-child {\r\n      @media (min-width: 768px)  {\r\n        margin-left: -30px;\r\n      }\r\n    }\r\n  }\r\n  progress[value]::-webkit-progress-value{ /* Changes line color */\r\n    background-color: $foxtel-now-orange;\r\n    -webkit-transition: all 0.4s ease-in-out;\r\n    -moz-transition: all 0.4s ease-in-out;\r\n    -o-transition: all 0.4s ease-in-out;\r\n    transition: all 0.4s ease-in-out;\r\n  }\r\n  progress[value]::-webkit-progress-bar{ /* Changes background color */\r\n    background-color: $foxtel-now-light-grey;\r\n  }\r\n  .border-change {\r\n    color: black;\r\n    border-color: grey;\r\n    -webkit-transition: all 0.4s ease-in-out;\r\n    -moz-transition: all 0.4s ease-in-out;\r\n    -o-transition: all 0.4s ease-in-out;\r\n    transition: all 0.4s ease-in-out;\r\n  }\r\n}",".pack-content-programs {\r\n  background-color: $foxtel-now-dark-grey;\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n  font-weight: 300;\r\n  margin-bottom: 70px;\r\n\r\n  h3,\r\n  h4 {\r\n    font-weight: 300;\r\n  }\r\n\r\n  h3 {\r\n    font-size: 16px;\r\n    color: lighten($foxtel-now-light-grey, 10%);\r\n    margin-bottom: 20px;\r\n\r\n    @include breakpoint(tablet) {\r\n      margin-bottom: 40px;\r\n    }\r\n  }\r\n\r\n  .pack-content__item {\r\n    position: relative;\r\n    margin-bottom: 20px;\r\n\r\n    .pack-content__item__inner {\r\n      border: 1px solid transparent;\r\n      transition: margin-top 100ms linear;\r\n      background-color: $foxtel-now-dark-grey;\r\n\r\n      &.is-active {\r\n        z-index: 1;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        border-color: darken($grey-blue, 25%);\r\n        margin-top: -30px;\r\n\r\n        .pack-content__item__details {\r\n          height: auto;\r\n\r\n          .pack-content__item__description,\r\n          .pack-content__item__link {\r\n            display: block;\r\n          }\r\n        }\r\n\r\n        .pack-content__item__image {\r\n          margin-bottom: 30px;\r\n        }\r\n      }\r\n\r\n      h4,\r\n      .pack-content__item__channel,\r\n      .pack-content__item__description {\r\n        font-size: 12px;\r\n\r\n        @include breakpoint(laptop) {\r\n          font-size: 14px;\r\n        }\r\n      }\r\n\r\n      .pack-content__item__image {\r\n        margin-bottom: 20px;\r\n        transition: margin-bottom 75ms linear;\r\n\r\n        img {\r\n          max-width: 100%;\r\n        }\r\n      }\r\n\r\n      .pack-content__item__details {\r\n        height: 80px;\r\n\r\n        @include breakpoint(tablet) {\r\n          padding: 0 10px 20px 10px;\r\n          height: 110px;\r\n        }\r\n\r\n        h4 {\r\n          color: lighten($foxtel-now-light-grey, 10%);\r\n          margin-bottom: 5px;\r\n        }\r\n\r\n        .pack-content__item__channel,\r\n        p {\r\n          color: $foxtel-now-light-grey;\r\n        }\r\n\r\n        .pack-content__item__description,\r\n        .pack-content__item__link {\r\n          display: none;\r\n        }\r\n\r\n        .pack-content__item__description,\r\n        .pack-content__item__channel {\r\n          opacity: 0.7;\r\n        }\r\n\r\n        .pack-content__item__channel {\r\n          margin-bottom: 20px;\r\n        }\r\n\r\n        p {\r\n          font-size: 14px;\r\n          margin-bottom: 10px;\r\n        }\r\n\r\n        a {\r\n          color: white;\r\n          text-decoration: underline;\r\n          font-size: 14px;\r\n          font-weight: 400;\r\n          text-decoration: none;\r\n\r\n          &:hover {\r\n            text-decoration: underline;\r\n          }\r\n\r\n          &:after {\r\n            display: inline-block;\r\n            content: \" \";\r\n            background-image: url(/content/dam/now/Icons/arrow-right-white.svg);\r\n            background-repeat: no-repeat;\r\n            background-size: 100%;\r\n            width: 11px;\r\n            height: 11px;\r\n            margin-left: 4px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n",".pack-content-channels {\r\n  h4 {\r\n    font-size: 12px;\r\n    color: $foxtel-now-dark-grey;\r\n  }\r\n\r\n  ul.channel-icons {\r\n    padding-left: 0;\r\n    margin-bottom: 30px;\r\n\r\n    @include breakpoint(tablet) {\r\n      margin-bottom: 70px;\r\n    }\r\n\r\n    li {\r\n      list-style: none;\r\n      display: inline-block;\r\n      padding: 30px 40px;\r\n\r\n      img {\r\n        max-width: 100%;\r\n      }\r\n    }\r\n\r\n    &.channel-icons--universal {\r\n      li {\r\n        @include breakpoint(tablet) {\r\n          padding: 20px 25px;\r\n        }\r\n\r\n        @include breakpoint(laptop) {\r\n          padding: 20px 15px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n","/* Pack Summary styles */\r\n\r\n.foxtel-now-pack-summary-container {\r\n    font-family:\"ProximaNova\",arial,sans-serif;\r\n  \tfont-size: 18px;\r\n  \tpadding: 40px;\r\n    @include breakpoint(mobileOnly){\r\n        padding: 20px;\r\n    }\r\n  \tcolor: rgb(102, 102, 102);\r\n\t.row {\r\n\t\tfont-size: 22px;\r\n\t}\r\n\t.foxtel-now-pack-summary-container__pack-wrapper {\r\n\t\t.row {\r\n\t\t\t.foxtel-now-pack-summary-container__pack-wrapper__price {\r\n\t\t\t\ttext-align: right;\r\n\t\t\t}\r\n\t\t\tsub {\r\n\t\t\t\tmargin-top: -10px;\r\n\t\t\t\tmargin-bottom: 10px;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}",".foxtel-now-pack-details {\r\n  $vertical-rhythm: 20px;\r\n\r\n  position: relative;\r\n  margin-bottom: 50px;\r\n\r\n  h3 {\r\n    margin-bottom: $vertical-rhythm;\r\n  }\r\n\r\n  p {\r\n    margin-bottom: $vertical-rhythm;\r\n  }\r\n\r\n  .foxtel-now-pack-details__meta {\r\n    @include breakpoint(mobileOnly) {\r\n      text-align: center;\r\n    }\r\n\r\n    @include breakpoint(tablet) {\r\n      position: relative;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n      height: 100%;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n    }\r\n\r\n    .foxtel-now-pack-details__meta__inner {\r\n      padding-right: 50px;\r\n    }\r\n\r\n    .foxtel-now-pack-details__meta__offers {\r\n      margin-bottom: $vertical-rhythm;\r\n    }\r\n\r\n    .foxtel-now-pack-details__meta__description {\r\n      font-size: 14px;\r\n      color: black;\r\n      margin-bottom: 30px;\r\n    }\r\n\r\n    .foxtel-now-pack-details__meta__actions {\r\n      margin-bottom: $vertical-rhythm / 2;\r\n      position: relative;\r\n\r\n      .btn {\r\n        display: inline-block;\r\n        position: relative;\r\n        width: 80%;\r\n        max-width: 200px;\r\n        margin-bottom: 30px;\r\n\r\n        @include breakpoint(tablet) {\r\n          margin-right: 20px;\r\n          width: auto;\r\n          margin-bottom: 0;\r\n        }\r\n\r\n        &.active {\r\n          color: white;\r\n        }\r\n\r\n        &.slide-bg {\r\n          display: none;\r\n          position: absolute;\r\n          top: 0;\r\n          height: 100%;\r\n          background-color: $foxtel-now-orange;\r\n        }\r\n      }\r\n\r\n    }\r\n\r\n    .foxtel-now-pack-details__meta__extra {\r\n      color: $foxtel-now-dark-grey;\r\n      font-size: 11px;\r\n    }\r\n  }\r\n\r\n  .foxtel-now-pack-details__image {\r\n    margin-bottom: 50px;\r\n\r\n    img {\r\n      max-width: 100%;\r\n      display: block;\r\n      margin: 0 auto;\r\n    }\r\n  }\r\n}\r\n",".foxtel-now-pack-list {\r\n  padding-left: 0;\r\n  margin-bottom: 100px;\r\n}\r\n",".foxtel-now-pack-list__item {\r\n  $bottom-margin: 15px;\r\n  $rounding: 3px;\r\n\r\n  margin-bottom: 30px;\r\n  list-style: none;\r\n\r\n  >a {\r\n    .foxtel-now-pack-list__item__inner {\r\n        position: relative;\r\n        border-radius: $rounding;\r\n        border: 1px solid transparent;\r\n\r\n\r\n        &.as-text-link {\r\n          display: none;\r\n          height: 100%;\r\n          min-height: 150px;\r\n          border: 1px solid $foxtel-now-dark-grey;\r\n\r\n          @include breakpoint(tablet) {\r\n            display: block;\r\n          }\r\n\r\n          h3 {\r\n            font-weight: 400;\r\n            color: $foxtel-now-dark-grey;\r\n            bottom: 50%;\r\n            left: 0%;\r\n            width: 100%;\r\n            text-align: center;\r\n            transform: translateY(50%);\r\n            font-size: 26px;\r\n\r\n            .icon {\r\n              font-weight: 300;\r\n              padding-left: 5px;\r\n            }\r\n          }\r\n        }\r\n\r\n        &.overlay {\r\n          &:after {\r\n            opacity: 0.4;\r\n            border-radius: $rounding;\r\n          }\r\n        }\r\n\r\n        .ribbon {\r\n          @include breakpoint(mobileOnly) {\r\n            display: none;\r\n          }\r\n        }\r\n\r\n        img {\r\n          width: 100%;\r\n          border-radius: $rounding;\r\n        }\r\n\r\n        h3,\r\n        .legal {\r\n          z-index: 1;\r\n          position: absolute;\r\n        }\r\n\r\n        h3 {\r\n          margin-bottom: 0;\r\n          bottom: $bottom-margin;\r\n          left: 15px;\r\n          color: white;\r\n          font-size: 18px;\r\n          font-weight: 700;\r\n        }\r\n\r\n        .legal {\r\n          bottom: $bottom-margin;\r\n          right: 20px;\r\n          color: white;\r\n          font-size: 11px;\r\n          opacity: 0.5;\r\n          font-weight: 300;\r\n          text-align: right;\r\n          max-width: 45%;\r\n        }\r\n    }\r\n  }\r\n}\r\n",".foxtel-now-pack-navigation-wrapper {\r\n  $border-style: 2px solid darken($grey-light, 10%);\r\n\r\n  background-color: $grey-light;\r\n  border-bottom: $border-style;\r\n  margin-bottom: 50px;\r\n\r\n  .foxtel-now-pack-navigation {\r\n    $left-indent: 10px;\r\n\r\n    font-size: 14px;\r\n\r\n    h3 {\r\n      color: $grey-dark;\r\n      font-weight: 400;\r\n      font-size: 14px;\r\n      margin-bottom: 40px;\r\n      padding-left: $left-indent;\r\n    }\r\n\r\n    .foxtel-now-pack-navigation__pack-list {\r\n      padding-left: 0;\r\n\r\n      li {\r\n        display: inline-block;\r\n        list-style: none;\r\n        padding-bottom: 16px;\r\n        padding-left: $left-indent;\r\n        padding-right: 10px;\r\n        border-bottom: 2px solid transparent;\r\n        margin-bottom: 20px;\r\n\r\n        &.active {\r\n          border-bottom: 2px solid $foxtel-now-orange;\r\n\r\n          a {\r\n              font-weight: 700;\r\n              pointer-events: none;\r\n          }\r\n        }\r\n\r\n        a {\r\n          color: black;\r\n          text-decoration: none;\r\n        }\r\n      }\r\n    }\r\n\r\n    @include breakpoint(tablet) {\r\n      &.first {\r\n        border-right: $border-style;\r\n      }\r\n\r\n      padding-top: 30px;\r\n    }\r\n\r\n    &.first {\r\n      padding-top: 30px;\r\n    }\r\n  }\r\n}\r\n",".foxtel-now-info-bar {\r\n  background-color: #00F0A0;\r\n\r\n  &.warn {\r\n    background-color: #FFB64F;\r\n  }\r\n  &.neutral {\r\n      background-color: $foxtel-now-grey;\r\n    }\r\n\r\n  .foxtel-now-info-bar__inner {\r\n    position: relative;\r\n\r\n    .foxtel-now-info-bar__content {\r\n      padding: 15px;\r\n      color: $foxtel-now-very-dark-grey;\r\n      line-height: 34px;\r\n\r\n      @include breakpoint(tablet) {\r\n        padding: 15px 70px 15px 30px;\r\n        line-height: 46px;\r\n      }\r\n\r\n      p {\r\n        margin-bottom: 0;\r\n        @include breakpoint(mobileOnly) {\r\n            text-align: center;\r\n        }\r\n      }\r\n\r\n      .foxtel-now-info-bar__icon-main {\r\n        display: block;\r\n        width: 50px;\r\n        height: 50px;\r\n        background-size: 100%;\r\n        margin: 0 auto 15px auto;\r\n\r\n        @include breakpoint(tablet) {\r\n          display: inline-block;\r\n          margin-right: 20px;\r\n          margin-bottom: 0;\r\n          width: 30px;\r\n          height: auto;\r\n          background-size: 30px;\r\n          background-repeat: no-repeat;\r\n          background-position: 0 5px;\r\n        }\r\n\r\n        &.icon-info {\r\n          background-image: url(/content/dam/now/icons/info.svg);\r\n        }\r\n\r\n        &.icon-tick {\r\n          background-image: url(/content/dam/now/icons/check.svg);\r\n        }\r\n      }\r\n\r\n      .wysiwyg {\r\n        display: inline-block;\r\n        @include breakpoint(mobileOnly) {\r\n            display: initial;\r\n        }\r\n      }\r\n\r\n      .btn {\r\n        display: inline-block;\r\n        background-color: $foxtel-now-dark-grey;\r\n        color: white;\r\n        padding: 12px 30px;\r\n        width: 100%;\r\n        margin-top: 20px;\r\n\r\n        @include breakpoint(tablet) {\r\n          width: auto;\r\n          margin-left: 20px;\r\n          margin-top: 0;\r\n        }\r\n      }\r\n\r\n      a {\r\n        color: white;\r\n      }\r\n    }\r\n\r\n    .foxtel-now-info-bar__close {\r\n      position: absolute;\r\n      color: $foxtel-now-very-dark-grey;\r\n      transition: color 300ms ease-in;\r\n      top: 15px;\r\n      right: 15px;\r\n      font-size: 30px;\r\n\r\n      @include breakpoint(tablet) {\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n        right: 25px;\r\n        font-size: 24px;\r\n      }\r\n\r\n      &:hover {\r\n        color: black;\r\n        text-decoration: none;\r\n      }\r\n    }\r\n  }\r\n}\r\n",".streaming-teaser {\r\n  margin-bottom: 80px;\r\n\r\n  h2 {\r\n    font-size: 28px;\r\n    font-weight: 700;\r\n    margin-bottom: 60px;\r\n    text-align: center;\r\n  }\r\n\r\n  .streaming-teaser__streaming-type {\r\n    margin-bottom: 60px;\r\n\r\n    h3,\r\n    h4,\r\n    a {\r\n      text-align: center;\r\n    }\r\n\r\n    h3,\r\n    h4 {\r\n      font-weight: 400;\r\n    }\r\n\r\n    h3 {\r\n      margin-bottom: 20px;\r\n    }\r\n\r\n    img {\r\n      margin-bottom: 30px;\r\n      max-width: 100%;\r\n    }\r\n\r\n    h4 {\r\n      color: $foxtel-now-very-dark-grey;\r\n      font-size: 16px;\r\n      line-height: 22px;\r\n    }\r\n\r\n    a {\r\n      display: block;\r\n      font-size: 12px;\r\n      font-weight: 500;\r\n      color: black;\r\n      text-decoration: underline;\r\n      margin-bottom: 20px;\r\n    }\r\n  }\r\n}\r\n","/* Styles for welcome message */\r\n\r\n.foxtel-now-welcome-message-wrapper {\r\n\ttext-align: left;\r\n\t@include breakpoint(mobileOnly) {\r\n        text-align: center;\r\n    }\r\n\tmax-width: 500px;\r\n\tcolor: #fff;\r\n\th1 {\r\n\t\tfont-weight: bold;\r\n\t}\r\n\t.foxtel-now-welcome-message-wrapper__title,\r\n\t.foxtel-now-welcome-message-wrapper__links {\r\n\t\tmargin-top: 15px;\r\n\t\t.foxtel-now-btn {\r\n\t\t\tmax-width: 308px;\r\n\t\t\tmargin-bottom: 30px;\r\n\t\t\t@include breakpoint(mobileOnly) {\r\n                margin-left: auto;\r\n                margin-right: auto;\r\n            }\r\n\t\t}\r\n\t\t.foxtel-now-logo-wrapper {\r\n\t\t    display: flex;\r\n\t\t    justify-content: flex-start;\r\n\r\n\t\t    @include breakpoint(mobileOnly) {\r\n                justify-content: space-around;\r\n            }\r\n            img {\r\n                width: 120px;\r\n\r\n                @include breakpoint(tablet) {\r\n                    width: 165px;\r\n                    &:first-child {\r\n                        margin-right: 20px;\r\n                    }\r\n                }\r\n            }\r\n\t\t}\r\n\t}\r\n\r\n\t.foxtel-now-welcome-message-wrapper__title {\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n}\r\n","/* Styles for device list component */\r\n\r\n.foxtel-now-device-container {\r\n  $border-style: solid 1px $foxtel-now-light-grey;\r\n\r\n  margin-bottom: 50px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  border: {\r\n    top: $border-style;\r\n    bottom: $border-style;\r\n  }\r\n\r\n  @include breakpoint(tablet) {\r\n    padding: 0 100px;\r\n  }\r\n\r\n  .container-breakout {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .foxtel-now-device-wrapper {\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    border: {\r\n      right: $border-style;\r\n      bottom: $border-style;\r\n      left: $border-style;\r\n    }\r\n    margin-bottom: -1px;\r\n    margin-left: -1px;\r\n    padding: {\r\n      top: 25px;\r\n      bottom: 25px;\r\n      left: 30px;\r\n      right: 30px;\r\n    }\r\n\r\n    @include breakpoint(mobileOnly) {\r\n      border: {\r\n        left: none;\r\n        right: none;\r\n        bottom: none;\r\n      }\r\n    }\r\n\r\n    a {\r\n      border-bottom: 3px solid transparent;\r\n      color: $foxtel-now-dark-grey;\r\n      display: inline-block;\r\n      padding-bottom: 3px;\r\n    }\r\n\r\n    .foxtel-now-device-image {\r\n      $max-height: 50px;\r\n\r\n      &:after {\r\n        content: \"\";\r\n        display: inline-block;\r\n      }\r\n\r\n      text-align: center;\r\n      min-height: 60px;\r\n      min-width: 70px;\r\n      line-height: $max-height;\r\n\r\n      img {\r\n        max-width: 80px;\r\n        max-height: $max-height;\r\n      }\r\n    }\r\n\r\n    .foxtel-now-device-link {\r\n      text-align: center;\r\n      font-size: 12px;\r\n    }\r\n\r\n    &:hover {\r\n      cursor: pointer;\r\n      -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\r\n      -moz-box-shadow:    0 2px 8px 0 rgba(0, 0, 0, 0.2);\r\n      box-shadow:         0 2px 8px 0 rgba(0, 0, 0, 0.2);\r\n\r\n      a {\r\n        border-bottom: 3px solid $foxtel-now-orange;\r\n        text-decoration: none;\r\n      }\r\n    }\r\n  }\r\n}\r\n",".main-support.main{\r\n  padding: 0;\r\n\r\n  .accord-header{\r\n    display:flex;\r\n    justify-content: space-between;\r\n    align-items:center;\r\n    text-decoration: none;\r\n    color: $grey-dark;\r\n    padding: 30px;\r\n    transition: border .25s ease-in;\r\n    border: 1px solid $foxtel-now-grey;\r\n    margin-top: 15px;\r\n\r\n    &:hover, &:focus{\r\n      text-decoration: none;\r\n      cursor: pointer;\r\n    }\r\n\r\n    &::after{\r\n      content: \"\\e901\";\r\n      font-family: 'foxtel-icons';\r\n      speak: none;\r\n      font-style: normal;\r\n      font-weight: normal;\r\n      font-variant: normal;\r\n      text-transform: none;\r\n      line-height: 1;\r\n      font-size: 1.25em;\r\n      -webkit-font-smoothing: antialiased;\r\n    }\r\n\r\n    &.active::after{\r\n      content:'\\e909';\r\n    }\r\n\r\n  }\r\n\r\n  .landing-nav-block.content-landing{\r\n      background: none;\r\n    &::before, &::after{\r\n      display:none;\r\n    }\r\n    .landing-list{\r\n      padding-top: 15px;\r\n      p{\r\n        color: $foxtel-now-very-dark-grey;\r\n      }\r\n    }\r\n  }\r\n\r\n  .header-support{\r\n    background-color: $foxtel-now-dark-grey;\r\n    min-height: 240px;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-top: 20px;\r\n\r\n    .heading h3 span{\r\n      color: white;\r\n    }\r\n\r\n    .bg-line{\r\n      display:none;\r\n    }\r\n\r\n    .search-block{\r\n\r\n      #search-text{\r\n        box-shadow: none;\r\n        border: none;\r\n        height: 50px;\r\n        border-radius: 5px;\r\n        font-size: 16px;\r\n        max-width: 450px;\r\n      }\r\n\r\n      input[type=\"submit\"]{\r\n        background-image: url(\"/content/dam/now/icons/magnifier.svg\");\r\n        right: 15px;\r\n        top: 15px;\r\n        width: 22px;\r\n        height:22px;\r\n        cursor: pointer;\r\n      }\r\n    }\r\n  }\r\n\r\n  h3{\r\n    font-weight: bold;\r\n  }\r\n\r\n  .jump-link-2 .link-list li{\r\n    list-style: disc;\r\n  }\r\n\r\n  .related-block{\r\n    padding: 20px;\r\n\r\n    h3{\r\n      margin-top: 0;\r\n    }\r\n  }\r\n\r\n  .wysiwyg{\r\n    padding: 0;\r\n    margin: 20px 0;\r\n  }\r\n}\r\n\r\n//desktop only\r\n.main-support.main{\r\n  @include breakpoint(laptop){\r\n    .header-support{\r\n      .search-block{\r\n        width: 450px;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n//mobile only\r\n.main-support.main{\r\n  @include breakpoint(mobileOnly){\r\n    .accord-header{\r\n      flex-direction:column;\r\n    }\r\n  }\r\n}\r\n","/* Styles for cinematic block */\r\n\r\n.cineWrapper {\r\n\tposition: relative;\r\n}\r\n\r\n.foxtel-now-cinematic-highlight-block {\r\n\tz-index: 1;\r\n\tposition: absolute;\r\n\r\n\t@include breakpoint(mobileOnly) {\r\n\t\ttop: 20%;\r\n\t\tleft: 50%;\r\n\t\ttransform: translateX(-50%);\r\n\t\twidth: 80%;\r\n\t}\r\n\r\n\t@include breakpoint(tablet) {\r\n\t\tleft: 80px;\r\n\t\tbottom: 10%;\r\n\t}\r\n}\r\n\r\n.foxtel-now-meta-information {\r\n\t.foxtel-now-cinematic-info {\r\n\t  position: absolute;\r\n\t  right: 50px;\r\n\t  bottom: 10%;\r\n\t\ttext-align: right;\r\n\r\n\t  p,\r\n\t\tspan,\r\n\t\ta {\r\n\t    color: $soft-white;\r\n\t    font-size: 12px;\r\n\t    margin-bottom: 0;\r\n\t    font-weight: 300;\r\n\r\n\t    &.name {\r\n\t      margin-bottom: .4rem;\r\n\t    }\r\n\t  }\r\n\r\n\t\timg {\r\n\t\t\tmax-height: 40px;\r\n\t\t}\r\n\t}\r\n\r\n\t&.left-index {\r\n\t\t.foxtel-now-cinematic-info {\r\n\t\t\tleft: 50px;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.image-cinematic {\r\n\tpicture {\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t}\r\n\r\n\t.dark-shadow {\r\n\t\tcontent: '';\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tright: 0;\r\n\t\tbottom: 0;\r\n\t\tleft: 0;\r\n\t\topacity: 0.5;\r\n\t\tbackground: linear-gradient(90deg, black, transparent 50%);\r\n\t}\r\n}\r\n","/* Styles for checkoutWithoutStarterPack component */\r\n.foxtel-now-no-starter-pack-container{\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\r\n    padding: 30px 80px;\r\n    @include breakpoint(mobileOnly){\r\n        width: 100%;\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n        h1 {\r\n            font-size: 29px;\r\n        }\r\n    }\r\n    .foxtel-now-no-starter-pack-container__title-wrapper {\r\n        text-align: center;\r\n    }\r\n    .foxtel-now-no-starter-pack-container__list-wrapper {\r\n        border-top: 1px solid lightgrey;\r\n        border-bottom: 1px solid lightgrey;\r\n        margin-top: 25px;\r\n        margin-bottom: 25px;\r\n    }\r\n    .foxtel-now-no-starter-pack-container__button-wrapper {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        .foxtel-now-btn--round {\r\n            max-width: 200px;\r\n            &:first-child {\r\n                margin-right: 10px;\r\n            }\r\n        }\r\n        @include breakpoint(mobileOnly){\r\n            display: block;\r\n            .foxtel-now-btn--round {\r\n                max-width: inherit;\r\n                margin-bottom: 15px;\r\n            }\r\n        }\r\n    }\r\n}","/* View my bills component related class */\r\n\r\n.foxtel-now-view-my-bill-wrapper {\r\n    margin-top: 30px;\r\n    .foxtel-now-bill-history-template-container {\r\n        margin-top: 30px;\r\n        .foxtel-now-view-my-bills-container {\r\n            display: table;\r\n            width: 40%;\r\n            .foxtel-now-view-my-bills-container__th {\r\n                p {\r\n                    font-weight: bold;\r\n                }\r\n            }\r\n            .foxtel-now-view-my-bills-container__row {\r\n                display: table-row;\r\n                cursor: pointer;\r\n                &:hover {\r\n                   background-color: #f0edeb;\r\n                }\r\n                p {\r\n                    display: table-cell;\r\n                    padding-top: 10px;\r\n                    padding-bottom: 10px;\r\n                    &:last-child {\r\n                        a {\r\n                            cursor: pointer;\r\n                            color: black;\r\n                            border-bottom: 1px solid lightgrey;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}","/* Billing details component related class */\r\n\r\n.foxtel-now-display-div-template-container {\r\n    margin-bottom: 1em;\r\n    .foxtel-now-display-div-wrapper {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        padding-top: 15px;\r\n        padding-bottom: 15px;\r\n        .card-details {\r\n            white-space: nowrap;\r\n        }\r\n    }\r\n}","/*!\r\n * smartbanner.js v1.5.0 <https://github.com/ain/smartbanner.js>\r\n * Copyright © 2017 Ain Tohvri, contributors. Licensed under GPL-3.0.\r\n */\r\n\r\n.smartbanner {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    overflow-x: hidden;\r\n    width: 100%;\r\n    height: 90px;\r\n    background: #f3f3f3;\r\n    font-family: Helvetica, sans, sans-serif;\r\n}\r\n.smartbanner__exit {\r\n    position: absolute;\r\n    top: calc(50% - 6px);\r\n    left: 9px;\r\n    display: block;\r\n    margin: 0;\r\n    width: 12px;\r\n    height: 12px;\r\n    border: 0;\r\n    text-align: center;\r\n}\r\n.smartbanner__exit::before,\r\n.smartbanner__exit::after {\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 12px;\r\n    background: #767676;\r\n    content: ' ';\r\n}\r\n.smartbanner__exit::before {\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n.smartbanner__exit::after {\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n}\r\n.smartbanner__icon {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 30px;\r\n    width: 64px;\r\n    height: 64px;\r\n    border-radius: 15px;\r\n    background-size: 64px 64px;\r\n}\r\n.smartbanner__info {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 104px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    overflow-y: hidden;\r\n    width: 60%;\r\n    height: 64px;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n}\r\n.smartbanner__info__title {\r\n    font-size: 14px;\r\n}\r\n.smartbanner__info__author,\r\n.smartbanner__info__price {\r\n    font-size: 12px;\r\n}\r\n.smartbanner__button {\r\n    position: absolute;\r\n    top: 32px;\r\n    right: 10px;\r\n    z-index: 1;\r\n    display: block;\r\n    padding: 0 10px;\r\n    min-width: 10%;\r\n    border-radius: 5px;\r\n    background: #f3f3f3;\r\n    color: #1474fc;\r\n    font-size: 18px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n}\r\n.smartbanner__button__label {\r\n    text-align: center;\r\n}"],"sourceRoot":""}]);

// exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(39)
var ieee754 = __webpack_require__(42)
var isArray = __webpack_require__(43)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(40).Buffer))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 43 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(45);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 45 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(44)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../../../node_modules/css-loader/index.js??ref--2-1!../../../../../../../../../node_modules/sass-loader/lib/loader.js??ref--2-2!./foxtel-now-main-style.scss", function() {
			var newContent = require("!!../../../../../../../../../node_modules/css-loader/index.js??ref--2-1!../../../../../../../../../node_modules/sass-loader/lib/loader.js??ref--2-2!./foxtel-now-main-style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(13);
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);
__webpack_require__(21);
__webpack_require__(22);
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(28);
__webpack_require__(29);
__webpack_require__(30);
__webpack_require__(31);
__webpack_require__(32);
__webpack_require__(33);
__webpack_require__(34);
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(0);
__webpack_require__(2);
module.exports = __webpack_require__(37);


/***/ })
/******/ ]);
//# sourceMappingURL=foxtelnow.js.map