const webpack = require('webpack');

const isDebug = process.env.NODE_ENV !== 'production';

module.exports = (watch = false) => ({
  output: {
    publicPath: '/assets/scripts/',
  },
  watch,
  devtool: isDebug ? 'cheap-module-inline-source-map' : false,
  module: {
    rules: [
      {
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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new webpack.NoErrorsPlugin(),
    !isDebug ? new webpack.optimize.UglifyJsPlugin() : f => f,
  ],
});
