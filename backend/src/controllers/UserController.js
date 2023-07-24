const models = require("../models");

// ------------Connection de tous les utilisateurs------------
const getUserByEmail = (req, res, next) => {
  const { email } = req.body;
  models.admin
    .findUserByEmail(email)
    .then(([admins]) => {
      if (admins[0] != null) {
        [req.user] = admins;
        req.user.role = "admin";
        next();
      } else {
        models.applicant.findUserByEmail(email).then(([applicants]) => {
          if (applicants[0] != null) {
            [req.user] = applicants;
            req.user.role = "applicant";
            next();
          } else {
            models.company.findUserByEmail(email).then(([companies]) => {
              if (companies[0] != null) {
                [req.user] = companies;
                req.user.role = "company";
                next();
              } else {
                res
                  .status(401)
                  .send({ error: "Cet utilisateur n'existe pas." });
              }
            });
          }
        });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

const validateNewPassword = (req, res, next) => {
  const { newPassword, confirmNewPassword } = req.body;
  if (newPassword === confirmNewPassword) {
    next();
  } else {
    res.status(400).send({ error: "Les mot de passe ne sont pas identiques." });
  }
};

// ------------Trouver un utilisateur par son id ------------
const getUserById = (req, res) => {
  const { id } = req.params;
  const { role } = req.query;

  if (role === "admin") {
    models.admin.find(id).then(([admins]) => {
      res.send(admins).status(200);
    });
  } else if (role === "applicant") {
    models.applicant.find(id).then(([applicants]) => {
      res.send(applicants).status(200);
    });
  } else if (role === "company") {
    models.company.find(id).then(([companies]) => {
      res.send(companies).status(200);
    });
  } else {
    res.sendStatus(401);
  }
};
module.exports = {
  getUserByEmail,
  validateNewPassword,
  getUserById,
};
