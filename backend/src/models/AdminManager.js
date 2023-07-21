const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  constructor() {
    super({ table: "admin" });
  }

  // ------------Création de l'admin - Route POST------------
  createAdmin(admin) {
    const { firstname, lastname, email, hashedPassword } = admin;
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, hashed_password) values (?, ?, ?, ?)`,
      [firstname, lastname, email, hashedPassword]
    );
  }

  // ------------modification de l'admin - Route PUT------------
  updateAdmin(admin) {
    const { firstname, lastname, email, id } = admin;
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ? where id = ?`,
      [firstname, lastname, email, id]
    );
  }

  updateAdminPassword(id, hashedPassword) {
    return this.database.query(
      `update ${this.table} set hashed_password = ? where id = ?`,
      [hashedPassword, id]
    );
  }
}

module.exports = AdminManager;
