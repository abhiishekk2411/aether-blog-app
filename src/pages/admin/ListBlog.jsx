import React from 'react'
import { blog_data } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';
import { useState, useEffect } from 'react';

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    setBlogs(blog_data);
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className=''>
      <h1>All Blogs</h1>

      <div className='mt-4 relative h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg bg-white scrollbar-hide'>
        <table className='w-full text-xs text-gray-500'>
          <thead className='text-xs text-gray-600 text--left uppercase'>
            <tr>
              <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
              <th scope='col' className='px-2 py-4 '>BLOG TITLE</th>
              <th scope='col' className='px-2 py-4 max-sm:hidden'>DATE</th>
              <th scope='col' className='px-2 py-4 max-sm:hidden'>STATUS</th>
              <th scope='col' className='px-2 py-4 '>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <BlogTableItem
                key={blog._id}
                blog={blog}
                fetchBlogs={fetchBlogs}
                index={index + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListBlog