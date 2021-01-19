'use strict';

const db = require('../../frameworks_drivers/database/models');
const CoffeeMachine = require('../../enterprise_business_rules/entities/CoffeeMachine');

module.exports = class {
  constructor() {

  }

  getcoffeeMachine(productType, waterLine) {
    const where ={};
    if (productType) {
      where.productTypeCode = productType ;
    }
    if (waterLine) {
      where.waterLineCompatible = waterLine ;
    }

    const include =  [{
      model: db.productModels,
      attributes: ['name'],
    },
    {
      model: db.productTypes,
      attributes: ['name'],
    }];

        return db.coffeeMachines.findAndCountAll({ where, include });
  }
}