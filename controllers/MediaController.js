const { Media } = require("../database/models");

//CRUD MEDIA
/* MEDIACONTROLLER DEFINITION */
const MediaController = {};

//CREATE: required params: id_tmdb, id_custom_media, id_platform
MediaController.create = async (req, res) => {
    //CHECK PLATFORMS
    // if(IsJsonString(req.body.platforms)){
    //     let platforms = JSON.parse(req.body.platforms); //Futur
    //     //INSERT THE MEDIA ELEMENT
        
    // }else{
    //     res.status(500).send({
    //         message: `There was a problem creating a new media`,
    //         error: `The param "platforms" it's not a json`,
    //     });
    // }

    Media
        .create(req.body)
        .then((media) => res.status(201).send(media))
        .catch((err) => {
            console.error(err);
            res.status(500).send({
            message: `There was a problem creating a new media`,
            error: err.message,
            });
        });
};

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

//Update
MediaController.read = async (req, res) => {
    //READ ALL
    if (!req.params.id) {
        Media.findAll().then((media) => {
        res.status(200).json(media);
        });
        //READ ONE
    } else {
        let media = await Media.findByPk(req.params.id);
        if (!media) {
        return res.status(400).send({ message: "This media you have requested doesn't exists" });
        } else {
        return res.status(200).send(media);
        }
    }
};

//Read
// Lectura de todos los datos
MediaController.update = async (req, res) => {
    res.status(200).send("update");
};

//Delete
//Es necesario que haga un delete?
MediaController.delete = async (req, res) => {
    res.status(200).send("delete");
};

module.exports = MediaController;