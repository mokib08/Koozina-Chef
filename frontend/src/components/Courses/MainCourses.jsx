import React from 'react'
import { useSelector } from 'react-redux'

const MainCourses = () => {

  const course = useSelector(state => state.courseReducer.courses)
  console.log(course);

  const reranderCourse = course.map((c) => {
    return (
      <div className=' bg-white p-8 rounded-[2em] shadow-[0_12px_35px_rgba(0,0,0,0.08)] ' key={c.id} >
        <div
          className='h-[30vh] bg-cover rounded-2xl mb-7 flex flex-col justify-end p-4'
          style={{ backgroundImage: `url(${c.courseImage})` }}
        >
          <h2 className='bg-red-500 w-fit text-center text-[1.5em] text-white font-[500] px-5 py-1 rounded-4xl '>{c.badge}</h2>
        </div>
        <div>
          <h1 className='text-[1.8em] font-[600] text-red-950 leading-8'>{c.title}</h1>
          <div className='my-3 '>
            <span className='text-[1.1em] font-[500] opacity-70 pr-4'><i className=" pr-2 text-red-400 fa-solid fa-book"></i>{c.lessons}</span>
            <span className='text-[1.1em] font-[500] opacity-70 pr-4'><i className=" pr-2 text-red-400 fa-regular fa-clock"></i>{c.duration}</span>
            <span className='text-[1.1em] font-[500] opacity-70 pr-4'><i className=" pr-2 text-red-400 fa-regular fa-user"></i>{c.enrolled}</span>
          </div>
          <hr className='text-red-300' />
        </div>


        <div className='flex pt-5 justify-between items-center w-full'>
          {/* Left side: Instructor Info */}
          <div className=' flex items-center gap-3'>
            <img
              className='w-[50px] h-[50px] object-cover rounded-full'
              src={c.instructorImage}
              alt=""
            />
            <h3 className=' text-[1.1em] font-[500] opacity-80'>{c.instructor}</h3>
          </div>

          {/* Right side: Button */}
          <button className='min-w-fit cursor-pointer text-[1.1em] font-[500] opacity-80 bg-gray-200 px-4 py-2 rounded-full '>
            view details
          </button>
        </div>

      </div>
    )
  })


  return (
    <div className='px-[10%] py-[1.5rem]'>
    <h1 className='pb-[1.1em] pt-10 text-[4.5em] text-center text-red-950 font-[600] leading-20'>Best <span className='text-red-500 '> Course</span>  For You</h1>
    <div className=' grid lg:grid-cols-3 gap-7 '>{reranderCourse}</div>
    
    </div>
  )
}

export default MainCourses
