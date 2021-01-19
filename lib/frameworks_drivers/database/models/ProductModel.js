"use strict";
module.exports = (sequelize, DataTypes) => {
  var productModel = sequelize.define(
    "productModels",
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
    },
    {}
  );

  return productModel;
};
