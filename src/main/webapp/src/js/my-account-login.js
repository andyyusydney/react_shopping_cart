/**
 * This file is for my account login page
 */


$(document).ready(function () {
        var hasForm = false;

        var $form = $("#dyc-action-url");
        if($form.length > 0){
            hasForm = true;
            $form.parsley();
        }
        //stop loading if there is no form
        if(!hasForm){
            return;
        }

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