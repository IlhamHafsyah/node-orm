const data = require('../models/pemain')

module.exports = {
  getPemain: async (req, res) => {
    try {
      const result = await data.findAll()
      res.send(result)
    } catch (err) {
      console.log(err)
    }
  }
}
