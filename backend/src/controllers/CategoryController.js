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
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

// ------------Delete category------------
const deleteCategory = (req, res) => {
  const { id } = req.params;
  models.category
    .delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res
          .status(404)
          .send({ error: "La catégorie n'a pas pu être supprimée." });
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

// ------------Add category------------

const addCategory = (req, res) => {
  models.category
    .addCategory(req.body.categoryName)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Une erreur est survenue." });
    });
};

module.exports = {
  getAllCategories,
  deleteCategory,
  addCategory,
};
