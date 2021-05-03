const info = (...params) => {
	console.log('Info:')
	console.log(...params)
}

const error = (...params) => {
	console.log('Error:')
	console.log(...params)
}

module.exports = { info, error }