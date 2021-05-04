const fs = require('fs')

const PORT = 3001
const personsFilePath = ('./data/persons.json')

const initialPersons = [
	{
		'name': 'Bilbo',
		'age': 129
	},
	{
		'name': 'Frodo',
		'age': 51
	},
	{
		'name': 'Gollum',
		'age': 589
	}
]

const initPersonsData = () => {
	fs.writeFile(personsFilePath, JSON.stringify(initialPersons), () => {})
}

module.exports = {
	PORT,
	personsFilePath,
	initPersonsData
}