// import sequelize
const Sequelize = require('sequelize')
// import connection
const db = require('../config/mysql')

// Define schema
const data = db.define(
  'data',
  {
    // Define attributes
    nama: Sequelize.STRING,
    posisi: Sequelize.STRING,
    bergabung: Sequelize.DATE
  },
  {
    freezeTableName: true
  }
)

// Export model Product
data.removeAttribute('id')
data.removeAttribute('createdAt')
data.removeAttribute('updatedAt')
module.exports = data
