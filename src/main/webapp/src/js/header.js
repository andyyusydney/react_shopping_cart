$(function () {
  var $header = $('.foxtel-now-header');

  if ($header.length) {
    var HeaderView = Backbone.View.extend({
      initialize: function () {
        $(window).on('click', this.closeSettingsDropdown.bind(this));
        this.model.on('fetched:details', this.renderName.bind(this));
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
          this.$dropdown.removeClass('open');
        }
      },

      renderName: function () {
        this.$el.find('.settings .username').html('Hi, ' + this.model.get('name'));
      }
    });

    var Header = Backbone.Model.extend({
      getDetailsEndpoint: '/bin/secure/profileSettings',

      getProfile: function () {
        $.get(this.getDetailsEndpoint, this.handleGetDetailsResponse.bind(this));
      },

      // Event handlers
      // --------------

      handleGetDetailsResponse: function (response) {
        this.set({
          name: response.firstName
        });
        this.trigger('fetched:details');
      }
    });

    var header = new Header();

    new HeaderView({
      el: $header,
      model: header
    });

    header.getProfile();
  }
});
