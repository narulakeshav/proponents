/**
 * External Dependencies
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * Webpack Configuration
 */
module.exports = {
  // Entry point
  entry: [
  // 'webpack-dev-server/client?http://localhost:3000', // serve on port 3000
  'webpack/hot/dev-server', // use hot dev-server
  './src/index.jsx' // entry of index.jsx file
  ],
  // Output
  output: {
  path: path.join(__dirname, 'dist'), // dist is the build folder
  filename: 'bundle.js', // output name of file
  publicPath: '/', // root path
  },
  // file Rules
  module: {
  rules: [
    {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
    },
    {
    test: /\.(png|.jpg|.jpeg|svg)$/,
    loader: 'file-loader',
    }, {
    test: /\.json$/,
    loader: 'json-loader'
    }
  ]
  },
  // Development Server
  target: 'web',
  devtool: 'inline-source-map', // inline source map
  devServer: {
  port: 3000, // specify port
  open: true, // open in browswer automatically
  historyApiFallback: true, // HTML history manipulation
  contentBase: path.join(__dirname, 'public'), // serve static files from public
  watchContentBase: true, // watches files from content base
  hotOnly: true,
  },
  // Plugins
  plugins: [
  new CleanWebpackPlugin([ 'dist' ]), // cleans dist folder before building
  new HtmlWebpackPlugin({
    template: './public/index.html' // serves Webpack bundles in html
  }),
  new webpack.HotModuleReplacementPlugin(),
  ],
  // Resolve extensions
  resolve: {
  extensions: [ '.js', '.jsx' ]
  }
};
