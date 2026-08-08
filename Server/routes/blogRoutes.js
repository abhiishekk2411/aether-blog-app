import express from 'express';
import { addBlog, deleteBlogsbyId, getAllBlogs, getBlogsbyId, togglePublish } from '../controllers/blogController.js';
import upload from '../middlewares/multer.js';
import auth from '../middlewares/auth.js';

const blogRouter=express.Router();

blogRouter.post("/add",upload.single('image'),auth,addBlog);
blogRouter.get("/all",getAllBlogs);
blogRouter.get('/:blogId',getBlogsbyId);
blogRouter.post('/delete',auth,deleteBlogsbyId);
blogRouter.post('/toggle-Publish',auth,togglePublish);

export default blogRouter;