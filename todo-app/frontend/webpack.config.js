'use strict'

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './www',
    hot: true
  },
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src', 'index')
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: /src/,
        use: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }))
      },
      { 
        test: /\.(woff(2)?|ttf|eot|svg)$/, 
        use: 'url-loader' 
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('css/bundle.css'),
    new HtmlWebpackPlugin({
      template: path.join('src', 'index.html')
    })
  ]
}