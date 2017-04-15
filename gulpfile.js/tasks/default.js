const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', () => (
  runSequence('clean', ['styles', 'scripts', 'images', 'icons', 'templates', 'copy'])
));
