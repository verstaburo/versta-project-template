const gulp = require('gulp');
const runSequence = require('run-sequence');
const watch = require('gulp-watch');

gulp.task('watch', () => {
  global.isWatching = true;
  watch('app/static/icons/**/*', () => runSequence('icons'));
  watch('app/static/images/**/*', () => runSequence('images'));
  watch('app/static/misc/**/*', () => runSequence('copy'));
  watch(['app/{pages,blocks,components,layouts}/**/*.pug'], () => runSequence('templates'));
  watch(['app/{styles,blocks,components,pages}/**/*.scss'], () => runSequence('styles'));
  watch(['app/data/**/*.json'], () => runSequence('templates'));

  gulp.start('scripts:watch');
});
