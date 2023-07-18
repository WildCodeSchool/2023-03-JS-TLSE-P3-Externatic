const express = require("express");

const router = express.Router();

const {
  verifyEmailForSubscription,
  hashPassword,
  verifyPassword,
  verifyToken,
  verifyAdmin,
  verifyCompany,
  verifyAdminOrCompany,
} = require("./services/auth");

const { getUserByEmail } = require("./controllers/UserController");
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
  getFilteredOffers,
  deleteOfferById,
  getCompanyOffers,
  addOffer,
} = require("./controllers/OfferController");
const {
  getAllCategories,
  deleteCategory,
  addCategory,
} = require("./controllers/CategoryController");
const {
  getAllContracts,
  deleteContract,
  addContract,
} = require("./controllers/ContractController");

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

// ------------Offers------------
router.get("/offers", getAllOffers);
router.post("/filtered-offers", getFilteredOffers);

// ------------Categories------------
router.get("/categories", getAllCategories);

// ------------Contracts------------
router.get("/contracts-type", getAllContracts);

// ------------TOKEN WALL------------
router.use(verifyToken);

// ------------COMPANY ROUTES------------
// ------------Offers management------------
router.get("/company-offers", verifyCompany, getCompanyOffers);
router.post("/create-offer", verifyAdminOrCompany, addOffer);

// ------------ADMIN ROUTES------------
// ------------Users management------------
router.get("/admins", verifyAdmin, getAllAdmins);
router.delete("/admins/:id", verifyAdmin, deleteAdmin);
router.get("/applicants", verifyAdmin, getAllApplicants);
router.delete("/applicants/:id", verifyAdmin, deleteApplicant);
router.get("/companies", verifyAdmin, getAllCompanies);
router.delete("/companies/:id", verifyAdmin, deleteCompany);

// ------------Admin subscription------------
router.post(
  "/signup/admin",
  verifyAdmin,
  verifyEmailForSubscription,
  hashPassword,
  postAdmin
);

// ------------Fields management------------
router.delete("/categories/:id", verifyAdmin, deleteCategory);
router.post("/categories", verifyAdmin, addCategory);
router.delete("/contracts-type/:id", verifyAdmin, deleteContract);
router.post("/contracts-type", verifyAdmin, addContract);

// ------------Offers management------------
router.delete("/offers/:id", verifyAdminOrCompany, deleteOfferById);

module.exports = router;
