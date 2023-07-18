const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    super({ table: "applicant_offer_favorites" });
  }

  insertFavorite(applicantId, offerId) {
    return this.database.query(
      `INSERT INTO ${this.table} (applicant_id_applicant_offer_favorites, offer_id_applicant_offer_favorites) VALUES (?, ?)`,
      [applicantId, offerId]
    );
  }

  findFavorite(applicantId, offerId) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE applicant_id_applicant_offer_favorites = ? AND offer_id_applicant_offer_favorites = ?`,
      [applicantId, offerId]
    );
  }

  findFavorites(applicantId) {
    return this.database.query(
      `SELECT applicant_id_applicant_offer_favorites AS applicant_id, offer_id_applicant_offer_favorites AS offer_id FROM ${this.table} WHERE applicant_id_applicant_offer_favorites = ?`,
      [applicantId]
    );
  }

  removeFavorite(applicantId, offerId) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE applicant_id_applicant_offer_favorites = ? AND offer_id_applicant_offer_favorites = ?`,
      [applicantId, offerId]
    );
  }
}

module.exports = FavoriteManager;
