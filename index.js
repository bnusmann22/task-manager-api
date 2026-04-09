const express = require("express")
const app = express()
const port = 3000

const taskRouter = require("./routes/task")
const userRouter = require("./routes/user")

app.listen(port, () => {  console.log(`App listening on port ${port}`)
})