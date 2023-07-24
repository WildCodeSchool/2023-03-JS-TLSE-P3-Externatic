const models = require("../models");

// ------------Récupérer tous les candidats------------
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
  const { titleName, firstname, lastname, email, hashedPassword, city, phone } =
    req.body;
  models.applicant
    .createApplicant({
      titleName,
      firstname,
      lastname,
      email,
      hashedPassword,
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
  let id;
  if (req.params.id) {
    id = req.params.id;
  } else {
    id = req.payload.sub;
  }
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

// ------------Applicant by ID------------

const getApplicant = (req, res) => {
  const id = req.payload.sub;
  models.applicant
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

const getApplicantById = (req, res, next) => {
  const id = req.payload.sub;
  models.applicant
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

// ------------Modify Applicant------------
const modifyApplicant = (req, res) => {
  const id = req.payload.sub;
  const { titleName, firstname, lastname, email, city, phone } = req.body;

  models.applicant
    .updateApplicant({
      titleName,
      firstname,
      lastname,
      email,
      city,
      phone,
      id,
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

// ------------Modify password Applicant------------

const modifyPasswordApplicant = (req, res) => {
  const id = req.payload.sub;
  const { hashedPassword } = req.body;
  models.applicant
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
  getAllApplicants,
  deleteApplicant,
  postApplicant,
  getApplicant,
  modifyApplicant,
  getApplicantById,
  modifyPasswordApplicant,
};
