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
                case "/now/my-account/update-billing":
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
                case "/now/my-account/reactivate/packs":
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

                var accountType = $.cookie("account-type");
                if (typeof accountType === "undefined" || accountType != "existing") {
                    digitalData.user.account.type = "prospect";
                    $.cookie("account-type", "prospect", {path: '/'});
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
                $.cookie("account-type", "existing", {path: '/'});
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
        digitalData.page.pageInfo.pageName = "signup personal details";
        digitalData.page.formName = "sign up";
        digitalData.page.formStep = "personal details";
        digitalData.page.clientSideFormErrors = "";
        digitalData.page.serverSideFormErrors = "";

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
            digitalData.pldl.event.eventName = "button_click";
            digitalData.pldl.event.eventInfo = {
                eventAction: "login click",
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

        FOX.context.subscribe("SHOP_CART_LOADED", function(data) {
            try {
                FOX.storage.data("analytics-shopping-cart", JSON.stringify(data.play));
            }
            catch (e) {
                console.log(e);
            }
        });

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

        var shoppingCart = JSON.parse(FOX.storage.data("analytics-shopping-cart"));
        var purchasedProducts = [];

        for (var i = 0; i < shoppingCart.tiers.length; i++) {
            var product = {
                product_name: shoppingCart.tiers[i].title,
                product_id: shoppingCart.tiers[i].tierId,
                product_price: shoppingCart.tiers[i].price,
                qty: 1
            };
            purchasedProducts.push(product);
        }

        digitalData.transaction.products = purchasedProducts;
        digitalData.transaction.totalRevenue = shoppingCart.monthlyCostIncludingOffer;
        digitalData.transaction.totalQty = shoppingCart.tiers.length;

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
    },
    analysePackDetail : function() {
        digitalData.site.section = "shop";
        digitalData.site.subSection = "";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "{product/pack name}";
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
                deactivateReason: $('#disconnectReasonCode').val(),
                deactivateDeviceUsed: $('#deviceUsed').val()
            };
        });
    },
    analyseMyAccountManagePackage : function() {
        digitalData.site.section = "build";
        digitalData.site.subSection = "manage";
        digitalData.site.subSubSection = "";
        digitalData.page.pageInfo.pageName = "package";
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
        digitalData.page.clientSideFormErrors = "";
        digitalData.page.serverSideFormErrors = "";
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
    formStarted : false
}
