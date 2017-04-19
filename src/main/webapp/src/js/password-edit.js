// JavaScript for Edit Password Page
// ---------------------------------

$(function () {
  var $form = $('#password-edit');

  if ($form.length) {
    var EditPasswordView = Backbone.View.extend({
      initialize: function () {
        this.$el.parsley();
        this.$submitButton = this.$el.find('button');
        this.model.on('success:update', this.handleUpdateSuccess.bind(this));
        this.model.on('error:update', this.handleUpdateError.bind(this));
      },

      events: {
        'click #update-password-button': 'handleSubmit'
      },

      // Event handlers
      // --------------

      handleSubmit: function (event) {
        var formData = this.$el.serializeFormJSON();

        if(!this.$el.parsley().validate()){
          return;
        }

        event.preventDefault();
        this.$submitButton.addClass('is-loading');
        this.model.updatePassword(formData);
      },

      handleUpdateSuccess: function () {
        var self = this;

        this.$submitButton.removeClass('is-loading').addClass('is-valid');
        setTimeout(function () {
          self.$submitButton.removeClass('is-valid');
        }, 1000);
      },

      handleUpdateError: function () {
        this.$submitButton.removeClass('is-loading');
      }
    });

    var EditPassword = Backbone.Model.extend({
      updatePasswordEndpoint: '/bin/active/profile-settings/update-login-details',
      getDetailsEndpoint: '/bin/secure/profileSettings',

      initialize: function () {
        this.getDetails();
      },

      updatePassword: function (formData) {
        var payload = {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
          "profile-confpwd": formData.newPassword,
          foxtelAccountId: this.get('accountId')
        };

        $.post(this.updatePasswordEndpoint, payload)
          .done(this.updatePasswordSuccess.bind(this))
          .fail(this.updatePasswordError.bind(this));
      },

      // Event handlers
      // --------------

      updatePasswordSuccess: function (response) {
        // if (response.isSuccess) {
          FOX.context.broadcast('SHOW_BANNER', {
            name: 'PASSWORD_UPDATE_SUCCESS',
            closeEnabled: true
          });
          this.trigger('success:update');
        // } else {
        //   this.updatePasswordError(response);
        // }
      },

      updatePasswordError: function (response) {
        FOX.context.broadcast('SHOW_BANNER', {
          name: 'PASSWORD_UPDATE_ERROR',
          closeEnabled: true
        });
        this.trigger('error:update');
      },

      // Private
      // -------

      getDetails: function () {
        var self = this;

        $.get(this.getDetailsEndpoint, function (response) {
          self.set({
            accountId: response.iFoxtelAccountId,
          });
        });
      }
    });

    var editPassword = new EditPassword();

    new EditPasswordView({
      el: $form,
      model: editPassword
    });
  }
});
