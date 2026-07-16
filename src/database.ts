// database.js
const { Sequelize } = require('sequelize');







   const sequelize = new Sequelize(process.env.DB_DATABASE ?? "gessa_dev2", process.env.DB_USER ?? "devs",
        process.env.DB_PASSWORD ?? "Pharma123", {
        host: process.env.DB_HOST ?? '144.126.138.17',
        dialect: 'mssql', port:1434,
    
  pool: {
    max: 15,
    min: 0,
    acquire: 60000,  // ⬅ tiempo máximo para obtener conexión del pool
    idle: 10000
  },
  dialectOptions: {
    options: {
      requestTimeout: 60000,   // ⬅ tiempo máximo que puede durar un query (ms)
      connectTimeout: 30000    // ⬅ tiempo para conectar
    },
  },
}




);



module.exports = sequelize;
