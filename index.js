var bs = require("browser-sync").create();
var scriptsPath = '/Users/joe/Codes/spsites/main/src/main/webapp/static/scripts/';
var distPath = scriptsPath + 'dist/';

bs.init({
  proxy: 'https://www.diamondcandles.com',
  files: distPath + '*',
  middleware: require('serve-static')(scriptsPath),
  rewriteRules: [{
    match: /\/\/d3t9cosyzvu4nc.cloudfront.net\/prod\/bundle\/[\d\.]+\/js\/(lego|sites)(\.gz)?\.js/g,
    replace: "dist/$1.min.js"
  }]
});
