'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('elements',
    [
      {
        element: 'Bug',
      },
      {
        element: 'Dark',
      },
      {
        element: 'Dragon',
      },
      {
        element: 'Eletric',
      },
      {
        element: 'Fairy',
      },
      {
        element: 'Fighting',
      },
      {
        element: 'Fire',
      },
      {
        element: 'Flying',
      },
      {
        element: 'Ghost',
      },
      {
        element: 'Grass',
      },
      {
        element: 'Ground',
      },
      {
        element: 'Ice',
      },
      {
        element: 'Normal',
      },
      {
        element: 'Poison',
      },
      {
        element: 'Psychic',
      },
      {
        element: 'Rock',
      },
      {
        element: 'Steel',
      },
      {
        element: 'Water',
      },
      {
        element: 'Unknown',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('elements', null, {}),
};