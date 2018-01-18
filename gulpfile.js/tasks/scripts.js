/* eslint-disable consistent-return */
const statsLogger = require('webpack-stats-logger').default;
const errorHandler = require('gulp-plumber-error-handler');
const webpack = require('webpack');

const scriptsErrorHandler = errorHandler('Error in \'scripts\' task');

module.exports = (watch = false) => {
  return function(callback) { // eslint-disable-line
    const webpackConfig = require('../../webpack.config')(watch); // eslint-disable-line global-require

    return webpack(webpackConfig, (error, stats) => {
      const jsonStats = stats.toJson();
      if (jsonStats.errors.length) {
        jsonStats.errors.forEach((message) => {
          scriptsErrorHandler.call({ emit() { /* noop */ } }, { message });
        });
      }
      statsLogger(error, stats);

      if (watch === false) {
        callback();
      }
    });
  };
};
