// eslint-disable-next-line no-unused-vars

//to add authentication
const restAuth = require("@feathersjs/express");

module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.

  //data url to post hello world msg
  app.get("/data", restAuth.authenticate("jwt"), (req, res) => {
    res.json({ message: "Hello World" });
  });
};
