
/**
 * This js is for both sales and reactivation flows
 */

$(document).ready(function(){
    var ajaxUrl = "/bin/foxtel/now/payment";
    var $form = $("#shop-credit-card-form");
    if($form.length==0){

        //try reactivation form
        $form = $("#reactivation-bill-details-form");
        ajaxUrl = "/bin/foxtel/now/my-account/reactivation/payment";
        if($form.length ==0 ){
            return;
        }
    }

    $form.parsley();

    //see at com.foxtel.now.common.ErrorCodes.java
    var PAYMENT_ERROR_CODE = "800";

    var $submitButton = $("#credit-card-form-submit");

    $submitButton.click(function(){
        $this = $(this);

        //validated form?
        if(!$form.parsley().validate()){
            return;
        }

        $this.attr("disabled","disabled");
        $this.addClass('is-loading');

        var requestObject = {};
        requestObject.cardNumber = $form.find("[data-id='cardNumber']").val();
        requestObject.cardExpiry = $form.find("[data-id='cardExpiry']").val();
        requestObject.cvc = $form.find("[data-id='cvc']").val();

        $.ajax({
            url: ajaxUrl,
            data:JSON.stringify(requestObject),
            type:"POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:function(data){

                //check response to see if there is any error
                if(!Foxtel.checkResponseErrorObj(data)){

                    //payment error?
                    if(data.error && data.error.code && PAYMENT_ERROR_CODE == data.error.code){
                        FOX.context.broadcast('SHOW_BANNER', {
                          name: 'PAYMENT_GATEWAY_ERROR',
                          closeEnabled: true
                        });
                    }else{
                        FOX.context.broadcast('SHOW_BANNER', {
                          name: 'KENAN_ERROR',
                          closeEnabled: true
                        });
                    }
                    return;
                }

                Foxtel.navigator($this.data("redirect-url"));

            },
            complete:function(){
                $this.removeClass("is-loading");
                $this.removeAttr("disabled","disabled");
            }
        });

    });

});
