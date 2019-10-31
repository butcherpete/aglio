const gulp = require('gulp');
const webpack = require('webpack-stream');

const sass = require('gulp-sass');
const minifycss = require('gulp-minify-css');
const jade = require('gulp-jade');
const gulpif = require('gulp-if');
const babel = require('gulp-babel');
const yargs = require('yargs');


gulp.task('hello', () => console.log('Hello, World!'));

// gulp.task('default', function() {
//   return gulp.src('src/entry.js')
//     .pipe(webpack({
//       // Any configuration options...
//     }))
//     .pipe(gulp.dest('dist/'));
// });
