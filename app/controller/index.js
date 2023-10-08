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



async function contact(req, res){
    try {
        const contact = await Contact.create(req.body);
        res.json({ success: true, contact });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

module.exports = {
    listProduct, 
    contact
}