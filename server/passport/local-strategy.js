var models = require('../models/index');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var configure = function() {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      models.user.findOne({
        where: {
          username: username
        }
      }).then(function (user) {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.verifyPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    models.user.findOne({
      where: {
        id: id
      }
    }).then(function(user) {
      done(null, user);
    });
  });
};

var isLoggedIn = function(req, res, next) {
  if (req.user) {
    next();
  }
  else {
    res.json({ 'message': 'User must be logged in' });
  }
};

module.exports = {
  isLoggedIn: isLoggedIn,
  configure: configure
};
