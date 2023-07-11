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

module.exports = { getAllCompanies, postCompany };
