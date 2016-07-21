module.exports = {
  // change this to your own path
  staticPath: '/Users/joe/Codes/spsites/main/src/main/webapp/static',
  // change this to your own proxy site
  proxy: 'https://manage.symphonycommerce.com',

  // if you need some customized proxy
  urlRewriteRules: [{
    match: /static\/templates\/partner\/compose\/directives/g,
    replace: '/templates/partner/compose/directives'
  }],
  // show rewrite rules log
  debug: true,
  // if htmlRewriteRules is null, it will use default rewriteRules
  htmlRewriteRules: null
};
