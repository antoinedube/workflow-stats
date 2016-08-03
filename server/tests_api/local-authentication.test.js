var chai = require('chai');
var request = require('request-promise');

describe('Username-password authentication', function() {
  it('should return statusCode 200 with valid credentials', function(done) {
    request({
      method: 'POST',
      uri: 'http://localhost:3000/login',
      body: { username: 'bmackenzie', password: 'please'},
      json: true,
      resolveWithFullResponse: true
    }).then(function(response) {
      chai.expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return statusCode 401 with invalid credentials', function(done) {
    request({
      method: 'POST',
      uri: 'http://localhost:3000/login',
      body: { username: 'cdevil', password: 'disrespectful'},
      json: true,
      resolveWithFullResponse: true
    }).catch(function(response) {
      chai.expect(response.statusCode).to.equal(401);
      done();
    });
  });
});
