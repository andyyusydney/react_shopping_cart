
$(document).ready(function(){
    var $form = $("#shop-credit-card-form");
    if($form.length==0){
        return;
    }
    $form.parsley();

    var ajaxUrl = "/bin/foxtel/now/payment";

    var $submitButton = $("#credit-card-form-submit");

    $submitButton.click(function(){
        $this = $(this);
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
                Foxtel.navigator($this.data("redirect-url"));
            },
            complete:function(){
                $this.removeClass("is-loading");
                $this.removeAttr("disabled","disabled");
            }
        });

    });

});