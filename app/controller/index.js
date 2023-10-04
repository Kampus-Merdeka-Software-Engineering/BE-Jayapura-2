const product = require('../model/product')

function listProduct(req, res, next) {
    product.findAll()
    .then(function(data){
        res.json(data)
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