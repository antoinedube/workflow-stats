var gulp = require('gulp');
var mocha = require('gulp-mocha');

var client_tests = [
  'client/tests/**/*.test.js'
];

var server_tests = [
  'server/tests/**/*.test.js'
];

var api_tests = [
  'server/tests_api/**/*.test.js'
];

gulp.task('default', ['client-tests', 'server-tests', 'api-tests']);

gulp.task('client-tests', function() {
  return gulp.src(client_tests, { read: false })
             .pipe(mocha({ reporter: 'dot' }));
});

gulp.task('server-tests', function() {
  return gulp.src(server_tests, { read: false })
             .pipe(mocha({ reporter: 'dot' }));
});

gulp.task('api-tests', function() {
  return gulp.src(api_tests, { read: false })
             .pipe(mocha({ reporter: 'dot' }));
});
