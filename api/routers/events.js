const express = require("express")
const router = express.Router()

module.exports = (pool) => {
  // POST /api/events/getAllEvents
  router.post("/getAllEvents", (req, res) => {
    let { userId, start_date, end_date } = req.body
    end_date += " 23:59:59:999"
    const query = `SELECT Events.* FROM Events inner JOIN Calendar on Events.calendar_id = Calendar.calendar_id inner JOIN User on User.user_id = Calendar.user_id 
      WHERE User.user_id = ? AND Events.start_datetime BETWEEN ? and  ?`
    pool.query(query, [userId, start_date, end_date], (error, result) => {
      if (error) {
        console.error("Fetching data:", error)
        res.status(500).json({ error: "Internal server error" })
        return
      }
      res.status(200).json(result)
    })
  })

  return router
}
