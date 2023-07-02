const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  constructor() {
    super({ table: "admin" });
  }

  // ------------Création de l'admin - Route POST------------
  createAdmin(admin) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, hashed_password) values (?, ?, ?, ?)`,
      [admin.firstname, admin.lastname, admin.email, admin.hashedPassword]
    );
  }

  // ------------modification de l'admin - Route PUT------------
  updateAdmin(admin) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, hashed_password = ? where id = ?`,
      [
        admin.firstname,
        admin.lastname,
        admin.email,
        admin.hashedPassword,
        admin.id,
      ]
    );
  }
}

module.exports = AdminManager;
