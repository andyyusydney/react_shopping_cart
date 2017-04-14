/**
 * This javascript is for update billing details in my account
 */

$(document).ready(function(){

    if($('#foxtel-now-credit-card-details-form').length < 1){
        return;
    }

    $formDirectDebit = $('#foxtel-now-credit-card-details-form');
    $submitBtn = $('#credit-card-form-submit');


    $submitBtn.on('click', function (e) {
        e.preventDefault();

        //hide notification bar
        FOX.context.broadcast('HIDE_BANNER', {
          name: 'PAYMENT_GATEWAY_ERROR',
          closeEnabled: true
        });

        $this = $(this);

        //validated form?
        if(!$formDirectDebit.parsley().validate()){
            return;
        }

        $this.attr("disabled","disabled");
        $this.addClass('is-loading');


        var postData = $formDirectDebit.serialize();


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
              name: 'PAYMENT_GATEWAY_ERROR',
              closeEnabled: true
            });
        };

        Utilities.getPostData(postData,"/bin/secure/bills-and-payments",$callback,$complete);
    });
});