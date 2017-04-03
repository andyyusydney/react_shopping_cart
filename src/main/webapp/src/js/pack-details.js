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
        FOX.context.subscribe('SHOP_CART_LOADED', this.handleShopCartLoaded);
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

      // Check the add to cart button is disabled when pack is already in cart.
      handleShopCartLoaded: function (data) {
        // Can't pass through context, so use a global $ selector.
        var $addToCartButton = $('.foxtel-now-pack-details .add-to-cart');
        var buttonData = $addToCartButton.data();

        _(data.play.tiers).select(function (tier) {
          if (tier.tierId === parseInt(buttonData.tierId, 10)) {
            $addToCartButton.addClass('is-disabled').html(buttonData.addToCartText);
            // Update the sliding background to the buy it now button.
            $addToCartButton.siblings('.buy-it-now').trigger('mouseover');
          }
        });
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
          if (typeof cb === 'function') {
            cb();
          }
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
