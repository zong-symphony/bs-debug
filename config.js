module.exports = {
  staticPath: '/Users/joe/Codes/spsites/main/src/main/webapp/static',
  proxy: 'https://release191-partner.symphonycommerce.com',
  urlRewriteRules: [{
    match: /static\/templates\/partner\/compose\/directives/g,
    replace: '/templates/partner/compose/directives'
  }],
  // if htmlRewriteRules is null, it will use default rewriteRules
  htmlRewriteRules: [{
    match: /\/\/symphony-staging\.s3\.amazonaws\.com\/release191\/bundle\/19\.1-SNAPSHOT\/js\/(lego|sites|compose|manage)(\.gz)?\.js/g,
    replace: "/scripts/dist/$1.min.js"
  }]
};