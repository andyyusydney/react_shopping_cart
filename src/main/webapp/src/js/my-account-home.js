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
              freeTrialEndDate: moment(data.accountStatus.freeTrialEndDate).format("MMM Do YY"),
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

    });


});