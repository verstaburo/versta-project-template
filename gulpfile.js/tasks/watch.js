const gulp = require('gulp');
const runSequence = require('run-sequence');
const watch = require('gulp-watch');

gulp.task('watch', () => {
  global.isWatching = true;
  watch('app/static/icons/**/*', () => runSequence('icons'));
  watch('app/static/images/**/*', () => runSequence('images'));
  watch('app/static/misc/**/*', () => runSequence('copy'));
  watch(['app/{pages,blocks}/**/*.pug'], () => runSequence('templates'));
  watch(['app/{styles,blocks}/**/*.scss'], () => runSequence('styles'));

  gulp.start('scripts');
});
