const product = require('../model/product')
const express = require('express');
const router = express.Router();


function listProduct(req, res, next) {
    product.findAll()
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.json({
                error: err
            })
        })
}

module.exports = {
    listProduct
    
}