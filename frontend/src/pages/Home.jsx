import React from 'react'
// import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import TrustedPartners from '../components/TrustedPartners/TrustedPartners'
import Features from '../components/Features/Features'
import Crouses from '../components/Courses/Crouses'
import Instructores from '../components/Instructors/Instructores'
import Resources from '../components/Resources/Resources'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <div className=' px-[10%] py-[1.5rem]'>
        <Hero />
      </div>

      <TrustedPartners />
      <Features />

      <div className='px-[10%] py-[1.5rem]'>
        <Crouses />
        <Instructores />
      </div>

      <Resources />

      <div className='px-[10%] py-[1.5rem]'>
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}

export default Home
