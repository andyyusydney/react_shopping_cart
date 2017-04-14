
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


    var $submitButton = $("#credit-card-form-submit");

    $submitButton.click(function(){
        $this = $(this);

        //validated form?
        if(!$form.parsley().validate()){
            return;
        }

        $this.addClass('is-loading');

        var requestObject = {};
        requestObject.cardNumber = $form.find("[data-id='cardNumber']").val().replace(/ /g, "");
        requestObject.cardExpiry = $form.find("[data-id='cardExpiry']").val().replace(/-/g, "");
        requestObject.cvc = $form.find("[data-id='cvc']").val();

        $.ajax({
            url: ajaxUrl,
            data:JSON.stringify(requestObject),
            type:"POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:function(data){
                Foxtel.navigator($this.data("redirect-url"));
            },
            complete:function(){
                $this.removeClass("is-loading");
                $this.removeAttr("disabled","disabled");
            }
        });

    });

});
