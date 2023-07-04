const express = require("express");

const router = express.Router();

const {
  verifyEmailForSubscription,
  hashPassword,
  verifyPasswordForAdmin,
  verifyPasswordForApplicant,
  verifyPasswordForCompany,
  // verifyPassword,
} = require("./services/auth");

const { getAdminByEmail, postAdmin } = require("./controllers/AdminController");

const {
  getApplicantByEmail,
  postApplicant,
} = require("./controllers/ApplicantController");

const {
  getCompanyByEmail,
  postCompany,
} = require("./controllers/CompanyController");

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

// ------------connexion de l'admin------------
router.post("/login/admin", getAdminByEmail, verifyPasswordForAdmin);

// ------------connexion du candidat------------
router.post(
  "/login/applicant",
  getApplicantByEmail,
  verifyPasswordForApplicant
);
// ------------connexion de l'entreprise------------
router.post("/login/company", getCompanyByEmail, verifyPasswordForCompany);

module.exports = router;
