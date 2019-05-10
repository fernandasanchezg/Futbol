const express = require('express')
const equipo = require('./equipoControlador')

const router = express.Router()

router.get('/equipo/', equipo.getEquipo)
router.get('/equipo/:liga_id', equipo.getLigaId)
router.post('/equipo/', equipo.createEquipo)
router.put('/equipo/:equipo_id', equipo.updateEquipo)
router.delete('/equipo/:equipo_id', equipo.deleteEquipo)

module.exports = router