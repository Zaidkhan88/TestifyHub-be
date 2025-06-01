const express = require('express')
const {createSpace,deleteSpace,getAllSpaces,getSpace} = require('../controllers/spaceControllers')
const router = express.Router();
const {isAuthenticated} = require('../middlewares/authMiddlewares')

router.post('/createSpace',isAuthenticated,createSpace)
router.delete('/deleteSpace',isAuthenticated,deleteSpace)
router.get('/getAllSpaces',isAuthenticated,getAllSpaces)
router.get('/getSpace/:link',isAuthenticated,getSpace)
module.exports = router