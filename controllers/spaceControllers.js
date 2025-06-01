const Spaces = require('../models/spaceModel');

const createSpace = async(req,res)=> {
    const {spaceName,questions,customMsg,uniqueLink} = req.body
    // console.log(user,'user')


    try {
        const space = await Spaces.create({
            spaceName,
          
            uniqueLink,
            customMsg,
            questions,
            userId:req.userId
            
        })
        // console.log(space,"space")
        res.status(200).json({"success":true,"Space Created":"yess",space:space})
    } catch (error) {
        console.log('Err: Space Creation ',error)
        res.status(200).json({"success":false,"Space Created":"nope"})
    }
    
}
const deleteSpace = (req,res)=> {
    
}
const getAllSpaces = async(req,res) => {
    const userId = req.userId
    console.log('her we arevvvv',userId)
    try {
        const spaces = await Spaces.find({userId})
        console.log(spaces,'spacesss')
        res.status(200).json({success:true,msg:"got All Spaces",spaces:spaces})
    } catch (error) {
        res.josn({success:false,msg:"failed to fetch "})
    }
   
}
const getSpace = async(req,res)=>{
    console.log('in the getSpace finally')
    const uniqueLink = req.params.link
    console.log('uniggg',uniqueLink)
    try {
        const space = await Spaces.findOne({uniqueLink});
        if(!space) return res.status(404).json({msg:'Not Found'})
        res.json({space:space})
    } catch (error) {
    res.json({success:false,NotFound:'space',})   
    }
}

module.exports = {
    createSpace,
    deleteSpace,
    getAllSpaces,
    getSpace
}