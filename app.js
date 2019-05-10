const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require('./API/ligaModelo')
require('./API/equipoModelo')
require('./API/jugadorModelo')

const routes = require('./API/index')

const app = express()

app.use(cors({ origin: '*' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', routes)

module.exports = app