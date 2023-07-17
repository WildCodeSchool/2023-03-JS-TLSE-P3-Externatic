const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "applicant_offer_favorites" });
  }

  insertFavorite(applicantId, offerId) {
    return this.database.query(
      `insert into ${this.table} (applicant_id_applicant_offer_favorites, offer_id_applicant_offer_favorites) values (?, ?)`,
      [applicantId, offerId]
    );
  }

  findFavories(applicantId) {
    return this.database.query(
      `select * from ${this.table} WHERE applicant_id_applicant_offer_favorites = ?`,
      [applicantId]
    );
  }
}

module.exports = FavoriteManager;
