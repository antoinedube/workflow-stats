'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) { // eslint-disable-line no-unused-vars
    return queryInterface.createTable('transitions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) { // eslint-disable-line no-unused-vars
    return queryInterface.dropTable('transitions');
  }
};
