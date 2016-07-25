var authentication = require('../passport/authentication.js');

var register = function(app) {
  app.post('/issues', authentication.isTokenValid, function(req, res) {
    console.log('Content: ', req.body);
    res.json({ 'message': 'success' });
  });
};

module.exports = {
  register: register
};
