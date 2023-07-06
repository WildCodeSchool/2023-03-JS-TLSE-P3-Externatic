const AbstractManager = require("./AbstractManager");

class ContractManager extends AbstractManager {
  constructor() {
    super({ table: "contract_type" });
  }
}

module.exports = ContractManager;
