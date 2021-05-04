/* eslint-disable no-unused-vars */
const sparkpostRouter = require('express').Router()
const personHelper = require('../utils/person_helper')

sparkpostRouter.get('/', (request, response) => {
	response.status(200).json(personHelper.personsData())
})

sparkpostRouter.get('/:name', (request, response) => {
	const name = request.params.name
	const person = personHelper.findPerson(name)

	response.status(200).json(person)
})

sparkpostRouter.post('/', async (request, response) => {
	const person = request.body
	console.log(person)

	if (person.name === undefined || person.age === undefined) {
		return response.status(400).json({ error: 'name and age must be given' })
	} else if (personHelper.findPerson(person.name)) {
		return response.status(400).json({ error: 'names must be unique' })
	} else if (person.age < 0) {
		return response.status(400).json({ error: 'age cannot be negative' })
	}

	personHelper.addPerson(person)
	const personsAfterUpdate = personHelper.personsData()

	response.status(201).json(personsAfterUpdate[personsAfterUpdate.length - 1])
})

sparkpostRouter.put('/:name', (request, response) => {
	const name = request.params.name
	const age = request.body.age

	personHelper.updateAge(name, age)

	response.json(personHelper.findPerson(name))
})

sparkpostRouter.delete('/:name', (request, response) => {
	const name = request.params.name
	personHelper.deletePerson(name)

	response.status(204).end()
})

module.exports = sparkpostRouter