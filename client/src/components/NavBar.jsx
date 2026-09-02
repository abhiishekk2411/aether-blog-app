import React from 'react'
import {assets} from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/context.jsx';

const NavBar = () => {
  const {navigate,token}=useAppContext;

  return (
    
    <div>
        <div  className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>
            <img onClick={()=>navigate('/')} src={assets.logo} alt="logo" className='w-32 sm:w-44' />
            <button onClick={()=>navigate('/admin')} className=' cursor-pointer flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-sm'>
                {token ? 'Dashboard' : 'Login here'}
                <img src={assets.arrow} alt="arrow" className='w-3'/>
            </button>
        </div>
    </div>
  )
}

export default NavBar
