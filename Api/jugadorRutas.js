const express = require('express')
const jugador = require('./jugadorControlador')

const router = express.Router()

router.get('/jugador/', jugador.getJugador)
router.post('/jugador/', jugador.createJugador)
router.put('/jugador/:jugador_id', jugador.updateJugador)
router.delete('/jugador/:jugador_id', jugador.deleteJugador)

module.exports = router