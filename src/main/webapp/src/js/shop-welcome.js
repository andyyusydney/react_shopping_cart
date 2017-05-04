
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