"use strict";

var gulp = require("gulp");
var browserify = require("gulp-browserify");
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var babel = require("gulp-babel");

gulp.task("scripts", ()=>{
    return gulp.src("scripts/**/*.js")
        .pipe(concat("main.js"))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(browserify())
        .pipe(gulp.dest("dest/scripts"));
});


gulp.task("styles", ()=>{
    return gulp.src(["styles/**/*.scss"])
    .pipe(concat('main.css'))
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest("dest/styles"));
});


gulp.task("htmls", ()=>{
    return gulp.src("htmls/**")
        .pipe(gulp.dest("dest"));
});


gulp.task("default", ["scripts", "styles", "htmls"]);
