import React, { useState } from 'react'

const AddBlog = () => {

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [category, setCategory] = useState('Startup');
  const [isPublished, setIsPublished] = useState(false);

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
  }

  return (
    <form className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
      <div className='bg-white w-full max-w-3xl md:p-10 p-4 sm:m-10 shadow rounded'>
        <p>Upload thumbnail</p>

        <label htmlFor="image">
          <img src={!image ? assets.upload_area:URL.createObjectURL(image)} alt="" className='mt-2 h-16 rounded cursor-pointer' />
          <input onChange={(e)=>setImage(e.target.value)} value={Files[0]} type="file" id='image' hidden required />
        </label>

      </div>

    </form>
  )
}

export default AddBlog
