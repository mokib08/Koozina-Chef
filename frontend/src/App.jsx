import React, { useEffect } from 'react'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { asyncLoadFeature } from './Store/Actions/FeatureAction'
import { asyncLoadCourse } from './Store/Actions/CoursesAction'
import { asyncLoadInstructor } from './Store/Actions/InstructorActions'
import { asyncLoadResource } from './Store/Actions/ResourcesAction'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncLoadCourse());
    dispatch(asyncLoadFeature());
    dispatch(asyncLoadInstructor());
    dispatch(asyncLoadResource())
  })

  return (
    <div className='bg-red-50'>
      <Home />
    </div>
  )
}

export default App
