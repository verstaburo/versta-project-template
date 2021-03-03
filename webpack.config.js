const webpack = require('webpack');
const path = require('path');

const isDebug = process.env.NODE_ENV !== 'production';

module.exports = (watch = false) => ({
  entry: path.resolve('./app/scripts/app.js'),
  output: {
    publicPath: '/assets/scripts/',
    filename: 'app.min.js',
    path: path.resolve('./dist/assets/scripts/'),
  },
  watch: isDebug,
  mode: isDebug ? 'development' : 'production',
  module: {
    rules: [{
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  }
});
