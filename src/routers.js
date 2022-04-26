const { addUserOptions } = require('./options')
const { getUsers, getUserById } = require('./handlers')

const handler = (app, opts, done) => {
	app.get('/getUsers', getUsers)

	app.get('/getUser/:id', getUserById)

	app.post('/addUser', addUserOptions)

	done()
}

module.exports = handler
