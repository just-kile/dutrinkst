const
  gulp = require('gulp'),
  awspublish = require('gulp-awspublish'),
  yaml = require('js-yaml'),
  rename = require('gulp-rename');
const fs = require('fs');

const cfnConfig = yaml.safeLoad(fs.readFileSync(`${__dirname}/../cfn/application-resources-stack.yaml`, 'utf8'));

gulp.task('_aws:deploy:page', () => {
  const publisher = awspublish.create({
    region: cfnConfig.region,
    params: {
      Bucket: cfnConfig.stacks['dutrinkst-page'].parameters.bucketName,
      ACL: 'public-read',
    },
  }, {
    cacheFileName: './deploy-cache',
  });
  const headers = {
    'Cache-Control': 'max-age=60, no-transform, public',
  };

  return gulp.src('./target/page/**/*')
    .pipe(publisher.publish(headers))
    .pipe(awspublish.reporter());
});

