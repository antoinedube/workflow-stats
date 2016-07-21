var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) { // eslint-disable-line no-unused-vars
        user.hasMany(models.api_token);
      }
    },
    instanceMethods: {
      setPassword: function(password, done) {
        return bcrypt.genSalt(10, function(err, salt) {
          return bcrypt.hash(password, salt, function(error, encrypted) {
            this.password = encrypted;
            this.salt = salt;
            return done();
          });
        });
      },
      verifyPassword: function(password, done) {
        return bcrypt.compare(password, this.password, function(err, res) {
          return done(err, res);
        });
      }
    },
    paranoid: true
  });
  return user;
};

// https://stackoverflow.com/questions/19433824/using-instance-methods-in-sequelize
