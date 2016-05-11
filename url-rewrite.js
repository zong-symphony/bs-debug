var urlRewriteRules = require('./config').urlRewriteRules || [];

module.exports = function(req, res, next) {
  var url = req.url;
  urlRewriteRules.forEach(function(rule) {
    url = url.replace(rule.match, rule.replace);
  });
  req.url = url;
  next();
};