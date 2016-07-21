var _ = require('lodash');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static('client/templates'));
app.use('/bower_components', express.static('bower_components'));
app.use('/javascripts', express.static('client/javascripts'));

var controllers_path = './server/controllers/';

_.forEach(['users'], function(name) {
  var module = controllers_path + name;
  require(module).register(app);
});

app.listen(3000);
