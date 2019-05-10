const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jugador = new Schema(
    {
      nombrejugador: String,
      edadjugador: Number,
      equipojugador:String,
      golesjugador: Number,
      posicionjugador: String
    
    },
    {
      collection: 'jugador',
      toJSON: { virtuals: true },
      versionKey: false
    }
  )
  
  module.exports = mongoose.model('jugador', jugador)