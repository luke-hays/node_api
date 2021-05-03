/* eslint-disable no-unused-vars */
const sparkpostRouter = require('express').Router()

sparkpostRouter.get('/', (request, response) => {
	response.status(200).json()
})

sparkpostRouter.post('/', (request, response) => {

})

sparkpostRouter.put('/:id', (request, response) => {

})

sparkpostRouter.delete('/:id', (request, response) => {

})

module.exports = sparkpostRouter