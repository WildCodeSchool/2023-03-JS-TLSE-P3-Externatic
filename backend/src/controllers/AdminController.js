const models = require("../models");

// ------------Récupérer tous les admins------------
const getAllAdmins = (req, res) => {
  models.admin
    .findAll()
    .then(([admins]) => {
      res.send(admins).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// ------------Création de l'admin------------

const postAdmin = (req, res) => {
  const { firstname, lastname, email, hashedPassword } = req.body;
  models.admin
    .createAdmin({
      firstname,
      lastname,
      email,
      hashedPassword,
    })
    .then(([admin]) => {
      res.location(`/signup/admin/${admin.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// ------------Admin by ID------------

const getAdminById = (req, res) => {
  const { sub } = req.payload;
  models.admin
    .findId(sub)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// ------------Delete Admin------------
const deleteAdmin = (req, res) => {
  const { id } = req.params;
  models.admin
    .delete(id)
    .then(([admins]) => {
      res.send(admins).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllAdmins,
  postAdmin,
  getAdminById,
  deleteAdmin,
};
