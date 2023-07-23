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

// ------------Company by ID------------
const getCompany = (req, res) => {
  const id = req.payload.sub;
  models.company
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

const getCompanyById = (req, res, next) => {
  const id = req.payload.sub;
  models.company
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

// ------------Modify password Company------------
const modifyPasswordCompany = (req, res) => {
  const id = req.payload.sub;
  const { hashedPassword } = req.body;
  models.company
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
  getAllCompanies,
  deleteCompany,
  postCompany,
  getCompany,
  modifyCompany,
  getCompanyById,
  modifyPasswordCompany,
};
