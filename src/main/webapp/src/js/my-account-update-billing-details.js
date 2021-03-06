/**
 * This javascript is for update billing details in my account
 */

$(document).ready(function(){

    if($('#foxtel-now-credit-card-details-form').length < 1){
        return;
    }

    $formDirectDebit = $('#foxtel-now-credit-card-details-form');
    $submitBtn = $('#credit-card-form-submit');

    $('.foxtel-now-display-div-template-container').on('click','.edit-link',function(){
        $formDirectDebit.slideToggle();
    })

    $submitBtn.on('click', function (e) {
        e.preventDefault();

        //hide notification bar
        FOX.context.broadcast('HIDE_BANNER', {
          name: 'PROFILE_UPDATED',
          closeEnabled: true
        });

        $this = $(this);

        //validated form?
        if(!$formDirectDebit.parsley().validate()){
            return;
        }

        $this.attr("disabled","disabled");
        $this.addClass('is-loading');

        var postDataObj = {
            accountType: "creditCard",
            type: "modifyDirectDebit",
            cardNumber: "",
            customerName: "",
            cardExpireMonth: "",
            cardExpireYear: "",
            cvc: ""
        }

        postDataObj.cardNumber = $("input[data-id='cardNumber']").val().replace(/ /g, "");
        postDataObj.cardExpireMonth = $("input[data-id='cardExpiry']").val().split("-")[0];
        postDataObj.cardExpireYear = $("input[data-id='cardExpiry']").val().split("-")[1];
        postDataObj.cvc = $("input[data-id='cvc']").val();
        postDataObj.customerName = $("div.customer-name").text().trim();

        var postData = "";

        Object.keys(postDataObj).forEach(function(key){
            postData += key + "=" + postDataObj[key] + "&";
        })

        postData = postData.slice(0,-1);

        var $complete = function(){
            $this.removeAttr('disabled').removeClass('is-loading');
        };

        var updateBillingDetailsError = function () {
            FOX.context.broadcast('SHOW_BANNER', {
              name: 'PROFILE_UPDATE_ERROR',
              closeEnabled: true
            });
        };

        var invalidCreditCardError = function () {
            FOX.context.broadcast('SHOW_BANNER', {
              name: 'PAYMENT_GATEWAY_ERROR',
              closeEnabled: true
            });
        };

        var $callback = function(data){
            if ((typeof data !== 'undefined') || !($.isEmptyObject(data))) {
                if(data.DirectDebit.success){
                    //Show success notification bar.
                    FOX.context.broadcast('SHOW_BANNER', {
                      name: 'PROFILE_UPDATED',
                      closeEnabled: true
                    });

                    // Show success button state.
                    $this.addClass('is-valid');

                    // Redirect
                    setTimeout(function () {
                      Foxtel.navigator($this.data("redirect-url"));
                    }, 2000);
                } else {
                  var kenanError = data.DirectDebit.kenanError;
                  if (kenanError == 'Invalid credit card') {
                    invalidCreditCardError();
                  } else {
                    updateBillingDetailsError();
                  }
                }
            }
        };

        //clear all the banners
        FOX.context.broadcast('HIDE_ALL_BANNER');

        var xhr = Utilities.getPostData(postData,"/bin/secure/bills-and-payments",$callback,$complete);
        xhr.fail(updateBillingDetailsError);
    });
});
