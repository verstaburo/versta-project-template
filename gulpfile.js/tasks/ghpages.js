const gulp = require('gulp');
const ghpages = require('gulp-gh-pages');

module.exports = () => gulp.src('dist/**/*').pipe(ghpages());
