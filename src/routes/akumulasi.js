const router = require('express').Router()
const {
  getKartu,
  getKartuPemain,
  countKartuPemain
} = require('../controllers/akumulasi')

router.get('/', getKartu)
router.get('/pemain', getKartuPemain)
router.get('/count', countKartuPemain)

module.exports = router
