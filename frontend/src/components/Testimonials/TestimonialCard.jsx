import React from 'react'
import { useSelector } from 'react-redux'

const TestimonialCard = () => {

    const tes = useSelector(state => state.testimonialsReducer.testimonials)


    const rerenderTestimonial = tes.map((t) => {
        return (
            <div className='flex flex-col w-full shadow-[0_12px_35px_rgba(0,0,0,0.08)] rounded-3xl text-red-950 p-[1.5rem] items-center text-center pt-10 bg-white mt-[5rem]' key={t.id} >
                <img className='rounded-full mt-[-5.5rem] object-cover h-[100px] w-[100px]' src={t.imageUrl} alt="" />

                <h2 className=' pt-[1.5rem] text-3xl font-[500] pb-1'>{t.name}</h2>
                <h4 className='text-lg py-2'>{t.location}</h4>

                <span className='text-xl '>{t.review}</span>
            </div>
        )
    })



    return (
        <div className='flex gap-[3.5em] '>{rerenderTestimonial}</div>
    )
}

export default TestimonialCard
