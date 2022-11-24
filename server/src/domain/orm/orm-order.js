const conn = require('../repositories/mongo.repository')
const magic = require('../../utils/magic')

exports.GetAllOrders = async () => {
  try {
    return await conn.db.connMongo.Order.find()
  } catch (error) {
    magic.LogDanger('We could not get all the Orders 🐻‍❄️')
    return await { error: { code: 123, message: error } }
  }
}

exports.CreateOrder = async (Name, Feeding, Incisors, Family, Clas) => {
  try {
    const data = await new conn.db.connMongo.Order({
      name: Name,
      feeding: Feeding,
      incisors: Incisors,
      families: Family,
      class: Clas
    })
    data.save()
    return true
  } catch (error) {
    magic.LogDanger('Cannot create the biological Orders 🧬')
    return await { error: { code: 123, message: error } }
  }
}
