import React from 'react'
import { blogCategories } from '../assets/assets'

const BlogList = () => {
  return (
    <div>
        <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
            {blogCategories.map(()=>(
                <div className='relative' key={item}>
                    <button>
                        {item}
                    </button>
                </div>
            ))}
        </div>
        <div>
            {/*---- cards section---- */}

        </div>
      
    </div>
  )
}

export default BlogList
