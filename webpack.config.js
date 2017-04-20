
const path = require('path');
var glob = require("glob");

module.exports = {
  entry: {
    mainui: glob.sync('./src/main/webapp/src/js/*')
  },
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: '[name].js',
  }
};
