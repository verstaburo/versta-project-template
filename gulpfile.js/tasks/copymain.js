const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const plumber = require('gulp-plumber');
const errorHandler = require('gulp-plumber-error-handler');

module.exports = () => (
  gulp.src('app/scripts/main.js')
    .pipe(plumber({ errorHandler: errorHandler('Error in copymain task') }))
    .pipe(fileinclude('@@'))
    .pipe(gulp.dest('dist/assets/scripts'))
);
