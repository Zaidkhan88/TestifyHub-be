const cloudinary = require('cloudinary');

// ✅ Cloudinary Configuration
cloudinary.config({
  cloud_name: 'dfdidlzcx',
  api_key: '597711653765745',
  api_secret: 'B7ko4AMkpmBtwc8ZHvlRsOqFs2o'  // Replace with real key
});

// ✅ Export Cloudin
module.exports =  cloudinary;
