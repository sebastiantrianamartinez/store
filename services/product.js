const { Model, DataTypes } = require('sequelize');
const Product = require('../models/products.model');
const boom = require('@hapi/boom');

class ProductsController {
  async create(productData) {
    try {
      // Crear un nuevo producto usando el modelo de Sequelize y los datos recibidos
      const newProduct = await Product.create(productData);
      return newProduct;
    } catch (error) {
      throw boom.badImplementation("Error creating product", error);
    }
  }

  async find() {
    try {
      // Buscar todos los productos usando el modelo de Sequelize
      const products = await Product.findAll();
      return products;
    } catch (error) {
      throw boom.badImplementation("Error finding products", error);
    }
  }

  async findOne(id) {
    try {
      // Buscar un producto por su ID usando el modelo de Sequelize
      const product = await Product.findByPk(id);
      if (!product) {
        throw boom.notFound("Product Id not found");
      }
      return product;
    } catch (error) {
      throw boom.badImplementation("Error finding product", error);
    }
  }

  async delete(id) {
    try {
      // Eliminar un producto por su ID usando el modelo de Sequelize
      const deletedProductCount = await Product.destroy({
        where: { id }
      });
      if (deletedProductCount === 0) {
        throw boom.notFound("Product Id not found");
      }
      return { message: "Product deleted successfully" };
    } catch (error) {
      throw boom.badImplementation("Error deleting product", error);
    }
  }

  async update(id, newData) {
    try {
      const [updatedRowsCount, updatedRows] = await Product.update(newData, {
        where: { id },
        returning: true // Retorna los registros actualizados
      });
      if (updatedRowsCount === 0) {
        throw boom.notFound("Product Id not found");
      }
      return updatedRows[0]; // Retorna el primer registro actualizado
    } catch (error) {
      throw boom.badImplementation("Error updating product", error);
    }
  }
}

module.exports = ProductsController;
