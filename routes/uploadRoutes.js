
const express = require('express')

const multer = require('multer');
const cloudinary = require('../uitls/cloudinary');

const {uploadFile} = require('../controllers/uploadFileControllers')


const router = express.Router();
const upload = multer({ dest: 'uploads/'}); // Temporary local storage

// POST /upload
router.post('/upload', upload.single('file'), uploadFile);

module.exports = router;
