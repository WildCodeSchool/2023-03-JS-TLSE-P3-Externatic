const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    super({ table: "company" });
  }

  // ------------Création de l'entreprise - Route POST------------
  createCompany(company) {
    return this.database.query(
      `insert into ${this.table} set name = ?, email = ?, hashed_password = ?, city = ?, phone = ?, siret = ?`,
      [
        company.name,
        company.email,
        company.hashedPassword,
        company.city,
        company.phone,
        company.siret,
      ]
    );
  }

  // ------------modification de l'entreprise - Route PUT------------

  updateCompany(company) {
    return this.database.query(
      `update ${this.table} set name = ?, email = ?, hashed_password = ?, city = ?, phone = ?, siret = ? where id = ?`,
      [
        company.name,
        company.email,
        company.hashedPassword,
        company.city,
        company.phone,
        company.siret,
        company.id,
      ]
    );
  }
}

module.exports = CompanyManager;
