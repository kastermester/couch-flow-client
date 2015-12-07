var gulp = require('gulp');
var path = require('path');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

gulp.task('copy-flow-files', function() {
	gulp.src('src/**/*.js')
		.pipe(rename({
			suffix: '.flow',
		}))
		.pipe(gulp.dest('lib'));
});

gulp.task('clean', function() {
	gulp.src('lib/**/*', { read: false })
		.pipe(clean());
});