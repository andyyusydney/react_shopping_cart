
/**
 * reset password page
 * users follow th link in reset password email to reset their password
 * The token validation servlet (com.foxtel.charlotte.servlets.ValidateToken.java) will add the following cookies
 * CKEResetPasswordFirstName
 * CKEResetPasswordEmail
 * CKEResetPasswordUsername
 * CKEResetPasswordToken
 *
 */

$(document).ready(function(){

    var ajaxUrl = "/bin/foxtel/forgotUsernameAndPassword/resetPassword";

    var $form = $("#reset-password-form");
    if($form.length==0){
        return;
    }

    $form.parsley();

    //check the cookie and update value in page

    var token = $.cookie("CKEResetPasswordToken");
    var firstName = $.cookie("CKEResetPasswordFirstName");
    if(!token || token.length == 0){
        Foxtel.navigator($form.data("invalid-token-url"));
        return;
    }

    //update first name
    $("[data-id='firstName']").text(firstName);

    var $submitButton = $("#reset-password-submit");

    $submitButton.click(function(){
        $this = $(this);

        //validated form?
        if(!$form.parsley().validate()){
            return;
        }

        $this.attr("disabled","disabled");
        $this.addClass('is-loading');

        var requestObject = {};
        requestObject.token = token;
        requestObject.password = $form.find("[data-id='password']").val();

        $.ajax({
            url: ajaxUrl,
            data:JSON.stringify(requestObject),
            type:"POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:function(data){
                var rSuccess = data.success;
                if (rSuccess) {
                    Foxtel.navigator($this.data("redirect-url"));
                }else{
                    //TODO what to do
                }
            },
            complete:function(){
                $this.removeClass("is-loading");
                $this.removeAttr("disabled","disabled");
            }
        });
    });
});

