/* eslint-disable no-unused-vars */
const sparkpostRouter = require('express').Router()
const fs = require('fs')
const config = require('../utils/config')

sparkpostRouter.get('/', async (request, response) => {
	fs.readFile(config.personsFilePath, (error, data) => {
		if (error) throw error
		let person = JSON.parse(data)
		console.log(person)
	})

	response.status(200).json()
})

sparkpostRouter.post('/', (request, response) => {

})

sparkpostRouter.put('/:id', (request, response) => {

})

sparkpostRouter.delete('/:id', (request, response) => {

})

module.exports = sparkpostRouter