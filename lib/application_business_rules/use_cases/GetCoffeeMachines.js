'use strict';

const CoffeeMachine = require('../../enterprise_business_rules/entities/CoffeeMachine');

module.exports = async (productType, waterLine, { coffeeMachineRepository }) => {   
    const coffeeMachines = await coffeeMachineRepository.getcoffeeMachine(productType, waterLine);    
    return  coffeeMachines;
  
};
