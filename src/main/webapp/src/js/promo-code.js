
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

        var promoCode = $form.find("[data-id='promo-code']").val();
        var requestObject = {};
        requestObject.code = promoCode;

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
                    FOX.context.broadcast("PROMO_CODE_SUBMITTED",{"code":promoCode});
                    Foxtel.navigator($this.data("redirect-url"));
                }else if("EXPIRED" === validResult){
                    FOX.context.broadcast('SHOW_BANNER', {
                      name: 'PROMO_CODE_EXPIRED',
                      closeEnabled: true
                    });
                }else if("NOT_FOUND" === validResult){
                    FOX.context.broadcast('SHOW_BANNER', {
                      name: 'PROMO_CODE_NOT_FOUND',
                      closeEnabled: true
                    });
                }else{
                    FOX.context.broadcast('SHOW_BANNER', {
                      name: 'PROMO_CODE_GENERAL_ERROR',
                      closeEnabled: true
                    });
                }
            },
            complete:function(){
                $this.removeClass("is-loading");
                $this.removeAttr("disabled","disabled");
            }
        });

    });


    //check if it's logged in customer
    var servletURL = "/bin/foxtel/display-name.json";

    $.get(servletURL, function (response) {
        if(!response && response.first_name){
            //logged in
            FOX.context.broadcast('SHOW_BANNER', {
              name: 'PROMO_CODE_LOGGED_CUSTOMER',
              closeEnabled: true
            });
        }
    });
});