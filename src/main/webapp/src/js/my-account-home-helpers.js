
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