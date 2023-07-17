const express = require("express");

const router = express.Router();

const {
  verifyEmailForSubscription,
  hashPassword,
  verifyPassword,
  verifyToken,
  verifyAdmin,
} = require("./services/auth");

const { getUserByEmail, getUser } = require("./controllers/UserController");
const {
  getAllAdmins,
  deleteAdmin,
  postAdmin,
} = require("./controllers/AdminController");
const {
  getAllApplicants,
  deleteApplicant,
  postApplicant,
} = require("./controllers/ApplicantController");
const {
  getAllCompanies,
  deleteCompany,
  postCompany,
} = require("./controllers/CompanyController");
const {
  getAllOffers,
  // getFilteredOffers,
  deleteOfferByCompanyId,
} = require("./controllers/OfferController");
const { getAllCategories } = require("./controllers/CategoryController");
const { getAllContracts } = require("./controllers/ContractController");

router.use(express.json());

// ------------GLOBAL ROUTES------------
// ------------Applicant subscription------------
router.post(
  "/signup/applicant",
  verifyEmailForSubscription,
  hashPassword,
  postApplicant
);
// ------------Company subscription------------
router.post(
  "/signup/company",
  verifyEmailForSubscription,
  hashPassword,
  postCompany
);

// ------------User connection------------
router.post("/login", getUserByEmail, verifyPassword);

router.get("/users", verifyToken, getUser)

// ------------Offers------------
router.get("/offers", getAllOffers);

// ------------Categories------------
router.get("/categories", getAllCategories);

// ------------Contracts------------
router.get("/contracts-type", getAllContracts);

// ------------TOKEN WALL------------
router.use(verifyToken);

// ------------ADMIN ROUTES------------
// ------------Users management------------
router.get("/admins", verifyAdmin, getAllAdmins);
router.delete("/admins/:id", verifyAdmin, deleteAdmin);
router.get("/applicants", verifyAdmin, getAllApplicants);
router.delete("/applicants/:id", verifyAdmin, deleteApplicant);
router.get("/companies", verifyAdmin, getAllCompanies);
router.delete(
  "/companies/:id",
  verifyAdmin,
  deleteOfferByCompanyId,
  deleteCompany
);

// ------------Admin subscription------------
router.post(
  "/signup/admin",
  verifyAdmin,
  verifyEmailForSubscription,
  hashPassword,
  postAdmin
);

module.exports = router;
