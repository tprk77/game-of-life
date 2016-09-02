// Copyright (c) 2016 Tim Perkins

var babelify = require("babelify");
var browserify = require("browserify");
var del = require("del");
var fs = require("fs");
var gulp = require("gulp");
var runSequence = require("run-sequence"); // Sequential Gulp task dependencies!
var source = require('vinyl-source-stream');

gulp.task("default", ["build_dist"]);

gulp.task("build_dist", function (done) {
  runSequence("clean_dist", "copy_html", "build_js", done);
});

gulp.task("clean_dist", function () {
  return del(["dist"]);
});

gulp.task("copy_html", function () {
  return gulp.src("html/game-of-life.html")
    .pipe(gulp.dest("dist"));
});

gulp.task("build_js", function () {
  return browserify({debug: true})
    .transform(babelify)
    .require("src/game-of-life.js", {entry: true})
    .bundle()
    .on("error", function (err) { console.log(err); })
    .pipe(source("game-of-life.js"))
    .pipe(gulp.dest("dist"));
});
