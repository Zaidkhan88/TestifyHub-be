const express = require('express');
const {userLogin,userSignin,userLogout} = require('../controllers/userControllers')
const {isAuthenticated} = require('../middlewares/authMiddlewares')
const router = express.Router();
// const isAuthenticated = require('../middlewares/authMiddlewares')

router.post('/login',userLogin)
router.get('/logout',userLogout)
router.post('/signin',userSignin)
router.get("/verify", isAuthenticated, (req, res) => {
  res.status(200).json({ success: true, message: "User is authenticated", userId: req.userId });
});

module.exports = router