const cloudinary = require('../uitls/cloudinary');
const fs = require('fs');
const uploadFile =  async (req, res) => {
  try {
    const filePath = req.file.path;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: 'auto', // works for both image/video
    });

    // Delete temp file
    fs.unlinkSync(filePath);

    // Return Cloudinary URL
    res.json({ url: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Upload failed' });
  }
}

module.exports = {
    uploadFile
}