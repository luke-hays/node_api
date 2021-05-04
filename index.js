const http = require('http')
const app = require('./app')
const logger = require('./utils/logger')
const config = require('./utils/config')

//This will tear down and recreate the initial "database" when the server is created
config.initPersonsData()
const server = http.createServer(app)

server.listen(config.PORT, () => {
	logger.info(`Server running on port ${config.PORT}`)
})