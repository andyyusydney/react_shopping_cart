
$(document).ready(function(){
    var $form = $("#shop-sign-up-form");
    if($form.length==0){
        return;
    }
    $form.parsley();
    var ajaxUrl = "/bin/foxtel/now/customerDetails";

    var $submitButton = $("#sign-up-form-submit");

    //submit event handler
    $submitButton.click(function(){
        $this = $(this);

        //validated form?

        if(!$form.parsley().validate()){
            return;
        }

        var requestObject = {};
        requestObject.firstName = $form.find("[data-id='firstName']").val();
        requestObject.lastName = $form.find("[data-id='lastName']").val();
        requestObject.email = $form.find("[data-id='email']").val();
        requestObject.password = $form.find("[data-id='password']").val();
        requestObject.mobile = $form.find("[data-id='mobile']").val();
        requestObject.postcode = $form.find("[data-id='postcode']").val();


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
