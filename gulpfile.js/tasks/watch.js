const gulp = require('gulp');
const runSequence = require('run-sequence');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').get;

const bs = browserSync('server');

gulp.task('watch', () => {
  global.isWatching = true;
  watch('app/static/icons/**/*', () => runSequence('icons', bs.reload) );
  watch('app/static/images/**/*', () => runSequence('images', bs.reload));
  watch('app/static/misc/**/*', () => runSequence('copy', bs.reload));
  watch(['app/{pages,blocks}/**/*.pug'], () => runSequence('templates', bs.reload));
  watch(['app/{styles,blocks}/**/*.scss'], () => runSequence('styles', () => bs.reload('assets/styles/app.min.css')));
});
