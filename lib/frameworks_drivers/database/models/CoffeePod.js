"use strict";
module.exports = (sequelize, DataTypes) => {
  var coffeePod = sequelize.define(
    "coffeePods",
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
      packSizeCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coffeeFlavorCode: {
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

  coffeePod.associate = (models) => {
    coffeePod.belongsTo(models.packSizes, { foreignKey: 'packSizeCode' });
    coffeePod.belongsTo(models.productTypes, { foreignKey: 'productTypeCode' });
    coffeePod.belongsTo(models.coffeeFlavors, { foreignKey: 'coffeeFlavorCode' });
  };
  return coffeePod;
};
