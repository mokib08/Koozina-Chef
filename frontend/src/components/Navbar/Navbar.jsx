import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return <nav className=' px-[10%] py-[1.5rem] flex justify-between items-center  '>
    <div>
      <h1 className='text-[3.5rem] font-bold text-red-500 '>Koozina.</h1>
    </div>
    <div className='flex text-red-950 gap-[4.5rem] text-[1.5rem] font-[600]  '>
      <NavLink to='/' >Home</NavLink>
      <NavLink to='/main-courses'>Courses</NavLink>
      <NavLink to='/resources'>Blog</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </div>
  </nav>
}

export default Navbar
