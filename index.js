var bs = require("browser-sync").create();
var config = require('./config');
var path = require('path');

var isPod = /\w+-(partner|sites)\.symphonycommerce\.com/.test(config.proxy);
var rewriteFn = function(req, res, match, match1) {
  var output = '/scripts/dist/' + match1 + '.min.js';
  if (config.debug) console.log(match + ' replaced to ' + output);
  return output;
};
var defaultHtmlRewriteRules = isPod ? [{
  match: /\/\/symphony-staging\.s3\.amazonaws\.com\/\w+\/bundle\/[\d\.\w-]+\/js\/(lego|sites|compose|manage)(\.gz)?\.js/gi,
  fn: rewriteFn
}] : [{
  match: /\/\/d3t9cosyzvu4nc.cloudfront.net\/prod\/bundle\/[\d\.]+\/js\/(lego|sites|compose|manage)(\.gz)?\.js/gi,
  fn: rewriteFn
}];
var rewriteRules = config.htmlRewriteRules || defaultHtmlRewriteRules;

bs.init({
  proxy: config.proxy,
  files: path.join(config.staticPath, 'scripts/dist') + '/*',
  middleware: [
    require('./url-rewrite'),
    require('serve-static')(config.staticPath)
  ],
  rewriteRules: rewriteRules
});