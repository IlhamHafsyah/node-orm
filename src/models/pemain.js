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
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false
  }
)

// Export model Product
data.removeAttribute('id')
module.exports = data
