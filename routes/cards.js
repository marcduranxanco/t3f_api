const express = require('express');
const router = express.Router();
const CardsController = require('../controllers/CardsController'); //Import Cards Controller

/* CRUD Cards */
//CREATE
router.post('/', CardsController.create);
//READ
router.get('/:id?', CardsController.read);
//UPDATE
router.put('/:id', CardsController.update);
//DELETE
router.delete('/:id', CardsController.delete);

module.exports = router;