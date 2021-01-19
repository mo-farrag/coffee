"use strict";
module.exports = (sequelize, DataTypes) => {
  var coffeeFlavor = sequelize.define(
    "coffeeFlavors",
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

  return coffeeFlavor;
};
