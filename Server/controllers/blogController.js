import fs from 'fs';
import imageKit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';


export const addBlog=async(req,res)=>{
    try{
        const {title,subtitle,description,category,isPublished}=JSON.parse(req.body.blog);
        const imageFile=req.file;

        if(!title || !description || !category || !imageFile || !isPublished){
            return res.status(400).json({message:"All fields are required"});
        }

        const fileBuffer=fs.readFileSync(imageFile.path);
        //upload image to imagekit
        const response=await imageKit.upload({
            file:fileBuffer,
            fileName:imageFile.originalname,
            folder:"/blogs"
        })

        //optimiaze image url
        const optimizedImageUrl=imageKit.url({
            path:response.filePath,
            transformation:[
                {quality:"auto"},                  //auto compression
                {format:"webp"},                   //convert to webp format
                {width:1280}                     //width resizing
            ]
        })
        
        const imageUrl=optimizedImageUrl;

        //saving data to mongodb database
        await Blog.create({title,subtitle,description,category,imageUrl,isPublished});
        
        res.json({success:true,message: "blog uploaded successfuly"});
    }
    catch(error){
         res.json({success:false,message: error.message});

     }
}