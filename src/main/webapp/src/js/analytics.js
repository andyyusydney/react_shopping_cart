/**
 * This file is for Analytics in pages.
 */

"use strict";

$(function() {
    var pathName = $(location).attr('href');
    if (pathName.length) {
        console.log("pathName  = " + pathName);
        console.log("user id = "+$.cookie('ajs_user_id'));
        digitalData.ananlyseBase();
    }

    /*
    FOX.context.subscribe('ANALYTICS_TEST', function (data) {
        console.log("Analytics data = " + dataLayer.length);
        console.log("Analytics data = " + digitalData);
        dataLayer.push({event:{eventInfo:{eventName:'ppv_title_view',type:'interaction'},category:{primaryCategory:'got_acct'}}});
    });

    $('.bundle-pack').on('click', function (event) {
        FOX.context.broadcast('ANALYTICS_TEST', {
            name: 'EMAIL_TAKEN'
        });
    });
    */
});

var digitalData = {
    pldl : {
        event : {}
    },
    site : {
        siteName : "foxtel now",
        section : "",
        subSection : "",
        subSubSection : ""
    },
    page : {
        pageInfo : {
            pageName : "",
            funnelName : ""
        }
    },
    user : {
        ipAddress : "",
        account : {
            loginStatus : "",
            type : "",
            userId : ""
        }
    },
    transaction : {},
    cart : {},
    ananlyseBase : function() {
        //this.user.ipAddress = "0.0.0.0";
        //this.user.account.loginStatus = "logged in" //Can be "Logged in" or "Anonmyous"
        //this.user.account.type = "existing" //existing or prospect
        //this.user.account.userId = "12345678"
    },
    ananlyseHome : function() {
    }
}
