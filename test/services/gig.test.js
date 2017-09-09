const assert = require('assert');
const app = require('../../src/app');

describe('\'gig\' service', () => {
  it('registered the service', () => {
    const service = app.service('gig');

    assert.ok(service, 'Registered the service');
  });
});
