var api_token_strategy = require('../passport/api-token-strategy.js');
var local_strategy = require('../passport/local-strategy.js');
var models = require('../models/index');

var register = function(app) {
  app.get('/transitions', local_strategy.isLoggedIn, function(req, res) {
    models.transition.findAll({}).then(function(transitions) {
      res.json({ data: transitions });
    });
  });

  app.post('/transitions', api_token_strategy.isTokenValid, function(req, res) {
    models.transition.create({ 'content': JSON.stringify(req.body) }).then(function(createdTransition) {
      res.json({ 'message': 'success', 'issue': createdTransition });
    });
  });
};

module.exports = {
  register: register
};
