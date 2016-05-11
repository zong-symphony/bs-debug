var config = require('./config');
var urlRewriteRules = config.urlRewriteRules || [];

module.exports = function(req, res, next) {
  var url = req.url;
  urlRewriteRules.forEach(function(rule) {
    url = url.replace(rule.match, rule.replace);
  });
  if (config.debug && req.url !== url) console.log(req.url + ' replaced to ' + url);
  req.url = url;
  next();
};