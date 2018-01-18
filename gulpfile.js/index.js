const gulp = require('gulp');
const clean = require('./tasks/clean');
const copy = require('./tasks/copy');
const ghpages = require('./tasks/ghpages');
const icons = require('./tasks/icons');
const server = require('./tasks/server');
const images = require('./tasks/images');
const scripts = require('./tasks/scripts');
const styles = require('./tasks/styles');
const templates = require('./tasks/templates');
const copymain = require('./tasks/copymain');
const watch = require('./tasks/watch');

gulp.task('scripts', scripts(false));
gulp.task('scripts:watch', scripts(true));
gulp.task('clean', clean);
gulp.task('copy', copy);
gulp.task('ghpages', ghpages);
gulp.task('images', images);
gulp.task('icons', icons);
gulp.task('styles', styles.build);
gulp.task('templates', templates);
gulp.task('copymain', copymain);
gulp.task('server', server);
gulp.task('watch', watch);

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('styles', 'scripts', 'copymain', 'images', 'icons', 'templates', 'copy'),
));

gulp.task('default', gulp.series(
  'build',
  gulp.parallel('watch', 'scripts:watch', 'server'),
));

gulp.task('deploy', gulp.series('build', 'ghpages'));
