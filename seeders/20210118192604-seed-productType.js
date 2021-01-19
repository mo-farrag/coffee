"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "productTypes",
      [
        {
          name: "large coffee pod",
          code: "COFFEE_POD_LARGE",
          category: "pod",
        },
        {
          name: "small coffee pod",
          code: "COFFEE_POD_SMALL",
          category: "pod",
        },
        {
          name: "espresso pod",
          code: "ESPRESSO_POD",
          category: "pod",
        },
        {
          name: "large machine",
          code: "COFFEE_MACHINE_LARGE",
          category: "machine",
        },
        {
          name: "small machine",
          code: "COFFEE_MACHINE_SMALL",
          category: "machine",
        },
        {
          name: "espresso machine",
          code: "ESPRESSO_MACHINE",
          category: "machine",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("productTypes", null, {});
  },
};
