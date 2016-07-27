var chai = require('chai');
var models = require('../models/index');
var request = require('request-promise');

describe('Authentication', function() {
  beforeEach(function(done) {
    var user = models.user.build({ username: 'bob', email: 'abc@company.com' });
    user.setPassword('potato');
    user.save().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    models.user.destroy({ where: { username: 'bob' }}).then(function() {
      done();
    });
  });

  it('should accept login request', function(done) {
    request({
      method: 'POST',
      uri: 'http://localhost:3000/login',
      body: { username: 'bob', password: 'potato'},
      json: true,
      resolveWithFullResponse: true
    }).then(function(response) {
      chai.expect(response.statusCode).to.equal(200);
      done();
    }).catch(function() {
      done();
    });
  });
});
