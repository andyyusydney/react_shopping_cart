const path = require('path');
var jsonFile = require('jsonfile');
var http = require('http');
var httpProxy = require('http-proxy');
var glob = require("glob");

module.exports = {
  entry: {
    foxtelmainui: glob.sync('./src/main/webapp/src/js/*')
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

}).listen(8080);
