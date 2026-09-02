import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import connectDB from '../configs/db.js';
import adminRouter from '../routes/adminRoutes.js';
import blogRouter from '../routes/blogRoutes.js';

const app=express();
await connectDB();
//Middlewares----
app.use(cors());
app.use(express.json());

//routes---
app.get('/',(req,res)=>res.send("API IS WORKING"));
app.use("/api/admin",adminRouter);
app.use("/api/blogs",blogRouter);


const PORT=process.env.PORT || 4000; 


app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
})