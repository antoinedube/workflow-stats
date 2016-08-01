var fs = require('fs');
var browserify = require('browserify');
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var client_tests = [
  'client/tests/**/*.test.js'
];

var server_tests = [
  'server/tests/**/*.test.js'
];

var api_tests = [
  'server/tests_api/**/*.test.js'
];

var stylesheets = [
  'client/stylesheets/**/*.scss'
];

gulp.task('default', ['build', 'scss']);
gulp.task('tests', ['client-tests', 'server-tests', 'api-tests']);

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

gulp.task('build', function() {
  return browserify('./client/javascripts/main.jsx')
          .transform('babelify', { presets: ['es2015', 'react'] })
          .bundle()
          .pipe(fs.createWriteStream('./client/dist/application.js'));
});

gulp.task('scss', function () {
  return gulp.src(stylesheets)
             .pipe(sass().on('error', sass.logError))
             .pipe(concat('application.css'))
             .pipe(gulp.dest('./client/dist/'));
});
