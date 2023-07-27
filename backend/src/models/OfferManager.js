const AbstractManager = require("./AbstractManager");

class OfferManager extends AbstractManager {
  constructor() {
    super({ table: "offer" });
  }

  findOffer() {
    return this.database.query(
      `select o.id, o.title, o.company_id, o.city, o.contract_type_id_offer, o.job_responsibilities, o.technical_environment, o.benefits, o.category_id_offer, c.contract_type_name, company.name AS company_name from ${this.table} AS o INNER JOIN contract_type AS c ON o.contract_type_id_offer = c.id INNER JOIN company ON o.company_id = company.id`
    );
  }

  findByFilters(keyword, localization, categories, contract) {
    let finalQuery = `SELECT *, company.name AS company_name FROM ${this.table} JOIN company ON offer.company_id = company.id JOIN category ON offer.category_id_offer = category.id JOIN contract_type ON offer.contract_type_id_offer = contract_type.id`;

    if (keyword || localization || categories.length || contract.length) {
      finalQuery += ` WHERE`;
    }

    if (keyword) {
      finalQuery += ` offer.title LIKE '%${keyword}%'`;
      if (localization || categories.length || contract.length) {
        finalQuery += ` AND`;
      }
    }

    if (localization) {
      finalQuery += ` offer.city LIKE '%${localization}%'`;
      if (categories.length || contract.length) {
        finalQuery += ` AND`;
      }
    }

    if (categories.length) {
      finalQuery += ` (`;
      for (let i = 0; i < categories.length; i += 1) {
        finalQuery += ` offer.category_id_offer = ${categories[i]}`;
        if (i < categories.length - 1) {
          finalQuery += ` OR`;
        }
      }
      finalQuery += `)`;

      if (contract.length) {
        finalQuery += ` AND`;
      }
    }

    if (contract.length) {
      finalQuery += ` (`;
      for (let i = 0; i < contract.length; i += 1) {
        finalQuery += ` offer.contract_type_id_offer = ${contract[i]}`;
        if (i < contract.length - 1) {
          finalQuery += ` OR`;
        }
      }
      finalQuery += `)`;
    }

    return this.database.query(finalQuery);
  }

  findCompanyOffers(id) {
    return this.database.query(
      `SELECT *, offer.id, company.name AS company_name FROM ${this.table} JOIN company ON offer.company_id = company.id JOIN contract_type ON offer.contract_type_id_offer = contract_type.id WHERE company_id = ?`,
      [id]
    );
  }

  createOffer(
    { title, contractType, category, city, missions, technical, advantages },
    companyId
  ) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, company_id, city, contract_type_id_offer, category_id_offer, job_responsibilities, technical_environment, benefits) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        companyId,
        city,
        contractType,
        category,
        missions,
        technical,
        advantages,
      ]
    );
  }

  deleteOfferByCompanyid(companyId) {
    return this.database.query(
      `delete from ${this.table} where company_id = ?`,
      [companyId]
    );
  }

  setOfferCategoryToNullByCategoryId(categoryId) {
    return this.database.query(
      `update ${this.table} set category_id_offer = null where category_id_offer = ?`,
      [categoryId]
    );
  }

  setOfferContractTypeToNullByCategoryId(contractId) {
    return this.database.query(
      `update ${this.table} set contract_type_id_offer = null where contract_type_id_offer = ?`,
      [contractId]
    );
  }
}

module.exports = OfferManager;
