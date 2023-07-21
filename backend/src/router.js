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
  verifyApplicant,
  login,
  hashNewPassword,
} = require("./services/auth");

const {
  getUserByEmail,
  validateNewPassword,
} = require("./controllers/UserController");
const {
  getAllAdmins,
  deleteAdmin,
  postAdmin,
  getAdmin,
  getAdminById,
  modifyAdmin,
  modifyPasswordAdmin,
} = require("./controllers/AdminController");
const {
  getAllApplicants,
  deleteApplicant,
  postApplicant,
  getApplicant,
  modifyApplicant,
  getApplicantById,
  modifyPasswordApplicant,
} = require("./controllers/ApplicantController");
const {
  getAllCompanies,
  deleteCompany,
  postCompany,
  getCompany,
  modifyCompany,
  getCompanyById,
  modifyPasswordCompany,
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
const {
  addFavorite,
  getAllFavorites,
  getFavorite,
  deleteFavorite,
} = require("./controllers/FavoriteController");

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
router.post("/login", getUserByEmail, verifyPassword, login);

// ------------Offers------------
router.get("/offers", getAllOffers);
router.post("/filtered-offers", getFilteredOffers);

// ------------Categories------------
router.get("/categories", getAllCategories);

// ------------Contracts------------
router.get("/contracts-type", getAllContracts);

// ------------TOKEN WALL------------
router.use(verifyToken);

// ------------APPLICANT ROUTES------------
// ------------MyProfile------------
router.get("/applicant", verifyApplicant, getApplicant);
router.put("/applicants", verifyApplicant, modifyApplicant);
router.put(
  "/applicants/password",
  verifyApplicant,
  getApplicantById,
  verifyPassword,
  validateNewPassword,
  hashNewPassword,
  modifyPasswordApplicant
);

// ------------COMPANY ROUTES------------
// ------------MyProfile------------
router.get("/company", verifyCompany, getCompany);
router.put("/companies", verifyCompany, modifyCompany);
router.put(
  "/companies/password",
  verifyCompany,
  getCompanyById,
  verifyPassword,
  validateNewPassword,
  hashNewPassword,
  modifyPasswordCompany
);

// ------------Offers management------------
router.get("/company-offers", verifyCompany, getCompanyOffers);
router.post("/create-offer", verifyAdminOrCompany, addOffer);

// ------------ADMIN ROUTES------------
// ------------MyProfile------------
router.get("/admin", verifyAdmin, getAdmin);
router.put("/admins", verifyAdmin, modifyAdmin);
router.put(
  "/admins/password",
  verifyAdmin,
  getAdminById,
  verifyPassword,
  validateNewPassword,
  hashNewPassword,
  modifyPasswordAdmin
);

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
// ------------APPLICANT ROUTES------------
// ------------Applicants favorites------------
router.get("/favorites/:id", verifyApplicant, getFavorite);
router.post("/favorites", verifyApplicant, addFavorite);
router.delete("/favorites/:id", verifyApplicant, deleteFavorite);
router.get("/all-favorites", verifyApplicant, getAllFavorites);
module.exports = router;
