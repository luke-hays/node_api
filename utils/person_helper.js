/* eslint-disable no-unused-vars */
const config = require('./config')
const personJson = require('../data/persons.json')
const fs = require('fs')

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
	console.log(person)
	person.age = newAge
}

const deletePerson = name => {
	const index = personJson.findIndex(person => person.name === name)
	personJson.splice(index,1)
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