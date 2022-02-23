const { gulp, paths } = require("./_variables.js");

const copyStatic = () => {
  return gulp.src(paths.src.static).pipe(gulp.dest(paths.dist.static));
};

exports.copyStatic = copyStatic;
