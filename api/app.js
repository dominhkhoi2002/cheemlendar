const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'cheemslendar',
})

// Import your route files
const usersRoute = require('./routers/users')
const calendarsRoute = require('./routers/calendars')
const accountRoute = require('./routers/accounts')
const eventRoute = require('./routers/events')
const taskRoute = require('./routers/task')
const teamRoute = require('./routers/teams')

// Import other route files as needed

// Use the route files
app.use('/api/users', usersRoute(connection))
app.use('/api/calendars', calendarsRoute(connection))
app.use('/api/accounts', accountRoute(connection))
app.use('/api/events', eventRoute(connection))
app.use('/api/tasks', taskRoute(connection))
app.use('/api/teams', teamRoute(connection))
// Use other route files as needed

// Start the server
const port = 4001
app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
