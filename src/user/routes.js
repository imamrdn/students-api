const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.post('/register', controller.registerUser)
router.post('/login', controller.loginUser)

module.exports = router