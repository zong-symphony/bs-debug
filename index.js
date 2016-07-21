var bs = require("browser-sync").create();
var config = require('./config');
var path = require('path');

var env = 'production';
if (/\w+-(partner|sites)\.symphonycommerce\.com/.test(config.proxy)) {
	env = 'pod';
} else if ( /\w+-release\.symphonycommerce\.com/.test(config.proxy)) {
	env = 'release';
}
var rewriteFn = function(req, res, match, match1) {
  var output = '/scripts/dist/' + match1 + '.min.js';
  if (config.debug) console.log(match + ' replaced to ' + output);
  return output;
};

var defaultHtmlRewriteRules;
switch(env) {
	case 'pod':
		defaultHtmlRewriteRules = [{
			match: /\/\/symphony-staging\.s3\.amazonaws\.com\/\w+\/bundle\/[\d\.\w-]+\/js\/(lego|sites|compose|manage)(\.gz)?\.js/gi,
			fn: rewriteFn
		}];
		break;
	case 'release':
		defaultHtmlRewriteRules = [{
			match: /\/\/d2g9u4nhe8bb6x.cloudfront.net\/release\/bundle\/[\d\.\w-]+\/js\/(lego|sites|compose|manage)(\.gz)?\.js/gi,
			fn: rewriteFn
		}];
		break;
	case 'production':
		defaultHtmlRewriteRules = [{
			match: /\/\/d3t9cosyzvu4nc.cloudfront.net\/prod\/bundle\/[\d\.]+\/js\/(lego|sites|compose|manage)(\.gz)?\.js/gi,
			fn: rewriteFn
		}];
		break;
	default:
		console.error('Unrecognized `env` value:', env);
}

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
