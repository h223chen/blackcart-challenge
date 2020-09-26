const Shopify = require("./Shopify");
const WooCommerce = require("./WooCommerce");
const DBService = require("../services/DBService");

class BlackCart {
  constructor() {
    this.__db = new DBService();
    this.__stores = this.__db.getStores();

    // instantiate integrations here, create as many as there are integrations
    // if there are new integrations, just create a new integration class that
    // extends from BaseIntegration
    this.shopify = new Shopify();
    this.woocommerce = new WooCommerce();
  }

  /**
   * Return normalized product information from specified store.
   *
   * Considerations:
   * 	- top level information just includes the product id and name, as well as total inventory of all variations
   * 	- other top level information that might be helpful would be lowest cost of all variations, did not include
   * 	- wouldn't really make sense to include information like item price, weight at top level since these might
   * 		be different based on variation
   * 	- variation weight and prices are objects with fields since it would probably be useful to keep those separate
   * 		instead of cramming into a consolidated string
   * 	- variation options stored as fields names options[1-n] for simplicity ... not all items have color/size/etc
   * 		variations. If I spent more time on it I can probably write a parser that actually goes through and checks
   * 		what fields exist and then include it in a better format like
   * 		options: {
   * 			color: {
   * 				name: 'Green'
   * 			},
   * 			size: {
   * 				name: 'XL'
   * 			}
   * 		}
   * 	- That being said, this is what the data format ended up being
   *
   * BlackCart data format
   * {
   * 		id: Number
   * 		name: String
   * 		inventory: Number - total inventory of all variations
   * 		variations: {
   * 			inventory: inventory amount for this variation
   * 			options[1-n]: String - various attributes that describe the variation
   * 			weight: {
   * 				amount: Number,
   * 				unit: String
   * 			}
   * 			prices: {
   * 				amount: Number,
   * 				currency: String
   * 			}
   * 		}
   * }
   *
   *
   * @param {*} storeId
   */
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
