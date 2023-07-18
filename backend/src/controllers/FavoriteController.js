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
// ------------Récupérer une offre favori------------
const getFavorite = (req, res) => {
  const applicantId = req.payload.sub;
  const offerId = req.params.id;
  models.applicant_offer_favorites
    .findFavorite(applicantId, offerId)
    .then(([favorites]) => {
      res.json(favorites).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
// ------------Récupérer tous les favoris------------
const getAllFavorites = (req, res) => {
  const applicantId = req.payload.sub;
  models.applicant_offer_favorites
    .findFavorites(applicantId)
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
  const offerId = req.params.id;
  const applicantId = req.payload.sub;
  models.applicant_offer_favorites
    .removeFavorite(applicantId, offerId)
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
  addFavorite,
  getAllFavorites,
  deleteFavorite,
  getFavorite,
};
