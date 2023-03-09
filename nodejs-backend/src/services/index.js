const users = require("./users/users.service.js");
const personaldetails = require("./personaldetails/personaldetails.service.js");
const contactdetails = require("./contactdetails/contactdetails.service.js");
const tourpackages = require("./tourpackages/tourpackages.service.js");
const activityinfo = require("./activityinfo/activityinfo.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(personaldetails);
  app.configure(contactdetails);
  app.configure(tourpackages);
  app.configure(activityinfo);
  // ~cb-add-configure-service-name~
};
