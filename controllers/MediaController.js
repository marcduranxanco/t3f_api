const { Media } = require("../database/models");
const ImgController = require('./ImgController');

//CRUD MEDIA
/* MEDIACONTROLLER DEFINITION */
const MediaController = {};

/**
 * Create media. Creates media and image
 * @param {*} req Required fields:
 *    title:
 *    description:
 *    platforms_id:
 *    id_tmdb:
 *    path_img:
 * @param {*} res
 * 
 */
MediaController.create = async (req, res) => {
  console.log("MediaController.create: create")
  // - IMAGE CREATION: Create image if the param "path_img" exists in body.params
    let image;
    if(!req.body.path_img){
      console.log("Read image")
      image = await ImgController.read(req.body.path_img).then((image) => {return image});
      console.log("Image retrieved with id: "+image.get("id"))
      req.body["id_img"] = image.get("id");
    }
    if(!image){
      console.log("Create image")
      image = await ImgController.create(req.body.path_img).then((image) => {return image});
      console.log("Image created with id: "+ image.get("id"))
      req.body["id_img"] = image.get("id");
    }


  //CHECK PLATFORMS ID. TODO:
    // - Check that the platforms id, exists in database.
    //CHECK PLATFORMS
    // if(IsJsonString(req.body.platforms)){
    //     let platforms = JSON.parse(req.body.platforms); //Futur

  //INSERT THE MEDIA ELEMENT
  // }else{
  //     res.status(500).send({
  //         message: `There was a problem creating a new media`,
  //         error: `The param "platforms" it's not a json`,
  //     });
  // }

  Media.create(req.body)
    .then((media) => res.status(201).send(media))
    .catch((err) => {
      console.error(err);
      res.status(500).send({
        message: `There was a problem creating a new media`,
        error: err.message,
      });
    });
};

/**
 *
 * @param {*} str String with a json to validate
 */
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
      return res
        .status(400)
        .send({ message: "This media you have requested doesn't exists" });
    } else {
      return res.status(200).send(media);
    }
  }
};

//Read
// Lectura de todos los datos
MediaController.update = async (req, res) => {
  let med = req.body;
  await Media.findOne({
      where: { id: req.params.id },
    })
    .then((media) => {
      media.update(med);
      media.save()
        .then(() => {
          res.status(200).send({
            message: "Media updated correctly",
            media: med
          });
        })
        .catch((err) => {
          res.status(400).send({
            message: "Error updating media",
            error: err.message,
          });
        });
    });
};

//Delete
//Es necesario que haga un delete?
MediaController.delete = async (req, res) => {
    // //Remove image
    // let deleted = await ImgController.delete(image).catch((error) => {return error.message});
    // console.log(deleted);
  await Media.findByPk(req.params.id)
    .then((media) => {
      media.destroy();
      res.status(200).send({
        message: "media deleted correctly",
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Error deleting media",
        error: err.message,
      });
    });
};

module.exports = MediaController;
