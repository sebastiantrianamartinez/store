const express = require('express');
const router = express.Router();

const Products = require('./../services/product');
const product = new Products(3);

// ¡ products

router.get('/', (req, res) => {
    const products = product.find();
    res.json(products);
});

module.exports = router;
