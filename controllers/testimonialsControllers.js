const Spaces = require('../models/spaceModel')
const Testimonials = require('../models/testimonialsModel')
const submitTestimonials = async(req,res) =>{

    const {
        testimonialMsg,
        testimonialVideo,
        name,
        rating,
        spaceId
        
    } = req.body

    try {
        const space = await Spaces.findById(spaceId)
        console.log(space,"space")
    } catch (error) {
        res.status(404).json({success:false,"msg":"Space not exist acc to spaceId"})

    }
    try{
        const testimonail = await Testimonials.create({
            testimonialMsg,
            testimonialVideo,
            name,
            rating,
            // userInfo:req.user,
            // space,
            spaceId,
            


        })
        res.status(200).json({'success':true,'Submitted Testimonials':'successfully'})
    }
    catch(err){
        res.status(400).json({success:false,"Error":"Cannot submit testimonials",err})
    }
}
const getAllTestimonials = async(req,res) =>{
    const spaceId = req.params.spaceId 
    console.log(spaceId,'from be congtroller')
    // const spaceId = "68137e9e46d79657771f75ec"
    try {
        const testimonails = await Testimonials.find({spaceId})
        console.log(testimonails,"testimonails")
        res.status(200).json({success:true,msg:"Found all testimonils",testimonails})
    }
    catch (error) {
        
        console.log("err",error)
        res.status(400).json({success:false,msg:"not found",err})
    }
}

module.exports = {
    submitTestimonials,
    getAllTestimonials

}