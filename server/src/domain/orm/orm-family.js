// orm stands for Object Relational Mapping
const conn = require('../repositories/mongo.repository')
const magic = require('../../utils/magic')

exports.GetAllFamilies = async () => {
  try {
    return await conn.db.connMongo.Family.find()
  } catch (error) {
    magic.LogDanger('We could not get all the Families 👨‍👩‍👧‍👦')
    return await { error: { code: 123, message: error } }
  }
}

exports.CreateFamily = async (Name, Species, Order, Clas) => {
  try {
    const data = await new conn.db.connMongo.Family({
      name: Name,
      species: Species,
      order: Order,
      class: Clas
    })
    data.save()
    return true
  } catch (error) {
    magic.LogDanger('Cannot create the biological Families 🧪')
    return await { error: { code: 123, message: error } }
  }
}

/* exports.UpdateFamily = async (Name, Species, Order, Clas) => {
  try {
    const modifyData = await new conn.db.connMongo.Family({
      name: Name,
      species: Species,
      order: Order,
      class: Clas
    })
    const familyUpdated = await Family.findByIdAndUpdate(id, modifyData)
  } catch (error) {

  }
}
 */
