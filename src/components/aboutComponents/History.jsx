import React from 'react'
import { API_URL } from '../../stor'

function History() {
  return (
    <section className='lg:px-24 pt-14 p-4'>
            <h4 className='text-4xl font-bold text-secondary text-center'>History</h4>
            <hr className='border-secondary w-1/3 mx-auto my-5' />
            <div className='lg:flex justify-between gap-10'>
                <div className='lg:w-1/2 mt-5'>
                    <h3 className='text-2xl mb-5 font-semibold'>The MacJhons Jounrey:</h3>
                    <p>Founded in 2017 by passionate cricket enthusiasts, MacJhons began as a small initiative fuelled by a love for the game. What started as a casual venture soon evolved into a competitive force, leading to the organization of national and international cricket leagues. Expanding beyond tournaments, we developed our own brands and cricket products, taking our vision to new heights.
                        <br />
                        <br />


MacJhons is more than just a cricket organization, it’s a platform for aspiring cricketers to showcase their talent and progress to national and international levels. Beyond the game, we provide in-depth cricket coverage, keeping fans and stakeholders engaged with insightful updates and analyses. 
At MacJhons, we are dedicated to nurturing talent, fostering growth, and shaping the future of cricket.
</p>
                </div>
                <div className='lg:w-1/2'>
                <img className="rounded-xl max-lg:mt-5" src="https://mjpl.co.in/about/testimonial.JPG" alt="" />
                </div>
            </div>
            <hr className='border-secondary w-1/3 mx-auto my-14' />
            <div className='lg:flex relative flex-row-reverse justify-center gap-10'>
                <div className=' max-w-2xl mt-5'>
                    <h3 className='text-2xl mb-5 font-semibold'>Our Mission</h3>
                    <p>Our mission is to identify, cultivate, and elevate emerging cricketing talent by providing them with a world-class platform to showcase their skills on both national and international stages. We strive to create an ecosystem where passionate cricketers can refine their abilities, gain significant exposure, and advance their professional careers.
<br /> <br />
By fostering a culture of discipline, perseverance, and excellence, we aim to contribute to the global growth of cricket. Our mission is to be a driving force in the evolution of the sport, empowering athletes to reach their full potential while continuously innovating, developing strategies, and providing unwavering support to the cricketing community.
</p>
                </div>
                <div className='lg:w-1/3 max-lg:mt-5'>
                <img className="rounded-xl" src={API_URL+ "banner/About-MJPL-Mission.jpg"} alt="" />
                </div>
            </div>
            <hr className='border-secondary w-1/3 mx-auto my-14' />
            <div className='lg:flex relative justify-center gap-10'>
                <div className=' max-w-2xl mt-5'>
                    <h3 className='text-2xl mb-5 font-semibold'>MACJHONS’ VISION FOR CRICKET</h3>
                    <p>At MacJhons, our goal is to become a leading name in sports and events, with cricket at the heart of our operations. Our commitment is to:
</p>
            <ul className='list-disc p-4'>
                <li>
                <b>Lead</b> – Enhance competitiveness, entertainment, and meaningful experiences for players and fans.
                </li>
                <li>
                <b>Grow</b> – Expand opportunities, increase accessibility, and elevate cricket at all levels.
                </li>
                <li>
                <b>Promote</b> – Deliver world-class events, engage diverse audiences, and build strong commercial partnerships.

                </li>
                <li>
                <b>Protect</b> – Uphold the integrity of the sport with fairness, transparency, and excellence. To cultivate the cricket right from grassroot level and to organise the cricket tournaments in the emerging countries.
                </li>
                </ul>
                <p>We are dedicated to shaping the future of cricket while driving its global appeal and success.
                </p>
                </div>
                <div className='lg:w-1/3 max-lg:mt-5'>
                <img className="rounded-xl" src={API_URL+"banner/About-MJPL-Vision.jpg"} alt="" />
                </div>
            </div>
            <hr className='border-secondary w-1/3 mx-auto my-14' />
            <div className='lg:flex flex-row-reverse relative justify-center gap-10'>
                <div className=' max-w-2xl'>
                    <h3 className='text-2xl mb-5 font-semibold'>MJPL (MacJhons Premier League)
                    </h3>
                    <p className='my-3'>Cricket isn’t just a game! It’s a passion, a dream, and a journey that fuels millions of ambitions. That’s exactly why we created the MJPL Premier League, to give every aspiring cricketer a real chance to shine. This isn’t just another tournament; it’s a movement, a community that brings together rising stars and seasoned pros to celebrate the sport we all love.</p>
    
                <p className='my-3'>It is more than just a league, it’s a stage where skill, strategy, and pure determination shape the future of cricket. Young and emerging players get a once-in-a-lifetime opportunity to share the field with some of the biggest names in the game, gaining invaluable experience, exposure, and mentorship. It’s where raw talent meets the right opportunity, where passion turns into performance, and where dreams take flight.

                </p>
                <p className='my-3'>At MJPL Premier League, we believe in turning passion into a profession. Every match, every innings, and every breathtaking moment is a step toward something bigger. We’re here to inspire, empower, and create real pathways for young cricketers who dare to dream big.
                </p>
             
                </div>
                <div className='lg:w-1/3 max-lg:mt-5'>
                <img className="rounded-xl" src={API_URL+"banner/About-MJPL.jpg"} alt="" />
                </div>
            </div>
    </section>
  )
}

export default History