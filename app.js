const express = require('express')
const sparkpostRouter = require('./controllers/sparkpost')

const app = express()

app.use(express.json())

app.use('/sparkpost', sparkpostRouter)

module.exports = app