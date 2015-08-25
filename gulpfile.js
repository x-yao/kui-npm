'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('css:watch',function(){
    gulp.watch('./src/sass/**/*.scss', ['css']);
})
gulp.task('scss',function(){
	gulp.src(['./src/sass/**/*.scss','!./src/sass/util/*.scss'])
		.pipe(sass().on('error', sass.logError))
    	.pipe(autoprefixer({
            browsers: ['ios 5','android 2.3','ios 7'],
            cascade: false
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('lib'));
})
gulp.task('css',['scss','css:watch']);