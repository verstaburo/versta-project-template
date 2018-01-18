const gulp = require('gulp');
const newer = require('gulp-newer');

module.exports = () => (
    gulp
    .src('app/static/misc/**/*', { since: gulp.lastRun('copy') })
    .pipe(newer('dist'))
    .pipe(gulp.dest('dist'))
);
