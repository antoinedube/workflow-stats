var models = require('../models/index');

var register = function(app) {
  app.get('/users', function(req, res) {
    models.user.findAll({}).then(function(users) {
      res.json({data: users});
    });
  });

  app.get('/users/:id', function(req, res) {
    models.user.find({id: req.params.id}).then(function(user) {
      res.json({data: user});
    });
  });
};

module.exports = {
  register: register
};
