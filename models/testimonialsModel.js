const mongoose = require('mongoose');
const testimonialsSchema = mongoose.Schema({
    testimonialMsg:{
        type:String,
        required:true
    },
    testimonialVideo:{
        type:String,
        
    },
    name:{
        type:String,
        required:true
    },
    spaceId:{
        type:String,
        // ref:'Spaces'
    },
    
    rating:{
        type:Number,
        required:true
    },
    submittedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }


},{
    timestamps:true
})


const Testimonials = mongoose.model('Testimonials',testimonialsSchema)

module.exports = Testimonials
    

