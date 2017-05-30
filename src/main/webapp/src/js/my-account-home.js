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
