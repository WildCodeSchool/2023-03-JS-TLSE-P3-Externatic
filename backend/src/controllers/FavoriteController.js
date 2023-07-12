const models = require("../models");
// ------------Ajouter une offre en favori------------
const addFavorite = (req, res) => {
  const { applicantId, offerId } = req.body;
  models.applicant_offer_favorites
    .insertFavorite(applicantId, offerId)
    .then(([favorites]) => {
      res.location(`/favorites${favorites.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
// ------------Récupérer tous les favoris------------
const getAllFavories = (req, res) => {
  models.applicant_offer_favorites
    .findAll()
    .then(([favorites]) => {
      res.send(favorites).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
module.exports = {
  addFavorite,
  getAllFavories,
};
