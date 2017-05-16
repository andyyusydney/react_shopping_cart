$(document).ready(function () {
  var $infoBarTemplates = $('.foxtel-now-info-bar-template');

  if ($infoBarTemplates.length > 0) {
    var InfoBarView = Backbone.View.extend({
      initialize: function (options) {
        var self = this;

        self.template = Handlebars.compile(options.$template.html());
        self.slideDuration = 150; // ms
        FOX.context.subscribe('HIDE_BANNER', function (data) {
          if (data.name === self.model.get('name')) {
            self.handleClose();
          }
        });
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
      getTemplateData: function () {
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

    var bannerViewList = [];

    FOX.context.subscribe('SHOW_BANNER', function (data) {
      var $template = $('#foxtel-now-info-bar-template--' + data.name);
      var $infoBar = $('#foxtel-now-info-bar-container--' + data.name + ' .foxtel-now-info-bar');

      // Instantiate if no info bar of this name already exists and there is a
      // template to render.
      if (!$infoBar.length && $template.length) {
        var view = new InfoBarView({
          model: new Backbone.Model(data),
          $template: $template
        }).render();

        $('#foxtel-now-info-bar-container--' + data.name).append(view.$el);
        view.$el.trigger('show');

        bannerViewList.push(view);
      }
    });

    FOX.context.subscribe('HIDE_ALL_BANNER', function () {
        _.each(bannerViewList,function(item){
            if(item){
                item.handleClose();
            }
        });
    });


  }
});
