const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  addCategory(category) {
    return this.database.query(
      `insert into ${this.table} (category_name) values (?)`,
      [category]
    );
  }
}

module.exports = CategoryManager;
