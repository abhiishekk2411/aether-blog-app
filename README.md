# Aether-Blog-App- Full-Stack MERN Blog Application with AI Content Generation

A modern, feature-rich blog platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js), featuring a fully secure administrative dashboard and integrated **AI-powered content generation** via OpenRouter.

---

## ✨ Key Features

### 👤 Admin Panel & Authentication
* **Secure JWT Authentication**: Role-based access control protecting administrative routes.
* **Dashboard Analytics**: Overview of total blogs, comments, and publishing metrics.
* **Blog Management**: Create, view, delete, and toggle the publication status of blog posts.
* **Comment Moderation**: Review, approve, or delete user comments dynamically.

### 🤖 AI-Powered Content Generation
* Integrated with **OpenRouter** to automatically generate engaging blog introductions and descriptions based on user-provided titles and subtitles.
* Fallback options and error handling for robust API communication.

### 🌐 Public Frontend
* Responsive design built with **Tailwind CSS**.
* Category-based blog filtering and dynamic rendering.
* Interactive comment section allowing users to submit comments for admin approval.

---

## 🛠️ Tech Stack

* **Frontend**: React.js, Vite, Tailwind CSS, Axios, React Hot Toast, React Router DOM
* **Backend**: Node.js, Express.js, Mongoose
* **Database**: MongoDB Atlas
* **AI Integration**: OpenRouter API (`openai` SDK wrapper)
* **File Uploads**: Multer & ImageKit (or local storage handling)

---

## 📁 Project Structure

```text
aether blog app/
│
├── client/                  # React Frontend (Vite)
│   ├── src/
│   │   ├── assets/          # Static assets & images
│   │   ├── components/      # Admin & Public reusable components
│   │   ├── context/         # React Context API for global state
│   │   └── pages/           # Admin & Public views (AddBlog, Comments, Login, etc.)
│   └── package.json
│
└── Server/                  # Node.js & Express Backend
    ├── configs/             # Database & OpenRouter configuration
    ├── controllers/         # Business logic (Blogs, Comments, Admin)
    ├── middlewares/         # Authentication & Multer middleware
    ├── models/              # Mongoose schemas (Blog, Comment, Admin)
    ├── routes/              # Express routers (adminRoutes, blogRoutes)
    └── src/server.js        # Entry point
