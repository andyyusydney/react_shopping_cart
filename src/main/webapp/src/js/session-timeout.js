// Manage session timeout and notification.  After the user has been
// inactive for a certain period of time, the cart is emptied and personal
// information is cleared.

$(document).ready(function () {
  // Start the inactivity timer if configured on the page.
  $timeout = $('.foxtel-now-timeout');
  if ($timeout.length) {

    // Timeout Model
    // ------------

    var Timeout = Backbone.Model.extend({
      initialize: function () {
        this.setTimer(this.get('timeoutMinutes'));
        if (this.get('deleteData')) {
          this.on('timeout', this.removeAllCookies, this);
        }
      },

      setTimer: function (minutes) {
        var self = this;
        var ms = minutes * 60 * 1000;

        setTimeout(function () {
          self.trigger('timeout');
        }, ms);
      },

      removeAllCookies: function () {
        var cookies = document.cookie.split(";");
        _(cookies).each(function (cookie) {
          var key = (cookie.split("=")[0]).trim();
          $.removeCookie(key, {
            path: '/'
          });
        });
      }
    });

    var options = $timeout.first().data();
    var timeout = new Timeout(options);

    // Timeout View
    // -----------

    var TimeoutView = Backbone.View.extend({
      initialize: function (options) {
        this.model.on('timeout', this.handleTimeout, this);
        this.formIdsToClear = [
          'shop-sign-up-form',
          'shop-credit-card-form'
        ];
      },

      events: {
        'click .restart-session': 'handleRestartSessionClick'
      },

      // Event handlers
      // --------------

      handleTimeout: function () {
        this.showModal();
        if (this.model.get('clearFormFields')) {
          this.clearPersonalFields();
        }
      },

      handleRestartSessionClick: function (event) {
        event.preventDefault();
        window.location.href = this.model.get('redirectUrl');
      },

      // Private
      // -------

      clearPersonalFields: function () {
        _(this.formIdsToClear).each(function (id) {
          $('#' + id).find(':input').val('');
        });
      },

      showModal: function () {
        this.$el.modal({
          backdrop: 'static'
        });
        $('.modal-backdrop').addClass('foxtel-now-modal-backdrop');
      }
    });

    var timeoutView = new TimeoutView({
      model: timeout,
      el: $('#foxtel-now-time-expired')
    });
  }
})
