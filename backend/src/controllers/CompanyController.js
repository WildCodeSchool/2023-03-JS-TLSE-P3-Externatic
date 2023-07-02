const models = require("../models");

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

// ------------Connection de l'entreprise------------
const getCompanyByEmail = (req, res, next) => {
  const { email } = req.body;

  models.company
    .findUserByEmail(email)
    .then(([companies]) => {
      if (companies.length) {
        // eslint-disable-next-line prefer-destructuring
        req.company = companies[0];
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};
module.exports = { postCompany, getCompanyByEmail };
