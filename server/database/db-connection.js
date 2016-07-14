var sequelize = require('sequelize');
var config = require('./config.json');

var connection = new sequelize(
  config.development.database,
  config.development.username,
  config.development.password
);

module.exports = connection;
