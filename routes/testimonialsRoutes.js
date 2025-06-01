const express = require('express');
const {submitTestimonials,getAllTestimonials} = require('../controllers/testimonialsControllers')
const router = express.Router()

const {isAuthenticated} = require('../middlewares/authMiddlewares')

router.post('/submitTestimonials',isAuthenticated,submitTestimonials)
router.get('/getAllTestimonials/:spaceId',isAuthenticated,getAllTestimonials)
// router.delete('/testimonials/deleteTestimonial',deleteTestimonial)

module.exports = router