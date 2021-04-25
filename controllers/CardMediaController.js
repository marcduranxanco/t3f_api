const { cards_media, cards, media, users } = require("../database/models");

//CRUD media
/* cardsCONTROLLER DEFINITION */
const CardmediaController = {};

//CREATE: required params: id_tmdb, id_custom_media, id_platform
CardmediaController.create = async (req, res) => {
    cards_media
    .create(req.body)
    .then((cardmedia) => res.status(201).send(cardmedia))
    .catch((err) => {
      console.error(err);
      res.status(500).send({
        message: `There was a problem trying to register the cardmedia media`,
        error: err.message,
      });
    });
};

//Read
// Lectura de todos los datos
CardmediaController.read = async (req, res) => {
    //READ ALL
    if (!req.params.id) {
        cards_media.findAll().then((cardmedia) => {
        res.status(200).json(cardmedia);
        });
    //READ ONE
    } else {
        let cardmedia = await cards_media.findByPk(req.params.id);
        if (!cardmedia) {
        return res.status(400).send({ message: "This cardmedia doesn't exists" });
        } else {
        return res.status(200).send(cardmedia);
        }
    }
};

CardmediaController.filter = async (req, res) => {
  cards_media.findAll({
    include: [
      { model: media },
      { model: cards, include: [{ model: users }] }
    ]
  }).then((cm) => {
    res.status(200).json(cm);
  });
};

//Update
CardmediaController.update = async (req, res) => {
    let cM = req.body;
    await cards_media
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
CardmediaController.delete = async (req, res) => {
    await cards_media
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

module.exports = CardmediaController;