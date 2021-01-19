"use strict";
module.exports = (sequelize, DataTypes) => {
  var packSize = sequelize.define(
    "packSizes",
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

  return packSize;
};
