
/**
 * Foxtel now shop cart backbone logic
 * Backbone view for all shop cart components 
 * Use standard JS event to handle click events and UI changes
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
  
  // var cart_item = new CartItem({tierId: 10, price: 13.5,title: 'drama'});

  var cart_collection = new CartCollection();

  var cart_collection_view = new CartCollectionView({collection: cart_collection});

  cart_collection_view.$el = $('#cartCollection-container');
  
  $('.foxtelNowProductAddToCart').on('click',function(){

    var tierId = $(this).find('span').data('tier-id');

    var pack = Foxtel.ShopCartManager.addPlayTier(tierId,null);
        
    
    });

  })

  console.log('length: ' + cart_collection.length);
})