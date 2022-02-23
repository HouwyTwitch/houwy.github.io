const { src, dest, parallel, series, watch } = require("gulp");

const gulpBuilds = "./builds/";

const { clearDir } = require(`${gulpBuilds}clear.task`);
const { buildLess } = require(`${gulpBuilds}less-build.task`);
const { buildHtml } = require(`${gulpBuilds}html-build.task`);

const { distPath, paths, browserSync } = require(`./builds/_variables`);

const stakeOut = () => {
  watch(paths.watch.html, buildHtml).on("change", browserSync.reload);
  watch(paths.watch.less, buildLess).on("change", browserSync.reload);
};

const serve = () => {
  browserSync.init({
    server: {
      baseDir: distPath,
    },
  });

  stakeOut();
};

const buildAssets = series(clearDir, parallel(buildLess));
const build = series(buildAssets, buildHtml);
const buildProd = series(buildAssets, buildHtml);

exports.clear = clearDir;
// exports.fonts = buildFonts;
exports.approved = build;
exports.build = buildProd;
exports.serve = series(build, serve);
exports.default = series(build, serve);
