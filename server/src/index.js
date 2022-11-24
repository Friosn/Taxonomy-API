const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express();
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
