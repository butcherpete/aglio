const gulp = require('gulp');
// const webpack = require('webpack-stream');
const pugLinter = require('gulp-pug-linter');
const pugLintStylish = require('puglint-stylish');

const sass = require('gulp-sass');
const gulpif = require('gulp-if');
const babel = require('gulp-babel');
const yargs = require('yargs');



gulp.task('lint:template', () => (
  gulp
    .src('./**/*.jade')
    .pipe(pugLinter({ reporter: pugLintStylish }))
    .pipe(pugLinter({ failAtError:true }))
));

// gulp.task('default', function() {
//   return gulp.src('src/entry.js')
//     .pipe(webpack({
//       // Any configuration options...
//     }))
//     .pipe(gulp.dest('dist/'));
// });
