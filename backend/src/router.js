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
  getUserById,
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
  validateAdminInfosToModify,
} = require("./controllers/AdminController");
const {
  getAllApplicants,
  deleteApplicant,
  postApplicant,
  getApplicant,
  modifyApplicant,
  getApplicantById,
  modifyPasswordApplicant,
  validateApplicantInfosForSubscription,
  validateApplicantInfosToModify,
} = require("./controllers/ApplicantController");
const {
  getAllCompanies,
  deleteCompany,
  postCompany,
  getCompany,
  modifyCompany,
  getCompanyById,
  modifyPasswordCompany,
  validateCompanyInfosForSubscription,
  validateCompanyInfosToModify,
} = require("./controllers/CompanyController");
const {
  getAllOffers,
  deleteOfferById,
  getCompanyOffers,
  addOffer,
  getFilteredOffers,
  deleteOffersToDeleteCompany,
  setOfferCategoryToNull,
  setOfferContractTypeToNull,
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
  deleteFavoritesToDeleteApplicant,
  deleteFavToDeleteOffer,
} = require("./controllers/FavoriteController");

router.use(express.json());

// ------------GLOBAL ROUTES------------
// ------------Applicant subscription------------
router.post(
  "/signup/applicant",
  verifyEmailForSubscription,
  validateApplicantInfosForSubscription,
  hashPassword,
  postApplicant
);
// ------------Company subscription------------
router.post(
  "/signup/company",
  verifyEmailForSubscription,
  validateCompanyInfosForSubscription,
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

// ------------ GET USER by id ------------
router.get("/users/:id", verifyToken, getUserById);

// ------------APPLICANT ROUTES------------
// ------------MyProfile------------
router.get("/applicant", verifyApplicant, getApplicant);
router.put(
  "/applicants",
  verifyApplicant,
  validateApplicantInfosToModify,
  modifyApplicant
);
router.put(
  "/applicants/password",
  verifyApplicant,
  getApplicantById,
  verifyPassword,
  validateNewPassword,
  hashNewPassword,
  modifyPasswordApplicant
);
router.delete(
  "/applicant",
  verifyApplicant,
  deleteFavoritesToDeleteApplicant,
  deleteApplicant
);

// ------------Applicants favorites------------
router.get("/favorites/:id", verifyApplicant, getFavorite);
router.post("/favorites", verifyApplicant, addFavorite);
router.delete("/favorites/:id", verifyApplicant, deleteFavorite);
router.get("/all-favorites", verifyApplicant, getAllFavorites);

// ------------COMPANY ROUTES------------
// ------------MyProfile------------
router.get("/company", verifyCompany, getCompany);
router.put(
  "/companies",
  verifyCompany,
  validateCompanyInfosToModify,
  modifyCompany
);
router.put(
  "/companies/password",
  verifyCompany,
  getCompanyById,
  verifyPassword,
  validateNewPassword,
  hashNewPassword,
  modifyPasswordCompany
);
router.delete(
  "/company",
  verifyCompany,
  deleteOffersToDeleteCompany,
  deleteCompany
);

// ------------Offers management------------
router.get("/company-offers", verifyCompany, getCompanyOffers);
router.post("/create-offer", verifyAdminOrCompany, addOffer);

// ------------ADMIN ROUTES------------
// ------------MyProfile------------
router.get("/admin", verifyAdmin, getAdmin);
router.put("/admins", verifyAdmin, validateAdminInfosToModify, modifyAdmin);
router.put(
  "/admins/password",
  verifyAdmin,
  getAdminById,
  verifyPassword,
  validateNewPassword,
  hashNewPassword,
  modifyPasswordAdmin
);
router.delete("/admin", verifyAdmin, deleteAdmin);

// ------------Users management------------
router.get("/admins", verifyAdmin, getAllAdmins);
router.delete("/admins/:id", verifyAdmin, deleteAdmin);
router.get("/applicants", verifyAdmin, getAllApplicants);
router.delete(
  "/applicants/:id",
  verifyAdmin,
  deleteFavoritesToDeleteApplicant,
  deleteApplicant
);
router.get("/companies", verifyAdmin, getAllCompanies);
router.delete(
  "/companies/:id",
  verifyAdmin,
  deleteOffersToDeleteCompany,
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

// ------------Fields management------------
router.delete(
  "/categories/:id",
  verifyAdmin,
  setOfferCategoryToNull,
  deleteCategory
);
router.post("/categories", verifyAdmin, addCategory);
router.delete(
  "/contracts-type/:id",
  verifyAdmin,
  setOfferContractTypeToNull,
  deleteContract
);
router.post("/contracts-type", verifyAdmin, addContract);

// ------------Offers management------------
router.delete(
  "/offers/:id",
  verifyAdminOrCompany,
  deleteFavToDeleteOffer,
  deleteOfferById
);

module.exports = router;
