import fs from 'fs';
import openRouter from "../configs/openrouter.js";
import imageKit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';
import Comment from '../models/comment.js';

export const addBlog = async (req, res) => {
    try {
        const { title, subtitle, description, category, isPublished } =
            JSON.parse(req.body.blog);

        const imageFile = req.file;

        if (!title || !description || !category || !imageFile || isPublished === undefined) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const response = await imageKit.files.upload({
            file: fs.createReadStream(imageFile.path),
            fileName: imageFile.originalname,
            folder: "/blogs"
        });

        if (imageFile.path) {
            fs.unlinkSync(imageFile.path);
        }

        await Blog.create({
            title,
            subtitle,
            description,
            category,
            image: response.url,
            isPublished
        });

        res.json({
            success: true,
            message: "blog uploaded successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublished: true });
        res.json({ success: true, blogs })
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const getBlogsbyId = async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId);

        if (!blog) {
            return res.json({ success: false, message: "Blog not found" });
        }
        res.json({ success: true, blog });

    } catch (error) {
        res.json({ success: false, message: error.message });

    }
}

export const deleteBlogsbyId = async (req, res) => {
    try {
        const { id } = req.body;
        await Blog.findByIdAndDelete(id);
        await Comment.deleteMany({blog:id});
        res.json({ success: true, message: "Blog Deleted SuccessFully" });


    } catch (error) {
        res.json({ success: false, message: error.message });

    }
}

export const togglePublish = async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({ success: true, message: "Blog Status Updated" });
    } catch (error) {
        res.json({ success: false, message: error.message });
        
    }
}

export const addComment = async (req, res) => {
    try {
        const { blog, name, content } = req.body;
        await Comment.create({ blog, name, content });
        res.json({ success: true, message: "Comment added successfully for review" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const getBlogComments = async (req, res) => {
    try {
        const { blogId } = req.body;
        const comments = await Comment.find({ blog: blogId, isApproved: true })
                                      .sort({ createdAt: -1 });
        res.json({ success: true, comments });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const generateBlogContent = async (req, res) => {
    try {
        const { title, subTitle } = req.body;

        if (!title) {
            return res.json({ success: false, message: "Please enter a blog title first" });
        }

        const prompt = `Write an engaging and professional blog description/intro based on the title: "${title}" and subtitle: "${subTitle}". Keep it between 50 to 80 words.`;

        const completion = await openRouter.chat.completions.create({
            model: "openrouter/free", 
            messages: [
                { role: "system", content: "You are a professional blog writer." },
                { role: "user", content: prompt }
            ],
        });

        const generatedText = completion.choices[0].message.content;

        res.json({ success: true, text: generatedText });

    } catch (error) {
        console.error("AI Generation Error:", error.message);
    res.json({ success: false, message: "Failed to generate content" });
    }
}