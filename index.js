var bs = require("browser-sync").create();
var config = require('./config');
var path = require('path');

bs.init({
  proxy: config.proxy,
  files: path.join(config.scriptsPath, 'dist') + '/*',
  middleware: require('serve-static')(config.scriptsPath),
  rewriteRules: [{
    match: /\/\/d3t9cosyzvu4nc.cloudfront.net\/prod\/bundle\/[\d\.]+\/js\/(lego|sites)(\.gz)?\.js/g,
    replace: "dist/$1.min.js"
  }]
});
