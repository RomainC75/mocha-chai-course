const { getUser } = require('../controller/user')

const router = require('express').Router()

router.get('/',getUser)

module.exports = router