const express = require("express")
const app = express()
const port = 3000


const taskRouter = require("./routes/tasks")
// const userRouter = require("./routes/user")

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api/tasks", taskRouter)
// app.use("/api/users", userRouter)

//health check endpoint
app.get('/health', (req, res) => {
  res.send('✅ Task Manager API is running! 🚀');
});


// Global error handler (good practice)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => {  console.log(`App listening on port ${port}`)
})