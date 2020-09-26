const Config = require("../../config/dev"); // in prod this should be dynamic ..
const Service = require("./Service");

/**
 * Class for communicating with the BlackCart DB
 */
class DBService extends Service {
  constructor() {
    super();
  }

  /**
   * get back stores data from DB
   */
  getStores() {
    return super.get(Config.dbStoresUrl);
  }
}

module.exports = DBService;
