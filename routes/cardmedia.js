const express = require('express');
const router = express.Router();
const CardMediaController = require('../controllers/CardMediaController'); //Import Cards Controller

/* CRUD Cards */
//CREATE
router.post('/', CardMediaController.create);
//READ
router.get('/:id?', CardMediaController.read);
//UPDATE
router.put('/:id', CardMediaController.update);
//DELETE
router.delete('/:id', CardMediaController.delete);

module.exports = router;