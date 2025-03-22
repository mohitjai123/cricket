import React, { useState } from 'react'
import BreadCamp from '../components/BreadCamp'
import RegisterMember from '../components/RegisterMember'
import { API_URL } from '../stor'
import axios from 'axios'
import { Link } from 'react-router-dom'


function TrialPage() {
    const [popup, setPopup] = useState(false)
   
    return (
        <main>
            <BreadCamp img={API_URL+"banner/Trials-Registration.jpg"} name={"Trial"} />
             <section className='w-full bg-primary py-20 grid justify-center items-end relative'>
                <div className='grid bg-primary gap-5'>
                    <h4 className='lg:text-5xl text-2xl font-bold text-white'>Trials Registration - Season 1</h4>
                   <div className='flex flex-wrap w-fit mx-auto gap-5'>
                  <button onClick={()=>setPopup(true)} className='z-10 mx-auto bg-secondary border-secondary text-white duration-300 w-60 py-3 rounded-full drop-shadow-lg hover:bg-primary hover:border-white border '>Register for Trial</button>
                   </div>
                </div>
            </section>
            <div className='lg:px-24 py-14 p-4'>
                <p>Cricket is a game of skill, strategy, and determination, and MJPL Premier League is committed to discovering and nurturing the next generation of cricketing talent. If you are an aspiring cricketer looking for a platform to prove yourself, this is your opportunity to step up and compete at the highest level. <br />
                <br />

                All amateur cricketer's who are interested in participating in the trial will need to pay trial registration fee i.e Rs. 1999/- (GST included)<br /> <br />
This is the sole fee due prior to the trials. Further Stage: No additional fees will be charged to the players. <br /> <br />
Once selected, participants will be notified, via email, regarding all the details of the trial, such as the venue, dates and other instructions for the selection process.  <br />
The selection process is designed to identify and nurture the best cricketing talent. It consists of three key phases:</p>
                <h4 className='py-2 mt-5 mb-2 px-5 border-t-4 border-secondary bg-primary text-white'>Phase I: Selection Trials </h4>
                <p className='text-gray-600'>Registered players will undergo rigorous trials under the watchful eyes of expert coaches and experienced selectors. <br /> 
The selectors have years of experience in professional cricket, talent scouting, and mentoring young athletes. <br />
Players are required to bring their own cricket gear, including bats, pads, gloves, and protective equipment, to perform at their best.

                </p>
                <h4 className='py-2 mt-5 mb-2 px-5 border-t-4 border-secondary bg-primary text-white'>Phase II: Camp & Fitness Test </h4>
                <p className='text-gray-600'>Shortlisted players from the trials will advance to the next stage, which includes a cricket camp and fitness assessment. <br />
This phase will evaluate a player's endurance, agility, strength, and overall physical preparedness to compete at a professional level. <br />
Players will receive guidance on training, game strategy, and fitness improvement. <br />
The date and venue of the fitness test will be communicated through email or SMS.

                </p>
                <h4 className='py-2 mt-5 mb-2 px-5 border-t-4 border-secondary bg-primary text-white'>Phase III: Final Selection Round (Auction & Drafting) </h4>
                <p className='text-gray-600'>Players who clear the fitness round will move to the final selection stage, which includes an auction process. <br />
Franchise owners will assess and handpick players for their respective teams. <br />
Once selected, players will officially join their teams, marking the beginning of their journey in MJPL Premier League.
                </p>
                <h4 className='text-2xl text-secondary mt-8 text-center font-bold'>Selection Criteria</h4>
                <hr className='border-secondary my-5 w-1/4 mx-auto' />
                <p>The MJPL Premier League selection process is not just about making the cut, it’s an invaluable learning experience for every aspiring cricketer. The process evaluates:
                </p>
                <p className='my-4 leading-tight'><b>Technical Skills</b> – Batting, bowling, fielding, and wicket keeping techniques. <br /> <br />
<b>Game Awareness</b> – Tactical thinking, adaptability, and decision-making under pressure. <br /> <br />
<b>Physical Fitness</b> – Endurance, strength, and speed to compete at the highest level. <br /> <br />
<b>Sportsmanship & Teamwork</b> – Leadership, discipline, and ability to perform in a team setup.
</p>
<p>Cricketers who pass all three phases will not only earn a place in the league but also receive world-class mentorship to enhance their skills and prepare for professional-level cricket.
</p>

<h4 className='py-2 mt-5 mb-2 px-5 border-t-4 border-secondary bg-primary text-white'>Mentoring for the Trials</h4>
<p className=''>At MJPL Premier League, we believe that talent needs the right platform and guidance to shine. Our trial camps are designed to provide a fair and structured opportunity for every participant to prove their potential.
</p>
<ul className='list-disc grid gap-2 px-10 py-2'>
    <li><b>Expert Coaching: </b>Players will be assessed and mentored by experienced coaches and cricketing legends who will share valuable insights on technique, strategy, and performance optimization</li>
    <li><b>Trial Readiness: </b>Participants will get tips on fitness, mental preparation, and game strategies to ensure they perform at their best during trials.</li>
    <li><b>Performance Feedback: </b> Constructive feedback will be provided to help players refine their game, even if they don’t make it to the final selection.</li>
   
</ul>
<p>At MJPL Premier League, we don’t just select players, we build future cricketing stars. If you have the passion, the drive, and the skill, this is your chance to step onto the field and make your mark.</p>

<p>Register Now and take the first step toward your cricketing dream!
</p>
<div className='flex justify-center mt-4'>
<Link to="/trials-rules" className='z-10 text-center px-5 mx-auto text-secondary py-3 w-60 hover:bg-transparent duration-300 border rounded-full drop-shadow-lg bg-white'>Trials Rules</Link>
</div>
            </div>
        {popup && <RegisterMember setPopup={setPopup}/>}
        </main>
    )
}

export default TrialPage