const path = require('path')
const webpack = require('webpack')
const html = require('html-webpack-plugin')

module.exports = {
  devServer: {
    compress: true,
    port: process.env.PORT || 3030,
    bonjour: true,
    hot: true,
    open: true,
  },

  entry: path.resolve(__dirname, 'src/main.js'),

  mode: 'development',

  module: {
    rules: [
     {
       test: /\.js$/,
       use: { loader: 'babel-loader' }
     },
     {
       test: /\.pug$/,
       use: { loader: 'pug-loader' }
     },
     {
       test: /\.<%= preprocessor %>$/,
       use: ['style-loader', 'css-loader', '<%= ( preprocessor === "scss" ) ? "sass" : "stylus" %>-loader']
     },
    ]
  },

  plugins: [
    new html({
      template: path.resolve(__dirname, 'views/index.pug')
    })
  ]
}
