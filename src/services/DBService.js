const Config = require("../../config/dev"); // in prod this should be dynamic ..
const Service = require("./Service");

class DBService extends Service {
  constructor() {
    super();
  }

  getStores() {
    return super.get(Config.dbStoresUrl);
  }
}

module.exports = DBService;
