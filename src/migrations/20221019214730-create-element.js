'use strict';

module.exports = {
  up: async  (queryInterface, Sequelize) => queryInterface.createTable('elements', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    element: {
      allowNull: false,
      type: Sequelize.STRING
    },
  }),
  down: async (queryInterface) => queryInterface.dropTable('elements'),
};
