const { media } = require("../database/models");

//CRUD MEDIA
/* MEDIACONTROLLER DEFINITION */
const MediaController = {};

//CREATE: required params: id_tmdb, id_custom_media, id_platform
MediaController.create = async (req, res) => {
    //CHECK PLATFORMS
    if(IsJsonString(req.body.platforms)){
        let platforms = JSON.parse(req.body.platforms);
        console.log(platforms);
        
        
    }else{
        res.status(500).send({
            message: `There was a problem creating a new media`,
            error: `The param "platforms" it's not a json`,
        });
    }

    // media
    //     .create(req.body)
    //     .then((media) => res.status(201).send(media))
    //     .catch((err) => {
    //         console.error(err);
    //         res.status(500).send({
    //         message: `There was a problem creating a new media`,
    //         error: err.message,
    //         });
    //     });
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
    res.status(200).send("read");
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