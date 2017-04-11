const webpack = require('webpack');

const isDebug = process.env.NODE_ENV !== 'production';

module.exports = {
  watch: isDebug,
  devtool: isDebug ? 'cheap-module-inline-source-map' : false,
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new webpack.NoErrorsPlugin(),
    !isDebug ? new webpack.optimize.UglifyJsPlugin() : f => f,
  ]
};
