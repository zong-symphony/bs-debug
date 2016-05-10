module.exports = {
  staticPath: '/Users/joe/Codes/spsites/main/src/main/webapp/static',
  proxy: 'https://manage.symphonycommerce.com',
  urlRewriteRule: [{
    match: /static\/templates\/partner\/compose\/directives/g,
    replace: '/templates/partner/compose/directives'
  }],
  htmlRewriteRule: null
};