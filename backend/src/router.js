const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const {
  verifyEmailForSubscription,
  hashPassword,
  verifyPasswordForAdmin,
  verifyPasswordForApplicant,
} = require("./auth");

const { getAdminByEmail, postAdmin } = require("./controllers/AdminController");
const {
  getApplicantByEmail,
  postApplicant,
} = require("./controllers/ApplicantController");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

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

// ------------connexion de l'admin------------
router.post("/login/admin", getAdminByEmail, verifyPasswordForAdmin);

// ------------connexion du candidat------------
router.post(
  "/login/applicant",
  getApplicantByEmail,
  verifyPasswordForApplicant
);

module.exports = router;
