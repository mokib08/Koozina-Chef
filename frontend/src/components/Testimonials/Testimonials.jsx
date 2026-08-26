import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <div>
      <div className='text-center'>
        <h1 className='pb-10 pt-10 text-[4em] text-red-950 font-[600] leading-20'>What Our<span className='text-red-500 '> Students Say</span><br /> About Us</h1>
         
        <p className='text-[1.5rem] opacity-80 mb-20'>Hear what our students have to say about their culinary learning journey with us</p>

      </div>

      <TestimonialCard />
    </div>
  )
}

export default Testimonials
