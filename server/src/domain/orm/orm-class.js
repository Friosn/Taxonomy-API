const conn = require('../repositories/mongo.repository')
const magic = require('../../utils/magic')

exports.GetAll = async () => {
  try {
    return await conn.db.connMongo.Clas.find()
  } catch (error) {
    magic.LogDanger('We could not get all the Classes 🦠')
    return await { error: { code: 123, message: error } }
  }
}

exports.Create = async (Name, Reproduction, Incuvation, SkeletonType, SkinType, Orders) => {
    try {
        const data = await new conn.db.connMongo.Clas({
            name: Name,
            reproduction: Reproduction,
            incuvation: Incuvation,
            skeletonType: SkeletonType,
            skinType: SkinType,
            orders: Orders
        })
        data.save()
        return true
    } catch (error) {
        magic.LogDanger('Cannot create the biological Class 🧪')
        return await {error: {code: 123, message: error}}
    }
}