// My account edit page JavaScript
// -------------------------------

$(function () {
  var $form = $('#my-profile-edit');

  if ($form.length) {
    // UpdateDetailsView
    // -----------------

    var UpdateDetailsView = Backbone.View.extend({
      initialize: function () {
        this.$el.parsley();
        this.$submitButton = this.$el.find('#update-details-button');
        this.initializeSelectBoxes();
        this.model.getProfile();
        this.model.on('completed:update', this.handleUpdateComplete.bind(this));
        this.model.on('fetched:details', this.handleFetchedDetails.bind(this));
        this.$emailField = this.$el.find("[data-id='email']");
        this.$emailField.parsley().subscribe('parsley:field:error', this.handleEmailError);
        this.$emailField.parsley().subscribe('parsley:field:success', this.handleEmailValid);
      },

      handleEmailValid: function() {
        FOX.context.broadcast('HIDE_BANNER', {
          name: 'EMAIL_TAKEN'
        });
      },

      handleEmailError:  function($parsleyField) {
        var assertName = $parsleyField.validationResult[0].assert.name;

        if(assertName === "verifyemail") {
          FOX.context.broadcast('SHOW_BANNER', {
            name: 'EMAIL_TAKEN',
            email: $parsleyField.$element.val(),
            closeEnabled: true
          });
        }
      },

      events: {
        'click #update-details-button': 'handleSubmit'
      },

      // Event handlers
      // --------------

      handleFetchedDetails: function () {
        var self = this;
        var formData = self.model.get('formData');

        _(formData).chain().keys().each(function (key) {
          var $field = $('[data-id="' + key + '"]');

          switch ($field.prop('tagName')) {
            case 'SELECT':
              if (self.selectBoxes) {
                var selectBox = self.selectBoxes[key]
                selectBox.setValueByChoice(formData[key]);
              }
            case 'INPUT':
              // Prefill the value.
              $field.val(formData[key])
                // Add active value to label to show populated state.
                .siblings('label').addClass('active');
          }
        })
      },

      handleSubmit: function (event) {
        var personalDetailsData = this.$el.serializeFormJSON();

        if(!this.$el.parsley().validate()){
          return;
        }
        // Mark request as pending.
        this.$submitButton.addClass('is-loading');
        // Trigger the update details request.
        this.model.updateDetails(personalDetailsData);
      },

      handleUpdateComplete: function (event) {
        var self = this;

        // Show notification banner for successful update.
        FOX.context.broadcast('SHOW_BANNER', {
          name: 'PROFILE_UPDATED',
          closeEnabled: true
        });
        // Update button state to show successful update.
        self.$submitButton.removeClass('is-loading').addClass('is-valid');
        setTimeout(function () {
          self.$submitButton.removeClass('is-valid');
        }, 1000);
      },

      // Private
      // -------

      initializeSelectBoxes: function () {
        var self = this;

        self.$el.find('select.foxtel-now-select').each(function () {
          var element = $(this).get(0);
          var choices = new Choices(element, {
            search: false,
            placeholderValue: $(this).data('placeholder'),
            shouldSort: false
          });
          var fieldId = $(this).data('id')

          self.selectBoxes = self.selectBoxes || {};
          self.selectBoxes[fieldId] = choices;
        });
      }
    });

    var UpdateDetails = Backbone.Model.extend({
      getDetailsEndpoint: '/bin/secure/profileSettings',
      idmEndpoint: '/bin/active/profile-settings/update-my-details',
      kenanEndpoint: '/bin/active/profile-settings/update-contact-details',
      passwordEndpoint: '/bin/active/profile-settings/update-login-details',

      updateDetails: function (formData) {
        this.set({
          idmUpdated: false,
          kenanUpdated: false
        });
        this.updateIDM(formData);
        this.updateKenan(formData);
      },

      getProfile: function () {
        $.get(this.getDetailsEndpoint, this.handleGetDetailsResponse.bind(this));
      },


      // Event handlers
      // --------------

      handleGetDetailsResponse: function (response) {
        // Store non-form data in the model.
        this.setNonFormData(response);

        // Prepare data for the html form.
        var formData =  {
          firstName: response.iFirstName,
          lastName: response.iLastName,
          email: response.iEmail,
          password: 'password',
          mobile: response.iContactTelephone,
          dateOfBirth: response.kDOB,
          address: response.kBillAddress1,
          suburb: response.kBillCity,
          state: response.kBillState,
          postcode: response.kBillZip
        };
        this.set({
          prefillFormData: formData
        });
        this.trigger('fetched:details');
      },

      handleIDMUpdateResponse: function (response) {
        this.set({
          idmUpdated: true
        });
        this.updated();
      },

      handleKenanUpdateResponse: function (response) {
        this.set({
          kenanUpdated: true
        });
        this.updated();
      },

      // Private
      // -------

      updateIDM: function (formData) {
        var payload = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          contactTelephone: formData.mobile,
          foxtelAccountId: this.get('accountId'),
          username: this.get('username')
        };

        $.post(this.idmEndpoint, payload, this.handleIDMUpdateResponse.bind(this));
      },

      updateKenan: function (formData) {
        var payload = {
          custEmail: formData.email,
          dayPhone: formData.mobile,
          billAddressOne: formData.address,
          billCity: formData.suburb,
          billState: formData.state,
          billZip: formData.postcode,
          foxtelAccountId: this.get('accountId'),
          accountInternalId: this.get('accountId')
        };

        $.post(this.kenanEndpoint, payload, this.handleKenanUpdateResponse.bind(this));
      },

      updated: function () {
        if (this.get('kenanUpdated') && this.get('idmUpdated')) {
          this.trigger('completed:update');
        }
      },

      // Parse response and set user meta data.
      setNonFormData: function (response) {
        this.set({
          accountId: response.iFoxtelAccountId,
          username: response.iUsername
        });
      }
    });

    // Instantiate model.
    var updateDetails = new UpdateDetails();

    // Instantiate view.
    new UpdateDetailsView({
      el: $form,
      model: updateDetails
    });
  }

  (function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
  })(jQuery);
});
