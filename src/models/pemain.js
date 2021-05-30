// import sequelize
const Sequelize = require('sequelize')
// import connection
const db = require('../config/mysql')
const akumulasi = require('./akumulasi')

// Define schema
const data = db.define(
  'data',
  {
    // Define attributes
    nama: { type: Sequelize.STRING, primaryKey: true },
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

data.hasMany(akumulasi, { foreignKey: 'nama' })
akumulasi.belongsTo(data, { foreignKey: 'nama' })

// Export model Product
data.removeAttribute('id')
module.exports = data
