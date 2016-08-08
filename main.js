var _ = require('lodash');
var express = require('express');
var session = require('express-session');
var env = process.env.NODE_ENV || 'development';
var redisConfig = require('./server/database/redis-config.json')[env];
var redisStore = require('connect-redis')(session);
var cookieParser = require('cookie-parser');
var redis = require('redis');
var redisClient = redis.createClient();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var local_strategy = require('./server/passport/local-strategy.js');

var app = express();
local_strategy.configure();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('combined'));
app.use(cookieParser());

app.use(session({
  store: new redisStore({ host: redisConfig.host, port: redisConfig.port, client: redisClient, ttl: redisConfig.ttl }),
  secret: 'adfasdfsd*&$43$*(Ggfdgdfgsdfg)',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static('client/dist'));
app.use('/vendors', express.static('node_modules'));
app.use('/javascripts', express.static('client/dist'));
app.use('/stylesheets', express.static('client/dist'));

var controllers_path = './server/controllers/';
_.forEach(['authentication', 'issues', 'users'], function(name) {
  var module = controllers_path + name;
  require(module).register(app);
});

app.listen(3000);
