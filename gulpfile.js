var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

var paths = {
  images: 'src/**/*'
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm

//圖片minify
/*
gulp.task('minify', function() {
  return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/img'));
});
*/

//剪Avatar大頭用 
var imageResize = require('gulp-image-resize');
gulp.task("parallel", function () {
 return gulp.src("src/**/*.{jpg,png}")
   .pipe(imageResize({ 
     width : 100,
     height : 100,
     crop : true, // CROP !!!
     upscale : false,
     gravity : 'North'
   }))
   .pipe(gulp.dest("dist/img"));
});


// //批次 resize
// var gm = require('gulp-gm');
// gulp.task("gm", function () {
//    gulp.src("src/**/*.{jpg,png,bmp}")
//   .pipe(gm(function (gmfile) {
 
//       return gmfile.resize(260, 260);
 
//     }))
//     .pipe(gulp.dest("dist/img"));
// });


// Rerun the task when a file changes

// The default task (called when you run `gulp` from cli)

//gulp.task('default', ['gm']);

//gulp.task('default', ['minify']);

gulp.task('default', ['parallel']);