import React from 'react'
import image from '../assets/about_section.jpg'
import { Link } from 'react-router-dom'
import {API_URL} from "../stor"

function AboutSection() {
  return (
    <section style={{backgroundImage:`url('${API_URL}Home/Home  back image 2.JPG')`}} className='bg-no-repeat bg-blend-soft-light bg-center relative text-white bg-gray-900 py-20 lg:px-24 px-3'>
        <div className='z-10'>
            
          <h3 className=' text-2xl text-center font-semibold'>MACJHONS ASSOCIATES LLP</h3>
        <h2 className=' mt-5 max-lg:mb-10
         font-semibold'>Founded in 2017 by passionate cricket enthusiasts, MacJhons began as a small initiative fuelled by a love for the game. What started as a casual venture soon evolved into a competitive force, leading to the organization of national and international cricket leagues. Expanding beyond tournaments, we developed our own brands and cricket products, taking our vision to new heights.

MacJhons is more than just a cricket organization, it’s a platform for aspiring cricketers to showcase their talent and progress to national and international levels. Beyond the game, we provide in-depth cricket coverage, keeping fans and stakeholders engaged with insightful updates and analyses. At MacJhons, we are dedicated to nurturing talent, fostering growth, and shaping the future of cricket.
<Link to="/about" className=' ml-2 text-secondary hover:underline rounded-full duration-500 w-fit'>Read More</Link>

</h2>
 
    
<h3 className=' text-2xl my-5 text-center font-semibold'>MJPL (MacJhons Premier League)</h3>
        <h2 className='max-lg:mb-10 font-semibold'>Cricket isn’t just a game! It’s a passion, a dream, and a journey that fuels millions of ambitions. That’s exactly why we created the MJPL Premier League, to give every aspiring cricketer a real chance to shine. This isn’t just another tournament; it’s a movement, a community that brings together rising stars and seasoned pros to celebrate the sport we all love.

It is more than just a league, it’s a stage where skill, strategy, and pure determination shape the future of cricket. Young and emerging players get a once-in-a-lifetime opportunity to share the field with some of the biggest names in the game, gaining invaluable experience, exposure, and mentorship. It’s where raw talent meets the right opportunity, where passion turns into performance, and where dreams take flight.


<Link to="/about" className=' ml-2 text-secondary hover:underline rounded-full duration-500 w-fit'>Read More</Link>

</h2>
 
        </div>
        {/* <div className='bg-black/50 h-full w-full absolute left-0 top-0'></div> */}

           </section>
  )
}

export default AboutSection