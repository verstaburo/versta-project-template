const gulp = require('gulp');
const plumber = require('gulp-plumber');
const errorHandler = require('gulp-plumber-error-handler');
const gulpIf = require('gulp-if');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const bulkSass = require('gulp-sass-bulk-import');
const rename = require('gulp-rename');
const stylelint = require('stylelint');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const reporter = require('postcss-reporter');
const discardComents = require('postcss-discard-comments');
const scssSyntax = require('postcss-scss');

const isDebug = process.env.NODE_ENV !== 'production';

exports.build = () => (
  gulp.src('app/styles/*.scss')
  .pipe(plumber({
    errorHandler: errorHandler('Error in styles task')
  }))
  .pipe(gulpIf(isDebug, sourcemaps.init()))
  .pipe(bulkSass())
  .pipe(sass())
  .pipe(postcss([autoprefixer({
      grid: 'autoplace',
    }),
    postcssImport(),
    discardComents(),
    cssnano({
      preset: 'default',
    }),
  ]))
  .pipe(gulpIf(isDebug, sourcemaps.write()))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('dist/assets/styles'))
);

exports.lint = () => (
  gulp.src('app/**/*.scss')
  .pipe(postcss([
    stylelint(),
    reporter({
      clearAllMessages: true,
    }),
  ], {
    parser: scssSyntax,
  }))
);
