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

// ------------Delete category------------
const deleteCategory = (req, res) => {
  const { id } = req.params;
  models.category
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

// ------------Add category------------

const addCategory = (req, res) => {
  if (req.body.categoryName) {
    models.category
      .addCategory(req.body.categoryName)
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
};

module.exports = {
  getAllCategories,
  deleteCategory,
  addCategory,
};
