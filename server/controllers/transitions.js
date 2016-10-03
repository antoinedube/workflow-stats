var apiTokenStrategy = require('../passport/api-token-strategy.js');
var localStrategy = require('../passport/local-strategy.js');
var models = require('../models/index');

var register = function(app) {
  app.get('/transitions', localStrategy.isLoggedIn, function(req, res) {
    models.transition.findAll({}).then(function(transitions) {
      res.json({ data: transitions });
    });
  });

  app.post('/transitions', apiTokenStrategy.isTokenValid, function(req, res) {
    models.transition.create({ 'content': JSON.stringify(req.body) }).then(function(createdTransition) {
      res.json({ 'message': 'success', 'issue': createdTransition });
    });
  });
};

module.exports = {
  register: register
};
