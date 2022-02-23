const { distPath, del } = require("./_variables.js");

const clearDir = () => {
  return del(distPath);
};

exports.clearDir = clearDir;
