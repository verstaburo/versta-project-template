const browserSync = require('browser-sync').create;
const debuga = require('debuga');
const gulp = require('gulp');

const bs = browserSync('server');

gulp.task('server', () => {
  bs.init({
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
        './dist',
      ],
    },
    directory: false,
    middleware: [debuga()],
  });

  bs.watch('dist/**/*.*').on('change', bs.reload);
});
