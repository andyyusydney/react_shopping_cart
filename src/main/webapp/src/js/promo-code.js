
/**
 * This file is for promo code
 * 1) Capture the code
 * 2) Validate
 * 3) Navigate to shop page
 * 4) Show error message for invalid codes
 */

//form submit
$(document).ready(function(){

    var hasForm = false;

    var $form = $("#promo-code-form");
    if($form.length > 0){
     hasForm = true;
    }

    //stop executing if there is no form
    if(!hasForm){
    return;
    }

    var ajaxUrl = "/bin/foxtel/now/promo/validate";
    $form.parsley();
    var $submitButton = $("#promo-code-submit");
    $submitButton.click(function(){
        $this = $(this);

        //validated form?
        if(!$form.parsley().validate()){
            return;
        }

        $this.attr("disabled","disabled");
        $this.addClass('is-loading');

        var requestObject = {};
        requestObject.code = $form.find("[data-id='promo-code']").val();

        $promoErrorMsg = $form.find("#promoErrorMsg").val();

        $.ajax({
            url: ajaxUrl,
            data:JSON.stringify(requestObject),
            type:"POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:function(data){

                //checking result
                var validResult = data.result;
                if("VALID" === validResult){
                    Foxtel.navigator($this.data("redirect-url"));
                }else if("EXPIRED" === validResult){
                    jQuery('#promoErrorMsg').text('Hey there, it looks like this promotional code has already expired. You will not be able to sign up with this code.');
                    jQuery('#promoErrorMsg').show();
                }else if("NOT_FOUND" === validResult){
                    jQuery('#promoErrorMsg').text('Hey there, it looks like this promotional code is invalid. You will not be able to sign up with this code.');
                    jQuery('#promoErrorMsg').show();
                }else{
                    jQuery('#promoErrorMsg').text('Hey there, it looks like this promotional code is invalid. You will not be able to sign up with this code.');
                    jQuery('#promoErrorMsg').show();
                }

            },
            complete:function(){
                $this.removeClass("is-loading");
                $this.removeAttr("disabled","disabled");
            }
        });

    });
});