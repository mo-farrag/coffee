'use strict';

module.exports = class {

    constructor( code, productTypeCode, packSizeCode, coffeeFlavor) {
       this.code= code;
       this.packSizeCode=packSizeCode;
       this.productTypeCode=productTypeCode;
       this.coffeeFlavor=coffeeFlavor;
    }

};