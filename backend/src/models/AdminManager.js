const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  constructor() {
    super({ table: "admin" });
  }

  // ------------Création de l'admin - Route POST------------
  createAdmin(admin) {
    return this.database.query(
      `insert into ${this.table} set firstname = ?, lastname = ?, hashed_password = ?, email = ?`,
      [admin.firstname, admin.lastname, admin.hashedPassword, admin.email]
    );
  }

  // ------------modification de l'admin - Route PUT------------
  updateAdmin(admin) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, hashed_password = ?, email = ? where id = ?`,
      [
        admin.firstname,
        admin.lastname,
        admin.hashedPassword,
        admin.email,
        admin.id,
      ]
    );
  }
}

module.exports = AdminManager;
