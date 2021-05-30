const akumulasi = require('../models/akumulasi')
const helper = require('../helper/response')
const data = require('../models/pemain')

module.exports = {
  getKartu: async (req, res) => {
    try {
      const result = await akumulasi.findAll()
      return helper.response(res, 200, 'Success get all pemain', result)
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  },
  getKartuPemain: async (req, res) => {
    try {
      const result = await akumulasi.findAll({
        include: {
          model: data
        }
      })
      return helper.response(res, 200, 'Success get all pemain', result)
    } catch (err) {
      console.log(err)
      return helper.response(res, 400, 'Bad Request')
    }
  },
  countKartuPemain: async (req, res) => {
    try {
      const result = await akumulasi.findAndCountAll({ group: ['nama'] })
      return helper.response(res, 200, 'Success get all pemain', result)
    } catch (err) {
      console.log(err)
      return helper.response(res, 400, 'Bad Request')
    }
  }
}
