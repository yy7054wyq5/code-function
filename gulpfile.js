var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function () {
	gulp.src(['src/**/*.ts'])
		.pipe(tsProject())
		.js.pipe(gulp.dest('build'));
});