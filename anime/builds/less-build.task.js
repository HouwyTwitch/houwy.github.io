const {
  gulp,
  browserSync,
  concat,
  less,
  paths,
  // gulpIf,
  // argv,
} = require("./_variables.js");

const distCss = paths.dist.css;

const buildLess = () => {
  return (
    gulp
      .src(paths.src.less)
      // .pipe(
      //   gulpIf(
      //     argv.dev,
      //     sourcemaps.init({
      //       loadMaps: true,
      //     })
      //   )
      // )
      .pipe(less())
      .pipe(concat("style.css"))
      .pipe(gulp.dest(distCss))
      .pipe(
        browserSync.reload({
          stream: true,
        })
      )
  );
};

exports.buildLess = buildLess;
