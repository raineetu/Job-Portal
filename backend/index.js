import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import userRoute from './routes/user.route.js'; // Ensure the route file is correctly imported
import companyRoute from './routes/company.route.js';
import applicationRoute from './routes/applicationroute.js';
import jobRoute from './routes/jobroute.js';


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5173', // Correct CORS origin
    credentials: true, // Correct 'credentials' property
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGOURL;

// Connect to MongoDB
mongoose.connect(MONGOURL)
  .then(() => console.log("Database connected successfully"))
  .catch(error => {
    console.error("Database connection error:", error.message); // Log the error
    process.exit(1); // Exit the process if database connection fails
  });

// User Routes
app.use('/api/users', userRoute); 
app.use('/api/company', companyRoute); 
app.use('/api/job', jobRoute); 
app.use('/api/application', applicationRoute); 


// Start server
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
