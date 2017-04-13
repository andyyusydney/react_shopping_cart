/**
 * This javascript is for update billing details in my account
 */

$(document).ready(function(){

    if($('#foxtel-now-credit-card-details-form').length < 1){
        return;
    }

    $formDirectDebit = $('#foxtel-now-credit-card-details-form');
    $submitBtn = $('#credit-card-form-submit');

    Utilities.updateBillingDetails($formDirectDebit, $submitBtn);

});
