const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');

gulp.task('images', () => (
  gulp.src('app/static/images/**/*')
    .pipe(changed('dist/assets/images'))
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'))
));
