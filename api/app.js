var path = require("path")
const express = require("express")
const User = require("./Models/Users")
const pool = require("./config/db")
const cors = require("cors")
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, "public")))
//route
const routes = require("./routers")

routes(app)
app.listen(5000, () => {
  console.log(`App listening on port ${port}`)
})
