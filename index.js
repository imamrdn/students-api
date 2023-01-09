const express = require('express')
const studentsRoutes = require('./src/student/routes')

const app = express()
const port = 3100

app.use(express.json())

app.get("/", (req, res ) => {
    res.send("Hello")
})

app.use('/api/v1/students', studentsRoutes)

app.listen(port, () => console.log(`app listening on port ${port}`));

