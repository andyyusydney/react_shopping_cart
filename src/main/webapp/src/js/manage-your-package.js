// JavaScript for manage my package page
// -------------------------------------

$(function () {
  var onManageYourPackagePage = window.location.pathname.match(/manage-your-package/);
  var $cart = $('#cartCollection-container');

  if (onManageYourPackagePage && $cart.length) {
    var ManageYourPackageView = Backbone.View.extend({
      initialize: function () {
        FOX.context.subscribe("updated:cart", this.handleCartUpdated.bind(this));
        this.buttonContainerSelector = '.foxtel-now-jumbotron--shopping-cart__summary__checkout';
        this.$submitButton = $(this.buttonContainerSelector + ' button');
        this.$submitButton.removeClass('disabled');
      },

      events: {
        'click .foxtel-now-jumbotron--shopping-cart__summary button': 'handleSubmit'
      },

      // Event handlers
      // --------------

      handleSubmit: function (event) {
        event.preventDefault();
        var $submitButton = $(event.currentTarget);
        var $buttonContainer = $submitButton.parents(this.buttonContainerSelector);

        $buttonContainer.css('min-width', $buttonContainer.width());
        $submitButton.addClass('is-loading');

        // If the cart is empty redirect the user to cancel subscription
        if (Foxtel.ShopCartManager.isEmpty()) {
          window.location = '/now/my-account/deactivate.html';
          return false;
        // Otherwise, make the update call.
        } else if(Foxtel.ShopCartManager.hasPremiumPackAndNoStarter()) {
            var buttonWithoutStarterUrl = $(this).data("button-without-starter-url");
            Foxtel.navigator(buttonWithoutStarterUrl);
        } else {

            var self = this;
            $.ajax({
                url: '/bin/foxtel/now/updatecart',
                data:JSON.stringify({}),
                type:"POST",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success:function(data){
                    self.handleUpdateSuccess(data);
                },
                error:function(){
                    self.handleUpdateError(data);
                }
             });
        }
        // Prevent default shop handlers from running.
        return false;
      },

      handleUpdateSuccess: function (response) {
        var $submitButton = $(this.buttonContainerSelector + ' button');
        var $buttonContainer = $submitButton.parents(this.buttonContainerSelector);
        Utilities.isPackageUpdated = false;

        if (response.status === 'ERROR') {
          this.genericError();
        } else {
          FOX.context.broadcast('SHOW_BANNER', {
            name: 'PACKAGE_UPDATE_SUCCESS',
            closeEnabled: true
          });
        }

        $submitButton.removeClass('is-loading').addClass('is-valid');
        Utilities.setUpdatePackage();
        setTimeout(function () {
          window.location = '/now/my-account.html';
        }, 2000);
      },

      handleUpdateError: function (xhr, status, error) {
        var $submitButton = $('.foxtel-now-jumbotron--shopping-cart__summary button');
        var $buttonContainer = $submitButton.parents(this.buttonContainerSelector);

        this.genericError();
        $submitButton.removeClass('is-loading');
        $buttonContainer.css('min-width', 'initial');
      },

      handleCartUpdated: function (data) {
        var $submitButton = $(this.buttonContainerSelector + ' button');

        if (this.loaded) {
            if (Foxtel.ShopCartManager.isEmpty()) {
              $submitButton.html(this.$submitButton.data('button-cancel-label'));
              $submitButton.removeClass('disabled');
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
