const express = require('express')
const router = express.Router()

module.exports = (pool) => {
	// POST /api/calendars/getUserCalendar/:id
	router.get('/getUserCalendar/:id', (req, res) => {
		const user_id = req.params.id
		pool.query('SELECT * FROM Calendar WHERE user_id = ?', [user_id], (error, results) => {
			if (error) {
				console.error('Error retrieving calendars:', error)
				res.status(500).json({ error: 'Internal server error' })
				return
			}
			res.json(results)
		})
	})

	// POST /api/calendars
	router.post('/', (req, res) => {
		const { calendarName, userId } = req.body
		const query = 'INSERT INTO Calendar (calendar_name, user_id) VALUES (?, ?)'
		const values = [calendarName, userId]
		pool.query(query, values, (error, result) => {
			if (error) {
				console.error('Error creating calendar:', error)
				res.status(500).json({ error: 'Internal server error' })
				return
			}
			res.status(201).json({ message: 'Calendar created successfully' })
		})
	})

	return router
}
