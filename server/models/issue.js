'use strict';
module.exports = function(sequelize, DataTypes) {
  var issue = sequelize.define('issue', {
    content: DataTypes.STRING
  }, {
  });
  return issue;
};
