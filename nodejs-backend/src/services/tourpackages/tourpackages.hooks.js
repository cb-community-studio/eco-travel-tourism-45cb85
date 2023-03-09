const { authenticate } = require("@feathersjs/authentication").hooks;

const test_beforeAfterHook = require("../../hooks/test_beforeAfterHook");
module.exports = {
  before: {
    //all: [authenticate("jwt")],
    all: [test_beforeAfterHook()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
