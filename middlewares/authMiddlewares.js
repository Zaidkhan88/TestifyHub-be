const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Make sure to require your User model

const isAuthenticated = async (req, res, next) => {
    try {
        console.log('Checking for JWT token...');
        console.log(req,'req')
        const token = req.cookies.token;
        console.log(token,'tok')
        if (!token) {
            return res.status(403).json({ success: false, message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);      
        console.log(decoded,'decccode')
        const user = await User.findById(decoded.id);
        console.log(user,'user') // depending on what you used when signing
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found in database" });
        }
        console.log('user from authMiddleware',user )
        req.userId = decoded.id;
        console.log('AT THE END') // attach user to request for later use
        next();

    } catch (err) {
        console.error("Auth error:", err.message);
        return res.status(401).json({ success: false, message: "Token invalid", error: err.message });
    }
};

module.exports = {
    isAuthenticated     
};
