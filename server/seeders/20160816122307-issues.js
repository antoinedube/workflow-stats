'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) { // eslint-disable-line no-unused-vars
    return queryInterface.bulkInsert('issues', [
      {
        content: '{ name: \'something\'}',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        content: '{ name: \'something else\'}',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) { // eslint-disable-line no-unused-vars
    return queryInterface.bulkDelete('issues', null, {});
  }
};
