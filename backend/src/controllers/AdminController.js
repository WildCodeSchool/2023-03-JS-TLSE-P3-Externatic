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

const getAdmin = (req, res) => {
  const id = req.payload.sub;
  models.admin
    .find(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.json(result).status(200);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getAdminById = (req, res, next) => {
  const id = req.payload.sub;
  models.admin
    .find(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        [req.user] = result;
        next();
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

// ------------Modify Admin------------
const modifyAdmin = (req, res) => {
  const id = req.payload.sub;
  const { firstname, lastname, email } = req.body;
  models.admin
    .updateAdmin({
      id,
      firstname,
      lastname,
      email,
    })
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

// ------------Modify password Admin------------

const modifyPasswordAdmin = (req, res) => {
  const id = req.payload.sub;
  const { hashedPassword } = req.body;
  models.admin
    .updatePassword(id, hashedPassword)
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

module.exports = {
  getAllAdmins,
  postAdmin,
  deleteAdmin,
  getAdmin,
  getAdminById,
  modifyAdmin,
  modifyPasswordAdmin,
};
