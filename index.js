const express = require('express')
const { config } = require('dotenv').config()
const usersRoutes = require('./src/user/routes')
const studentsRoutes = require('./src/student/routes')

const app = express()

app.use(express.json())

app.get("/", (req, res ) => {
    res.send("Hello")
})

app.use('/api/v1/users', usersRoutes)
app.use('/api/v1/students', studentsRoutes)

app.listen(process.env.port, () => {
    console.log(`Base URL: localhost:${process.env.port}`)
})

