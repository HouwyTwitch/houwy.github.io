const gulp = require("gulp");
const less = require("gulp-less"); // gрепроцессор Less
const concat = require("gulp-concat"); // объединение файлов в один
const del = require("del"); // очистка указанных директирой перед компиляцией
const gulpIf = require("gulp-if"); // управление потоком gulp`а
const argv = require("yargs").argv; // парсинг аргументов из терминала
const fileInclude = require("gulp-file-include"); // конкатенация html-файлов
const browserSync = require("browser-sync").create(); // локальный сервер

const basePath = "./";

const srcPath = `${basePath}src`;
const distPath = `${basePath}dist`;
const lessFolder = `/less`;
const cssFolder = `/css`;
const fontsFolder = `/fonts`;
const assetsFolder = `/assets`;
const imgFolder = `/img`;
const jsFolder = `/js`;
const vendorsFolder = `/vendors`;
const templateFolder = `/html`;
const publicFolder = `/public`;
const pagesTemplateFolder = `/pages`;
const includeFolder = `/includes`;

const paths = {
  dist: {
    css: `${distPath}${assetsFolder}${cssFolder}/`,
    html: `${distPath}/`,
    static: `${distPath}/`,
  },
  src: {
    less: `${srcPath}${assetsFolder}${lessFolder}/main.less`,
    html: [
      `${srcPath}${templateFolder}${pagesTemplateFolder}/**/*.html`,
      `!${srcPath}${templateFolder}${pagesTemplateFolder}/**/_*.html`,
    ],
    static: `${srcPath}${publicFolder}/**`,
  },
  watch: {
    less: `${srcPath}${assetsFolder}${lessFolder}/**/*.less`,
    html: [
      `${srcPath}${templateFolder}${pagesTemplateFolder}/**/*.html`,
      `${srcPath}${templateFolder}/**/_*.html`,
    ],
  },
};

module.exports = {
  paths, // Full paths
  // Variables path
  srcPath,
  distPath,
  lessFolder,
  cssFolder,
  fontsFolder,
  assetsFolder,
  imgFolder,
  jsFolder,
  vendorsFolder,
  templateFolder,
  publicFolder,
  pagesTemplateFolder,
  includeFolder,
  // Plugins
  gulp,
  browserSync,
  del,
  gulpIf,
  argv,
  less,
  fileInclude,
  concat,
};
