'use strict';
module.exports = function(sequelize, DataTypes) {
  var api_token = sequelize.define('api_token', {
    value: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) { // eslint-disable-line no-unused-vars
        // associations can be defined here
      }
    }
  });
  return api_token;
};
