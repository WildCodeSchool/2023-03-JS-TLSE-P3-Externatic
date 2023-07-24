class AbstractManager {
  constructor({ table }) {
    this.table = table;
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findUserByEmail(email) {
    return this.database.query(`select * from ${this.table} WHERE email = ?`, [
      email,
    ]);
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  updatePassword(id, hashedPassword) {
    return this.database.query(
      `update ${this.table} set hashed_password = ? where id = ?`,
      [hashedPassword, id]
    );
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = AbstractManager;
