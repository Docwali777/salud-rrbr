const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //create new HTML file from a template in the root file
const VENDOR_LIBS = [
  'react', 'react-dom', 'react-bootstrap', 'react-router-dom', 'bootstrap'
];
const cleanWebpackPlugin = require('clean-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    index: [path.resolve(__dirname, 'src')],
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

module: {
 rules: [
   {
     test: /\.js$/,
     exclude: /node_modules/,
     loader: 'babel-loader'
   },
   {
     test: /\.css/,
     loader: ['style-loader', 'css-loader']
   },
   {
     test: /\.scss/,
     loader: ['style-loader', 'css-loader', 'sass-loader']
   },
   {
     test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)$/,
     use: [
       {
         loader: 'image-webpack-loader',options:{limit: 100000}

       },
       {
         loader: 'url-loader',
         options: {limit: 100000}
       }
     ]
    }
 ]
},
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    port: 3000,
    inline: true
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.bundle.js',
        vendor: ['vendor']
    }),
    new HtmlWebpackPlugin({
      title: 'App',
      template: 'index.html',
      favicon: './images/cute-bear.jpg',
      minify: {
        collapseWhitespace: true,
        html5: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new cleanWebpackPlugin(['build'], {
      root: path.resolve(__dirname),
      verbose: true}),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        },
        sourceMap: true
      }),
    new webpack.ProvidePlugin({
      "window.Tether": "tether",
      jQuery: 'jquery'
    }),
  ]
}
