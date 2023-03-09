const { Tourpackages } = require('./tourpackages.class');
const createModel = require('../../models/tourpackages.model');
const hooks = require('./tourpackages.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tourpackages', new Tourpackages(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tourpackages');

  service.hooks(hooks);
};