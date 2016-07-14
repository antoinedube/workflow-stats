'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) { // eslint-disable-line no-unused-vars
    return queryInterface.bulkInsert('api_tokens', [
      {
        value: 'abcdefghijklmnopqrstuvwxyz',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userId: 1
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) { // eslint-disable-line no-unused-vars
    return queryInterface.bulkDelete('api_tokens', null, {});
  }
};
