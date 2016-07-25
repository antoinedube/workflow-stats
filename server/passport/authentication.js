var models = require('../models/index');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var UniqueTokenStrategy = require('passport-unique-token').Strategy;

var configure = function() {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      models.user.findOne({ username: username }).then(function (user) {
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
    models.user.findOne({ id: id }).then(function(user) {
      done(null, user);
    });
  });

  passport.use(new UniqueTokenStrategy(
    function (token, done) {
      models.api_token.findOne({ value: token }, function (err, token) {
        if (err) {
          return done(err);
        }

        if (!token) {
          return done(null, false);
        }

        return done(null, token);
      });
    }
  ));
};

var isTokenValid = function(req, res, next) {
  passport.authenticate('token', function (err, token, info) { // eslint-disable-line no-unused-vars
    if (err) {
      return next(err);
    }

    if (!token) {
      res.status(401).json({message: 'Incorrect token credentials'});
    }

    req.user = token;
    next();
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
  isTokenValid: isTokenValid,
  isLoggedIn: isLoggedIn,
  configure: configure
};
