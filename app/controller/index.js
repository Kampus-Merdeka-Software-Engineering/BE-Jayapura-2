const product = require('../model/product')
const express = require('express');
const router = express.Router();


function listProduct(req, res, next) {
    product.findAll()
        .then(function (data) {
        //    Map the response data to the desired format
        const mappedData = data.map((product) => ({
            id: product.id,
            name: product.nama,
            image: product.image,
            price: product.harga,
            listImage: JSON.parse(product.image_list.replace(/'/g, '"')), // parse to array JS
            ukuran: JSON.parse(product.ukuran.replace(/'/g, '"')) // parse to array JS
      }));
      
        res.json(mappedData);
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