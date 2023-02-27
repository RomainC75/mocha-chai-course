const { getUserInfo, postuserInfo, getSingleUser, deleteUser, updateUser } = require('../controller/user')

const router = require('express').Router()



router.get('/getuserInfo',getUserInfo)
router.post('/postuserInfo', postuserInfo)
router.get('/singleuser/:id',getSingleUser)
router.delete('/deleteuser/:id',deleteUser)
router.put('/updateinfo/:id',updateUser)
module.exports = router