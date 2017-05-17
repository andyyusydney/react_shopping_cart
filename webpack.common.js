const path = require('path');
var jsonFile = require('jsonfile');
var http = require('http');
var httpProxy = require('http-proxy');
var glob = require("glob");
var webpack = require("webpack");

module.exports = {
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/'
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
  }
};

