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
        'click a.add-to-cart': 'handleAddToCartClick',
        'click a.buy-it-now': 'handleBuyItNowClick'
      },

      // Event handlers
      // --------------

      handleActionHover: function (event) {
        this.$links.removeClass('active');
        $(event.currentTarget).addClass('active');
        this.updateSlidingBackground();
      },

      // Add the item to the cart and update the button text.
      handleAddToCartClick: function (event) {
        var $link = $(event.currentTarget);
        var text = $link.data('added-text');
        var tierId = $link.data('tier-id');

        event.preventDefault();
        this.addToCart(tierId);
        $link.addClass('is-disabled');
        $link.html(text);
        $link.removeClass('active');
        $link.siblings('.buy-it-now').addClass('active');
        this.updateSlidingBackground();
      },

      // Add the item to the cart then redirect to the buy it now link's URL.
      handleBuyItNowClick: function (event) {
        var $link = $(event.currentTarget);
        var tierId = $link.data('tier-id');

        if (!this.model.get('addedToCart')) {
          event.preventDefault();
          this.addToCart(tierId, function () {
            window.location.href = $link.attr('href');
          });
        }
      },

      // Private
      // -------

      addToCart: function (tierId, cb) {
        var self = this;

        self.cart.addPlayTier(tierId, function () {
          self.model.set({
            addedToCart: true
          });
          cb();
        });
      },

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
        cart: Foxtel.ShopCartManager,
        model: new Backbone.Model()
      });
    });
  }
});
