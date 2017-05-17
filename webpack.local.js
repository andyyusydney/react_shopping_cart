const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
var glob = require("glob");
var webpack = require("webpack");

var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
var express = require('express')
var path = require('path')
var jsonFile = require('jsonfile')


module.exports = function(env) {
  return Merge(CommonConfig, {
    entry: {
        foxtelnow: glob.sync('./src/main/webapp/src/js/*.js')
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
        }
    },
    devtool: 'inline-source-map',
    plugins: [
      // enable HMR globally
      new webpack.HotModuleReplacementPlugin()
    ]

  })
}


var LOCAL_AEM_SERVER = "http://127.0.0.1:4502";
var LOCAL_ASSET_SERVER = "http://127.0.0.1:9000";


var proxy = httpProxy.createProxyServer();

/**
 * This is main access point
 *
 */
http.createServer(function (req, res) {

    var url = req.url;

    if(/.*foxtel-main-ui.js/.test(url)){
        req.url = 'foxtelnow.js';
        proxy.web(req, res, {
          target: LOCAL_ASSET_SERVER
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
           target: LOCAL_ASSET_SERVER
        });
        return;
    }

    if(/\/bin\/secure\.*/.test(url)){
        proxy.web(req, res, {
           target: LOCAL_WEBPACK_SERVER
        });
        return;
    }

    if(/\/bin\/foxtel\/fnsalescontextcheck*/.test(url)){
        proxy.web(req, res, {
           target: LOCAL_ASSET_SERVER
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

