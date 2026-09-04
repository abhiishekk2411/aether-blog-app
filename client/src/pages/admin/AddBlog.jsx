import React, { useState } from 'react'
import { assets, blogCategories } from '../../assets/assets';
import { useAppContext } from '../../context/context';
import toast from 'react-hot-toast';

const AddBlog = () => {
  const { axios, token } = useAppContext(); 
  const [isAdding, setIsAdding] = useState(false);
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [category, setCategory] = useState('Startup');
  const [isPublished, setIsPublished] = useState(false);
  const [description, setDescription] = useState('');

  const generateContent = () => {
    console.log('Generate clicked');
  }

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsAdding(true);
      
      const blog = {
        title,
        subTitle,
        description,
        category,
        isPublished
      }
      
      const formData = new FormData();
      formData.append('blog', JSON.stringify(blog));
      formData.append('image', image);

      const { data } = await axios.post('/api/blogs/add', formData, {
        headers: {
          authorization: `Bearer ${token}` 
        }
      });
      
      
      if (data.success) {
        toast.success(data.message);
        setImage(false);
        setTitle('');
        setSubTitle('');
        setDescription('');
        setCategory('Startup');
        setIsPublished(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);      
    } finally {
      setIsAdding(false);
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
      <div className='bg-white w-full max-w-3xl md:p-10 p-4 sm:m-10 shadow rounded'>
        <p>Upload thumbnail</p>

        <label htmlFor="image">
          <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" className='mt-2 h-16 rounded cursor-pointer' />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
        </label>
        
        <p className='mt-4'>Blog title</p>
        <input type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' onChange={e => setTitle(e.target.value)} value={title} />

        <p className='mt-4'>Sub title</p>
        <input type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' onChange={e => setSubTitle(e.target.value)} value={subTitle} />

        <p className='mt-4'>Blog Description</p>
        <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder='Write your blog description here'
            className='w-full h-full p-2 border border-gray-300 rounded outline-none'
          />
          <button type='button' onClick={generateContent} className='absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer'>Generate with AI</button>
        </div>
        
        <p className='mt-4'>Blog category</p>
        <select value={category} onChange={e => setCategory(e.target.value)} className='mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded '>
          <option value="">Select category</option>
          {blogCategories.map((item, index) => {
            return <option key={index} value={item}>{item}</option>
          })}
        </select>
        
        <div className='flex gap-2 mt-4'>
          <p>Publish Now</p>
          <input type="checkbox" checked={isPublished} className='scale-125 cursor-pointer' onChange={e => setIsPublished(e.target.checked)} />
        </div>

        <button disabled={isAdding} type="submit" className='mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm'>{isAdding ? 'Adding.....' : 'AddBlog'}</button>
      </div>
    </form>
  )
}

export default AddBlog