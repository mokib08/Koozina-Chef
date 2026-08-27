import React from 'react'
import { Link } from 'react-router-dom'

const FooterColumn = () => {
  return (
    <div className='w-[70%] flex justify-between items-stretch '>
      <div className='list-none text-[1.2rem] flex flex-col gap-[0.5rem]'>
        <span className='text-xl font-[500]'>About us</span>
        <Link>Information</Link>
        <Link>Our Instructors</Link>
        <Link>Blog post</Link>
        <Link>Certificates</Link>
      </div>

      <div className='list-none text-[1.2rem] flex flex-col gap-[0.5rem]'>
        <span className='text-xl font-[500]'>Resources</span>
        <Link>Price</Link>
        <Link>Work with us</Link>
        <Link>Free Courses</Link>
        <Link>Afflitiate</Link>
        <Link>Help center</Link>
      </div>

      <div className='list-none text-[1.2rem] flex flex-col gap-[0.5rem]'>
        <span className='text-xl font-[500]'>The Website</span>
        <Link>Contact info</Link>
        <Link>Security</Link>
        <Link>Terms & Conditions</Link>
        <Link>Privacy Policy</Link>
      </div>

    </div>
  )
}

export default FooterColumn
