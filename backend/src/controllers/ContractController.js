const models = require("../models");

// ------------Récupérer toutes les offres------------
const getAllContracts = (req, res) => {
  models.contract_type
    .findAll()
    .then(([contracts]) => {
      res.send(contracts).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

// ------------Delete contract------------
const deleteContract = (req, res) => {
  const { id } = req.params;
  models.contract_type
    .delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send({ error: "La suppression a échouée." });
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

// ------------Add contract------------
const addContract = (req, res) => {
  models.contract_type
    .addContract(req.body.contractTypeName)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

module.exports = {
  getAllContracts,
  deleteContract,
  addContract,
};
