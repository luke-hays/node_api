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
			.get('/person')
			.expect(200)
			.expect('Content-Type', /application\/json/)

		expect(Object.keys(result.body).length).toBe(personHelper.personsCount())
	})

	test('get person by name', async () => {
		const initialPersons = personHelper.personsData()
		const person = initialPersons[0]

		const personResult = await api
			.get(`/person/${person.name}`)
			.expect(200)
			.expect('Content-Type', /application\/json/)

		expect(personResult.body).toEqual(person)
	})
})

describe('modifying persons database', () => {
	test('can add a new person', async () => {
		const newPerson = {
			name: 'Samwise',
			age: 39
		}

		await api
			.post('/person')
			.send(newPerson)
			.expect(201)
			.expect('Content-Type', /application\/json/)

		const personsAfterUpdate = personHelper.personsData()
		const names = personsAfterUpdate.map(p => p.name)

		expect(names).toContain(newPerson.name)
	})

	test('can delete a person', async () => {
		const initialPersons = personHelper.personsData()
		const personToDelete = initialPersons[0].name

		await api
			.delete(`/person/${personToDelete}`)
			.expect(204)

		const personsAfterDelete = personHelper.personsData()
		const names = personsAfterDelete.map(p => p.name)

		expect(names).not.toContain(personToDelete)
	})

	test('update a person\'s age given name', async () => {
		const initialPersons = personHelper.personsData()
		const personToUpdate = initialPersons[0].name
		const newAge = { age: 33 }

		await api
			.put(`/person/${personToUpdate}`)
			.send(newAge)

		const personsAfterUpdate = personHelper.personsData()
		expect(personsAfterUpdate[0].age).toBe(newAge.age)
	})
})

describe('validate adding persons', () => {
	test('age should not be negative', async () => {
		const newPerson = {
			name: 'Samwise',
			age: -1
		}

		await api
			.post('/person')
			.send(newPerson)
			.expect(400)
			.expect('Content-Type', /application\/json/)
	})

	test('person names should be unique', async () => {
		const newPerson = {
			name: 'Samwise',
			age: 39
		}

		await api
			.post('/person')
			.send(newPerson)
			.expect(400)
			.expect('Content-Type', /application\/json/)

	})

	test('person requires name and age to be added', async () => {
		const newPerson = { }

		await api
			.post('/person')
			.send(newPerson)
			.expect(400)
	})
})
