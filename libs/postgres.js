const { Sequelize } = require('sequelize');
const { config } = require('./../config/config');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: config.dbHost,
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('La conexión a la base de datos se estableció correctamente.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

testConnection();

module.exports = sequelize;
