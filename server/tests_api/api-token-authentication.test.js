var chai = require('chai');
var request = require('request-promise');

describe('API-token authentication', function() {
  it('should return valid response with valid token', function(done) {
    request({
      method: 'POST',
      uri: 'http://localhost:3000/issues',
      qs: {
        token: 'ahsdoifausyfoewufhlkdvhxlkjvhasdliaufyoesuiasfhdlkjvz'
      },
      body: { },
      json: true,
      resolveWithFullResponse: true
    }).then(function(response) {
      chai.expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return invalid response with invalid token', function(done) {
    request({
      method: 'POST',
      uri: 'http://localhost:3000/issues',
      qs: {
        token: 'sometokenthatiscertainlynotvalid'
      },
      body: { },
      json: true,
      resolveWithFullResponse: true
    }).catch(function(response) {
      chai.expect(response.statusCode).to.equal(401);
      done();
    });
  });
});
