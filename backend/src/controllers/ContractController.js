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
      res.sendStatus(500);
    });
};

// ------------Delete contract------------
const deleteContract = (req, res) => {
  const { id } = req.params;
  models.contract_type
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

// ------------Add contract------------
const addContract = (req, res) => {
  models.contract_type
    .addContract(req.body.contractTypeName)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllContracts,
  deleteContract,
  addContract,
};
