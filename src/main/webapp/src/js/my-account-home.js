/**
 * This file is for my account home page
 */


$(document).ready(function () {
    var $myAccountHomePanel = $('#divMyAccountPanel');
    if($myAccountHomePanel.length == 0){
        return ;
    }

    FOX.dyc.subscribeEvent("modelAccountSummary",function(data){
    if(data.accountStatus.freeTrial){
        FOX.context.broadcast('SHOW_BANNER', {
          name: 'FREE_TRIAL_MY_ACCOUNT_HOME',
          freeTrialEndDate: data.accountStatus.freeTrialEndDate,
          closeEnabled: true
        });
    }
    });

});