const express = require('express');
const router = express.Router();

const ProductsController = require('../services/product');
const productsController = new ProductsController();

const { validatorHandler } = require('../middlewares/validator.handler');
const { createProductSchema, updateProductSchema } = require('../schemas/product.schema');

// Obtener todos los productos
router.get('/', async (req, res, next) => {
    try {
        const products = await productsController.find();
        res.json(products);
    } catch (error) {
        next(error);
    }
});

// Crear un nuevo producto
router.post('/', validatorHandler(createProductSchema, 'body'), async (req, res, next) => {
    try {
        const productData = req.body; // Obtenemos los datos del producto del cuerpo de la solicitud
        const newProduct = await productsController.create(productData); // Pasamos los datos del producto al método create
        res.json(newProduct);
    } catch (error) {
        next(error);
    }
});

// Obtener un producto por su ID
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await productsController.findOne(id);
        res.json(product);
    } catch (error) {
        next(error);
    }
});

// Actualizar un producto por su ID
router.put('/:id', validatorHandler(updateProductSchema, 'body'), async (req, res, next) => {
    try {
        const { id } = req.params;
        const newData = req.body;
        const updatedProduct = await productsController.update(id, newData);
        res.json(updatedProduct);
    } catch (error) {
        next(error);
    }
});

// Eliminar un producto por su ID
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await productsController.delete(id);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
