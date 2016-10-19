// Load plugins
var gulp = require('gulp');
		sass = require('gulp-sass');
		autoprefixer = require('gulp-autoprefixer');
		cleancss = require('gulp-clean-css');
		uglify = require('gulp-uglify');
		rename = require('gulp-rename');
		concat = require('gulp-concat');
		imagemin = require('gulp-imagemin');
		notify = require('gulp-notify');
// Default task
gulp.task('default',['sass','scripts','images']);
//Styles
gulp.task('sass',function(){
	return gulp.src('style/default.scss')
		.pipe(sass({style:'expanded'}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('style/'))
		.pipe(rename({suffix:'.min'}))
		.pipe(cleancss())
		.pipe(gulp.dest('style/'))
		.pipe(notify({message:'sass task complete'}));
});
// Scripts
gulp.task('scripts',function(){
	return gulp.src('js/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('js/'))
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('js/'))
		.pipe(notify({message:'scripts task complete'}));
});
// Images
gulp.task('images',function(){
	return gulp.src('images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('images/'))
		.pipe(notify({message:'images task complete'}));
});
// Watch
gulp.task('watch',function(){
	// watch .scss files
	gulp.watch('style/default.scss',['sass']);
	// watch .js files
	gulp.watch('js/default.js',['scripts']);
	// watch image files
	gulp.watch('images/*',['images']);
});