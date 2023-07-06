const models = require("../models");

// ------------Récupérer toutes les offres------------
const getAllOffers = (req, res) => {
  models.offer
    .findAll()
    .then(([offers]) => {
      res.send(offers).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllOffers,
};
