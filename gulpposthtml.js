var gulp = require("gulp");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");

gulp.task("html", function () {
  return gulp.src("*.html")
    .pipe(posthtml())
    .pipe(gulp.dest("build"));
});

