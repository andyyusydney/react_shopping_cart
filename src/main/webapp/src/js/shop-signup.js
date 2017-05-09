
/**
 * sign up form in sales flow
 * personal details form in reactivation flow
 */

(function($) {
    com.foxtel.now.CustomerDetailsForm =  {

        config:function (options){
            this.options = options;
            var $submitButton = $(this.options.submitBtnSelector);
            var self = this;

            //pre fill form data
            self.loadFormData();

            self.options.$form.parsley();

            $primaryDevice = $('[data-id="primaryDevice"]');
            $primaryDeviceList = $primaryDevice.siblings('.dropdown-menu');
            $primaryDeviceParent = $primaryDevice.parent('.field-wrap');
            $primaryDeviceFormGroup = $primaryDevice.closest('.form-group');
            $primaryDeviceList.on('click', 'li', function(){
                if ($primaryDevice.data('text')) { // check if a valid value has been selected to remove error.
                    $primaryDeviceParent.removeClass('parsley-error');
                    $primaryDeviceFormGroup.find('.primary-device-errors-list').remove();
                }
            })
            //submit event handler
            $submitButton.click(function(){
                $this = $(this);

                //validated form?
                if(!self.options.$form.parsley().validate() && !$primaryDevice.data('text')){
                    // manually add error for primary device.
                    $primaryDeviceParent.addClass('parsley-error');
                    var errMsg = $primaryDeviceList.data('foxtelRequiredMessage');
                    $primaryDeviceFormGroup.append($('<ul class="primary-device-errors-list parsley-errors-list filled" id="parsley-id-0386"><li class="parsley-required">'+errMsg+'</li></ul>'));

                    return;
                }

                $this.attr("disabled","disabled");
                $this.addClass('is-loading');
                var requestObject = self.getSubmitRequestObject();

                $.ajax({
                    url: self.options.submitAjaxUrl,
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
        },

        updateField:function ($field,value){
          $field.val(value);;
          if(value&&value!=''){
            $field.siblings('label').addClass('active highlight');
          }
        },

        loadFormData:function (){
            var self = this;

            //empty request
            $.ajax({
                url: self.options.loadAjaxUrl,
                type:"POST",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success:function(data){
                    if(self.fillForm){
                        self.fillForm(data);
                    }
                }
            });
        },
        getSubmitRequestObject:function (){
            //do nothing, implement in child class
        },

        fillForm:function (data){
            //do nothing, implement in child class
        },

    };

    com.foxtel.now.SalesCustomerDetailsForm = function () {};
    com.foxtel.now.ReactivationCustomerDetailsForm = function () {};

    _.extend(com.foxtel.now.SalesCustomerDetailsForm.prototype,com.foxtel.now.CustomerDetailsForm,{

        getSubmitRequestObject:function(){
            var self = this;

            var requestObject = {};
            requestObject.firstName = self.options.$form.find("[data-id='firstName']").val();
            requestObject.lastName = self.options.$form.find("[data-id='lastName']").val();
            requestObject.email = self.options.$form.find("[data-id='email']").val();
            requestObject.password = self.options.$form.find("[data-id='password']").val();
            requestObject.mobile = self.options.$form.find("[data-id='mobile']").val();
            requestObject.postcode = self.options.$form.find("[data-id='postcode']").val();
            requestObject.primaryDevice = self.options.$form.find("[data-id='primaryDevice']").attr('data-code');
            return requestObject;
        },
        fillForm:function(data){
            var self = this;
            self.updateField(self.options.$form.find("[data-id='firstName']"),data.firstName);
            self.updateField(self.options.$form.find("[data-id='lastName']"),data.lastName);
            self.updateField(self.options.$form.find("[data-id='email']"),data.email);
            self.updateField(self.options.$form.find("[data-id='mobile']"),data.mobileNumber);
            self.updateField(self.options.$form.find("[data-id='postcode']"),data.postCode);

        }

    });

    _.extend(com.foxtel.now.ReactivationCustomerDetailsForm.prototype,com.foxtel.now.CustomerDetailsForm,{
        getSubmitRequestObject:function(){
            var self = this;

            var requestObject = {};
            requestObject.firstName = self.options.$form.find("[data-id='firstName']").val();
            requestObject.lastName = self.options.$form.find("[data-id='lastName']").val();
            requestObject.mobile = self.options.$form.find("[data-id='mobile']").val();
            requestObject.postcode = self.options.$form.find("[data-id='postcode']").val();
            requestObject.primaryDevice = self.options.$form.find("[data-id='primaryDevice']").attr('data-code');
            return requestObject;
        },
        fillForm:function(data){
            var self = this;
            self.updateField(self.options.$form.find("[data-id='firstName']"),data.firstName);
            self.updateField(self.options.$form.find("[data-id='lastName']"),data.lastName);
            self.updateField(self.options.$form.find("[data-id='email']"),data.email);
            self.updateField(self.options.$form.find("[data-id='mobile']"),data.mobileNumber);
            self.updateField(self.options.$form.find("[data-id='postcode']"),data.postCode);
            self.options.$form.find("[data-id='email']").addClass('disabled');
        }
    });

})(jQuery);

//form submit
$(document).ready(function(){

    var hasForm = false;

    var $form = $("#shop-sign-up-form");
    if($form.length > 0){
        hasForm = true;

        new com.foxtel.now.SalesCustomerDetailsForm().config({
            submitBtnSelector:"#sign-up-form-submit",
            $form:$form,
            submitAjaxUrl:"/bin/foxtel/now/customerDetails",
            loadAjaxUrl:"/bin/foxtel/now/customerDetailLanding"
        });
    }

    if(!hasForm){
        $form = $("#reactivation-personal-details-form");
        if($form.length > 0){
            hasForm = true;
            new com.foxtel.now.ReactivationCustomerDetailsForm().config({
                submitBtnSelector:"#sign-up-form-submit",
                $form:$form,
                submitAjaxUrl:"/bin/foxtel/now/my-account/reactivation/customerDetails",
                loadAjaxUrl:"/bin/foxtel/now/my-account/reactivation/customerDetailLanding"
            });
        }
    }

    //stop loading if there is no form
    if(!hasForm){
        return;
    }

    Utilities.selectDropDownText();

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
