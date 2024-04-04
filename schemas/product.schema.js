const joi = require('joi');


const idSchema = joi.number().integer();
const nameSchema = joi.string().alphanum().min(3).max(30);
const priceSchema = joi.number().integer().min(1000);

// Esquema para crear un nuevo producto
const createProductSchema = joi.object({
    name: nameSchema.required(),
    price: priceSchema.required(),
});

// Esquema para obtener un producto por su ID
const getProductSchema = joi.object({
    id: idSchema.required(),
});

// Esquema para actualizar un producto por su ID
const updateProductSchema = joi.object({
    name: nameSchema.optional(),
    price: priceSchema.optional(),
}).or('name', 'price');

// Esquema para eliminar un producto por su ID
const deleteProductSchema = joi.object({
    id: idSchema.required(),
});

module.exports = {
    createProductSchema,
    getProductSchema,
    updateProductSchema,
    deleteProductSchema
};
