const router = require('express').Router()
const {
  getPemain,
  getPemainByName,
  addPemain,
  updatePemain,
  deletePemain
} = require('../controllers/pemain')

router.get('/', getPemain)
router.get('/name', getPemainByName)
router.post('/', addPemain)
router.patch('/', updatePemain)
router.delete('/', deletePemain)

module.exports = router
