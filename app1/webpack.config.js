var path = require("path");
var webpack = require('webpack')
module.exports = {
  entry: {
    main: './main.jsx',
    vendor: ['react', 'react-dom','jquery'],
  },
  output: {
    path: "./build",
    filename: "[chunkhash].[name].js",
    publicPath: "./build/",
  },
  module: {
    loaders: [
      {
        test: /\.jsx|js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss|css$/,
       loaders: ["style", "css", "sass"]
      },
      {
        test: /\.png|jpg|gif|jpeg$/,
        loader: "url-loader?limit=5000&name=img/[name].[ext]",
        query: 'random=' + new Date().getTime(),
      },
      {
        test: /\.json$/,
        loader: "json"
      }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output:{
        comments:false,
      }
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production'), //production & development,
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename:"[chunkhash].vendor.js",
      minChunks: Infinity
    }),

  ]
};