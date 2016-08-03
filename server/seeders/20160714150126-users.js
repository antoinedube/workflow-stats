'use strict';
var bcrypt = require('bcrypt');

module.exports = {
  up: function (queryInterface, Sequelize) { // eslint-disable-line no-unused-vars
    return queryInterface.bulkInsert('users', [
      {
        email: 'aline@company.com',
        username: 'atremblay',
        firstName: 'Alice',
        lastName: 'Tremblay',
        password: bcrypt.hashSync('please', bcrypt.genSaltSync(10)),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        email: 'bob@company.com',
        username: 'bmackenzie',
        firstName: 'Bob',
        lastName: 'Mackenzie',
        password: bcrypt.hashSync('please', bcrypt.genSaltSync(10)),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) { // eslint-disable-line no-unused-vars
    return queryInterface.bulkDelete('users', null, {});
  }
};
