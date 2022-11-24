const mongoose = require('mongoose')

const speciesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  habitat: { type: String, required: true },
  size: { type: String, required: true },
  taxonomy: { type: String, required: true },
  image: { type: String, required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('species', speciesSchema)
