import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar';

const Layout = () => {
    const Navigate=useNavigate();

    const logout=()=>{
        Navigate('/');
    }

  return (
    <>
    <div className='flex items-center justify-between py-2 px-4 sm:px-12 border-b border-gray-200 h-17.5'>
        <img onClick={()=>Navigate('/')} className='sm:w-40 cursor-pointer w-32' src={assets.logo} alt="" />
        <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>Logout</button>
    </div>
    <div className='flex h-[calc(100vh-70px)]'>
      <Outlet/>
      <Sidebar/>
    </div>
      
    </>
  )
}

export default Layout
