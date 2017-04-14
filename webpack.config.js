const path = require('path');
var jsonFile = require('jsonfile');
var http = require('http');
var httpProxy = require('http-proxy');


module.exports = {
  context: path.resolve(__dirname, './src/main/webapp/src/js'),
  entry: {
    shopcheckout: [
            './shop.js',
            './shop-signup.js',
            './shop-creditcard.js',
            './shop-cart.js',
            './shop-cart-backbone.js',
            './shop-checkout-without-starter.js',
            './shop-cart-helpers.js',
            './my-account-home.js',
            './my-account-home-helpers.js'
        ],
    foxtelmainui:[
            './utilities.js',
            './form-floating-label.js',
            './form-progress-bar.js',
            './info-bar.js',
            './credit-card-ui.js',
            './form-validation.js',
            './pack-details.js',
            './session-timeout.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port:9000,
    setup: function(app) {

      app.post('/*', function (req, res) {
         console.log("Retrieving mocked response for :"+req.originalUrl);

         var outputFolder = path.resolve(__dirname, './dist');
         var outputFile = path.join(outputFolder,req.originalUrl);
         res.send(jsonFile.readFileSync(outputFile));
      });

    },
  }
};


var proxy = httpProxy.createProxyServer();


var LOCAL_AEM_SERVER = "http://127.0.0.1:4502";
var LOCAL_WEBPACK_SERVER = "http://127.0.0.1:9000";

/**
 * This is main access point
 *
 */
http.createServer(function (req, res) {

    var url = req.url;

    //quick and dirty redirection rules
    if(/.*shop-checkout.js/.test(url)){
        req.url = 'shopcheckout.js';
        proxy.web(req, res, {
          target: LOCAL_WEBPACK_SERVER
        });
        return;
    }

    if(/.*foxtel-main-ui.js/.test(url)){
        req.url = 'foxtelmainui.js';
        proxy.web(req, res, {
          target: LOCAL_WEBPACK_SERVER
        });
        return;
    }


    if(/\/bin\/foxtel\/now.*/.test(url)){
        proxy.web(req, res, {
           target: LOCAL_WEBPACK_SERVER
        });
        return;
    }

    if(/\/bin\/secure\.*/.test(url)){
        proxy.web(req, res, {
           target: LOCAL_WEBPACK_SERVER
        });
        return;
    }

    req.url = req.url+"?wcmmode=disabled";
    proxy.web(req, res, {
      target: LOCAL_AEM_SERVER
    });

}).listen(80);


