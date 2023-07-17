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

  findFavories(applicantId) {
    return this.database.query(
      `SELECT app.offer_id_applicant_offer_favorites AS offer_id, o.id, o.title, o.city, o.job_responsibilities, o.technical_environment, o.benefits, c.contract_type_name, company.name AS company_name FROM ${this.table} AS app INNER JOIN offer AS o ON app.offer_id_applicant_offer_favorites = o.id INNER JOIN contract_type AS c ON o.contract_type_id_offer = c.id INNER JOIN company ON o.company_id = company.id WHERE applicant_id_applicant_offer_favorites = ?`,
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
