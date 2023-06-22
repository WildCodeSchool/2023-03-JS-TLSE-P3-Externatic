const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const {
  verifyEmail,
  hashPassword,
  verifyPassword,
  // verifyToken,
} = require("./auth");

const {
  // getAdminById,
  getAdminByEmail,
  postAdmin,
} = require("./controllers/AdminController");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// router.get("/signup/admin", getAllAdmins);

// ------------inscription de l'admin------------
router.post("/signup/admin", verifyEmail, hashPassword, postAdmin);

// ------------connexion de l'admin------------
// router.get("/admin", verifyToken, getAdminById);
router.post("/login/admin", getAdminByEmail, verifyPassword);

module.exports = router;
