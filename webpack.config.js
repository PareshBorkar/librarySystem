const webpack = require('webpack');
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
  entry: './client/index.js',
  output: {
    path: '/',
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
      template: 'client/index.html'
    })
  ]
};
