const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', cb => (
  runSequence('clean', ['styles', 'scripts', 'images', 'icons', 'templates', 'copy'], cb)
));

gulp.task('deploy', () => (
  runSequence('build', 'ghpages')
));

gulp.task('default', () => (
  runSequence('build', ['server', 'watch'])
));
