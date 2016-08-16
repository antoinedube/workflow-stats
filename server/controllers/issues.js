var api_token_strategy = require('../passport/api-token-strategy.js');
var local_strategy = require('../passport/local-strategy.js');
var models = require('../models/index');

var register = function(app) {
  app.get('/issues', local_strategy.isLoggedIn, function(req, res) {
    models.issue.findAll({}).then(function(issues) {
      res.json({ data: issues });
    });
  });

  app.post('/issues', api_token_strategy.isTokenValid, function(req, res) {
    models.issue.create({ 'content': JSON.stringify(req.body) }).then(function(createdIssue) {
      res.json({ 'message': 'success', 'issue': createdIssue });
    });
  });
};

module.exports = {
  register: register
};
