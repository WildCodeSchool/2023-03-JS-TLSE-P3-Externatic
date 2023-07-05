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
const { getAllOffers } = require("./controllers/OfferController");

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
router.post("/offers", getAllOffers);

module.exports = router;
