const { Cards_Media, Cards, Media, Users } = require("../database/models");

//CRUD MEDIA
/* CARDSCONTROLLER DEFINITION */
const CardMediaController = {};

//CREATE: required params: id_tmdb, id_custom_media, id_platform
CardMediaController.create = async (req, res) => {
    Cards_Media
    .create(req.body)
    .then((cardMedia) => res.status(201).send(cardMedia))
    .catch((err) => {
      console.error(err);
      res.status(500).send({
        message: `There was a problem trying to register the cardMedia media`,
        error: err.message,
      });
    });
};

//Read
// Lectura de todos los datos
CardMediaController.read = async (req, res) => {
    //READ ALL
    if (!req.params.id) {
        Cards_Media.findAll().then((cardMedia) => {
        res.status(200).json(cardMedia);
        });
    //READ ONE
    } else {
        let cardMedia = await Cards_Media.findByPk(req.params.id);
        if (!cardMedia) {
        return res.status(400).send({ message: "This cardMedia doesn't exists" });
        } else {
        return res.status(200).send(cardMedia);
        }
    }
};

CardMediaController.filter = async (req, res) => {
  Cards_Media.findAll({
    include: [
      { model: Media },
      { model: Cards, include: [{ model: Users }] }
    ]
  }).then((cm) => {
    res.status(200).json(cm);
  });
};

//Update
CardMediaController.update = async (req, res) => {
    let cM = req.body;
    await Cards_Media
      .findOne({
        where: { id: req.params.id },
      })
      .then((card) => {
        card.update(cM);
        card.save().then(() => {
          res.status(200).send({
            message: "Cm updated correctly",
          });
        }).catch((err) => {
          res.status(400).send({
            message: "Error updating cm",
            error: err.message,
          });
        });
      })
};

//Delete
//Es necesario que haga un delete?
CardMediaController.delete = async (req, res) => {
    await Cards_Media
    .findByPk(req.params.id)
    .then((cM) => {
      cM.destroy();
      res.status(200).send({
        message: "cM deleted correctly",
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Error deleting cM",
        error: err.message,
      });
    });
};

module.exports = CardMediaController;