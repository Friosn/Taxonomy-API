const mongoose = require('mongoose')

const familySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'class', required: true },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'order', required: true },
  species: [{ type: mongoose.Schema.Types.ObjectId, ref: 'species', required: true }]
}, {
  timestamps: true

})

module.exports = mongoose.model('family', familySchema)
