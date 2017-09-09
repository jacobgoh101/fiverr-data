const gig = require('./gig/gig.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(gig);
};
