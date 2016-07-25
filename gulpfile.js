var gulp = require('gulp');
var mocha = require('gulp-mocha');

var client_tests = [
  'client/tests/**/*.js'
];

var server_tests = [
  'server/tests/**/*.js'
];

gulp.task('default', ['client-tests', 'server-tests']);

gulp.task('client-tests', function() {
  return gulp.src(client_tests, { read: false })
             .pipe(mocha({ reporter: 'dot' }));
});

gulp.task('server-tests', function() {
  return gulp.src(server_tests, { read: false })
             .pipe(mocha({ reporter: 'dot' }));
});
