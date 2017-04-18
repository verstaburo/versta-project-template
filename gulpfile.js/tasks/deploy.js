const gulp = require('gulp');
const ghpages = require('gulp-gh-pages');

gulp.task('deploy', () => (
  gulp.src('dist/**/*')
    .pipe(ghpages())
));
