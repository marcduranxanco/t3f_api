const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController'); //Import User Controller

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST */
router.post('/signin', UserController.signin);

module.exports = router;