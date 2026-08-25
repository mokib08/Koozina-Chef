import React from 'react'
import { useSelector } from 'react-redux'

const InstructoresCard = () => {
    const inst = useSelector(state => state.instructorReducer.instructor)
    console.log(inst);
    
    const rerenderInst = inst.map((i) => {
        return(
            <div className='text-center pt-10 text-red-950'>
                <img className='w-[50rem] rounded-2xl' src={i.image} alt="" />
                <h2 className=' pt-[1.5rem] text-3xl font-[500] pb-1'>{i.name}</h2>
                <span className='text-red-500 text-xl '>{i.food}</span>
            </div>
        )
    })
  return (
    <div className='flex gap-[3.5rem]'>{rerenderInst}</div>
  )
}

export default InstructoresCard
