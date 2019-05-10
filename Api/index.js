const express = require('express')

const ligaRutas = require('./ligaRutas')
const equipoRutas = require('./equipoRutas')
const jugadorRutas = require('./jugadorRutas')

const router = express.Router()

router.use('/api/', ligaRutas)
router.use('/api/', equipoRutas)
router.use('/api/', jugadorRutas)

module.exports = router