import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home' 
import Resources from '../components/Resources/Resources'
import Login from '../components/Login/Login'
import MainCourses from '../components/Courses/MainCourses'
import Register from '../components/Login/Register'

const MainRoute = () => {
  return <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/main-courses' element={<MainCourses /> } />
        <Route path='/resources' element={<Resources /> } />
        <Route path='/login' element={<Login /> } />
        <Route path='/register' element={<Register /> } />
  </Routes>
}

export default MainRoute
