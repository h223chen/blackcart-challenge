const Shopify = require("./Shopify");
const WooCommerce = require("./WooCommerce");
const DBService = require("../services/DBService");

class BlackCart {
  constructor() {
    this.__db = new DBService();
    this.__stores = this.__db.getStores();
    this.shopify = new Shopify();
    this.woocommerce = new WooCommerce();
  }

  __validate(results) {
    var valid = true;
    results.forEach((result) => {
      valid = !!(valid && result.id && result.name && result.inventory != null);

      result.variations.forEach((variation) => {
        valid = !!(
          valid &&
          variation.inventory &&
          variation.weight &&
          variation.price
        );
      });
    });

    return valid;
  }

  getProducts(storeId) {
    let store = this.__stores[storeId];
    let result;

    switch (store.platform) {
      case "shopify":
        result = this.shopify.getProducts();
        break;
      case "woocommerce":
        result = this.woocommerce.getProducts();
        break;
      default:
        return null;
    }

    console.log(this.__validate(result));
    return result;
  }
}

module.exports = BlackCart;
