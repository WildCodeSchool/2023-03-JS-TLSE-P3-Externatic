const express = require("express");

const router = express.Router();

const {
  verifyEmailForSubscription,
  hashPassword,
  verifyPassword,
} = require("./services/auth");

const { getUserByEmail } = require("./controllers/UserController");
const { postAdmin } = require("./controllers/AdminController");
const { postApplicant } = require("./controllers/ApplicantController");
const { postCompany } = require("./controllers/CompanyController");
const {
  getAllOffers,
  getFilteredOffers,
} = require("./controllers/OfferController");
const { getAllCategories } = require("./controllers/CategoryController");
const { getAllContracts } = require("./controllers/ContractController");
const { addFavorite } = require("./controllers/FavoriteController");

// ------------inscription de l'admin------------
router.post(
  "/signup/admin",
  verifyEmailForSubscription,
  hashPassword,
  postAdmin
);
// ------------inscription du candidat------------
router.post(
  "/signup/applicant",
  verifyEmailForSubscription,
  hashPassword,
  postApplicant
);
// ------------inscription de l'entreprise------------
router.post(
  "/signup/company",
  verifyEmailForSubscription,
  hashPassword,
  postCompany
);

// ------------connexion d'un utilisateur------------
router.post("/login", getUserByEmail, verifyPassword);

// ------------offres------------
router.get("/offers", getAllOffers);
router.post("/filtered-offers", getFilteredOffers);

// ------------catégories------------
router.get("/categories", getAllCategories);

// ------------contrats------------
router.get("/contracts-type", getAllContracts);

// ------------offres favorites------------
router.get("/favorites");
router.post("/favorites", addFavorite);

module.exports = router;
