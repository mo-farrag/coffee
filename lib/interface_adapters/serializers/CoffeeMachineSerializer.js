'use strict';

const _serializeSingleCoffeeMachine = async (coffeeMachine) => {
  return {
    'code': coffeeMachine.code,
    'productTypeCode': coffeeMachine.productTypeCode,
    'productModelCode': coffeeMachine.productModelCode,
    'waterLineCompatible': coffeeMachine.waterLineCompatible,
    //'productModel': coffeeMachine.productModel && coffeeMachine.productModel.name,
    //'productType': coffeeMachine.productType.name,
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleCoffeeMachine);
    }
    return _serializeSingleCoffeeMachine(data);
  }

};