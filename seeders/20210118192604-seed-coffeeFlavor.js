"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "coffeeFlavors",
      [
        {
          name: "vanilla",
          code: "COFFEE_FLAVOR_VANILLA",
        },
        {
          name: "caramel",
          code: "COFFEE_FLAVOR_CARAMEL",
        },
        {
          name: "psl",
          code: "COFFEE_FLAVOR_PSL",
        },
        {
          name: "mocha",
          code: "COFFEE_FLAVOR_MOCHA",
        },
        {
          name: "hazelnut",
          code: "COFFEE_FLAVOR_HAZELNUT",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("coffeeFlavors", null, {});
  },
};
