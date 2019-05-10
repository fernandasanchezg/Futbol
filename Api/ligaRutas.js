const express = require('express')
const liga = require('./ligaControlador')

const router = express.Router()

router.get('/liga/', liga.getLiga)
router.post('/liga/', liga.createLiga)
router.put('/liga/:liga_id', liga.updateLiga)
router.delete('/liga/:liga_id', liga.deleteLiga)

module.exports = router