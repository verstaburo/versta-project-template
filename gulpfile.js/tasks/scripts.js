/* eslint-disable consistent-return */
const gulp = require('gulp');
const statsLogger = require('webpack-stats-logger').default;
const errorHandler = require('gulp-plumber-error-handler');
const webpack = require('webpack');
const scriptsErrorHandler = errorHandler('Error in \'scripts\' task');

function runWebpack(watch = false) {
  return function (callback) {
    const webpackConfig = require('../../webpack.config')(watch); // eslint-disable-line global-require

    return webpack(webpackConfig, (error, stats) => {
      const jsonStats = stats.toJson();
      if (jsonStats.errors.length) {
        jsonStats.errors.forEach(message => {
          scriptsErrorHandler.call({emit() {/* noop */}}, {message});
        });
      }
      statsLogger(error, stats);

      // solve the issue https://github.com/CSSSR/csssr-project-template/issues/169
      if (watch === false) {
        callback();
      }
    });
  };
}

gulp.task('scripts', runWebpack(false));

gulp.task('scripts:watch', runWebpack(true));
