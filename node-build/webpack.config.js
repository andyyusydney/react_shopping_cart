const path = require('path');
var jsonFile = require('jsonfile');
var httpProxy = require('http-proxy');
var http = require('http');


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
         var outputFolder = path.resolve(__dirname, './dist');
         var outputFile = path.join(outputFolder,req.originalUrl);
         console.log(jsonFile.readFileSync(outputFile));
         res.send(jsonFile.readFileSync(outputFile));
      });

    },
  }
};

//proxy server

var proxy = httpProxy.createProxyServer({});

var assetServer = "http://127.0.0.1:9000";
var aemServer = "http://127.0.0.1:4502";

var mappingRules = [
];

var server = http.createServer(function(req, res) {

  var url = req.url;

  function gotoAssetServer(req,res){
    proxy.web(req, res, {
      target: assetServer
    });
  }

  //foxtel now js and css
  if( /\etc\/designs.*(shop*js)/.test(url)){
    gotoAssetServer(req,res);
    return;
  }

  //ajax calls
  if( /\\bin/.test(url)){
    gotoAssetServer(req,res);
    return;
  }

  //by default,goes to aem
  proxy.web(req, res, {
    target: aemServer
  });
});

console.log("listening on port 5050")
server.listen(80);
