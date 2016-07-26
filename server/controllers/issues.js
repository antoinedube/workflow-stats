var api_token_strategy = require('../passport/api-token-strategy.js');

var register = function(app) {
  app.post('/issues', api_token_strategy.isTokenValid, function(req, res) {
    console.log('Content: ', req.body);
    res.json({ 'message': 'success' });
  });
};

module.exports = {
  register: register
};
