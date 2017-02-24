'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('./src/scss/stylesheet/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        //.pipe(sourcemaps.write('../maps'))
        //.pipe(gulp.dest('./dist/build/static'));
        .pipe(gulp.dest('../../../target/vault-work/jcr_root/etc/designs/foxtel-ui'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});