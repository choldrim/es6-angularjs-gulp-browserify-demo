"use strict";

var gulp = require("gulp");
var browserify = require("gulp-browserify");
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var babel = require("gulp-babel");


// 转译es6
gulp.task("scripts", ()=>{
    return gulp.src("scripts/**/*.js")
        .pipe(concat("main.js"))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(browserify())
        .pipe(gulp.dest("dest/scripts"));
});


// sass，编译sass
gulp.task("styles", ()=>{
    return gulp.src(["styles/**/*.scss"])
    .pipe(concat('main.css'))
    .pipe(sass({
        outputStyle: 'compressed' // 使用压缩
    }))
    .pipe(gulp.dest("dest/styles"));
});


// htmls（此处只是将html直接无修改的输送到目标目录里面）
gulp.task("htmls", ()=>{
    return gulp.src("htmls/**")
        .pipe(gulp.dest("dest"));
});


// gulp的默认入口
// 第二个参数为运行这个任务前需要运行那些任务
gulp.task("default", ["scripts", "styles", "htmls"]);
