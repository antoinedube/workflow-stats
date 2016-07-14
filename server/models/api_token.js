'use strict';
module.exports = function(sequelize, DataTypes) {
  var api_token = sequelize.define('api_token', {
    value: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) { // eslint-disable-line no-unused-vars
        api_token.belongsTo(models.user);
      }
    }
  });
  return api_token;
};
