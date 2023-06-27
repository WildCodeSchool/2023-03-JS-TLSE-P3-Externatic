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

const getApplicantByEmail = (req, res, next) => {
  const { email } = req.body;

  models.applicant
    .findUserByEmail(email)
    .then(([applicants]) => {
      if (applicants.length) {
        // eslint-disable-next-line prefer-destructuring
        req.applicant = applicants[0];
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
module.exports = { postApplicant, getApplicantByEmail };
