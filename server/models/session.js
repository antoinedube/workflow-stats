'use strict';
module.exports = function(sequelize, DataTypes) {
  var session = sequelize.define('session', {
    token: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return session;
};