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
    const { firstname, lastname, email, hashedPassword, id } = admin;
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, hashed_password = ? where id = ?`,
      [firstname, lastname, email, hashedPassword, id]
    );
  }
}

module.exports = AdminManager;
