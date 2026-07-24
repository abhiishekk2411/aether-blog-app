import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Layout = () => {
    const Navigate=useNavigate();

    const logout=()=>{
        Navigate('/');
    }

  return (
    <>
    <div>
        <img onClick={()=>Navigate('/')} className='sm:w-40 cursor-pointer w-32' src={assets.logo} alt="" />
        <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>Logout</button>
    </div>
      
    </>
  )
}

export default Layout
