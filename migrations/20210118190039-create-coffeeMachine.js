"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("coffeeMachines", {
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productTypeCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productModelCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      waterLineCompatible: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("coffeeMachines");
  },
};
