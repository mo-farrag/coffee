'use strict';

const CoffeeController = require('../../interface_adapters/controllers/CoffeeController');

module.exports = {
    name: 'Coffee',
    version: '1.0.0',
    register: async (server) => {

        server.route([           
            {
                method: 'GET',
                path: '/coffee/machine',
                handler: CoffeeController.getMachines,
                options: {
                    description: 'get coffee machines',
                    tags: ['api'],
                },
            },  
            {
                method: 'GET',
                path: '/coffee/pod',
                handler: CoffeeController.getPods,
                options: {
                    description: 'get coffee pods',
                    tags: ['api'],
                },
            },   
        ]);
    }
};