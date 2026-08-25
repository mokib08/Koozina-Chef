import React from 'react'
import FeatureList from './FeatureList'

const FeatureContent = () => {
    return (
        <div className='w-1/2'>
            <span className='text-[1.2em] bg-red-200 rounded-[30px] px-4 py-1 text-red-600'>We have</span>
            <h1 className='flex pb-10 text-[4.5em] text-red-950 font-[600]'>Delicious <span className='text-red-500 pl-4'> features</span></h1>
            <p className='text-[1.5em] opacity-50 leading-8 pb-15'>
                Explore the exceptional features of our platform-a culinary haven desing for seamless learning, interactive experinces, and mastering the art of cooking.
            </p>

            <FeatureList />

            <div className='flex gap-[2em] mt-10' >
                <button className='bg-red-500 px-10 py-2 text-[1.5rem] rounded-[20px] font-[500] text-white '>Join us</button>
                <div>
                    <h2 className='text-[1.4em] font-[500]'>Connect with</h2>
                    <h4 className='text-xl'>best chefs in the world</h4>
                </div>
            </div>
        </div>
    )
}

export default FeatureContent
