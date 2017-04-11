const gulp = require('gulp');
const changed = require('gulp-changed');

gulp.task('copy', () => (
  gulp.src('app/static/misc/**/*')
    .pipe(changed('dist'))
    .pipe(gulp.dest('dist'))
));
