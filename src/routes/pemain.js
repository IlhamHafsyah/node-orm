const router = require('express').Router()
const { getPemain } = require('../controllers/pemain')

router.get('/', getPemain)

module.exports = router
