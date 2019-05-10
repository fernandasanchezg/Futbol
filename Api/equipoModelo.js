const mongoose = require('mongoose')
const Schema = mongoose.Schema


const equipo = new Schema(
    {
     nombreequipo: String,
     paisequipo: String,
     nombretecnico: String
    },
  
    {
      collection: 'equipo',
      toJSON: { virtuals: true },
      versionKey: false
    }
  )
  
  module.exports = mongoose.model('equipo', equipo)