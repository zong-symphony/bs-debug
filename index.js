var bs = require("browser-sync").create();
var config = require('./config');
var path = require('path');
var rewriteRules = config.htmlRewriteRules || [{
    match: /\/\/d3t9cosyzvu4nc.cloudfront.net\/prod\/bundle\/[\d\.]+\/js\/(lego|sites|compose|manage)(\.gz)?\.js/g,
    replace: "/scripts/dist/$1.min.js"
  }];

bs.init({
  proxy: config.proxy,
  files: path.join(config.staticPath, 'scripts/dist') + '/*',
  middleware: [
    require('./url-rewrite'),
    require('serve-static')(config.staticPath)
  ],
  rewriteRules: rewriteRules
});
