/* eslint-disable no-unused-vars */
const sparkpostRouter = require('express').Router()
const personHelper = require('../utils/person_helper')
const config = require('../utils/config')

sparkpostRouter.get('/', (request, response) => {
	const persons = personHelper.personsData()
	response.status(200).json(persons)
})

sparkpostRouter.get('/:name', (request, response) => {
	const data = personHelper.personsData()
	const persons = Object.keys(data).map(key => data[key])
	const name = request.params.name

	console.log(persons)

	const person = persons.find(p => p.name.toUpperCase() === name.toUpperCase())

	response.status(200).json(person)
})

sparkpostRouter.post('/', (request, response) => {

})

sparkpostRouter.put('/:name', (request, response) => {

})

sparkpostRouter.delete('/:name', (request, response) => {

})

module.exports = sparkpostRouter