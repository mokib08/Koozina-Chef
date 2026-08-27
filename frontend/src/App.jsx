import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { asyncLoadFeature } from './Store/Actions/FeatureAction'
import { asyncLoadCourse } from './Store/Actions/CoursesAction'
import { asyncLoadInstructor } from './Store/Actions/InstructorActions'
import { asyncLoadResource } from './Store/Actions/ResourcesAction'
import { asyncLoadTestimonial } from './Store/Actions/TestimonialsAction'
import Navbar from './components/Navbar/Navbar'
import MainRoute from './Routes/MainRoute'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncLoadCourse());
    dispatch(asyncLoadFeature());
    dispatch(asyncLoadInstructor());
    dispatch(asyncLoadResource());
    dispatch(asyncLoadTestimonial());
  })

  return (
    <div className='bg-red-50'>
      <Navbar  />
      <MainRoute />
    </div>
  )
}

export default App
