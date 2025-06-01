const mongoose = require('mongoose')


const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.Mongo_URL)
        console.log('Connected to DB')
    }
    catch(err){
        console.log("Err while connecting to DB ",err)
    }
}

module.exports = connectDB