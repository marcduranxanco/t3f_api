const express = require('express');
const router = express.Router();
const CardsController = require('../controllers/CardsController'); //Import Cards Controller
const {authentication} = require('../middleware/authentication.js');

/* CRUD Cards */
//CREATE
router.post('/', authentication, CardsController.create);
//READ
router.get('/:id?', CardsController.read);
//UPDATE
router.put('/:id', CardsController.update);
//DELETE
router.delete('/:id', CardsController.delete);

module.exports = router;