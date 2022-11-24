const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  feeding: { type: String, required: true },
  incisors: { type: String, required: true },
  families: [{ type: mongoose.Schema.Types.ObjectId, ref: 'family', required: true }],
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'class', required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('order', orderSchema)
