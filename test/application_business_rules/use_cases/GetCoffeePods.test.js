
const GetCoffeePods = require('../../../lib/application_business_rules/use_cases/GetCoffeePods');
const CoffeePod = require('../../../lib/enterprise_business_rules/entities/CoffeePod');
const CoffeePodRepository = require('../../../lib/application_business_rules/repositories/CoffeePodRepository');
const mockCoffeePodRepository = new CoffeePodRepository();
test('should return 10 results for all large Pods', async () => {
    // given
    const productType = 'COFFEE_POD_LARGE';
    const size = null;
    const flavor = null;
    const mockData = [
        {
            "code": "CP101",
            "productTypeCode": "COFFEE_POD_LARGE",
            "packSizeCode": "1_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_VANILLA",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "1 dozen (12)"
            },
            "coffeeFlavor": {
                "name": "vanilla"
            },
            "productType": {
                "name": "large coffee pod"
            }
        },
        {
            "code": "CP103",
            "productTypeCode": "COFFEE_POD_LARGE",
            "packSizeCode": "3_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_VANILLA",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "3 dozen (36)"
            },
            "coffeeFlavor": {
                "name": "vanilla"
            },
            "productType": {
                "name": "large coffee pod"
            }
        },
        {
            "code": "CP111",
            "productTypeCode": "COFFEE_POD_LARGE",
            "packSizeCode": "1_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_CARAMEL",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "1 dozen (12)"
            },
            "coffeeFlavor": {
                "name": "caramel"
            },
            "productType": {
                "name": "large coffee pod"
            }
        },
        {
            "code": "CP113",
            "productTypeCode": "COFFEE_POD_LARGE",
            "packSizeCode": "3_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_CARAMEL",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "3 dozen (36)"
            },
            "coffeeFlavor": {
                "name": "caramel"
            },
            "productType": {
                "name": "large coffee pod"
            }
        },
        {
            "code": "CP121",
            "productTypeCode": "COFFEE_POD_LARGE",
            "packSizeCode": "1_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_PSL",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "1 dozen (12)"
            },
            "coffeeFlavor": {
                "name": "psl"
            },
            "productType": {
                "name": "large coffee pod"
            }
        },
        {
            "code": "CP123",
            "productTypeCode": "COFFEE_POD_LARGE",
            "packSizeCode": "3_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_PSL",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "3 dozen (36)"
            },
            "coffeeFlavor": {
                "name": "psl"
            },
            "productType": {
                "name": "large coffee pod"
            }
        },
        {
            "code": "CP131",
            "productTypeCode": "COFFEE_POD_LARGE",
            "packSizeCode": "1_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_MOCHA",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "1 dozen (12)"
            },
            "coffeeFlavor": {
                "name": "mocha"
            },
            "productType": {
                "name": "large coffee pod"
            }
        },
        {
            "code": "CP133",
            "productTypeCode": "COFFEE_POD_LARGE",
            "packSizeCode": "3_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_MOCHA",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "3 dozen (36)"
            },
            "coffeeFlavor": {
                "name": "mocha"
            },
            "productType": {
                "name": "large coffee pod"
            }
        },
        {
            "code": "CP141",
            "productTypeCode": "COFFEE_POD_LARGE",
            "packSizeCode": "1_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_HAZELNUT",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "1 dozen (12)"
            },
            "coffeeFlavor": {
                "name": "hazelnut"
            },
            "productType": {
                "name": "large coffee pod"
            }
        },
        {
            "code": "CP143",
            "productTypeCode": "COFFEE_POD_LARGE",
            "packSizeCode": "3_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_HAZELNUT",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "3 dozen (36)"
            },
            "coffeeFlavor": {
                "name": "hazelnut"
            },
            "productType": {
                "name": "large coffee pod"
            }
        }
    ];

    mockCoffeePodRepository.getcoffeePod = jest.fn(() => mockData);
    // when
    const result = await GetCoffeePods(productType, size, flavor, { coffeePodRepository: mockCoffeePodRepository });

    // then    
    expect(result.length).toEqual(10);
    expect(result[0].code).toEqual('CP101');
    expect(result[1].code).toEqual('CP103');
    expect(result[2].code).toEqual('CP111');
    expect(result[3].code).toEqual('CP113');
    expect(result[4].code).toEqual('CP121');
    expect(result[5].code).toEqual('CP123');
    expect(result[6].code).toEqual('CP131');
    expect(result[7].code).toEqual('CP133');
    expect(result[8].code).toEqual('CP141');
    expect(result[9].code).toEqual('CP143');

});

test('should return 3 results for all espresso vanilla pods', async () => {
    // given
    const productType = 'ESPRESSO_POD';
    const size = null;
    const flavor = 'COFFEE_FLAVOR_VANILLA';
    const mockData = [
        {
            "code": "EP003",
            "productTypeCode": "ESPRESSO_POD",
            "packSizeCode": "3_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_VANILLA",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "3 dozen (36)"
            },
            "coffeeFlavor": {
                "name": "vanilla"
            },
            "productType": {
                "name": "espresso pod"
            }
        },
        {
            "code": "EP005",
            "productTypeCode": "ESPRESSO_POD",
            "packSizeCode": "5_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_VANILLA",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "5 dozen (60)"
            },
            "coffeeFlavor": {
                "name": "vanilla"
            },
            "productType": {
                "name": "espresso pod"
            }
        },
        {
            "code": "EP007",
            "productTypeCode": "ESPRESSO_POD",
            "packSizeCode": "7_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_VANILLA",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "7 dozen (84)"
            },
            "coffeeFlavor": {
                "name": "vanilla"
            },
            "productType": {
                "name": "espresso pod"
            }
        }
    ];

    mockCoffeePodRepository.getcoffeePod = jest.fn(() => mockData);
    // when
    const result = await GetCoffeePods(productType, size, flavor, { coffeePodRepository: mockCoffeePodRepository });

    // then    
    expect(result.length).toEqual(3);
    expect(result[0].code).toEqual('EP003');
    expect(result[1].code).toEqual('EP005');
    expect(result[2].code).toEqual('EP007');

});

test('should return 10 results for all small Pods', async () => {
    // given
    const productType = 'COFFEE_POD_SMALL';
    const size = null;
    const flavor = null;
    const mockData = [
        {
            "code": "CP001",
            "productTypeCode": "COFFEE_POD_SMALL",
            "packSizeCode": "1_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_VANILLA",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "1 dozen (12)"
            },
            "coffeeFlavor": {
                "name": "vanilla"
            },
            "productType": {
                "name": "small coffee pod"
            }
        },
        {
            "code": "CP003",
            "productTypeCode": "COFFEE_POD_SMALL",
            "packSizeCode": "3_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_VANILLA",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "3 dozen (36)"
            },
            "coffeeFlavor": {
                "name": "vanilla"
            },
            "productType": {
                "name": "small coffee pod"
            }
        },
        {
            "code": "CP011",
            "productTypeCode": "COFFEE_POD_SMALL",
            "packSizeCode": "1_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_CARAMEL",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "1 dozen (12)"
            },
            "coffeeFlavor": {
                "name": "caramel"
            },
            "productType": {
                "name": "small coffee pod"
            }
        },
        {
            "code": "CP013",
            "productTypeCode": "COFFEE_POD_SMALL",
            "packSizeCode": "3_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_CARAMEL",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "3 dozen (36)"
            },
            "coffeeFlavor": {
                "name": "caramel"
            },
            "productType": {
                "name": "small coffee pod"
            }
        },
        {
            "code": "CP021",
            "productTypeCode": "COFFEE_POD_SMALL",
            "packSizeCode": "1_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_PSL",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "1 dozen (12)"
            },
            "coffeeFlavor": {
                "name": "psl"
            },
            "productType": {
                "name": "small coffee pod"
            }
        },
        {
            "code": "CP023",
            "productTypeCode": "COFFEE_POD_SMALL",
            "packSizeCode": "3_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_PSL",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "3 dozen (36)"
            },
            "coffeeFlavor": {
                "name": "psl"
            },
            "productType": {
                "name": "small coffee pod"
            }
        },
        {
            "code": "CP031",
            "productTypeCode": "COFFEE_POD_SMALL",
            "packSizeCode": "1_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_MOCHA",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "1 dozen (12)"
            },
            "coffeeFlavor": {
                "name": "mocha"
            },
            "productType": {
                "name": "small coffee pod"
            }
        },
        {
            "code": "CP033",
            "productTypeCode": "COFFEE_POD_SMALL",
            "packSizeCode": "3_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_MOCHA",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "3 dozen (36)"
            },
            "coffeeFlavor": {
                "name": "mocha"
            },
            "productType": {
                "name": "small coffee pod"
            }
        },
        {
            "code": "CP041",
            "productTypeCode": "COFFEE_POD_SMALL",
            "packSizeCode": "1_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_HAZELNUT",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "1 dozen (12)"
            },
            "coffeeFlavor": {
                "name": "hazelnut"
            },
            "productType": {
                "name": "small coffee pod"
            }
        },
        {
            "code": "CP043",
            "productTypeCode": "COFFEE_POD_SMALL",
            "packSizeCode": "3_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_HAZELNUT",
            "createdAt": "2021-01-19T12:19:22.206Z",
            "updatedAt": null,
            "packSize": {
                "name": "3 dozen (36)"
            },
            "coffeeFlavor": {
                "name": "hazelnut"
            },
            "productType": {
                "name": "small coffee pod"
            }
        }
    ];

    mockCoffeePodRepository.getcoffeePod = jest.fn(() => mockData);
    // when
    const result = await GetCoffeePods(productType, size, flavor, { coffeePodRepository: mockCoffeePodRepository });

    // then    
    expect(result.length).toEqual(10);
    expect(result[0].code).toEqual('CP001');
    expect(result[1].code).toEqual('CP003');
    expect(result[2].code).toEqual('CP011');
    expect(result[3].code).toEqual('CP013');
    expect(result[4].code).toEqual('CP021');
    expect(result[5].code).toEqual('CP023');
    expect(result[6].code).toEqual('CP031');
    expect(result[7].code).toEqual('CP033');
    expect(result[8].code).toEqual('CP041');
    expect(result[9].code).toEqual('CP043');

});

test('should return 2 results for All pods sold in 7 dozen packs', async () => {
    // given
    const productType = null;
    const size = '7_dozen';
    const flavor = null;
    const mockData = [
        {
            "code": "EP007",
            "productTypeCode": "ESPRESSO_POD",
            "packSizeCode": "7_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_VANILLA",
            "createdAt": "2021-01-18T22:15:02.413Z",
            "updatedAt": null,
            "packSize": {
                "name": "7 dozen (84)"
            },
            "coffeeFlavor": {
                "name": "vanilla"
            },
            "productType": {
                "name": "espresso pod"
            }
        },
        {
            "code": "EP017",
            "productTypeCode": "ESPRESSO_POD",
            "packSizeCode": "7_dozen",
            "coffeeFlavorCode": "COFFEE_FLAVOR_CARAMEL",
            "createdAt": "2021-01-18T22:15:02.413Z",
            "updatedAt": null,
            "packSize": {
                "name": "7 dozen (84)"
            },
            "coffeeFlavor": {
                "name": "caramel"
            },
            "productType": {
                "name": "espresso pod"
            }
        }
    ];

    mockCoffeePodRepository.getcoffeePod = jest.fn(() => mockData);
    // when
    const result = await GetCoffeePods(productType, size, flavor, { coffeePodRepository: mockCoffeePodRepository });

    // then    
    expect(result.length).toEqual(2);
    expect(result[0].code).toEqual('EP007');
    expect(result[1].code).toEqual('EP017');
});