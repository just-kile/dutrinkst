const gulp = require('gulp');
const path = require('path');
const bs = require('browser-sync');
const runSequence = require('run-sequence');

gulp.task('_watch:files', () => {
  gulp.watch(path.resolve(`${__dirname}/../target/rev-manifest.json`), ['html:dev']);
});

gulp.task('_watch', () => {
  runSequence(
    ['_start:bs', '_scripts:watch'],
    'html:dev',
    '_watch:files');
});
gulp.task('_reload', () => {
  console.log('Reload browser-sync');
  bs.reload();
});

gulp.task('_start:bs', () => {
  bs({
    proxy: 'http://localhost:2999',
    open: false,
  });
});
