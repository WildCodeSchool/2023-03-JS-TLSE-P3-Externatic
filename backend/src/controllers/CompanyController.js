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
      res.sendStatus(500);
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
      res.sendStatus(500);
    });
};

// ------------Delete Company------------
const deleteCompany = (req, res) => {
  const { id } = req.params;
  models.company
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

module.exports = { getAllCompanies, deleteCompany, postCompany };
