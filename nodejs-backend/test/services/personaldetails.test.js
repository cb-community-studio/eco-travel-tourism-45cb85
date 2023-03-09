const assert = require('assert');
const app = require('../../src/app');

describe('\'personaldetails\' service', () => {
  it('registered the service', () => {
    const service = app.service('personaldetails');

    assert.ok(service, 'Registered the service (personaldetails)');
  });
});
