import express from 'express';
import { addBlog } from '../controllers/blogController';
import upload from '../middlewares/multer';

const blogRouter=express.Router();

blogRouter.post("/add",upload.single('image'),addBlog);
