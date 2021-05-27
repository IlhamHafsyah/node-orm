const Sequelize = require('sequelize')
require('dotenv').config()
const db = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    dialect: 'mysql',
    host: 'localhost'
  }
)

db.authenticate()
  .then(function () {
    console.log('You are now connected!')
  })
  .catch(function (err) {
    console.log('cant connect to database', err)
  })

module.exports = db
