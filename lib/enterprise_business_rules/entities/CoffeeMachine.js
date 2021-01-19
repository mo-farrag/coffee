'use strict';

module.exports = class {

    constructor( code, productTypeCode, productModelCode, waterLineCompatible) {
       this.code= code;
       this.productModelCode=productModelCode;
       this.productTypeCode=productTypeCode;
       this.waterLineCompatible=waterLineCompatible;
    }

};