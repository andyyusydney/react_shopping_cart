// JavaScript for Pack Details Page
// --------------------------------

$(document).ready(function () {
  var $packDetails = $('.foxtel-now-pack-details');

  if ($packDetails.length) {

    // PackDetailsView
    // ---------------

    var PackDetailsView = Backbone.View.extend({
      initialize: function (options) {
        this.$actions = this.$el.find('.foxtel-now-pack-details__meta__actions');
        this.$links = this.$actions.find('a');
        this.$slider = this.$actions.find('.slide-bg');
        this.cart = options.cart
        this.updateSlidingBackground();
      },

      events: {
        'mouseover .foxtel-now-pack-details__meta__actions a': 'handleActionHover',
        'click a.add-to-cart': 'handleAddToCart'
      },

      // Event handlers
      // --------------

      handleActionHover: function (event) {
        this.$links.removeClass('active');
        $(event.currentTarget).addClass('active');
        this.updateSlidingBackground();
      },

      handleAddToCart: function (event) {
        var $link = $(event.currentTarget);
        var text = $link.data('added-text');
        var tierId = $link.data('tier-id');

        event.preventDefault();
        this.cart.addPlayTier(tierId);
        $link.addClass('is-disabled');
        $link.html(text);
        $link.removeClass('active');
        $link.siblings('.buy-it-now').addClass('active');
        this.updateSlidingBackground();
      },

      // Private
      // -------

      updateSlidingBackground: function () {
        var $activeAnchor = this.$actions.find('.active');

        this.$slider.show().css({
          'left': $activeAnchor.position().left,
          'width': $activeAnchor.outerWidth()
        });
      }
    });

    // Instantiate PackDetailsView
    $packDetails.each(function () {
      new PackDetailsView({
        el: $(this),
        cart: Foxtel.ShopCartManager
      });
    });
  }
});
