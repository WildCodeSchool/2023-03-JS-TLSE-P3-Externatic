const AbstractManager = require("./AbstractManager");

class OfferManager extends AbstractManager {
  constructor() {
    super({ table: "offer" });
  }
}

module.exports = OfferManager;
