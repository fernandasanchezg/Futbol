const mongoose = require('mongoose')
const Schema = mongoose.Schema

const liga = new Schema(
    {
      nombre: String,
      pais: String
    },
    {
      collection: 'liga',
      toJSON: { virtuals: true },
      versionKey: false
    }
  )
  
  module.exports = mongoose.model('liga', liga)