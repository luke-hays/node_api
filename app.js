const express = require('express')
const sparkpostRouter = require('./controllers/sparkpost')
const middleware = require('./utils/middleware')
const config = require('./utils/config')

const app = express()

//This will tear down and recreate the initial "database" when the server is created
config.initPersonsData()

app.use(express.json())
// app.use(middleware.requestLogger)

app.use('/sparkpost', sparkpostRouter)

app.use(middleware.errorHandler)

module.exports = app