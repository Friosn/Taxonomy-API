const dotenv = require('dotenv')
const config = require('config-yml')

const mongoose = require('mongoose')
const magic = require('../../utils/magic')
const clas = require('../entities/entity-class')
const order = require('../entities/entity-order')
const family = require('../entities/entity-family')
const species = require('../entities/entity-species')
const user = require('../entities/entity-user')

dotenv.config()

const db = {}

if (config.db.mongodb && config.db.mongodb.length > 0) {
  config.db.mongodb.map((c) => {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    db[c.nameconn] = {}
    db[c.nameconn].conn = mongoose
    db[c.nameconn].user = user(mongoose)
    db[c.nameconn].clas = clas(mongoose)
    db[c.nameconn].order = order(mongoose)
    db[c.nameconn].family = family(mongoose)
    db[c.nameconn].species = species(mongoose)
  })
  exports.db = db
  magic.LogInfo('Connecting to the data base 🛰️')
} else {
  magic.LogDanger('Data base does not exist 💔')
}

/* const MONGO_URI = process.env.MONGO_URI

const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    const { host, name } = db.connection
    console.log(
      `Conected to the data-base: ${name} || in the host: ${host} 🚀 🌕`
    )
  } catch (error) {
    console.error(setError(511, 'We could not connect with the data-base 😣'))
  }
}

module.exports = { connect } */
