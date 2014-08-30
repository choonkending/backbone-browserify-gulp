var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


gulp.task('markup', function () {
	return gulp.src('index.html')
		.pipe(gulp.dest('dist'));
});

// concat and minify backbone, underscore, jquery
gulp.task('base', function () {
	return gulp.src(['./src/js/libs/!(backbone)*.js', './src/js/libs/backbone.js'])
		.pipe(concat('base.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('scripts', function () {
	return browserify('./src/js/app.js')
		.transform('hbsfy')
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('dist'));
});

// build task copies the index.html and browserify s scripts, and minifies libs for production
gulp.task('build', ['markup', 'base', 'scripts']);

// markup will only be called once during watch
gulp.task('watch', ['markup'], function () {
	var bundler = browserify('./src/js/app.js', watchify.args);

	var bundle = function () {
		return bundler
			.transform('hbsfy')
			.bundle()
			// pass desired file name
			.pipe(source('app.js'))
			.pipe(gulp.dest('dist'));
	};

	bundler = watchify(bundler);
	bundler.on('update', bundle);

	return bundle();
});