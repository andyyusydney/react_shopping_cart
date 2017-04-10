const path = require('path');
var jsonFile = require('jsonfile');

module.exports = {
  context: path.resolve(__dirname, '../src/main/webapp/src/js'),
  entry: {
    app: ['./shop.js',
          './shop-signup.js',
          './shop-creditcard.js',
          './shop-cart.js',
          './shop-cart-backbone.js',
          './shop-checkout-without-starter.js',
          './shop-cart-helpers.js'
        ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'shop-checkout.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port:9000,
    setup: function(app) {

      app.post('/*', function (req, res) {
         console.log("===="+req.originalUrl);

         var outputFolder = path.resolve(__dirname, './dist');
         var outputFile = path.join(outputFolder,req.originalUrl);
         console.log(jsonFile.readFileSync(outputFile));
         res.send(jsonFile.readFileSync(outputFile));
        //res.redirect("http://127.0.0.1:9000/"+req.originalUrl);
      });

    },
  }
};
