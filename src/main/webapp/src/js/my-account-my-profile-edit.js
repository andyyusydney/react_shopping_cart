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
        this.model.on('fetched:details', this.handleFetchedDetails.bind(this));
        this.model.on('completed:update', this.handleUpdateComplete.bind(this));
        this.$emailField = this.$el.find("[data-id='email']");
        this.$emailField.parsley().subscribe('parsley:field:error', this.handleEmailError);
        this.$emailField.parsley().subscribe('parsley:field:success', this.handleEmailValid);
        this.$emailField.data('unchanged', true);
        this.$dobField = this.$el.find("[data-id='dateOfBirth']");
        this.$dobField.parsley().subscribe('parsley:field:error', this.handleDobError);
        this.$dobField.parsley().subscribe('parsley:field:success', this.handleDobValid);
        this.model.getProfile();

        $(".dropdown-menu").on('click touchend', '.dropdown-item', function(e){
          $(this).parents(".dropdown").find('.btn').find('span').text($(this).text());
          $(this).parents(".dropdown").find('.btn').attr('data-text',$(this).text());
          $(this).parents(".dropdown").find('.btn').attr('data-code',$(this).attr('value'));
        })
      },

      handleEmailValid: function () {
        FOX.context.broadcast('HIDE_BANNER', {
          name: 'EMAIL_TAKEN'
        });
      },

      handleEmailError: function ($parsleyField) {
        var assertName = $parsleyField.validationResult[0].assert.name;

        if (assertName === "verifyemail") {
          FOX.context.broadcast('SHOW_BANNER', {
            name: 'EMAIL_TAKEN',
            email: $parsleyField.$element.val(),
            closeEnabled: true
          });
        }
      },

      handleDobValid: function () {
        FOX.context.broadcast('HIDE_BANNER', {
          name: 'UNDER_18'
        });
      },

      handleDobError: function ($parsleyField) {
        var assertName = $parsleyField.validationResult[0].assert.name;

        if (assertName === "overeighteennow") {
          FOX.context.broadcast('SHOW_BANNER', {
            name: 'UNDER_18',
            closeEnabled: true
          });
        }
      },

      events: {
        'click #update-details-button': 'handleSubmit',
        'keyup [data-id="email"]': 'handleEmailTyping'
      },

      // Event handlers
      // --------------

      handleFetchedDetails: function () {
        var self = this;
        var formData = self.model.get('prefillFormData');

        _(formData).chain().keys().each(function (key) {
          var $field = $('[data-id="' + key + '"]');

          switch ($field.prop('tagName')) {
            case 'BUTTON': // dropdown
              var $item = $field.siblings('ul').find('[value="' + formData[key] + '"]');
              $item.click();
            case 'INPUT':
              var textTypes = ['text', 'tel'];
              if (_(textTypes).contains($field.attr('type'))) {
                // Prefill the value.
                $field.val(formData[key])
                  // Add active value to label to show populated state.
                      .siblings('label').addClass('active');
              } else if ($field.attr('type') === 'checkbox') {
                  if (!!formData[key]) {
                      $field.click();
                  }
              }
          }
        })
      },

      handleSubmit: function (event) {
        var personalDetailsData = this.$el.serializeFormJSON();

        if(!this.$el.parsley().validate()){
          return;
        }

        // Add 'select' element value for state.
        personalDetailsData.state = this.$el.find('[data-id="state"]').data('code');

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

      handleEmailTyping: function (event) {
        // Only check if the email is registered if the user changes it.
        var prefillFormData = this.model.get('prefillFormData');
        var $emailField = $(event.currentTarget)
        var value = $emailField.val();

        $emailField.data('unchanged', false);
        if (prefillFormData && value === prefillFormData.email) {
          $emailField.data('unchanged', true);
        }
      }
    });

    var UpdateDetails = Backbone.Model.extend({
      getDetailsEndpoint: '/bin/secure/profileSettings',
      updateDetailsEndpoint: '/bin/secure/now/accountProfileSubmit',


      updateDetails: function (formData) {
        this.set({
          idmUpdated: false,
          kenanUpdated: false
        });
        this.updateAllDetails(formData);
      },

      getProfile: function () {
        $.get(this.getDetailsEndpoint, this.handleGetDetailsResponse.bind(this));
      },

      // Event handlers
      // --------------

      handleGetDetailsResponse: function (response) {
        // Store non-form data in the model.
        this.setNonFormData(response);

        // Hide default addresses
        var defaultAddresses = [
          '5 THOMAS HOLT DRIVE',
          '1 FOXTEL NOW ROAD'
        ];
        for (let defaultAddress of defaultAddresses) {
            var billAddress = response.kBillAddress1;
            var trimmedBillAddress = billAddress.trim().toUpperCase();
            if (defaultAddress == trimmedBillAddress) {
                response.kBillAddress1 = "";
                response.kBillCity = "";
                response.kBillState = "";
                break;
            }
        }

        // Prepare data for the html form.
        var formData =  {
          firstName: response.iFirstName,
          lastName: response.iLastName,
          email: response.kCustEmail,
          password: 'password',
          mobile: response.iContactTelephone,
          dateOfBirth: response.kDOB.replace(/\//g, '-'),
          address: response.kBillAddress1,
          suburb: response.kBillCity,
          state: response.kBillState,
          postcode: response.kBillZip,
          marketOpt: response.kenanMktFlag === "ON"
        };
        this.set({
          prefillFormData: formData
        });
        this.trigger('fetched:details');
      },

      handleUpdateResponse: function (response) {
        this.set({
          idmUpdated: true,
          kenanUpdated:true
        });
        this.updated();
      },

      // Private
      // -------

      updateAllDetails: function (formData) {
          var payload = {
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              contactTelephone: formData.mobile,
              dateOfBirth:moment(formData.dateOfBirth,"DD-MM-YYYY").format("YYYY-MM-DD"),
              address: formData.address,
              suburb: formData.suburb,
              state: formData.state,
              postcode: formData.postcode,
              marketOpt:formData['market-opt'] === "on"
          };
          $.ajax({
              type: "POST",
              url: this.updateDetailsEndpoint,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              data: JSON.stringify(payload),
              success: function(data) {
                  updateDetails.handleUpdateResponse(data);
              }
          });
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
});
