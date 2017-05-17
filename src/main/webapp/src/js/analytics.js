/**
 * This file is for Analytics in Foxtel Now pages.
 */

$(function() {
    if (typeof digitalData === "undefined") {
        return;
    }

    var pathName = $(location).attr('href');
    if (pathName.length) {
        try {
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
                case "/now/login":
                    digitalDataManager.analyseLogin();
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
                case "/now/my-account/add":
                    digitalDataManager.analyseMyAccountCreateSecondaryAccount();
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
                case "/now/error/404":
                    digitalDataManager.analyseError();
                    break;
            }
        }
        catch (e) {
            console.log(e);
        }
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
            digitalData.pldl.event.eventName = "form_submit";
            digitalData.pldl.event.eventInfo = {
                eventAction: "form submit",
                time: new Date().getTime()
            };
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
    analyseShoppingCart : function() {
        digitalData.site.section = "shop";
        digitalData.site.subSection = "";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "shopping cart";
        FOX.context.subscribe("SHOP_CART_REFRESHED", function(data) {
            digitalData.pldl.event.eventName = "login";
        });
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

        digitalDataManager.analyseServerFormErrorsOnMessage();

        digitalDataManager.storeShoppingCartOnEvent("SHOP_CART_LOADED");
        digitalDataManager.storeShoppingCartOnEvent("SHOP_CART_REFRESHED");
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
    analyseLogin : function() {
        $("#login-form-submit").on("click", function() {
            digitalData.pldl.event.eventName = "button_click";
            digitalData.pldl.event.eventInfo = {
                eventAction: "login click",
            };
        });
        FOX.context.subscribe("FOXTELNOW_LOGIN_SUCCESS", function() {
            digitalData.pldl.event.eventName = "login";
        });
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
    analyseShoppingCartOnEvent : function(eventName) {
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
    loadAndAnalyseShoppingCart : function() {
        try {
            var shoppingCart = JSON.parse(FOX.storage.data("analytics-shopping-cart"));
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

            digitalData.transaction.products = products;
            digitalData.transaction.totalRevenue = shoppingCart.monthlyCostIncludingOffer;
            digitalData.transaction.totalQty = shoppingCart.tiers.length;
        }
        catch (e) {
            console.log(e);
        }
    }
}
