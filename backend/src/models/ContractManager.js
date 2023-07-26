const AbstractManager = require("./AbstractManager");

class ContractManager extends AbstractManager {
  constructor() {
    super({ table: "contract_type" });
  }

  addContract(contract) {
    return this.database.query(
      `insert into ${this.table} (contract_type_name) values (?)`,
      [contract]
    );
  }
}

module.exports = ContractManager;
