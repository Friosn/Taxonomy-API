const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  reproduction: { type: String, required: true },
  incuvation: { type: String, required: true },
  skeletonType: { type: String, required: true },
  skinType: { type: String, required: true },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'order' }]
},
{
  timestamps: true
}
)

module.exports = mongoose.model('clase', classSchema)
