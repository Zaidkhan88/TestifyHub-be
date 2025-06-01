const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');
    console.log('user',user)
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found. Please sign up." });
    }

    // Ensure user.password exists
    if (!password || !user.password) {
      return res.status(400).json({ success: false, message: "Missing credentials." });
    }
    console.log('Highlight')
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch,'isMatch')
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password." });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    console.log(token,'toke ')
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000, // 1 hour
     
      secure: false, // set to true if using HTTPS
    });

    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

    

const userSignin = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      email,
      username,
      password: hashedPassword
    });

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'Lax',  // or 'None' if using HTTPS across origins
      secure: false,    // Set to true in production with HTTPS
      maxAge: 3600000   // 1 hour
    });

    return res.status(201).json({ success: true, token });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

const userLogout = (req,res) =>{
    res.status(200).cookie("token","",{expiresIn:new Date(Date.now)})
    .json({
        "success":true,
        "user":req.user 
    })
}


module.exports = {
    userLogin,
    userSignin,
    userLogout
}