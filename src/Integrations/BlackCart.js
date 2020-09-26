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

    console.log(result);
    return result;
  }
}

module.exports = BlackCart;
