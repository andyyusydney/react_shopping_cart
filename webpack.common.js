const path = require('path');
var jsonFile = require('jsonfile');
var http = require('http');
var httpProxy = require('http-proxy');
var glob = require("glob");
var webpack = require("webpack");

module.exports = {
  output: {
    path: path.resolve(__dirname, './src/main/webapp/src/dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: "source-map",
  resolve: {
	// Add '.ts' and '.tsx' as resolvable extensions.
	extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
	  { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
	  {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
	  { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
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
  plugins: [
	new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
  /*
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  },
  */
};

