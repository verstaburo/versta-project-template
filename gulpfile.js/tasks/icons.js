const gulp = require('gulp');
const plumber = require('gulp-plumber');
const errorHandler = require('gulp-plumber-error-handler');
const rename = require('gulp-rename');
const svgSymbols = require('gulp-svg-symbols');

gulp.task('icons', () => (
  gulp.src('app/static/icons/**/*.svg')
    .pipe(plumber({ errorHandler: errorHandler('Error in icons task') }))
    .pipe(svgSymbols({
      title: false,
      id: 'icon_%f',
      className: '%f',
      templates: ['default-svg'],
    }))
    .pipe(rename('icon.svg'))
    .pipe(gulp.dest('dist/assets/images/'))
));
