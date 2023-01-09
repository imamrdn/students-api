const pool = require('../../config')
const queries = require('./queries')

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const getStudentById = (req, res) => {
    const id =  parseInt(req.params.id)
    pool.query(queries.getStudentById, [id], (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows)
    })
}

const addStudent = (req, res) => {
    const { name, email, age, dob} = req.body
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent
};