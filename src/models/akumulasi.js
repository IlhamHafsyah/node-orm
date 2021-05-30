// import sequelize
const Sequelize = require('sequelize')
// import connection
const db = require('../config/mysql')

// Define schema
const akumulasi = db.define(
  'akumulasi',
  {
    // Define attributes
    nama: Sequelize.STRING,
    kartu: Sequelize.STRING
  },
  {
    freezeTableName: true,
    timestamps: false,
    updatedAt: false
  }
)

// Export model Product
akumulasi.removeAttribute('id')
module.exports = akumulasi
