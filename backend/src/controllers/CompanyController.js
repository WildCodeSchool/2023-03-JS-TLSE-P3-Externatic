const models = require("../models");

// ------------Récupérer tous les companies------------
const getAllCompanies = (req, res) => {
  models.company
    .findAll()
    .then(([companies]) => {
      res.send(companies).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

// ------------Création de l'entreprise------------

const postCompany = (req, res) => {
  const { name, email, hashedPassword, city, phone, siret } = req.body;
  models.company
    .createCompany({
      name,
      email,
      hashedPassword,
      city,
      phone,
      siret,
    })
    .then(([company]) => {
      res.location(`/signup/company/${company.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

// ------------Delete Company------------
const deleteCompany = (req, res) => {
  let id;
  if (req.params.id) {
    id = req.params.id;
  } else {
    id = req.payload.sub;
  }
  models.company
    .delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send({ error: "La suppression a échouée." });
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

// ------------Company by ID------------
const getCompany = (req, res) => {
  const id = req.payload.sub;
  models.company
    .find(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send({ error: "L'entreprise n'existe pas." });
      } else {
        res.json(result).status(200);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

const getCompanyById = (req, res, next) => {
  const id = req.payload.sub;
  models.company
    .find(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send({ error: "L'entreprise n'existe pas." });
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

// ------------Modify Company------------
const modifyCompany = (req, res) => {
  const id = req.payload.sub;
  const { companyName, email, city, phone, siret } = req.body;
  models.company
    .updateCompany({
      id,
      companyName,
      email,
      city,
      phone,
      siret,
    })
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send({ error: "L'entreprise n'existe pas." });
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

// ------------Modify password Company------------
const modifyPasswordCompany = (req, res) => {
  const id = req.payload.sub;
  const { hashedPassword } = req.body;
  models.company
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

const validateCompanyInfosForSubscription = (req, res, next) => {
  const { name, siret, email, password, confirmedPassword } = req.body;
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/;
  const siretPattern = /^\d{1,14}$/;
  // const namePattern = /^[a-zA-Z]/;
  // 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial, longueur 8
  const passwordPattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (!name) {
    res
      .status(400)
      .send({ error: "Vous devez renseigner le nom de votre entreprise." });
  } else if (!siret) {
    res
      .status(400)
      .send({ error: "Vous devez renseigner le SIRET de votre entreprise." });
  } else if (!siretPattern.test(siret)) {
    res
      .status(400)
      .send({ error: "Le numéro SIRET doit contenir 14 chiffres." });
  } else if (!email) {
    res.status(400).send({ error: "Vous devez renseigner un email." });
  } else if (!emailPattern.test(email)) {
    res.status(400).send({ error: "L'adresse email n'est pas valide." });
  } else if (!passwordPattern.test(password)) {
    res.status(400).send({
      error:
        "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, 1 chiffre et un caractère spécial.",
    });
  } else if (password !== confirmedPassword) {
    res
      .status(400)
      .send({ error: "Les mots de passe ne sont pas identiques." });
  } else {
    next();
  }
};

module.exports = {
  getAllCompanies,
  deleteCompany,
  postCompany,
  getCompany,
  modifyCompany,
  getCompanyById,
  modifyPasswordCompany,
  validateCompanyInfosForSubscription,
};
