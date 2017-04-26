// JavaScript for manage my package page
// -------------------------------------

$(function () {
  var onManageYourPackagePage = window.location.pathname.match(/manage-your-package/);
  var $cart = $('#cartCollection-container');

  if (onManageYourPackagePage && $cart.length) {
    var ManageYourPackageView = Backbone.View.extend({
      initialize: function () {
        FOX.context.subscribe("updated:cart", this.handleCartUpdated.bind(this));
        this.$submitButton = $('.foxtel-now-jumbotron--shopping-cart__summary button');
      },

      events: {
        'click .foxtel-now-jumbotron--shopping-cart__summary button': 'handleSubmit'
      },

      // Event handlers
      // --------------

      handleSubmit: function (event) {
        event.preventDefault();
        $(event.currentTarget).addClass('is-disabled');
        // If the cart is empty redirect the user to cancel subscription
        if (Foxtel.ShopCartManager.isEmpty()) {
          window.location = '/now/my-account/deactivate.html';
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
        var $submitButton = $('.foxtel-now-jumbotron--shopping-cart__summary button');

        if (response.status === 'ERROR') {
          this.genericError();
        } else {
          FOX.context.broadcast('SHOW_BANNER', {
            name: 'PACKAGE_UPDATE_SUCCESS',
            closeEnabled: true
          });
        }

        $submitButton.removeClass('is-disabled');
      },

      handleUpdateError: function (xhr, status, error) {
        var $submitButton = $('.foxtel-now-jumbotron--shopping-cart__summary button');
        
        this.genericError();
        $submitButton.removeClass('is-disabled');
      },

      handleCartUpdated: function (data) {
        var $submitButton = $('.foxtel-now-jumbotron--shopping-cart__summary__checkout button');

        if (this.loaded) {
            if (Foxtel.ShopCartManager.isEmpty()) {
              $submitButton.html(this.$submitButton.data('button-cancel-label'));
            } else {
              $submitButton.html(this.$submitButton.data('button-edit-label'));
            }
        } else {
            this.loaded = true;
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

    new ManageYourPackageView({
      el: $cart
    });
  }
});
