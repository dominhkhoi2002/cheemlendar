const express = require('express')
const router = express.Router()

module.exports = (pool) => {
	// GET /api/tasks/getAllTeamTask/:teamId
	router.get('/getAllTeamTask/:id', (req, res) => {
		const teamId = req.params.id
		const query = `SELECT * FROM task WHERE team_id = ?`
		pool.query(query, [teamId], (error, resData) => {
			if (error) {
				console.error('Fetching data:', error)
				res.status(500).json({ error: 'Internal server error' })
				return
			}

			const groupedTasks = resData.reduce((result, task) => {
				if (task.parent_task_id === null) {
					result.push({ ...task, childTasks: [] })
				} else {
					const parentTask = result.find((parent) => parent.task_id === task.parent_task_id)
					if (parentTask) {
						parentTask.childTasks = parentTask.childTasks || []
						parentTask.childTasks.push(task)
					}
				}
				return result
			}, [])

			res.status(200).json(groupedTasks)
		})
	})

	return router
}
