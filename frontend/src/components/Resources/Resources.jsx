import React from 'react'
import ResourceCard from './ResourceCard'

const Resources = () => {
    return (
        <div className='bg-red-100 py-[5.5em] px-[10em] '>
            <div className='flex justify-between items-baseline-last '>
                <div className='w-[50%]'>
                    <small className='text-[1.2em] bg-red-200 rounded-[30px] px-[2em] py-2 text-red-600'>Blog</small>
                    <h1 className='text-[3rem] mt-3 font-[600] text-red-950 pb-4'>Resources & Insights</h1>
                    <p className='text-[1.2em] font-[400] opacity-80'>Unlock a wealth of culinary knowledge with our Resources & Insights section — your go-to hub for expert tips, recipes, and invaluable culinary wisdom.</p>
                </div>

                <button className='outline-2 outline-red-400 text-red-500 font-[500] rounded-2xl px-[2em] py-[0.8em] text-lg '>Explore</button>

            </div>
            <ResourceCard />
        </div>
    )
}

export default Resources
