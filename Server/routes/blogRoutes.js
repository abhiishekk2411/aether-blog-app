import express from 'express';
import { addBlog } from '../controllers/blogController';
import upload from '../middlewares/multer';
import auth from '../middlewares/auth';

const blogRouter=express.Router();

blogRouter.post("/add",upload.single('image'),auth,addBlog);

export default blogRouter;