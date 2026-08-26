import React from 'react'
import { useSelector } from 'react-redux'

const ResourceCard = () => {
    const res = useSelector(state => state.resourceReducer.resources)


    const reranderResorce = res.map((r) => {
        return (


            <div className='shadow-[0_12px_35px_rgba(0,0,0,0.08)] w-[40rem] bg-white flex flex-col rounded-3xl  p-4' key={r.id}>
                <img className='rounded-3xl object-cover h-[30vh] w-full' src={r.imageUrl} alt="" />

                {/* Adding flex-1 makes this container grow to fill all extra space */}
                <div className='flex-1'>
                    <h1 className='text-[1.5em] py-4 font-[600] text-red-950 leading-8'>{r.title}</h1>
                    <p className='text-lg leading-6 text-red-950 mb-5'>{r.description}</p>
                </div>

                {/* mt-auto ensures it stays anchored at the bottom */}
                <small className='text-red-500 text-[1rem] mt-auto'>{r.date}</small>
            </div>
        )
    })

    return (
        <div className='flex gap-[3em] mt-[5em]'>{reranderResorce}</div>
    )
}

export default ResourceCard
