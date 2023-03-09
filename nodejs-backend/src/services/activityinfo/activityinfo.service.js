const { Activityinfo } = require('./activityinfo.class');
const createModel = require('../../models/activityinfo.model');
const hooks = require('./activityinfo.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/activityinfo', new Activityinfo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('activityinfo');

  service.hooks(hooks);
};