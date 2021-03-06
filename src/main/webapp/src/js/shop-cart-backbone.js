
/**
 * Foxtel now shop cart backbone logic
 * Backbone view for all shop cart components
 */


/* Cart Item Model*/
var CartItem = Backbone.Model.extend({

  defaults: {
    tierId: 10,
    price: 15.0,
    title: 'pop'
  },

  setCart: function(tierData) {
    this.set({
      tierId: tierData.tierID,
      price: tierData.price,
      title: tierData.title
    });
  }

});

/* Cart Collection */
var CartCollection = Backbone.Collection.extend({
    model: CartItem
});


/* Cart Collection View */
var CartCollectionView = Backbone.View.extend({

  initialize: function(){
    this.collection.on('add',this.render,this);
  },

  render: function(){
    var source = $('#cartCollection-template').html();
    var template = Handlebars.compile(source);
    var html = template(this.collection.toJSON());

    this.$el.html(html);
  }

});

/* Execution Backbones */
$(document).ready(function(){

  var cart_collection = new CartCollection();
  var cart_collection_view = new CartCollectionView({collection: cart_collection});
  cart_collection_view.$el = $('#cartCollection-container');

  //cart load & cart refresh event
  function updateCart(cartResponse){
      var cartTemplate = $('#cartCollection-template');
      if(cartTemplate.length==0){
        return;
      }
      var source = $('#cartCollection-template').html();
      var template = Handlebars.compile(source);
      var html = template(cartResponse);
      $('#cartCollection-container').html(html);
      FOX.context.broadcast('updated:cart');
  };

  //basket load refresh
  function updateIcon(cartResponse){
      var basketTemplate = $('#icon-basket-template');
      if(basketTemplate.length==0){
        return;
      }
      var $container = $('.foxtel-now-header__btn-cart');
      // Filter out the epl channels in the cart quantity display.
      var templateData = $.extend(true, {}, cartResponse);
      if (templateData.play) {
          templateData.play.tiers = _(templateData.play.tiers || {}).select(function (pack) {
            var eplIds = _(Foxtel.ShopCartManager.EPL_CHANNEL_TIERS).map(function (epl) {
              return epl.tierIdWithSports;
            });
            return !_(eplIds).contains(pack.tierId);
          });
          if (templateData.play.tiers.length > 0) {
            $container.show();
          } else {
            $container.hide();
            return;
          }
      }
      var source = $('#icon-basket-template').html();
      var template = Handlebars.compile(source);
      var html = template(templateData);
      $('#icon-basket-template-container').html(html);
  };

  FOX.context.subscribe("SHOP_CART_LOADED",function(data){
      updateCart(data);
      updateIcon(data);
  });

  FOX.context.subscribe("SHOP_CART_REFRESHED",function(data){
      updateCart(data);
      updateIcon(data);
  });
})
