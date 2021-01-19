
const GetCoffeeMachines = require('../../../lib/application_business_rules/use_cases/GetCoffeeMachines');
const CoffeeMachine = require('../../../lib/enterprise_business_rules/entities/CoffeeMachine');
const CoffeeMachineRepository = require('../../../lib/application_business_rules/repositories/CoffeeMachineRepository');
const mockCoffeeMachineRepository = new CoffeeMachineRepository();
test('should return 3 results for all large machines', async () => {
    // given
    const productType = 'COFFEE_MACHINE_LARGE';
    const waterLine = null;
    const mockData = [
        {
            "code": "CM101",
            "productTypeCode": "COFFEE_MACHINE_LARGE",
            "productModelCode": "base",
            "waterLineCompatible": "false",
            "createdAt": "2021-01-19T12:19:22.199Z",
            "updatedAt": null,
            "productModel": {
                "name": "base model"
            },
            "productType": {
                "name": "large machine"
            }
        },
        {
            "code": "CM102",
            "productTypeCode": "COFFEE_MACHINE_LARGE",
            "productModelCode": "premium",
            "waterLineCompatible": "true",
            "createdAt": "2021-01-19T12:19:22.199Z",
            "updatedAt": null,
            "productModel": {
                "name": "premium model"
            },
            "productType": {
                "name": "large machine"
            }
        },
        {
            "code": "CM103",
            "productTypeCode": "COFFEE_MACHINE_LARGE",
            "productModelCode": "deluxe",
            "waterLineCompatible": "true",
            "createdAt": "2021-01-19T12:19:22.199Z",
            "updatedAt": null,
            "productModel": {
                "name": "deluxe model"
            },
            "productType": {
                "name": "large machine"
            }
        }
    ];

    mockCoffeeMachineRepository.getcoffeeMachine = jest.fn(() => mockData);
    // when
    const result = await GetCoffeeMachines(productType, waterLine, { coffeeMachineRepository: mockCoffeeMachineRepository });

    // then    
    expect(result.length).toEqual(3);
    expect(result[0].code).toEqual('CM101');
    expect(result[1].code).toEqual('CM102');
    expect(result[2].code).toEqual('CM103');
});

test('should return 3 results for all espresso machines', async () => {
    // given
    const productType = 'ESPRESSO_MACHINE';
    const waterLine = null;
    const mockData = [
        {
            "code": "EM001",
            "productTypeCode": "ESPRESSO_MACHINE",
            "productModelCode": "base",
            "waterLineCompatible": "false",
            "createdAt": "2021-01-19T12:19:22.199Z",
            "updatedAt": null,
            "productModel": {
                "name": "base model"
            },
            "productType": {
                "name": "espresso machine"
            }
        },
        {
            "code": "EM002",
            "productTypeCode": "ESPRESSO_MACHINE",
            "productModelCode": "premium",
            "waterLineCompatible": "false",
            "createdAt": "2021-01-19T12:19:22.199Z",
            "updatedAt": null,
            "productModel": {
                "name": "premium model"
            },
            "productType": {
                "name": "espresso machine"
            }
        },
        {
            "code": "EM003",
            "productTypeCode": "ESPRESSO_MACHINE",
            "productModelCode": "deluxe",
            "waterLineCompatible": "true",
            "createdAt": "2021-01-19T12:19:22.199Z",
            "updatedAt": null,
            "productModel": {
                "name": "deluxe model"
            },
            "productType": {
                "name": "espresso machine"
            }
        }
    ];

    mockCoffeeMachineRepository.getcoffeeMachine = jest.fn(() => mockData);
    // when
    const result = await GetCoffeeMachines(productType, waterLine, { coffeeMachineRepository: mockCoffeeMachineRepository });

    // then    
    expect(result.length).toEqual(3);
    expect(result[0].code).toEqual('EM001');
    expect(result[1].code).toEqual('EM002');
    expect(result[2].code).toEqual('EM003');
});