$(document).ready(function () {
  var $infoBarTemplates = $('.foxtel-now-info-bar-template');

  if ($infoBarTemplates.length > 0) {
    var InfoBarView = Backbone.View.extend({
      initialize: function (options) {
        this.template = Handlebars.compile(options.$template.html());
        this.slideDuration = 150; // ms
      },

      events: {
        'show': 'handleShow',
        'click .foxtel-now-info-bar__close': 'handleClose'
      },

      render: function () {
        // Collect the data to be rendered.
        var data = this.getTemplateData()
        // Use Handlebars to render the template.
        if (this.template && typeof this.template === 'function') {
          this.$el.html(this.template(data))
        }
        return this
      },

      // Retrieve data to be rendered.
      getTemplateData () {
        return this.model && this.model.toJSON() || {};
      },

      // Event Handlers
      // --------------

      handleShow: function () {
        this.$el.hide().slideDown({
          duration: this.slideDuration
        });
      },

      handleClose: function () {
        var self = this;

        self.$el.slideUp(function () {
          self.$el.remove();
        })
      }
    });

    FOX.context.subscribe('SHOW_BANNER', function (data) {
      var $template = $('#foxtel-now-info-bar-template--' + data.name);

      if ($template.length) {
        var view = new InfoBarView({
          model: new Backbone.Model(data),
          $template: $template
        }).render();

        $('#foxtel-now-info-bar-container--' + data.name).append(view.$el);
        view.$el.trigger('show');
      }
    });
  }
});
