/* eslint-disable no-unused-vars */
const config = require('./config')
const data = require('../data/persons.json')
const fs = require('fs')

const personsData = () => {
	return data
}

const findPerson = name => {

}

const addPerson = person => {
	fs.appendFile(config.personsFilePath, person, error => {
		if (error) throw error
	})
}

const updateAge = (name, newAge) => {

}

const personsCount = () => {
	return Object.keys(data).length
}

module.exports = {
	personsData,
	findPerson,
	addPerson,
	updateAge,
	personsCount
}