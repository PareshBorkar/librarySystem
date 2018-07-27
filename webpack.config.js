const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'app', 'server', 'index.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /.css?$/,
            loader: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.json$/,
            loader: 'json-loader',
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules|bower_components)/,
            query: {
                presets: ['react', 'es2015', 'stage-0', 'stage-3'],
                plugins: ['transform-runtime']
            }
        }]
    }
}