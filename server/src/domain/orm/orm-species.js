const conn = require('../repositories/mongo.repository')
const magic = require('../../utils/magic')

exports.GetAllSpecies = async () => {
  try {
    return await conn.db.connMongo.Species.find()
  } catch (error) {
    magic.LogDanger('We could not get all the Species 🐼')
    return await { error: { code: 123, message: error } }
  }
}

exports.CreateSpecies = async (Name, Habitat, Size, Taxonomy) => {
  try {
    const data = await new conn.db.connMongo.Species({
      name: Name,
      habitat: Habitat,
      size: Size,
      taxonomy: Taxonomy
    })
    data.save()
    return true
  } catch (error) {
    magic.LogDanger('Cannot create the Species 😿')
    return await { error: { code: 123, message: error } }
  }
}
