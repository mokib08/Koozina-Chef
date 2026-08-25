import React from 'react'
import InstructoresCard from './InstructoresCard'

const Instructores = () => {
    return (
        <div className='py-[9em] '>
            <div className='flex flex-col items-center '>
                <h1 className='pb-6 pt-10 text-[4.5em] text-red-950 font-[600] leading-20'>Explore <span className='text-red-500 '> Instructors</span></h1>

                <p className='w-[60%] text-center text-[1.5em] opacity-50 leading-8 pb-15'>
                    Embank on a journey of culinary discovery with our diverse tems of skilled instructures, each offering their uniquw expertise.
                </p>
            </div>
            <InstructoresCard />
        </div>
    )
}

export default Instructores
