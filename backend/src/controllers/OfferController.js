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

// ------------Get Company Offers------------
const getCompanyOffers = (req, res) => {
  models.offer
    .findCompanyOffers(req.payload.sub)
    .then(([offers]) => {
      res.send(offers).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// ------------Create offer------------
const addOffer = (req, res) => {
  const {
    title,
    contractType,
    category,
    city,
    missions,
    technical,
    advantages,
  } = req.body;
  models.offer
    .createOffer(
      {
        title,
        contractType,
        category,
        city,
        missions,
        technical,
        advantages,
      },
      req.payload.sub
    )
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// ------------Delete offers before delete Company------------
const deleteOffersToDeleteCompany = (req, res, next) => {
  let companyId;
  if (req.params.id) {
    companyId = req.params.id;
  } else {
    companyId = req.payload.sub;
  }
  models.offer
    .deleteOfferByCompanyid(companyId)
    .then(() => next())
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllOffers,
  getFilteredOffers,
  deleteOfferById,
  getCompanyOffers,
  addOffer,
  deleteOffersToDeleteCompany,
};
