"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "coffeeMachines",
      [
        {
          code: "CM001",
          productTypeCode: "COFFEE_MACHINE_SMALL",
          productModelCode: "base",
          waterLineCompatible: 'false',
          createdAt: new Date(),
        },
        {
          code: "CM002",
          productTypeCode: "COFFEE_MACHINE_SMALL",
          productModelCode: "premium",
          waterLineCompatible: 'false',
          createdAt: new Date(),
        },
        {
          code: "CM003",
          productTypeCode: "COFFEE_MACHINE_SMALL",
          productModelCode: "deluxe",
          waterLineCompatible: 'true',
          createdAt: new Date(),
        },
        {
          code: "CM101",
          productTypeCode: "COFFEE_MACHINE_LARGE",
          productModelCode: "base",
          waterLineCompatible: 'false',
          createdAt: new Date(),
        },
        {
          code: "CM102",
          productTypeCode: "COFFEE_MACHINE_LARGE",
          productModelCode: "premium",
          waterLineCompatible: 'true',
          createdAt: new Date(),
        },
        {
          code: "CM103",
          productTypeCode: "COFFEE_MACHINE_LARGE",
          productModelCode: "deluxe",
          waterLineCompatible: 'true',
          createdAt: new Date(),
        },
        {
          code: "EM001",
          productTypeCode: "ESPRESSO_MACHINE",
          productModelCode: "base",
          waterLineCompatible: 'false',
          createdAt: new Date(),
        },
        {
          code: "EM002",
          productTypeCode: "ESPRESSO_MACHINE",
          productModelCode: "premium",
          waterLineCompatible: 'false',
          createdAt: new Date(),
        },
        {
          code: "EM003",
          productTypeCode: "ESPRESSO_MACHINE",
          productModelCode: "deluxe",
          waterLineCompatible: 'true',
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("coffeeMachines", null, {});
  },
};
