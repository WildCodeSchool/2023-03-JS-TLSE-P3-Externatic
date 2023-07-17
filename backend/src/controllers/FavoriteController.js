const models = require("../models");
// ------------Ajouter une offre en favori------------
const addFavorite = (req, res) => {
  const { offerId } = req.body;
  const applicantId = req.payload.sub;
  models.applicant_offer_favorites
    .insertFavorite(applicantId, offerId)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// ------------Récupérer tous les favoris------------
const getAllFavories = (req, res) => {
  const applicantId = req.payload.sub;
  models.applicant_offer_favorites
    .findFavories(applicantId)
    .then(([favorites]) => {
      res.send(favorites).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
// ------------Supprimer une offre des favoris------------
const deleteFavorite = (req, res) => {
  const { offerId } = req.body;
  const applicantId = req.payload.sub;
  models.applicant_offer_favorites
    .removeFavorite(applicantId, offerId)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
module.exports = {
  addFavorite,
  getAllFavories,
  deleteFavorite,
};
