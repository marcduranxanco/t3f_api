const { cards } = require("../database/models");

//CRUD MEDIA
/* CARDSCONTROLLER DEFINITION */
const CardsController = {};

//CREATE: required params: id_tmdb, id_custom_media, id_platform
CardsController.create = async (req, res) => {
    res.status(200).send("Create card");
};


//Update
CardsController.read = async (req, res) => {
    res.status(200).send("Read card");
};

//Read
// Lectura de todos los datos
CardsController.update = async (req, res) => {
    res.status(200).send("Update card");
};

//Delete
//Es necesario que haga un delete?
CardsController.delete = async (req, res) => {
    res.status(200).send("Delete card");
};

module.exports = CardsController;