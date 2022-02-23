const { gulp, browserSync, fileInclude, paths } = require("./_variables.js");

const buildHtml = () => {
  return gulp
    .src(paths.src.html)
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "@file",
        indent: true,
      })
    )
    .pipe(gulp.dest(paths.dist.html))
    .pipe(browserSync.reload({ stream: true }));
};

exports.buildHtml = gulp.series(buildHtml);
