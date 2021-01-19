'use strict';

const Boom = require('@hapi/boom');
const CoffeeMachineSerializer = require('../serializers/CoffeeMachineSerializer');
const GetCoffeeMachines = require('../../application_business_rules/use_cases/GetCoffeeMachines');
const GetCoffeePods = require('../../application_business_rules/use_cases/GetCoffeePods');
const CoffeeMachine = require('../../enterprise_business_rules/entities/CoffeeMachine');
const CoffeeMachineRepository = require('../../application_business_rules/repositories/CoffeeMachineRepository');
const CoffeePodRepository = require('../../application_business_rules/repositories/CoffeePodRepository');
const coffeeMachineRepository = new CoffeeMachineRepository();
const coffeePodRepository = new CoffeePodRepository();

module.exports = {

    async getMachines(request) {
        // Input
        const { productType, waterLine } = request.query;
        // Treatment
        const result = await GetCoffeeMachines( productType, waterLine , { coffeeMachineRepository});

        // Output
        return result;
    },

    async getPods(request) {
       // Input
       const { productType, size, flavor } = request.query;
       // Treatment
       const result = await GetCoffeePods( productType, size, flavor , { coffeePodRepository});

        //Output
        return result
    }
};
