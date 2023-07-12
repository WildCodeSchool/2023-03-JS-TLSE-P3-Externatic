const models = require("../models");

// ------------Récupérer tous les applicants------------
const getAllApplicants = (req, res) => {
  models.applicant
    .findAll()
    .then(([applicants]) => {
      res.send(applicants).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
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

// ------------Delete Applicant------------
const deleteApplicant = (req, res) => {
  const { id } = req.params;
  models.applicant
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

module.exports = { getAllApplicants, deleteApplicant, postApplicant };
