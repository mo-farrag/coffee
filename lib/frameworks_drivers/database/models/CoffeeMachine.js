"use strict";
module.exports = (sequelize, DataTypes) => {
  var coffeeMachine = sequelize.define(
    "coffeeMachines",
    {
      // attributes
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      productTypeCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productModelCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      waterLineCompatible: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    },
    {}
  );
  coffeeMachine.associate = (models) => {
    coffeeMachine.belongsTo(models.productModels, { foreignKey: 'productModelCode' });
    coffeeMachine.belongsTo(models.productTypes, { foreignKey: 'productTypeCode' });
  };
  return coffeeMachine;
};
