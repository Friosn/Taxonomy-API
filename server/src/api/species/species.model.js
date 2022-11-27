const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const speciesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  habitat: { type: String, required: true },
  size: { type: String, required: true },
  taxonomy: { type: String, required: true },
  image: { type: String, required: true }
}, {
  timestamps: true
})

speciesSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('species', speciesSchema)
