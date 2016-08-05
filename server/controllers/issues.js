var api_token_strategy = require('../passport/api-token-strategy.js');
var models = require('../models/index');
var logger = require('../logging/index.js');

var register = function(app) {
  app.post('/issues', api_token_strategy.isTokenValid, function(req, res) {
    models.issue.create({ 'content': req.body.title }).then(function(createdIssue) {
      res.json({ 'message': 'success', 'issue': createdIssue });
      logger.sql('SELECT success FROM status;');
    });
  });
};

// https://github.com/winstonjs/winston
// https://github.com/sequelize/sequelize/issues/152  (See very last comment)

module.exports = {
  register: register
};
