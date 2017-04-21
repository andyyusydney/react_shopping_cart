
const path = require('path');
var glob = require("glob");
const CleanWebpackPlugin = require('clean-webpack-plugin');
var stylishReporter = require('jshint-loader-stylish')({
});

module.exports = {
    entry: {
        mainui: glob.sync('./src/main/webapp/src/js/*')
    },
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use :[
                    {
                        loader: 'jshint-loader',
                        options: {
                            emitErrors: false,
                            failOnHint: true,
                            reporter : stylishReporter
                        }
                    },
                ]

            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist.js'],{verbose:  true})
    ]
};
