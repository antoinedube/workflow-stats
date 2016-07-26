var models = require('../models/index');

var isTokenValid = function(req, res, next) {
  models.api_token.findOne({
    where: {
      value: req.query.token
    }
  }).then(function(token) {
    if (token) {
      req.token = token;
      next();
    }
    else {
      res.json({ 'message': 'Invalid token'});
    }
  });
};

module.exports = {
  isTokenValid: isTokenValid
};
