import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets'
import NavBar from '../components/NavBar'
import moment from 'moment'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { useAppContext } from '../context/context'
import toast from 'react-hot-toast'

const Blog = () => {
  const { id } = useParams()
  const {axios}=useAppContext();
  const [data, setData] = useState(null)
  const [comments, setComments] = useState([])

  const [name, setName] = useState('');                               //for storing comment
  const [content, setContent] = useState('');                         //for storing comment

 const fetchBlogData = async () => {
    try {
      const {data} = await axios.get(`/api/blogs/${id}`)
      data.success ? setData(data.blog) : toast.error(data.message)
      
    } catch (error) {
      toast.error(error.message)
    }
  }

  const fetchComments = async () => {
    try {
      const {data} = await axios.post('/api/blogs/comments', {blogId:id})
      if (data.success){
        setComments(data.comments.sort());
      }
      else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message)      
    }
  }

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/blogs/add-Comment`, { blog: id, name, content });
      if(data.success) {
          toast.success(data.message);
          setName('');
          setContent('');
          fetchComments(); 
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, [id])
  // agar data nahi mila to loading wala chal jayega
  return data ? (
    <div className='relative'>
      <img src={assets.gradientBackground} alt="" className='absolute top-50 z-1 opacity-50' />

      {/* ----------navbar section--------- */}
      <NavBar />

      {/* -------------middle section------------- */}
      <div className='text-center mt-20 text-gray-600'>
        <p className='text-primary py-4 font-medium'>Published On {moment(data.createdAt).format('MMMM Do YYYY')}</p>
        <h1 className='sm:text-5xl text-2xl font-semibold max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
        <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subTitle}</h2>
        <p className='inline-block px-4 py-1 mb-6 rounded-full border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>Michael Brown</p>
      </div>
      <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
        <img src={data.image} className='mb-5 rounded-3xl' alt="" />
        <div className='rich-text max-w-3xl mx-auto ' dangerouslySetInnerHTML={{ __html: data.description }}></div>
        
        {/*--------- comments part-------- */}
        <div className='mt-14 mb-10 mx-auto max-w-3xl'>
          <p>Comments ({comments.length})</p>
          <div className='flex flex-col gap-4'>
            {comments.map((item, index) => (
              <div key={index} className='relative bg-primary/2 border border-primary/5 p-4 max-w-xl rounded text-gray-600'>
                <div className='flex items-center gap-2 mb-2'>
                  <img src={assets.user_icon} className='w-6' alt="" />
                  <p className='font-medium'>{item.name}</p>
                </div>
                <p className='text-sm max-w-md ml-8'>{item.content}</p>
                <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{moment(item.createdAt).fromNow()}</div>
              </div>
            ))}
          </div>

        </div>
        {/*------- Add Comment Section ------ */}
        <div className='max-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>Add your comment</p>
          <form onSubmit={addComment} action="" className='flex flex-col items-start gap-4 max-w-lg'>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Name' className='w-full p-2 border border-gray-300 rounded outline-none' required />
            <textarea onChange={(e) => setContent(e.target.value)} value={content} placeholder='Comment ' className='w-full p-2 border border-gray-300 h-48 rounded outline-none' required></textarea>
            <button type='Submit' className='bg-primary text-white rounded px-8 p-2 hover:scale-102 transition-all cursor-pointer'>Submit</button>
          </form>
        </div>
          {/* ------social media section ------ */}
        <div className='my-24 max-w-3x1 mx-auto'>
          <p className=' font-semibold my-4'>Share this article on social media</p>
          <div className='flex'>
            <img src={assets.facebook_icon} width={50} alt="" />
            <img src={assets.twitter_icon} width={50} alt="" />
            <img src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>

         {/*--------footer section------- */}
        <Footer/>
    </div>
  ) : <Loader/>
}

export default Blog
