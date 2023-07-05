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
    .then(([admins]) => {
      if (admins[0] != null) {
        console.info(admins[0]);
        res.status(200).json(admins[0]);
      } else {
        res.sendStatus(401);
      }
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
};
