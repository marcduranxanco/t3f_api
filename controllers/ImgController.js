const { Img } = require("../database/models");

/* IMG CONTROLLER DEFINITION */
const ImgController = {};

/**
 * Create new image
 * Example: let created = await ImgController.create(req.body.path_img).then((image) => {return image});
 * @param {*} path_img required params: path_img
 */
ImgController.create = async (path_img) => {
  console.log("Imgcontroller.create")

  //Check exists
  let image = await ImgController.read(path_img).then((image) => { return image});

  if(!image){ // The image doesn't exist. Creating the image
    let image = await Img.create({ path : path_img }).then((image) => { return image });
    return image;
  }else{ // The image exists. List o all
    return image;
  }
};

/**
 * Read images from database
 * Example: let image = await ImgController.read(req.body.path_img).then((image) => {return image});
 * @param {*} path_img  If null, read all.
 * @return {Img} image
 */
ImgController.read = async (path_img) => {
  console.log("ImgController.read: In");
    //READ ALL
    if (!path_img) {
      console.log("ImgController.read: Find all");
      let images = await Img.findAll();
      return images;
    }
    //READ ONE
    else {
      console.log("ImgController.read: Find One");
      let image = await Img.findOne({ 
        where: { path: path_img }
      });
      return image;
    }
  };
  
/**
 * Delete image from database.
 * Example: let deleted = await ImgController.delete(image).catch((error) => {return error.message});
 * @param {*} image
 * @return {array} data
 */
ImgController.delete = async (image) => {
  console.log("ImgController.delete: Deleting img");
  try {
    await image.destroy();
    data = {
      code : 200,
      message :  "Success: Image deleted",
      image: image
    }
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

// //UPDATE
ImgController.update = async (image) => {
  console.log("ImgController.update: Updating img");
  try {
      await Img.update(image);
      data = {
        code : 200,
        message :  "Success: Image updated",
        image: image
      }
      return data;
    } catch (error) {
      throw new Error(error);
    }
};

module.exports = ImgController;