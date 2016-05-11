module.exports = {
  staticPath: '/Users/joe/Codes/spsites/main/src/main/webapp/static',
  proxy: 'https://release191-partner.symphonycommerce.com',
  urlRewriteRules: [{
    match: /static\/templates\/partner\/compose\/directives/g,
    replace: '/templates/partner/compose/directives'
  }],
  htmlRewriteRules: null
};