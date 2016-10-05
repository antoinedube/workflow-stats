var models = require('../models/index');
var apiTokenStrategy = require('../passport/api-token-strategy.js');
var localStrategy = require('../passport/local-strategy.js');

function index(req, res) {
  models.user.findAll({}).then(function(users) {
    return res.json({ data: users });
  });
}

function view(req, res) {
  models.user.find({
    where: { id: req.params.id }
  }).then(function(user) {
    return res.json({ data: user });
  });
}

function create(req, res) {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;

  var user = models.user.build({ username: username, email: email });
  user.setPassword(password);
  user.save().then(function(savedUser) {
    return res.json({ data: savedUser });
  });
}

function register(app) {
  app.get('/users', localStrategy.isLoggedIn, index);
  app.get('/users/:id', localStrategy.isLoggedIn, view);
  app.post('/users', apiTokenStrategy.isTokenValid, create);
}

module.exports = {
  register: register
};
