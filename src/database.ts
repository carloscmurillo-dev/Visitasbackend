// database.ts
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_DATABASE || "gessa_dev2",
  process.env.DB_USER || "devs",
  process.env.DB_PASSWORD || "Pharma123",
  {
    host: process.env.DB_HOST || '144.126.138.17',
    dialect: 'mssql',
    port: process.env.DB_PORT || 1434,
    pool: {
      max: 15,
      min: 0,
      acquire: 60000,
      idle: 10000
    },
    dialectOptions: {
      options: {
        requestTimeout: 60000,
        connectTimeout: 30000
      },
    },
    logging: process.env.NODE_ENV === 'development' ? console.log : false
  }
);

module.exports = sequelize;
