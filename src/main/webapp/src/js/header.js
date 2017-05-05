$(function () {
  var $header = $('.foxtel-now-header');

  if ($header.length) {
    // HeaderView
    // ----------

    var HeaderView = Backbone.View.extend({
      initialize: function () {
        $(window).on('click', this.closeSettingsDropdown.bind(this));
        this.model.on('fetched:userInfo', this.handleUserInfo.bind(this));
        this.$dropdown = this.$el.find('.dropdown');
        this.state = {
          open: false
        };
      },

      events: {
        'click .settings-icon': 'handleSettingsClick'
      },

      // Event handlers
      // --------------

      handleSettingsClick: function (event) {
        var $icon = $(event.currentTarget);

        this.$dropdown.toggleClass('open');
        this.state.open = !this.state.open;
      },

      closeSettingsDropdown: function (event) {
        var $target = $(event.target);
        var $settings = this.$el.find('.settings');

        if (this.state.open && !$settings.is($target) && $settings.has($target).length === 0) {
          event.preventDefault();
          this.state.open = false;
          this.$dropdown.removeClass('open');
        }
      },

      handleUserInfo: function () {
        var $logoLink = this.$el.find('.logo a');

        // Set the logged-in status of the header.
        if (this.model.get('loggedIn')) {
          this.$el.addClass('is-logged-in');
          // Update the username in settings.
          this.$el.find('.settings .username').html('Hi, ' + this.model.get('name'));
          // Update logo link
          $logoLink.attr('href', $logoLink.data('logged-in-url'));
        } else {
          if (this.model.onLoginPage()) {
            this.$el.addClass('log-in');
          }
          this.$el.addClass('container');
        }
        // Show the header.
        this.$el.addClass('is-loaded');
      }
    });

    // Header
    // ------

    var Header = Backbone.Model.extend({
      userInfoEndpoint: '/bin/foxtel/userInfo',

      getUserInfo: function () {
        $.get(this.userInfoEndpoint, this.handleUserInfoResponse.bind(this));
      },

      onLoginPage: function () {
        return window.location.href.match(/\/now\/login\.html/);
      },

      // Event handlers
      // --------------

      handleUserInfoResponse: function (response) {
        if (response.user && response.user.account && response.user.account.accountNumber) {
          this.set({
            name: response.user.account.iFirstName,
            loggedIn: true
          });
        }
        this.trigger('fetched:userInfo');
      }
    });

    var header = new Header();

    new HeaderView({
      el: $header,
      model: header
    });

    header.getUserInfo();
  }
});
