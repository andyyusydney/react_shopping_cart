
/**
 * These helper functions are for myaccount home page
 */

Handlebars.registerHelper("myAccountHomeUserPanelPermission",function(secondaryAllowed,inactiveAllowed,accountStatus,options) {
    var allowedAccess = true;

    if(!accountStatus.primary && secondaryAllowed ==='NO'){
        allowedAccess = false;
    }

    if(inactiveAllowed ==='YES'){
        if(accountStatus.activated){
            allowedAccess = false;
        }
    }

    if (allowedAccess) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});