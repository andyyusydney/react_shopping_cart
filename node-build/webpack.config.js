const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: path.resolve(__dirname, '../src/main/webapp/src/js'),
  entry: {
    app: ['./shop.js',
          './shop-signup.js',
          './shop-creditcard.js',
          './shop-cart.js',
          './shop-cart-backbone.js',
          './shop-checkout-without-starter.js'
        ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'shop-checkout.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port:9000
  },
};
