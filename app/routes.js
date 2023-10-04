const express = require('express');
const router = express.Router();
const controller = require("./controller/index")

router.get('/products',controller.listProduct)

module.exports = router;