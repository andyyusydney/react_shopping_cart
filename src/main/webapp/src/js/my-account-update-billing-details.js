/**
 * This javascript is for update billing details in my account
 */

$(document).ready(function(){

    if($('#foxtel-now-credit-card-details-form').length < 1){
        return;
    }

    $formDirectDebit = $('#foxtel-now-credit-card-details-form');
    $submitBtn = $('#credit-card-form-submit');

    $formDirectDebit.hide();
    $(".foxtel-now-display-div-wrapper").on('click','.edit-link a',function(){
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

        postDataObj.cardNumber = $("input[data-id='cardNumber']").val();
        postDataObj.cardExpireMonth = $("input[data-id='cardExpiry']").val().split("-")[0];
        postDataObj.cardExpireYear = $("input[data-id='cardNumber']").val().split("-")[1];
        postDataObj.cvc = $("input[data-id='cvc']").val();

        var postData = "";

        Object.keys(postDataObj).forEach(function(key){
            postData += key + "=" + postDataObj[key] + "&";
        })

        postData = postData.slice(0,-1);

        var $complete = function(){
            $this.removeAttr('disabled').removeClass('is-loading');
        }

        var $callback = function(data){
            if ((typeof data !== 'undefined') || !($.isEmptyObject(data))) {
                if(data.DirectDebit.successFlag){
                    Foxtel.navigator($this.data("redirect-url"));
                }
            }

            //notification bar
            FOX.context.broadcast('SHOW_BANNER', {
              name: 'PROFILE_UPDATED',
              closeEnabled: true
            });
        };

        Utilities.getPostData(postData,"/bin/secure/bills-and-payments",$callback,$complete);
    });
});