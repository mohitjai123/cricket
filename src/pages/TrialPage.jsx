import React, { useState } from 'react'
import BreadCamp from '../components/BreadCamp'
import img from "../assets/trial.webp"
import RegisterMember from '../components/RegisterMember'

function TrialPage() {
    const [popup, setPopup] = useState(false)
    return (
        <main>
            <BreadCamp name={"Trial"} />
            <section className='w-full h-[600px] py-10 grid justify-center items-end relative'>
                <div className='grid gap-5'>
                    <h4 className='text-5xl font-bold text-white'>Trials Registration - Season 2</h4>
                    <button onClick={()=>setPopup(true)} className='z-10 mx-auto text-white px-20 py-3 rounded-full drop-shadow-lg bg-primary'>Register for Trial</button>
                </div>
                <img className="w-full -z-20 absolute left-0 top-0 h-full" src={img} alt="" />
                <div className='h-full -z-10 w-full absolute top-0 left-0 bg-gradient-to-b via-primary/50 from-transparent to-primary'></div>
            </section>
            <div className='lg:p-24 p-4'>
                <p>Any amateur cricketer who wants to take part in the Big Cricket League has to register for trials and then take part in the three-phase selection process in order to play in the tournament.


                    Big Cricket League will be charging a one-time trial registration fee from all amateur cricketers, which is as follows: <br />
                    <br />

                    <hr className='border-secondary my-4' />
                    Batter: INR 1999
                    <hr className='border-secondary my-4' />
                    Bowler: INR 1999
                    <hr className='border-secondary my-4' />


                    Wicket-keeper Batter: INR 1999<hr className='border-secondary my-4' />



                    Allrounder: INR 2499
                    <hr className='border-secondary my-4' /> <br />


                    Big Cricket League will not be charging any further fee from an amateur cricketer apart from the registration fee before</p>
                <h4 className='py-2 mt-5 mb-2 px-5 border-t-4 border-secondary bg-primary text-white'>Phase 1 </h4>
                <p className='text-gray-600'>Amateur cricketers can register through trials on the Big Cricket League website by paying a one-time registration fee
                    Trial Registration Fee: Batter - INR 1999, Bowler - INR 1999, Wicketkeeper-Batter - INR 1999, Allrounder - INR 2499
                    All registered amateur cricketers will be invited to take part in a trial venue according to their chosen zone and they will be tested on their primary skill (batting or bowling) along with basic fitness drills.
                    Amateur Cricketers will be given a chance to showcase their skills under the supervision of qualified & professional coaches.
                </p>
                <h4 className='py-2 mt-5 mb-2 px-5 border-t-4 border-secondary bg-primary text-white'>Phase 1 </h4>
                <p className='text-gray-600'>Amateur cricketers can register through trials on the Big Cricket League website by paying a one-time registration fee
                    Trial Registration Fee: Batter - INR 1999, Bowler - INR 1999, Wicketkeeper-Batter - INR 1999, Allrounder - INR 2499
                    All registered amateur cricketers will be invited to take part in a trial venue according to their chosen zone and they will be tested on their primary skill (batting or bowling) along with basic fitness drills.
                    Amateur Cricketers will be given a chance to showcase their skills under the supervision of qualified & professional coaches.
                </p>
                <h4 className='py-2 mt-5 mb-2 px-5 border-t-4 border-secondary bg-primary text-white'>Phase 1 </h4>
                <p className='text-gray-600'>Amateur cricketers can register through trials on the Big Cricket League website by paying a one-time registration fee
                    Trial Registration Fee: Batter - INR 1999, Bowler - INR 1999, Wicketkeeper-Batter - INR 1999, Allrounder - INR 2499
                    All registered amateur cricketers will be invited to take part in a trial venue according to their chosen zone and they will be tested on their primary skill (batting or bowling) along with basic fitness drills.
                    Amateur Cricketers will be given a chance to showcase their skills under the supervision of qualified & professional coaches.
                </p>
            </div>
        {popup && <RegisterMember setPopup={setPopup}/>}
        </main>
    )
}

export default TrialPage