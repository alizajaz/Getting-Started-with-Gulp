const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('message', function() {
return new Promise(function(resolve, reject) {
console.log("gulp is running...");
resolve();
});
});

gulp.task('copyHtml', function () {
  return new Promise(function(resolve, reject) {
  gulp.src('src/*.html')
  .pipe(gulp.dest('shyam'));
  resolve();
  });
});

//Optimize Images
gulp.task('sass', function () {
return new Promise(function(resolve, reject) {
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
    resolve();
    });
});

//

//Minifying JS
gulp.task('minify',function(){
return new Promise(function(resolve, reject) {
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
    resolve();
    });
});


// gulp.task('minify',function(){
gulp.task('sass', function () {
return new Promise(function(resolve, reject) {
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("./css"));
});
      resolve();
});
