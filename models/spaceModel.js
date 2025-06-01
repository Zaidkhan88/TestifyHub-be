const mongoose = require('mongoose');
const spaceSchema = mongoose.Schema({
    spaceName:{
        type:String,
        required:true,
    },
    uniqueLink:{
        type:String
    },
    // logo:{
    //     type:String,

    // },
    
    // title:{
    //     type:String,
    //     required:true
    // },
    questions:{
        type:[String], // it should be array we will see
        required:true
    },
    userId:{
        type:Object,

    },
    customMsg:{
        type:String
    }
    // createdBy:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'User'
    // }
    
},{
    timestamps:true
})

const Spaces = mongoose.model('Spaces',spaceSchema)

module.exports = Spaces