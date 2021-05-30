const router = require('express').Router()
const data = require('./routes/pemain')
const akumulasi = require('./routes/akumulasi')

router.use('/', data)
router.use('/kartu', akumulasi)

module.exports = router
