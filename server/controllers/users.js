var models = require('../models/index');
var apiTokenStrategy = require('../passport/api-token-strategy.js');
var localStrategy = require('../passport/local-strategy.js');

var register = function(app) {
  app.get('/users', localStrategy.isLoggedIn, function(req, res) {
    models.user.findAll({}).then(function(users) {
      res.json({ data: users });
    });
  });

  app.get('/users/:id', localStrategy.isLoggedIn, function(req, res) {
    models.user.find({
      where: { id: req.params.id }
    }).then(function(user) {
      res.json({ data: user });
    });
  });

  app.post('/users', apiTokenStrategy.isTokenValid, function(req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    var user = models.user.build({ username: username, email: email });
    user.setPassword(password);
    user.save().then(function(savedUser) {
      res.json({ data: savedUser });
    });
  });
};

module.exports = {
  register: register
};
