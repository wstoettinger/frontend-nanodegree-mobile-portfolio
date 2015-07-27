var gulp = require('gulp'),
  minify = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  rename = require("gulp-rename");

gulp.task('style', function () {
  return gulp.src('web/views/css/style.css')
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('web/views/css/'));
});

gulp.task('mainjs', function () {
  return gulp.src('web/views/js/main.js')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('web/views/js/'));
});

gulp.task('default', function () {
  gulp.run('style');
  gulp.run('mainjs');
});