const mongoose = require('mongoose')

mongoose.Promise = global.Promise

require('./ligaModelo')
require('./equipoModelo')
require('./jugadorModelo')

require('./index')

const db = mongoose.connect('mongodb://localhost:27017/futbol', 
    {
        useNewUrlParser: true
    }
)

module.exports = db