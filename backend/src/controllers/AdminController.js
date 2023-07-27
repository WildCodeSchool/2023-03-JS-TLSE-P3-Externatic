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
      res.status(500).send({ error: "Une erreur est survenue." });
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
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

// ------------Admin by ID------------

const getAdmin = (req, res) => {
  const id = req.payload.sub;
  models.admin
    .find(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send({ error: "L'admin n'a pas pu être trouvé." });
      } else {
        res.json(result).status(200);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

const getAdminById = (req, res, next) => {
  const id = req.payload.sub;
  models.admin
    .find(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send({ error: "L'admin n'a pas pu être trouvé." });
      } else {
        [req.user] = result;
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

// ------------Delete Admin------------
const deleteAdmin = (req, res) => {
  let id;
  if (req.params.id) {
    id = req.params.id;
  } else {
    id = req.payload.sub;
  }

  models.admin
    .delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send({ error: "L'admin n'a pas pu être supprimé." });
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
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
        res.status(404).send({ error: "L'admin n'a pas pu être modifié." });
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
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
        res
          .status(404)
          .send({ error: "Le mot de passe n'a pas pu être modifié." });
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

const validateAdminInfosToModify = (req, res, next) => {
  const { firstname, lastname, email } = req.body;
  const namePattern = /^([^0-9]*)$/;
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/;

  if (!firstname) {
    res.status(400).send({ error: "Vous devez renseigner votre prénom." });
  } else if (!namePattern.test(firstname)) {
    res
      .status(400)
      .send({ error: "Le prénom ne doit contenir que des lettres." });
  } else if (!lastname) {
    res.status(400).send({ error: "Vous devez renseigner votre nom." });
  } else if (!namePattern.test(lastname)) {
    res.status(400).send({ error: "Le nom ne doit contenir que des lettres." });
  } else if (!email) {
    res.status(400).send({ error: "Vous devez renseigner un email." });
  } else if (!emailPattern.test(email)) {
    res.status(400).send({ error: "L'adresse email n'est pas valide." });
  } else {
    next();
  }
};

module.exports = {
  getAllAdmins,
  postAdmin,
  deleteAdmin,
  getAdmin,
  modifyAdmin,
  modifyPasswordAdmin,
  getAdminById,
  validateAdminInfosToModify,
};
