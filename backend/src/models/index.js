require("dotenv").config();

const mysql = require("mysql2/promise");

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// declare and fill models: that's where you should register your own managers

const models = {};

const AdminManager = require("./AdminManager");

models.admin = new AdminManager();
models.admin.setDatabase(pool);
const ApplicantManager = require("./ApplicantManager");

models.applicant = new ApplicantManager();
models.applicant.setDatabase(pool);

const CompanyManager = require("./CompanyManager");

models.company = new CompanyManager();
models.company.setDatabase(pool);

const OfferManager = require("./OfferManager");

models.offer = new OfferManager();
models.offer.setDatabase(pool);

const CategoryManager = require("./CategoryManager");

models.category = new CategoryManager();
models.category.setDatabase(pool);

const ContractManager = require("./ContractManager");

models.contract_type = new ContractManager();
models.contract_type.setDatabase(pool);

const FavoriteManager = require("./FavoriteManager");

models.applicant_offer_favorites = new FavoriteManager();
models.applicant_offer_favorites.setDatabase(pool);

// bonus: use a proxy to personalize error message,
// when asking for a non existing model

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
