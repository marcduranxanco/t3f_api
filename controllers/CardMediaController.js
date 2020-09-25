const { cards_media } = require("../database/models");

//CRUD MEDIA
/* CARDSCONTROLLER DEFINITION */
const CardMediaController = {};

//CREATE: required params: id_tmdb, id_custom_media, id_platform
CardMediaController.create = async (req, res) => {
    res.status(200).send("Create cardmedia");
};


//Update
CardMediaController.read = async (req, res) => {
    res.status(200).send("Read cardmedia");
};

//Read
// Lectura de todos los datos
CardMediaController.update = async (req, res) => {
    res.status(200).send("Update cardmedia");
};

//Delete
//Es necesario que haga un delete?
CardMediaController.delete = async (req, res) => {
    res.status(200).send("Delete cardmedia");
};

module.exports = CardMediaController;