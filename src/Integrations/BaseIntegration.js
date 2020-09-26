/**
 * base class, contains function declarations that should be
 * implemented by child integration classes
 */
class BaseIntegration {
  constructor() {}

  __normalize() {} // reformat data to BlackCart format
  getProducts() {} // return product information from this integrations product endpoint
}

module.exports = BaseIntegration;
