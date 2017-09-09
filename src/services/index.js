const gigs = require('./gigs/gigs.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(gigs);
};
