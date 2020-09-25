const express = require('express');
const router = express.Router();
const MediaController = require('../controllers/MediaController'); //Import Media Controller
const {authentication, isAdmin} = require('../middleware/authentication.js');

/* CRUD MEDIA */
//CREATE
router.post('/', MediaController.create);
//READ
router.get('/:id', MediaController.read);
router.get('/:all', authentication, isAdmin, MediaController.readAll);
//UPDATE
router.put('/:id', MediaController.update);
//DELETE
router.delete('/:id', MediaController.delete);

module.exports = router;