const models = require("../models");

// ------------Récupérer toutes les offres------------
const getAllOffers = (req, res) => {
  models.offer
    .findOffer()
    .then(([offers]) => {
      res.send(offers).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getFilteredOffers = (req, res) => {
  const { keyword, localization, categories, contract } = req.body;
  const categoriesIds = [];
  const contractIds = [];
  for (let i = 0; i < categories.length; i += 1) {
    if (categories[i].checked) {
      categoriesIds.push(categories[i].id);
    }
  }
  for (let i = 0; i < contract.length; i += 1) {
    if (contract[i].checked) {
      contractIds.push(contract[i].id);
    }
  }
  models.offer
    .findByFilters(keyword, localization, categoriesIds, contractIds)
    .then(([offers]) => {
      res.send(offers).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// ------------Delete Offer------------
const deleteOfferByCompanyId = (req, res, next) => {
  const { id } = req.params;
  models.offer
    .deleteByCompanyId(id)
    .then(() => {
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const deleteOfferById = (req, res) => {
  const { id } = req.params;
  models.offer
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

module.exports = {
  getAllOffers,
  getFilteredOffers,
  deleteOfferByCompanyId,
  deleteOfferById,
};
