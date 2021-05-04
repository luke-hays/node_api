const personJson = require('../data/persons.json')

const personsData = () => {
	return Object.keys(personJson).map(key => personJson[key])
}

const findPerson = name => {
	return personsData().find(p => p.name.toUpperCase() === name.toUpperCase())
}

const addPerson = person => {
	personJson.push(person)
}

const updateAge = (name, newAge) => {
	const person = findPerson(name)
	person.age = newAge
}

const deletePerson = name => {
	const index = personJson.findIndex(person => person.name.toUpperCase() === name.toUpperCase())

	if (index >= 0) {
		personJson.splice(index,1)
		return true
	}

	return false
}

const personsCount = () => {
	return personJson.length
}

module.exports = {
	personsData,
	findPerson,
	addPerson,
	updateAge,
	deletePerson,
	personsCount
}