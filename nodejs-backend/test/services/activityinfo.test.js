const assert = require('assert');
const app = require('../../src/app');

describe('\'activityinfo\' service', () => {
  it('registered the service', () => {
    const service = app.service('activityinfo');

    assert.ok(service, 'Registered the service (activityinfo)');
  });
});
