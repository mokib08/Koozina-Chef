import React from 'react'
import { useSelector } from 'react-redux';

const CourseCard = () => {

    const populerItem = [2, 5, 13];
    const courses = useSelector(state => state.courseReducer.courses)
    const populerCourse = courses.filter((course) => populerItem.includes(Number(course.id)))

    const reranderCourse = populerCourse.map((item) => {
        return (
            <div className=' bg-white p-8 rounded-[2em] shadow-[0_12px_35px_rgba(0,0,0,0.08)] ' key={item.id} >
                <div
                    className='h-[30vh] rounded-2xl mb-7 flex flex-col justify-end p-4'
                    style={{ backgroundImage: `url(${item.courseImage})` }}
                >
                    <h2 className='bg-red-500 w-[130px] text-center text-[1.5em] text-white font-[500] px-5 py-1 rounded-4xl '>{item.badge}</h2>
                </div>
                <div>
                    <h1 className='text-[1.8em] font-[600] text-red-950 leading-8'>{item.title}</h1>
                    <div className='my-3 '>
                        <span className='text-[1.1em] font-[500] opacity-70 pr-4'><i className=" pr-2 text-red-400 fa-solid fa-book"></i>{item.lessons}</span>
                        <span className='text-[1.1em] font-[500] opacity-70 pr-4'><i className=" pr-2 text-red-400 fa-regular fa-clock"></i>{item.duration}</span>
                        <span className='text-[1.1em] font-[500] opacity-70 pr-4'><i className=" pr-2 text-red-400 fa-regular fa-user"></i>{item.enrolled}</span>
                    </div>
                    <hr className='text-red-300' />
                </div>


                <div className='flex pt-5 justify-between items-center w-full'>
                    {/* Left side: Instructor Info */}
                    <div className=' flex items-center gap-3'>
                        <img
                            className='w-[50px] h-[50px] object-cover rounded-full'
                            src={item.instructorImage}
                            alt=""
                        />
                        <h3 className=' text-[1.1em] font-[500] opacity-80'>{item.instructor}</h3>
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
        <div className='flex gap-[3rem]'>{reranderCourse}</div>
    )
}

export default CourseCard
