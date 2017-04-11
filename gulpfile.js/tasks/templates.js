const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const errorHandler = require('gulp-plumber-error-handler');
const cached = require('gulp-cached');
const prettify = require('gulp-jsbeautifier');
const filter = require('gulp-filter');
const rename = require('gulp-rename');

// TODO add pug inheritance in watch mode
// TODO add static hash to assets in production mode

gulp.task('templates', () => (
  gulp.src('app/**/*.pug')
    .pipe(plumber({ errorHandler: errorHandler('Error in templates task') }))
    .pipe(cached('pug'))
    .pipe(filter(file => /app[\\\/]pages/.test(file.path))) // eslint-disable-line no-useless-escape
    .pipe(pug())
    .pipe(prettify({
      braceStyle: 'expand',
      indentWithTabs: true,
      indentInnerHtml: true,
      preserveNewlines: true,
      endWithNewline: true,
      wrapLineLength: 120,
      maxPreserveNewlines: 50,
      wrapAttributesIndentSize: 1,
      unformatted: ['use'],
    }))
    .pipe(rename({ dirname: '.' }))
    .pipe(gulp.dest('dist'))
));

