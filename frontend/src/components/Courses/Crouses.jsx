import CourseCard from "./CourseCard"

const Crouses = () => {


  return (
    <div>
      <div className='py-20'>
        <span className='text-[1.2em] bg-red-200 rounded-[30px] px-4 py-2 text-red-600'>Popular Course</span>
        <h1 className='pb-10 pt-10 text-[4.5em] text-red-950 font-[600] leading-20'>Pick a <span className='text-red-500 '> course</span> and <br /> get started your learning</h1>
      </div>

      <CourseCard />
    </div>
  )
}

export default Crouses
