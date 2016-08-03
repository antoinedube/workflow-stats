var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    instanceMethods: {
      fullName: function() {
        return this.firstName + ' ' + this.lastName;
      },
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
