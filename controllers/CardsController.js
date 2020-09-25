const { Cards } = require("../database/models");

//CRUD MEDIA
/* CARDSCONTROLLER DEFINITION */
const CardsController = {};

//CREATE: required params: id_tmdb, id_custom_media, id_platform
CardsController.create = async (req, res) => {
  req.body.id_user = req.user.id;
  Cards
  .create(req.body)
  .then((card) => res.status(201).send(card))
  .catch((err) => {
    console.error(err);
    res.status(500).send({
      message: `There was a problem trying to register the card`,
      error: err.message,
    });
  });
};

//Update
CardsController.read = async (req, res) => {
  //READ ALL
  if (!req.params.id) {
    Cards.findAll().then((card) => {
      res.status(200).json(card);
    });
    //READ ONE
  } else {
    let card = await Cards.findByPk(req.params.id);
    if (!card) {
      return res.status(400).send({ message: "This card doesn't exists" });
    } else {
      return res.status(200).send(card);
    }
  }
};

//Read
// Lectura de todos los datos
CardsController.update = async (req, res) => {
    let c = req.body;
    await Cards
      .findOne({
        where: { id: req.params.id },
      })
      .then((card) => {
        card.update(c);
        card.save().then(() => {
          res.status(200).send({
            message: "card updated correctly",
          });
        }).catch((err) => {
          res.status(400).send({
            message: "Error updating card",
            error: err.message,
          });
        });
      })
};

//Delete
//Es necesario que haga un delete?
CardsController.delete = async (req, res) => {
    await Cards
    .findByPk(req.params.id)
    .then((card) => {
      card.destroy();
      res.status(200).send({
        message: "Card deleted correctly",
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Error deleting Card",
        error: err.message,
      });
    });
};

module.exports = CardsController;