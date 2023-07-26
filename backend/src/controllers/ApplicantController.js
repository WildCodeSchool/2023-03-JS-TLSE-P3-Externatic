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
      res.status(500).send({ error: "Une erreur est survenue." });
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
      res.status(500).send({ error: "Une erreur est survenue." });
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
        res.status(500).send({ error: "La suppression a échouée." });
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

// ------------Applicant by ID------------

const getApplicant = (req, res) => {
  const id = req.payload.sub;
  models.applicant
    .find(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send({ error: "Candidat non trouvé." });
      } else {
        res.json(result).status(200);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

const getApplicantById = (req, res, next) => {
  const id = req.payload.sub;
  models.applicant
    .find(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send({ error: "L'utilisateur n'a pas été trouvé." });
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
        res
          .status(404)
          .send({ error: "Aucune modification n'a été effectuée." });
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
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
        res
          .status(500)
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

const validateApplicantInfosForSubscription = (req, res, next) => {
  const { titleName, firstname, lastname, email, password, confirmedPassword } =
    req.body;
  const namePattern = /^([^0-9]*)$/;
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/;
  // 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial, longueur 8
  const passwordPattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-+/]).{8,}$/;
  if (titleName !== "Mr" && titleName !== "Mme") {
    res.status(400).send({ error: "Vous devez renseigner votre civilité." });
  } else if (!firstname) {
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

const validateApplicantInfosToModify = (req, res, next) => {
  const { titleName, firstname, lastname, email } = req.body;
  const namePattern = /^([^0-9]*)$/;
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/;

  if (titleName !== "Mr" && titleName !== "Mme") {
    res.status(400).send({ error: "Vous devez renseigner votre civilité." });
  } else if (!firstname) {
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
  getAllApplicants,
  deleteApplicant,
  postApplicant,
  getApplicant,
  modifyApplicant,
  getApplicantById,
  modifyPasswordApplicant,
  validateApplicantInfosForSubscription,
  validateApplicantInfosToModify,
};
