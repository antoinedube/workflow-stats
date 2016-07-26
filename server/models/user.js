var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) { // eslint-disable-line no-unused-vars
      }
    },
    instanceMethods: {
      setPassword: function(password) {
        this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
      },
      verifyPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    },
    paranoid: true
  });
  return user;
};
