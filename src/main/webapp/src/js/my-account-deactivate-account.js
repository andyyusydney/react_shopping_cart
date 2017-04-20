/**
 * This javascript is for view my bills in my account
 */

var Utilities = require('./utilities');


$(document).ready(function(){

    if($('#foxtel-now-cancel-membership-form').length < 1){
        return;
    }

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

        postDataObj.reason.code = parseInt($("input[data-id='deactiveReason'] option:selected").val());
        postDataObj.reason.text = $("input[data-id='deactiveReason'] option:selected").text();
        postDataObj.device.code = $("input[data-id='deviceUsed'] option:selected").val();
        postDataObj.device.text = $("input[data-id='deviceUsed'] option:selected").text();
        postDataObj.extraComment = $("input[data-id='extraComment']").val();

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

        Utilities.getPostData(postDataObj,"/bin/foxtel/now/my-account/deactivate",$callback,$complete);
    });
});
