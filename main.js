var _ = require('lodash');
var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('combined'));

app.use(session({
  cookie: { secure: true },
  secret: 'adfasdfsd*&$43$*(Ggfdgdfgsdfg)',
  resave: false,
  saveUninitialized: true
}));

require('./server/passport/authentication.js').configure();
app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static('client/templates'));
app.use('/bower_modules', express.static('client/bower_modules'));
app.use('/javascripts', express.static('client/javascripts'));

var controllers_path = './server/controllers/';
_.forEach(['authentication', 'issues', 'users'], function(name) {
  var module = controllers_path + name;
  require(module).register(app);
});

app.listen(3000);
