var gulp = require('gulp')
var connect = require('gulp-connect')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var react = require('gulp-react');


gulp.task('connect', ['browserify'], function () {
    connect.server({
        root: '',
        host: process.env.IP,
        port: process.env.PORT
    })
});

gulp.task('clean', function () {
  return gulp.src(['js/*.js'], {read: false})
    .pipe(clean());
});

gulp.task('react', ['clean'],  function () {
	return gulp.src(['jsx/*.jsx'])
		.pipe(react())
		.pipe(gulp.dest('js'));
});

gulp.task('concat', ['react'], function() {
  return gulp.src([ 'app.js', 'js/*.js'])
    .pipe(concat({ path: 'toyApp.js'}))
    .pipe(gulp.dest('dest'));
});

gulp.task('browserify', ['concat'], function() {
    // Grabs the app.js file
    return browserify({ entries: 'dest/toyApp.js'})
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('dest'));

});


gulp.task('default', [ 'connect']);