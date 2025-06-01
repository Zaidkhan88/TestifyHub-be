// routes/protectedRoute.js

const express = require("express");
const router = express.Router();
const {isAuthenticated} = require("../middlewares/authMiddlewares"); // your existing middleware
const protectedHandler = require("../controllers/validateTokenControllers");

router.get("/",protectedHandler);

module.exports = router;


