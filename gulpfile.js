const gulp = require('gulp');
// const webpack = require('webpack-stream');
const pugLinter = require('gulp-pug-linter');
const pugLintStylish = require('puglint-stylish');

const sass = require('gulp-sass');
const gulpif = require('gulp-if');
const babel = require('gulp-babel');
const yargs = require('yargs');
const grunt = require('grunt');

grunt.initConfig({
    copy: {
        main: {
            src: 'src/*',
            dest: 'dest/'
        }
    }
});

grunt.loadNpmTasks('grunt-contrib-copy');

gulp.task('copy', function (done) {
    grunt.tasks(
        ['copy:main'],    //you can add more grunt tasks in this array
        {gruntfile: false}, //don't look for a Gruntfile - there is none. :-)
        function () {done();}
    );
});


gulp.task('lint:template', () => (
  gulp
    .src('./**/*.jade')
    .pipe(pugLinter({ reporter: pugLintStylish }))
    .pipe(pugLinter({ failAtError:true }))
));

