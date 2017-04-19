// JavaScript for manage my package page
// -------------------------------------

$(function () {
  var onManageMyPackagePage = window.location.pathname.match(/manage-my-package/);
  var $cart = $('#cartCollection-container');

  if (onManageMyPackagePage && $cart.length) {
    var ManageMyPackageView = Backbone.View.extend({
      initialize: function () {
        FOX.context.subscribe("SHOP_CART_REFRESHED", this.handleCartUpdated.bind(this));
        this.$submitButton = $('.foxtel-now-jumbotron--shopping-cart__summary button');
      },

      events: {
        'click .foxtel-now-jumbotron--shopping-cart__summary button': 'handleSubmit'
      },

      // Event handlers
      // --------------

      handleSubmit: function (event) {
        event.preventDefault();
        // If the cart is empty redirect the user to cancel subscription
        if (Foxtel.ShopCartManager.isEmpty()) {
          window.location = '/now/my-account/deactivate.html'
          return;
        // Otherwise, make the update call.
        } else {
          $.post('/bin/foxtel/now/updatecart', {})
            .done(this.handleUpdateSuccess.bind(this))
            .fail(this.handleUpdateError.bind(this));
        }
        // Prevent default shop handlers from running.
        return false;
      },

      handleUpdateSuccess: function (response) {
        FOX.context.broadcast('SHOW_BANNER', {
          name: 'PACKAGE_UPDATE_SUCCESS',
          closeEnabled: true
        });
      },

      handleUpdateError: function (xhr, status, error) {
        switch(xhr.status) {
          case 500:
            this.genericError();
          case 700:
            this.genericError();
        }
      },

      handleCartUpdated: function (data) {
        if (Foxtel.ShopCartManager.isEmpty()) {
          this.$submitButton.html(this.$submitButton.data('cancel-label'));
        } else {
          this.$submitButton.html(this.$submitButton.data('edit-label'));
        }
      },

      // Private
      // -------

      genericError: function () {
        FOX.context.broadcast('SHOW_BANNER', {
          name: 'PACKAGE_UPDATE_ERROR',
          closeEnabled: true
        });
      }
    });

    new ManageMyPackageView({
      el: $cart
    });
  }
});
