
module.exports = (db) => {
  const classSchema = new db.Schema({
    name: { type: String, required: true },
    reproduccion: { type: String, required: true },
    incuvation: { type: String, required: true },
    skeletonType: { type: String, required: true },
    skinType: { type: String, required: true },
    orders: [{ type: db.Schema.Types.ObjectId, ref: 'order', required: true }]
  },
  {
    timestamps: true
  }
  )
  return db.model('clas', classSchema)
}
