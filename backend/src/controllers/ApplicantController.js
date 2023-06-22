const models = require("../models");

// ------------Création du candidat------------

const postApplicant = (req, res) => {
  const {
    titleName,
    firstname,
    lastname,
    email,
    hashedPassword,
    message,
    city,
    phone,
  } = req.body;
  models.applicant
    .createApplicant({
      titleName,
      firstname,
      lastname,
      email,
      hashedPassword,
      message,
      city,
      phone,
    })
    .then(([applicant]) => {
      res.location(`/signup/applicant/${applicant.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = postApplicant;
