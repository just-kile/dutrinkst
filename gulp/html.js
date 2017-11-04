const gulp = require('gulp');
const fs = require('fs');
const handlebars = require('gulp-compile-handlebars');

const ASSETS_BASE_URL = 'https://d3vqkqf75qfaya.cloudfront.net';
const ASSETS_BASE_URL_LOCAL = '';

gulp.task('html', () => {
  const manifest = JSON.parse(fs.readFileSync('./target/rev-manifest.json', 'utf-8'));
  const templateData = {
    cssUrl: `${ASSETS_BASE_URL}/${manifest.app[1]}`,
    jsUrl: `${ASSETS_BASE_URL}/${manifest.app[0]}`,
  };
  return gulp.src('./lib/**/*.html')
    .pipe(handlebars(templateData, {}))
    .pipe(gulp.dest('./target/page'));
});
gulp.task('html:dev', () => {
  const manifest = JSON.parse(fs.readFileSync('./target/rev-manifest.json', 'utf-8'));
  const templateData = {
    cssUrl: `${ASSETS_BASE_URL_LOCAL}/${manifest.app[1]}`,
    jsUrl: `${ASSETS_BASE_URL_LOCAL}/${manifest.app[0]}`,
  };
  return gulp.src('./lib/**/*.html')
    .pipe(handlebars(templateData, {}))
    .pipe(gulp.dest('./target/page'));
});

