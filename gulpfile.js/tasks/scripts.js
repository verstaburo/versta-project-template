/* eslint-disable consistent-return */
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const errorHandler = require('gulp-plumber-error-handler');
const named = require('vinyl-named');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../../webpack.config');
const rename = require('gulp-rename');

const isDebug = process.env.NODE_ENV !== 'production';

gulp.task('scripts', (cb) => {
  let firstBuildReady = false;

  const done = (err) => {
    firstBuildReady = true;

    if (err) {
      return console.error(err); // eslint-disable-line no-console
    }
  };

  return gulp.src('app/scripts/*.js')
    .pipe(plumber({ errorHandler: errorHandler('Error in scripts task') }))
    .pipe(named())
    .pipe(webpackStream(webpackConfig, webpack, done))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/assets/scripts'))
    .on('data', () => {
      if (firstBuildReady && global.isWatching) {
        cb();
      }
    });
});
