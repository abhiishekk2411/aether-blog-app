import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
    return (
        <div className='px-6 md:px-16 1g:px-24 xl:px-32 bg-primary/4'>
            <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
                <div>
                    <img src={assets.logo} className='w-32 sm:w-44' alt="" />
                    <p className=' mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Rerum unde quaerat eveniet cumque accusamus atque qui <br /> error quo enim fugiat?</p>
                </div>
                <div className='flex flex-wrap justify-between w-full md :w-[45%] gap-5'>
                    {footer_data.map((section,index)=>(
                        <div key={index}>
                            <h3 className='font-semibold text-base md:mb-5 text-gray-900 mb-2'>{section.title}</h3>
                            <ul>
                                {section.links.map((link,i)=>(
                                    <li key={i}>
                                        <a className='hover:underline transition' href="#">{link}</a>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

            </div>
            <p className='text-sm text-gray-500/80 text-center py-4 md:text-base'>Copyright 2025 © QuickBlog GreatStack - All Right Reserved.</p>
        </div>
    )
}

export default Footer
