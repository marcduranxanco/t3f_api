const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController'); //Import User Controller

/* CRUD USERS */
//Create
router.post('/', UserController.create);
//Read
router.get('/', UserController.getAll);
router.get('/:id', UserController.getOne);
//Update
router.put('/:id', UserController.update);
//Delete
router.delete('/:id', UserController.delete);

/* LOGIN */

module.exports = router;