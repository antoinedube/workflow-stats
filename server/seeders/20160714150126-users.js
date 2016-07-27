'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) { // eslint-disable-line no-unused-vars
    return queryInterface.bulkInsert('users', [
      {
        email: 'bob@company.com',
        username: 'Bob',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) { // eslint-disable-line no-unused-vars
    return queryInterface.bulkDelete('users', null, {});
  }
};
