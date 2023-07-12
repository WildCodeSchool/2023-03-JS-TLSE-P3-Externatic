const AbstractManager = require("./AbstractManager");

class OfferManager extends AbstractManager {
  constructor() {
    super({ table: "offer" });
  }

  findOffer() {
    return this.database.query(
      `select * from ${this.table} INNER JOIN contract_type AS c ON ${this.table}.contract_type_id_offer = c.id`
    );
  }
}

module.exports = OfferManager;
