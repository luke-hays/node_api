/* eslint-disable no-unused-vars */
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const personHelper = require('../utils/person_helper')
const config = require('../utils/config')

beforeEach(() => {
	config.initPersonsData()
})

describe('get persons', () => {
	test('get all persons', async () => {
		const result = await api
			.get('/sparkpost')
			.expect(200)
			.expect('Content-Type', /application\/json/)

		expect(Object.keys(result.body).length).toBe(personHelper.personsCount())
	})

	test('get person by name', async () => {
		const initialPersons = personHelper.personsData()
		const person = initialPersons[1]

		const personResult = await api
			.get(`/sparkpost/${person.name}`)
			.expect(200)
			.expect('Content-Type', /application\/json/)

		expect(personResult.body).toEqual(person)
	})
})

describe('modifying persons database', () => {
	test('can add a new person', async () => {
		throw new Error('Not implemented')
	})

	test('can delete a person', async () => {
		throw new Error('Not implemented')
	})

	test('should be able to update a person name given age', async () => {
		throw new Error('Not implemented')
	})
})

describe('validate person', () => {
	test('age should not be negative', async () => {
		throw new Error('Not implemented')
	})

	test('person names should be unique', async () => {
		throw new Error('Not implemented')
	})

	test('person requires name and age to be added', async () => {
		throw new Error('Not implemented')
	})
})
