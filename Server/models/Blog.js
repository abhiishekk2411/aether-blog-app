import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title:{
        type:string,
        required:true
    },
    subtitle:{
        type:string
    },
    description:{
        type:string,
        required:true   
    },
    category:{
        type:string,
        reqired:true
    },
    image:{
        type:string,
        required:true
    },
    isPublished:{
        type:boolean,
        required:true
    }  
},{timestamps:true});

const Blog = mongoose.model('Blog',blogSchema);

export default Blog;