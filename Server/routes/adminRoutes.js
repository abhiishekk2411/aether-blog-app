import express from 'express';
import { adminLogin, approveCommentbyId, deleteCommentbyId, getAllBlogsAdmin, getAllComments, getDashboard } from '../controllers/adminController.js';
import auth from '../middlewares/auth.js'

const adminRouter=express.Router();

adminRouter.post('/login',adminLogin);
adminRouter.get('/blogs',auth,getAllBlogsAdmin);
adminRouter.get('/comments',auth,getAllComments);
adminRouter.get('/dashboard',auth,getDashboard);
adminRouter.post('/approve-comment',auth,approveCommentbyId);
adminRouter.post('/delete-comment',auth,deleteCommentbyId);


export default adminRouter;
