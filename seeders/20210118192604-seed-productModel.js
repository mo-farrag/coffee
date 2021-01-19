"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "productModels",
      [
        {
          name: "base model",
          code: "base",
        },
        {
          name: "premium model",
          code: "premium",
        },
        {
          name: "deluxe model",
          code: "deluxe",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("productModels", null, {});
  },
};
