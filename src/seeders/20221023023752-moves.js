'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('moves', [
      {
        id: 1,
        name: "pound",
        type_id: 13,
        category_id: 1,
        accuracy: 100,
        power: 40
      },
      {
        id: 2,
        name: "karate-chop",
        type_id: 6,
        category_id: 1,
        accuracy: 100,
        power: 50
      },
      {
        id: 3,
        name: "double-slap",
        type_id: 13,
        category_id: 1,
        accuracy: 85,
        power: 15
      },
      {
        id: 4,
        name: "comet-punch",
        type_id: 13,
        category_id: 1,
        accuracy: 85,
        power: 18
      },
      {
        id: 5,
        name: "mega-punch",
        type_id: 13,
        category_id: 1,
        accuracy: 85,
        power: 80
      },
      {
        id: 6,
        name: "pay-day",
        type_id: 13,
        category_id: 1,
        accuracy: 100,
        power: 40
      },
      {
        id: 7,
        name: "fire-punch",
        type_id: 7,
        category_id: 1,
        accuracy: 100,
        power: 75
      },
      {
        id: 8,
        name: "ice-punch",
        type_id: 12,
        category_id: 1,
        accuracy: 100,
        power: 75
      },
      {
        id: 9,
        name: "thunder-punch",
        type_id: 4,
        category_id: 1,
        accuracy: 100,
        power: 75
      },
      {
        id: 10,
        name: "scratch",
        type_id: 13,
        category_id: 1,
        accuracy: 100,
        power: 40
      },
      {
        id: 11,
        name: "vice-grip",
        type_id: 13,
        category_id: 1,
        accuracy: 100,
        power: 55
      },
      {
        id: 12,
        name: "guillotine",
        type_id: 13,
        category_id: 1,
        accuracy: 30,
        power: null
      },
      {
        id: 13,
        name: "razor-wind",
        type_id: 13,
        category_id: 2,
        accuracy: 100,
        power: 80
      },
      {
        id: 14,
        name: "swords-dance",
        type_id: 13,
        category_id: 3,
        accuracy: null,
        power: null
      },
      {
        id: 15,
        name: "cut",
        type_id: 13,
        category_id: 1,
        accuracy: 95,
        power: 50
      },
      {
        id: 16,
        name: "gust",
        type_id: 8,
        category_id: 2,
        accuracy: 100,
        power: 40
      },
      {
        id: 17,
        name: "wing-attack",
        type_id: 8,
        category_id: 1,
        accuracy: 100,
        power: 60
      },
      {
        id: 18,
        name: "whirlwind",
        type_id: 13,
        category_id: 3,
        accuracy: null,
        power: null
      },
      {
        id: 19,
        name: "fly",
        type_id: 8,
        category_id: 1,
        accuracy: 95,
        power: 90
      },
      {
        id: 20,
        name: "bind",
        type_id: 13,
        category_id: 1,
        accuracy: 85,
        power: 15
      },
      {
        id: 21,
        name: "slam",
        type_id: 13,
        category_id: 1,
        accuracy: 75,
        power: 80
      },
      {
        id: 22,
        name: "vine-whip",
        type_id: 10,
        category_id: 1,
        accuracy: 100,
        power: 45
      },
      {
        id: 23,
        name: "stomp",
        type_id: 13,
        category_id: 1,
        accuracy: 100,
        power: 65
      },
      {
        id: 24,
        name: "double-kick",
        type_id: 6,
        category_id: 1,
        accuracy: 100,
        power: 30
      },
      {
        id: 25,
        name: "mega-kick",
        type_id: 13,
        category_id: 1,
        accuracy: 75,
        power: 120
      },
      {
        id: 26,
        name: "jump-kick",
        type_id: 6,
        category_id: 1,
        accuracy: 95,
        power: 100
      },
      {
        id: 27,
        name: "rolling-kick",
        type_id: 6,
        category_id: 1,
        accuracy: 85,
        power: 60
      },
      {
        id: 28,
        name: "sand-attack",
        type_id: 11,
        category_id: 3,
        accuracy: 100,
        power: null
      },
      {
        id: 29,
        name: "headbutt",
        type_id: 13,
        category_id: 1,
        accuracy: 100,
        power: 70
      },
      {
        id: 30,
        name: "horn-attack",
        type_id: 13,
        category_id: 1,
        accuracy: 100,
        power: 65
      }
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('moves', null, {});
  }
};
