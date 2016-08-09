var api_token_strategy = require('../passport/api-token-strategy.js');
var models = require('../models/index');

var register = function(app) {
  app.post('/issues', api_token_strategy.isTokenValid, function(req, res) {
    models.issue.create({ 'content': req.body.title }).then(function(createdIssue) {
      res.json({ 'message': 'success', 'issue': createdIssue });
    });
  });
};

module.exports = {
  register: register
};
