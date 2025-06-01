const cloudinary = require('cloudinary');

// ✅ Cloudinary Configuration
cloudinary.config({
  cloud_name: '',
  api_key: '',
  api_secret: ''  // Replace with real key
});

// ✅ Export Cloudin
module.exports =  cloudinary;
