
var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
var express = require('express')
const path = require('path');
var jsonFile = require('jsonfile');

var LOCAL_AEM_SERVER = "http://127.0.0.1:4502";
var LOCAL_ASSET_SERVER = "http://127.0.0.1:9000";

/**
 * This is main access point
 *
 */
http.createServer(function (req, res) {

    var url = req.url;

    if(/.*foxtel-main-ui.js/.test(url)){
        req.url = 'foxtelmainui.js';
        proxy.web(req, res, {
          target: LOCAL_ASSET_SERVER
        });
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
           target: LOCAL_ASSET_SERVER
        });
        return;
    }

    req.url = req.url+"?wcmmode=disabled";
    proxy.web(req, res, {
      target: LOCAL_AEM_SERVER
    });

}).listen(80);


/**
 * This is for local web pack server
 */
var app = express()

app.post('/*', function (req, res) {
    console.log("Retrieving mocked response for :"+req.originalUrl);

    var outputFolder = path.resolve(__dirname, './');
    var outputFile = path.join(outputFolder,req.originalUrl);
    res.send(jsonFile.readFileSync(outputFile));
});

app.listen(9000, function () {
  console.log('Local server for static assets!')
})
