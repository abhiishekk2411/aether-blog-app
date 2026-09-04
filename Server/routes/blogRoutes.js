import express from 'express';
import { addBlog, addComment, deleteBlogsbyId, getAllBlogs, getBlogComments, getBlogsbyId, togglePublish } from '../controllers/blogController.js';
import upload from '../middlewares/multer.js';
import auth from '../middlewares/auth.js';
import { generateBlogContent } from '../controllers/blogController.js';

const blogRouter=express.Router();

blogRouter.post("/add",upload.single('image'),auth,addBlog);
blogRouter.get("/all",getAllBlogs);
blogRouter.get('/:blogId',getBlogsbyId);
blogRouter.post('/delete',auth,deleteBlogsbyId);
blogRouter.post('/toggle-Publish',auth,togglePublish);
blogRouter.post('/add-Comment',addComment);
blogRouter.post('/comments',getBlogComments);
blogRouter.post('/generate-content', auth, generateBlogContent);



export default blogRouter;