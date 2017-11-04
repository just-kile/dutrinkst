const gulp = require('gulp');
const serve = require('gulp-serve');

gulp.task('_serve', serve({
  root: ['./target/assets','./target/page'],
  port: 2999,
}));



