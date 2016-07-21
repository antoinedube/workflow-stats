var models = require('../models/index');

var register = function(app) {

  app.get('/users', function(req, res) {
    models.user.findAll({}).then(function(users) {
      res.json({ data: users });
    });
  });

  app.get('/users/:id', function(req, res) {
    models.user.find({ id: req.params.id }).then(function(user) {
      res.json({ data: user });
    });
  });

  app.post('/users', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    models.user.create({ username: username, email: 'abc@company.com' }).then(function(user) {
      user.setPassword(password);
    });
    
    res.json({ data: req.body });
  });
};

module.exports = {
  register: register
};
