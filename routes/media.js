const express = require('express');
const router = express.Router();
const MediaController = require('../controllers/MediaController'); //Import Media Controller
const {authentication, isAdmin} = require('../middleware/authentication.js');

/* CRUD MEDIA */
//CREATE
router.post('/', authentication, isAdmin, MediaController.create);
//READ
router.get('/:id', MediaController.read);
router.get('/:all', MediaController.readAll);
//UPDATE
router.put('/:id', authentication, isAdmin, MediaController.update);
//DELETE
router.delete('/:id',  authentication, isAdmin, MediaController.delete);

module.exports = router;