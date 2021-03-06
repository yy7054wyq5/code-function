var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var bs = require('browser-sync').create();
var ts = require('typescript');

gulp.task('dev', ['less'], function () {
  bs.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(['src/**/*.less'], ['less']);
  gulp.watch('index.html').on('change', bs.reload);
});

gulp.task('less', function () {
  return gulp.src('src/**/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist'))
    .pipe(bs.stream());
});