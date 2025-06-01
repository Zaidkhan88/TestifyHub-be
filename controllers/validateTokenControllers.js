
// controllers/protectedController.js
const protectedHandler = (req, res) => {
    res.json({
      message: "Access granted to protected data",
    //   user: req.user, // info from token
    });
  };
  
  module.exports = protectedHandler;
  