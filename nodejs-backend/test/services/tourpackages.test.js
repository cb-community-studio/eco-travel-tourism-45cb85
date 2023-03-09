const assert = require('assert');
const app = require('../../src/app');

describe('\'tourpackages\' service', () => {
  it('registered the service', () => {
    const service = app.service('tourpackages');

    assert.ok(service, 'Registered the service (tourpackages)');
  });
});
