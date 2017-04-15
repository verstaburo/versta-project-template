const browserSync = require('browser-sync').create;
const debuga = require('debuga');
const gulp = require('gulp');

const bs = browserSync('server');

gulp.task('server', () => (
  bs.init({
    files: ['dist/**/*'],
    open: true,
    reloadOnRestart: true,
    port: 3000,
    snippetOptions: {
      rules: {
        match: /<\/body>/i,
      },
    },
    server: {
      baseDir: [
        'app/static',
        'dist',
      ]
    },
    directory: false,
    middleware: [debuga()],
  })
));
