const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController'); //Import User Controller

/* CRUD USERS */
//CREATE
router.post('/', UserController.create);
//READ
router.get('/:id?', UserController.read);
//UPDATE
router.put('/:id', UserController.update);
//DELETE
router.delete('/:id', UserController.delete);

/* LOGIN */
router.post('/login', UserController.login);

module.exports = router;