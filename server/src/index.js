const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
/* const cookieParser = require('cookie-parser') */
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const compression = require('compression')
const path = require('path')

const { connect } = require('./helper/database/connect')
const { setUpCloudinary } = require('./helper/cloudinary/config.cloudinary')
const UserRoutes = require('./api/user/user.routes')
const ClassRoutes = require('./api/class-b/class.routes')
const OrderRoutes = require('./api/order/order.routes')
const FamilyRoutes = require('./api/family/family.routes')
const SpeciesRoutes = require('./api/species/species.routes')
const setError = require('./helper/error/handle.error')
/* const { signedCookie } = require('cookie-parser')
 */
dotenv.config()
const app = express()
connect()
setUpCloudinary()
app.use(compression())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
// And the header configuration
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true
  })
)
// We also want a transition- limit in our app; so... 1mb is a lot, we normally will put less
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ limit: '1mb', extended: true }))
app.set('secretKey', process.env.SECRET_KEY_JWT) // we will normally delete the one assigned at the beggining and put directly this one

// ---------------- COOKIES -----------------
/* app.use(cookieParser())
app.get('/cookie', (req, res) => {
  res.cookie('I Cookie', 'Cookie Monster', {
    maxAge: 10000,
    httpOnly: true,
    secure: true,
    sameSite: 'lax'
  })
  res.send('Shooting cookies to the space 🍪🚀')
}) */
// ----------------------------SWAGGER ----------------------------------

const swaggerSpecification = {
  definition: {
    openapi: '3.0.0',
    info: {
      description: 'This is a Bio taxonomy API',
      version: '1.0.0',
      title: 'Taxonomy Park'
    },
    servers: [
      {
        url: 'http://localhost:8080'
      }
    ]
  },
  apis: [
    `${path.join(__dirname, './api/species/species.routes.js')}`,
    `${path.join(__dirname, './api/order/order.routes.js')}`,
    `${path.join(__dirname, './api/family/family.routes.js')}`,
    `${path.join(__dirname, './api/class-b/class.routes.js')}`
  ]
}
const specs = swaggerJsdoc(swaggerSpecification)
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(specs))
// -----------------------------------------------------------

// ----------Here will come the routes of the server--------
app.use('/users', UserRoutes)
app.use('/class', ClassRoutes)
app.use('/order', OrderRoutes)
app.use('/family', FamilyRoutes)
app.use('/species', SpeciesRoutes)

app.use('*', (req, res, next) => next(setError(404, 'Route Not Found')))
// --------------------------------

app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || 'Unexpected error 🤢')
})

app.disable('x-powered-by') // Like that anybody will be able to know with which lenguage was this app made

// Now we connect to the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port : http://localhost:${process.env.PORT}`) // this PORT would also be directly substituted by process.env.PORT for more anonymity
})
