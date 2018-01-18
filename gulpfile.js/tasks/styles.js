const gulp = require('gulp');
const plumber = require('gulp-plumber');
const errorHandler = require('gulp-plumber-error-handler');
const gulpIf = require('gulp-if');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const cssimport = require('gulp-cssimport');
const sourcemaps = require('gulp-sourcemaps');
const bulkSass = require('gulp-sass-bulk-import');
const rename = require('gulp-rename');
const stylelint = require('stylelint');

const isDebug = process.env.NODE_ENV !== 'production';

exports.build = () => (
  gulp.src('app/styles/*.scss')
    .pipe(plumber({ errorHandler: errorHandler('Error in styles task') }))
    .pipe(gulpIf(isDebug, sourcemaps.init()))
    .pipe(bulkSass())
    .pipe(sass())
    .pipe(postcss([
      require('autoprefixer'),
      require('postcss-discard-comments'),
      //require('css-mqpacker'),
    ]))
    .pipe(cssimport())
    .pipe(cssnano({ zIndex: false }))
    .pipe(gulpIf(isDebug, sourcemaps.write()))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/assets/styles'))
);

exports.lint = () => (
  gulp.src('app/**/*.scss')
    .pipe(postcss([
      stylelint(),
      require('postcss-reporter')({
        clearAllMessages: true,
      }),
    ], { syntax: require('postcss-scss') }))
);
