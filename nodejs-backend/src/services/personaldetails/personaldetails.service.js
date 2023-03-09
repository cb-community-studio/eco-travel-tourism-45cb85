const { Personaldetails } = require('./personaldetails.class');
const createModel = require('../../models/personaldetails.model');
const hooks = require('./personaldetails.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/personaldetails', new Personaldetails(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('personaldetails');

  service.hooks(hooks);
};