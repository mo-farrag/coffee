"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("coffeePods", {
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productTypeCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      packSizeCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      coffeeFlavorCode: {
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
    return queryInterface.dropTable("coffeePods");
  },
};
