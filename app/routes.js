const express = require('express');
const router = express.Router();
const controller = require("./controller/index")
const loginController = require('./controller/loginController')

// Endpoint untuk login
router.post('/login', loginController.login)
router.post('/signup', loginController.signup);

router.get('/products', controller.listProduct)

module.exports = router;