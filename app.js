const express = require('express')
const personRouter = require('./controllers/person')
const middleware = require('./utils/middleware')
const config = require('./utils/config')

const app = express()

//This will tear down and recreate the initial "database" when the server is created
config.initPersonsData()

app.use(express.json())
app.use(middleware.requestLogger)

app.use('/person', personRouter)

app.use(middleware.errorHandler)

module.exports = app