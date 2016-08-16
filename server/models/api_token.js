'use strict';
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('api_token', {
    value: DataTypes.STRING
  });
};
