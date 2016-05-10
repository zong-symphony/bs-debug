var urlRewriteRule = require('./config').urlRewriteRule;

module.exports = function(req, res, next) {
  var url = req.url;
  urlRewriteRule.forEach(function(rule) {
    url = url.replace(rule.match, rule.replace);
  });
  req.url = url;
  next();
};