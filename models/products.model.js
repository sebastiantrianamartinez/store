const { Model, DataTypes } = require('sequelize');
const sequelize = require('../libs/postgres');

class Product extends Model {}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'product',
  tableName: 'products',
  timestamps: false
});

module.exports = Product;
