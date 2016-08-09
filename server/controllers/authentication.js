var passport = require('passport');

var register = function(app) {
  app.post('/login',
    passport.authenticate('local'),
    function(req, res) {
      var userData = req.user.dataValues;
      var returnData = {
        id: userData.id,
        email: userData.email,
        username: userData.username
      };
      res.json({ 'message': 'Authentication successful', 'user': returnData });
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
