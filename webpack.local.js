const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
var glob = require("glob");
var webpack = require("webpack");

module.exports = function(env) {
  return Merge(CommonConfig, {
    entry: {
        foxtelnow: glob.sync('./src/main/webapp/src/js/*.js')
    },
    devtool: 'inline-source-map',
    plugins: [
      // enable HMR globally
      new webpack.HotModuleReplacementPlugin()
    ]

  })
}