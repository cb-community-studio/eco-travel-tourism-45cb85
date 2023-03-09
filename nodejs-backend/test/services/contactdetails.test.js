const assert = require('assert');
const app = require('../../src/app');

describe('\'contactdetails\' service', () => {
  it('registered the service', () => {
    const service = app.service('contactdetails');

    assert.ok(service, 'Registered the service (contactdetails)');
  });
});
