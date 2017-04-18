const gulp = require('gulp');
const ghpages = require('gulp-gh-pages');

gulp.task('ghpages', () => (
  gulp.src('dist/**/*')
    .pipe(ghpages())
));
