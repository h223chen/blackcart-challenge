const axois = require("axios");
const Config = require("../../config/dev"); // in prod this should be dynamic ..

/**
 * Abstract base class used to make network calls to various services.
 *
 * This class should be extended and should not be instantiated
 */
class Service {
  constructor() {}

  /**
   * mock returned DB data
   */
  __getFakeDBData() {
    return {
      1: {
        id: 1,
        platform: "shopify",
      },
      2: {
        id: 2,
        platform: "woocommerce",
      },
    };
  }

  /**
   * generic http GET method
   * @param {string} url
   * @returns {Promise}
   */
  get(url) {
    // mocked responses for static data
    // normally they'd be Promise/async but keeping this simple ...
    if (url === Config.dbStoresUrl) {
      return this.__getFakeDBData();
    }

    return axios
      .get(url)
      .then((response) => {
        console.log(response.data.url);
        console.log(response.data.explanation);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = Service;
