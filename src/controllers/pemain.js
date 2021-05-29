const data = require('../models/pemain')
const helper = require('../helper/response')

module.exports = {
  getPemain: async (req, res) => {
    try {
      const result = await data.findAll()
      return helper.response(res, 200, 'Success get all pemain', result)
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  },
  getPemainByName: async (req, res) => {
    try {
      const { name } = req.query
      const result = await data.findOne({ where: { nama: name } })
      return helper.response(
        res,
        200,
        `Success get pemain data with name: ${name}`,
        result
      )
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  },
  addPemain: async (req, res) => {
    try {
      const { nama, posisi } = req.body
      const setData = {
        nama,
        posisi,
        bergabung: new Date()
      }
      await data.create(setData)
      return helper.response(res, 200, 'Success add pemain', setData)
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  },
  updatePemain: async (req, res) => {
    try {
      const { nama, posisi } = req.body
      await data.update(
        { posisi: posisi },
        {
          where: { nama: nama }
        }
      )
      const result = await data.findOne({ where: { nama: nama } })
      return helper.response(res, 200, 'Success update posisi pemain', result)
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  },
  deletePemain: async (req, res) => {
    try {
      const { nama } = req.body
      const result = await data.destroy({ where: { nama: nama } })
      console.log(result)
      return helper.response(
        res,
        200,
        `Success delete pemain with name: ${nama}`
      )
    } catch (err) {
      return helper.response(res, 400, 'Bad Request')
    }
  }
}
