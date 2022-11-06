'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        category: 'Physical',
      },
      {
        category: 'Special',
      },
      {
        category: 'Status',
      },
      {
        category: 'Unknown',
      },
    ], {})
  },
  down: async (queryInterface) => queryInterface.bulkDelete('categories', null, {}),
};
