var passport = require('passport');

var register = function(app) {
  app.post('/login',
    passport.authenticate('local'),
    function(req, res) {
      res.json({ 'message': 'Authentication successful' });
    }
  );

  app.post('/logout', function(req, res) {
    req.logout();
    res.json({ 'message': 'Logout successful' });
  });
};

module.exports = {
  register: register
};
