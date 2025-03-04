import React from 'react'
import image from '../assets/about_section.jpg'
import { Link } from 'react-router-dom'

function AboutSection() {
  return (
    <section style={{backgroundImage:`url(${image})`}} className='h-[80vh] bg-no-repeat bg-blend-soft-light bg-center relative text-white mb-20 bg-gray-900 py-32 lg:px-24 px-4'>
        <div className='z-10'>
            
          <h3 className='text-x font-semibold'>WELCOME</h3>
        <h2 className='lg:text-6xl text-3xl my-4 font-semibold'>Experience the true joy of professional cricket games!</h2>
        <Link to="/cricket/about" className='mx-auto text-white bg-secondary mt-8 py-3 px-5 rounded-full hover:bg-blue-600 duration-500 w-fit'>ABOUT US</Link>
 
        </div>
        {/* <div className='bg-black/50 h-full w-full absolute left-0 top-0'></div> */}

           </section>
  )
}

export default AboutSection