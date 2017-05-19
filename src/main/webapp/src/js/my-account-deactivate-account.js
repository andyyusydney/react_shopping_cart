/**
 * This javascript is for view my bills in my account
 */

$(document).ready(function(){

    if($('#foxtel-now-cancel-membership-form').length < 1){
        return;
    }

    Utilities.selectDropDownText();

    $formDirectDebit = $('#foxtel-now-cancel-membership-form');
    $submitBtn = $('#cancel-member-form-submit');

    $submitBtn.on('click', function (e) {
        e.preventDefault();

        //hide notification bar
        FOX.context.broadcast('HIDE_BANNER', {
          name: 'KENAN_ERROR',
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
            reason: {code:"",text:""},
            device: {code:"",text:""},
            extraComment: ""
        }

        postDataObj.reason.code = parseInt($("[data-id='deactiveReason']").attr('data-code'));
        postDataObj.reason.text = $("[data-id='deactiveReason']").attr('data-text');
        postDataObj.device.code = $("[data-id='deviceUsed']").attr('data-code');
        postDataObj.device.text = $("[data-id='deviceUsed']").attr('data-text');
        postDataObj.extraComment = $("[data-id='extraComment']").val();

        var $complete = function(){
            $this.removeAttr('disabled').removeClass('is-loading');
        }

        var $callback = function(data){
            if ((typeof data !== 'undefined') || !($.isEmptyObject(data))) {
               Foxtel.navigator($this.data("redirect-url"));
            }

            //notification bar
            FOX.context.broadcast('SHOW_BANNER', {
              name: 'KENAN_ERROR',
              closeEnabled: true
            });
        };

        Utilities.getPostData(JSON.stringify(postDataObj),"/bin/foxtel/now/my-account/deactivate",$callback,$complete);
    });
});
