const router = require('express').Router()
const data = require('./routes/pemain')

router.use('/', data)

module.exports = router
