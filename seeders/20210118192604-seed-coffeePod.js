"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "coffeePods",
      [
        {
          code: "CP001",
          productTypeCode: "COFFEE_POD_SMALL",
          packSizeCode: "1_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_VANILLA",
          createdAt: new Date(),
        },
        {
          code: "CP003",
          productTypeCode: "COFFEE_POD_SMALL",
          packSizeCode: "3_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_VANILLA",
          createdAt: new Date(),
        },
        {
          code: "CP011",
          productTypeCode: "COFFEE_POD_SMALL",
          packSizeCode: "1_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_CARAMEL",
          createdAt: new Date(),
        },
        {
          code: "CP013",
          productTypeCode: "COFFEE_POD_SMALL",
          packSizeCode: "3_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_CARAMEL",
          createdAt: new Date(),
        },
        {
          code: "CP021",
          productTypeCode: "COFFEE_POD_SMALL",
          packSizeCode: "1_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_PSL",
          createdAt: new Date(),
        },
        {
          code: "CP023",
          productTypeCode: "COFFEE_POD_SMALL",
          packSizeCode: "3_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_PSL",
          createdAt: new Date(),
        },
        {
          code: "CP031",
          productTypeCode: "COFFEE_POD_SMALL",
          packSizeCode: "1_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_MOCHA",
          createdAt: new Date(),
        },
        {
          code: "CP033",
          productTypeCode: "COFFEE_POD_SMALL",
          packSizeCode: "3_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_MOCHA",
          createdAt: new Date(),
        },
        {
          code: "CP041",
          productTypeCode: "COFFEE_POD_SMALL",
          packSizeCode: "1_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_HAZELNUT",
          createdAt: new Date(),
        },
        {
          code: "CP043",
          productTypeCode: "COFFEE_POD_SMALL",
          packSizeCode: "3_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_HAZELNUT",
          createdAt: new Date(),
        },
        {
          code: "CP101",
          productTypeCode: "COFFEE_POD_LARGE",
          packSizeCode: "1_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_VANILLA",
          createdAt: new Date(),
        },
        {
          code: "CP103",
          productTypeCode: "COFFEE_POD_LARGE",
          packSizeCode: "3_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_VANILLA",
          createdAt: new Date(),
        },
        {
          code: "CP111",
          productTypeCode: "COFFEE_POD_LARGE",
          packSizeCode: "1_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_CARAMEL",
          createdAt: new Date(),
        },
        {
          code: "CP113",
          productTypeCode: "COFFEE_POD_LARGE",
          packSizeCode: "3_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_CARAMEL",
          createdAt: new Date(),
        },
        {
          code: "CP121",
          productTypeCode: "COFFEE_POD_LARGE",
          packSizeCode: "1_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_PSL",
          createdAt: new Date(),
        },
        {
          code: "CP123",
          productTypeCode: "COFFEE_POD_LARGE",
          packSizeCode: "3_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_PSL",
          createdAt: new Date(),
        },
        {
          code: "CP131",
          productTypeCode: "COFFEE_POD_LARGE",
          packSizeCode: "1_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_MOCHA",
          createdAt: new Date(),
        },
        {
          code: "CP133",
          productTypeCode: "COFFEE_POD_LARGE",
          packSizeCode: "3_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_MOCHA",
          createdAt: new Date(),
        },
        {
          code: "CP141",
          productTypeCode: "COFFEE_POD_LARGE",
          packSizeCode: "1_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_HAZELNUT",
          createdAt: new Date(),
        },
        {
          code: "CP143",
          productTypeCode: "COFFEE_POD_LARGE",
          packSizeCode: "3_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_HAZELNUT",
          createdAt: new Date(),
        },
        {
          code: "EP003",
          productTypeCode: "ESPRESSO_POD",
          packSizeCode: "3_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_VANILLA",
          createdAt: new Date(),
        },
        {
          code: "EP005",
          productTypeCode: "ESPRESSO_POD",
          packSizeCode: "5_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_VANILLA",
          createdAt: new Date(),
        },
        {
          code: "EP007",
          productTypeCode: "ESPRESSO_POD",
          packSizeCode: "7_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_VANILLA",
          createdAt: new Date(),
        },
        {
          code: "EP013",
          productTypeCode: "ESPRESSO_POD",
          packSizeCode: "3_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_CARAMEL",
          createdAt: new Date(),
        },
        {
          code: "EP015",
          productTypeCode: "ESPRESSO_POD",
          packSizeCode: "5_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_CARAMEL",
          createdAt: new Date(),
        },
        {
          code: "EP017",
          productTypeCode: "ESPRESSO_POD",
          packSizeCode: "7_dozen",
          coffeeFlavorCode: "COFFEE_FLAVOR_CARAMEL",
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("coffeePods", null, {});
  },
};
