"use strict";
module.exports = (sequelize, DataTypes) => {
  var productType = sequelize.define(
    "productTypes",
    {
      // attributes
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  return productType;
};
