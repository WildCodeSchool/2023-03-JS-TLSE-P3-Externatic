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

  findByFilters(keyword, localization, categories, contract) {
    let finalQuery = `SELECT * FROM ${this.table} JOIN category ON offer.category_id_offer = category.id JOIN contract_type ON offer.contract_type_id_offer = contract_type.id`;

    if (keyword || localization || categories.length || contract.length) {
      finalQuery += ` WHERE`;
    }

    if (keyword) {
      finalQuery += ` offer.title LIKE '%${keyword}%'`;
      if (localization || categories.length || contract.length) {
        finalQuery += ` AND`;
      }
    }

    if (localization) {
      finalQuery += ` offer.city LIKE '%${localization}%'`;
      if (categories.length || contract.length) {
        finalQuery += ` AND`;
      }
    }

    if (categories.length) {
      finalQuery += ` (`;
      for (let i = 0; i < categories.length; i += 1) {
        finalQuery += ` offer.category_id_offer = ${categories[i]}`;
        if (i < categories.length - 1) {
          finalQuery += ` OR`;
        }
      }
      finalQuery += `)`;

      if (contract.length) {
        finalQuery += ` AND`;
      }
    }

    if (contract.length) {
      finalQuery += ` (`;
      for (let i = 0; i < contract.length; i += 1) {
        finalQuery += ` offer.contract_type_id_offer = ${contract[i]}`;
        if (i < contract.length - 1) {
          finalQuery += ` OR`;
        }
      }
      finalQuery += `)`;
    }

    return this.database.query(finalQuery);
  }
}

module.exports = OfferManager;
