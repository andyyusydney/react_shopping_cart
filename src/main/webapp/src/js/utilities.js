/* Store Utilities Functions */
var Utilities = {};

Utilities.getPostData = function($requestObj, $url, $callback,$complete){
    $.ajax({
            url: $url,
            data:JSON.stringify($requestObj),
            type:"POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success:function(data){
                $callback(data);
            },
            error: function(data){
                console.log("data error:" + data)
            },
            complete: function(){
                $complete();
            }
        });
}

Utilities.updateBillingDetails = function($form, $submitBtn){
    $form.on('submit', function (e) {
        var $thisForm = $(this),
            postData = $thisForm.serialize(),
            $submitButton = $submitBtn;

        var $callback = function(data){
            if ((typeof data !== 'undefined') || !($.isEmptyObject(data))) {
                if (typeof data.DirectDebit !== 'undefined') {
                    if (data.DirectDebit.successFlag) {
                        FOX.storage.data("paymentProfileUpdated", 1);
                        FOX.storage.data("actionType", data.actionType);
                        FOX.storage.data("email", data.email);
                        // Web service returns the confirmation page URL
                        window.location = data.DirectDebit.rUrl;
                    } else {
                        // handle the errors
                        if (data.DirectDebit.kenanError || data.DirectDebit.errors) {
                            $thisForm.parsley().reset();
                            $('.unsuccessful-transaction').show();

                            var errorMsg = "";
                            if(data.DirectDebit.errors && data.DirectDebit.errors.length>0){
                                errorMsg = data.DirectDebit.errors[0];
                            }else{
                                errorMsg = data.DirectDebit.kenanError;
                            }

                        }
                        if (data.DirectDebit.rUrl) {
                            // Web service returns the generic error page URL
                            window.location = data.DirectDebit.rUrl;
                        }
                    }
                } else {
                    if (data.redirect) {
                        window.location = data.rUrl;
                    }
                }
            }
        }

        var $complete = function(){
            $submitButton.removeAttr('disabled').removeClass('is-loading');
        }

        e.preventDefault();

        $thisForm.parsley().validate();

        if ($(this).parsley().isValid()) {

            $submitButton.attr("disabled", true).addClass('is-loading');

            Utilities.getPostData(postData,"/bin/secure/bills-and-payments",$callback,$complete);

        } else {
            return
        }
    });
}