var _ = require('lodash');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var localStrategy = require('./server/passport/local-strategy.js');
var logger = require('./server/logging/index.js');
var morgan = require('morgan');
var passport = require('passport');
var redis = require('redis');
var redisClient = redis.createClient();
var redisConfig = require('./server/database/redis-config.json');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var models = require('./server/models/index.js');

var app = express();
localStrategy.configure();

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

// Test PG and redis connections
models.sequelize.authenticate()
  .catch(function(error) {
    logger.error(error);
  });

redisClient.on('error', logger.error);

app.listen(3000);
