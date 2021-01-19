'use strict';

const CoffeePod = require('../../enterprise_business_rules/entities/CoffeePod');

module.exports = async (productType, size, flavor, { coffeePodRepository }) => {   
    const coffeePods = await coffeePodRepository.getcoffeePod(productType, size, flavor);    
    return  coffeePods;
  
};
