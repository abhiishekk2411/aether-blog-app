import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app=express();

//Middlewares----
app.use(cors());
app.use(express.json());

//routes---
app.get('/',(req,res)=>res.send("API IS WORKING"));

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
})