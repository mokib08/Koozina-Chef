import React from 'react'

const HeroContent = () => {
  return (
    <div className='w-1/2 py-[10rem]'>
      <small className='text-[1.2em] bg-red-200 rounded-[30px] px-4 py-1 text-red-600'>You can</small>
      <h1 className='text-[4.5rem] text-red-950 font-[600] leading-[1.2em] py-2 '>Learn to cook like a pro from the world's best chefs</h1>
      <p className='pt-15 pb-12 text-[1.3rem] font-[500] w-[35rem] leading-[1.5rem] opacity-60 '>Elevate your culinary expertise through regular practice on our platform. Unleash your cooking mastery with each delicious endeavor.</p>
      <button className='bg-red-500 px-10 py-4 text-[1.5rem] rounded-[20px] font-[500] text-white '>Get Started</button>
    </div>
  )
}

export default HeroContent
