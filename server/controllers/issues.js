var api_token_strategy = require('../passport/api-token-strategy.js');

var register = function(app) {
  app.post('/issues', api_token_strategy.isTokenValid, function(req, res) {
    console.log('\n'),
    console.log(req.body);
    console.log('----------------------------------------');
    res.json({ 'message': 'success' });
  });
};

// https://github.com/winstonjs/winston
// https://github.com/sequelize/sequelize/issues/152  (See very last comment)

module.exports = {
  register: register
};
