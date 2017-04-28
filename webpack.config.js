const path = require('path');
var jsonFile = require('jsonfile');
var http = require('http');
var httpProxy = require('http-proxy');
var glob = require("glob");
var webpack = require("webpack");

module.exports = {
  entry: {
    foxtelmainui: glob.sync('./src/main/webapp/src/js/*')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/'
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
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader", options: { // translates CSS into CommonJS
            sourceMap: true
          }
        }, {
          loader: "sass-loader", options: { // compiles Sass to CSS
            sourceMap: true
          }
        }]
      },

      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin()
  ]
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

    if(/.*foxtel-main-ui.js/.test(url)){
        req.url = 'foxtelmainui.js';
        proxy.web(req, res, {
          target: LOCAL_WEBPACK_SERVER
        });
        return;
    }

    if(/.*shop-checkout.js/.test(url)){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("");
        return;
    }

    if(/.*foxtel-main-ui.css/.test(url)){
        // Main css will be bundled with js.
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Blank\n");
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

    if(/.*hot-update.json/.test(url)){
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
