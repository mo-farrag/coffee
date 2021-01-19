"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "packSizes",
      [
        {
          name: "1 dozen (12)",
          code: "1_dozen",
        },
        {
          name: "3 dozen (36)",
          code: "3_dozen",
        },
        {
          name: "5 dozen (60)",
          code: "5_dozen",
        },
        {
          name: "7 dozen (84)",
          code: "7_dozen",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("packSizes", null, {});
  },
};
