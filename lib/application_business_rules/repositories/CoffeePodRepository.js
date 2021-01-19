'use strict';

const db = require('../../frameworks_drivers/database/models');
const CoffeePod = require('../../enterprise_business_rules/entities/CoffeePod');

module.exports = class {
  constructor() {

  }

  getcoffeePod(productType, size, flavor) {
    const where ={};
    if (productType) {
      where.productTypeCode = productType ;
    }
    if (flavor) {
      where.coffeeFlavorCode = flavor ;
    }
    if (size) {
      where.packSizeCode = size ;
    }

    const include =  [{
        model: db.packSizes,
        attributes: ['name'],
      },{
        model: db.coffeeFlavors,
        attributes: ['name'],
      },{
        model: db.productTypes,
        attributes: ['name'],
      }];

    return db.coffeePods.findAndCountAll({ where, include });
  }
}