const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    super({ table: "company" });
  }

  // ------------Création de l'entreprise - Route POST------------
  createCompany(company) {
    const { name, email, hashedPassword, city, phone, siret } = company;
    return this.database.query(
      `insert into ${this.table} (name, email, hashed_password, city, phone, siret) values (?, ?, ?, ?, ?, ?)`,
      [name, email, hashedPassword, city, phone, siret]
    );
  }

  // ------------modification de l'entreprise - Route PUT------------

  updateCompany(company) {
    const { id, companyName, email, city, phone, siret } = company;
    return this.database.query(
      `update ${this.table} set name = ?, email = ?, city = ?, phone = ?, siret = ? where id = ?`,
      [companyName, email, city, phone, siret, id]
    );
  }
}

module.exports = CompanyManager;
