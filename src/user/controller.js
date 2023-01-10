const pool = require('../../config/config')
const queries = require('./queries')
const bcrypt = require('../../helpers/bcrypt')
const jwt = require('jsonwebtoken')
const { hash } = require('bcrypt')
const jwtKey = "my_secret_key"
const jwtExpirySeconds = 300

const registerUser = (req, res) => {
    let { username, password } = req.body
    password = bcrypt.Hash(password)

    const token = jwt.sign({ username }, jwtKey, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds,
    })

    //register user
    pool.query(queries.addUser, [username, password], (error, results) => {
        if (error) throw error
        res.status(201)
            .send({
                "message" : "User Registered Successfully",
                "token" : token
            })
            .cookie("token", token, { maxAge: jwtExpirySeconds * 1000 })
            .end()
        
    }) 

}

const loginUser = (req, res) => {
    let { username, password } = req.body

    let dataUser = queries.checkDataExists
    
    const token = jwt.sign({ username }, jwtKey, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds,
    })

    pool.query(queries.checkDataExists, [username, password], (error, results) => {

        if ( bcrypt.Compare(password, dataUser) ) {
            res.status(201)
            .send({
                "message" : "User Logged Successfully",
                "token" : token
            })
            .cookie("token", token, { maxAge: jwtExpirySeconds * 1000 })
            .end()
        }
        
    })

}

module.exports = {
    registerUser,
    loginUser
}