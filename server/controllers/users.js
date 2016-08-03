var models = require('../models/index');

var local_strategy = require('../passport/local-strategy.js');

var register = function(app) {

  app.get('/users', local_strategy.isLoggedIn, function(req, res) {
    models.user.findAll({}).then(function(users) {
      res.json({ data: users });
    });
  });

  app.get('/users/:id', local_strategy.isLoggedIn, function(req, res) {
    models.user.find({
      where: { id: req.params.id }
    }).then(function(user) {
      res.json({ data: user });
    });
  });

  app.post('/users', local_strategy.isLoggedIn, function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    var user = models.user.build({ username: username, email: 'abc@company.com' });
    user.setPassword(password);
    user.save().then(function(savedUser) {
      res.json({ data: savedUser });
    });
  });
};

module.exports = {
  register: register
};
