// STEP 4 & 5
/**/
var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
	sass   = require('gulp-ruby-sass');
//
gulp.task('scripts', function(){
	var op= 
    gulp.src('js/*.js')
    .pipe(uglify());
	return op.pipe(gulp.dest('dest/js/'));
});
//
gulp.task('sass', function(){
	var op= sass('./scss/*.scss', {
		style:'expanded'
	}).on('error', console.error.bind(console));
	return op.pipe(gulp.dest('./css/'));
});
//
gulp.task('watch', function(){
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('scss/**/*.scss', ['sass']);
});
gulp.task('default', ['scripts', 'sass', 'watch']);

/**/

// STEP 3
/*
var gulp   = require('gulp'),
    uglify = require('gulp-uglify');
//
gulp.task('scripts', function(){
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dest/js/'));
});
gulp.task('styles', function(){
    console.log('will work on styles');
});
gulp.task('default', ['scripts', 'styles']);
*/
// STEP 2
/*
var gulp= require('gulp'),
	uglify= require('gulp-uglify');
//
gulp.task('default', function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('minjs'));
});
*/
