const models = require("../models");

// ------------Récupérer toutes les catégories------------
const getAllCategories = (req, res) => {
  models.category
    .findAll()
    .then(([categories]) => {
      res.send(categories).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllCategories,
};
