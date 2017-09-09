// Initializes the `gig` service on path `/gig`
const createService = require('feathers-nedb');
const createModel = require('../../models/gig.model');
const hooks = require('./gig.hooks');
const filters = require('./gig.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'gig',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/gig', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('gig');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
