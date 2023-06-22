const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    super({ table: "company" });
  }
}

module.exports = CompanyManager;
