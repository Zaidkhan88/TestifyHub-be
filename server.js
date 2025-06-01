const express = require("express")
const cookieParser = require("cookie-parser")
require('dotenv').config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const spaceRoutes = require('./routes/spaceRoutes');
const testimonialsRoutes = require('./routes/testimonialsRoutes');
const uploadRoute = require('./routes/uploadRoutes')
const tokenValidateRoute = require('./routes/tokenValidateRoutes')
const cors = require('cors')


const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
    // Allow requests from this origin
   // Allow only these HTTP methods
   // Allow only these headers
  }));
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use('/api/user',userRoutes)
app.use('/api/spaces',spaceRoutes)
app.use('/api/testimonials',testimonialsRoutes)
app.use('/api', uploadRoute);
app.use('api/protected',tokenValidateRoute)


app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT} `)

})