const axois = require("axios");
const Config = require("../../config/dev"); // in prod this should be dynamic ..

class Service {
  constructor() {}

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
