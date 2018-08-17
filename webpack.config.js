const webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const globalCssLoaders = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: true,
    },
  },
];

module.exports = {
  entry: path.resolve(__dirname, 'client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              ['import', { 'libraryName': 'antd', 'libraryDirectory': 'es', 'style': true }]
            ]
          }
        },
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader', options: {
            javascriptEnabled: true
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/index.html')
    })
  ]
};
