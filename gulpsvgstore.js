var gulp = require("gulp");
var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");

gulp.task("sprite", function () {
    return gulp.src("img/icon-*.svg")
      .pipe(svgstore({
        inlineSvg: true
      }))
      .pipe(rename("sprite.svg"))
      .pipe(gulp.dest("img"));
});
