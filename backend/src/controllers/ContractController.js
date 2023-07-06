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

module.exports = {
  getAllContracts,
};
