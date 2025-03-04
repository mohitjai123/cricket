import React from 'react'
import first from "../assets/teams/Dynamic Daredevils Logo.png"
import second from "../assets/teams/Gujarat Rising Stars logo.png"
import third from "../assets/teams/Nawab legends logo.png"
import four from "../assets/teams/Rajasthan warriors logo.png"
import five from "../assets/teams/Tiger maratha logo.png"
import six from "../assets/teams/TUlu Thunders Logo.png"

function PointTable() {
    const data = [
        {
            logo:first,
            name:"Dynamic Daredevils"
        },
        {
            logo:second,
            name:"Gujarat Rising Stars"
        }
        ,
        {
            logo:third,
            name:"Nawab legends"
        }
        ,
        {
            logo:four,
            name:"Rajasthan warriors"
        }
        ,
        {
            logo:five,
            name:"Tiger maratha"
        }
        ,
        {
            logo:six,
            name:"TUlu Thunders"
        }
    ]
  return (
    <section className='lg:px-24 max-lg:max-w-full grid pb-20'>
         <h3 className='text-center font-semibold'>TABLE</h3>
        <h2 className='lg:text-6xl text-3xl mb-7 text-center font-semibold'>Premier league</h2>
        <div>
            <div className='w-full bg-secondary py-1'></div>
            <h4 className='bg-primary p-5 font-semibold text-white text-lg'>
            Team standing
            </h4>
            <div className='border-collapse flex'>
                <h2 className='p-5 w-fit font-semibold border'>Pos</h2>
                <h2 className='p-5 w-1/2 max-lg:w-1/4 font-semibold border'>Team</h2>
                <h2 className='p-5 lg:w-1/6 text-center font-semibold border'>E</h2>
                <h2 className='p-5 lg:w-1/6 text-center font-semibold border'>W</h2>
                <h2 className='p-5 lg:w-1/6 text-center font-semibold border'>L</h2>
                <h2 className='p-5 lg:w-1/6 text-center font-semibold border'>P</h2>
            </div>
            {data.map((item, idx)=>
            <div key={idx} className='border-collapse hover:bg-cyan-50 duration-500 bg-white flex'>
            <h2 className='py-5 text-center w-1/6 lg:w-[5.5rem] text-gray-500 border'>{idx+1}</h2>
            <div className='p-5 lg:w-1/2 w-1/4 lg:flex gap-4 items-center text-secondary hover:font-semibold duration-500 border'><img className='h-8' src={item.logo} alt="" />
                <h4>{item.name}</h4>
            </div>
            <h2 className='p-5 lg:w-1/6 text-center text-gray-500 border'>{idx+3}</h2>
            <h2 className='p-5 lg:w-1/6 text-center text-gray-500 border'>{idx+10}</h2>
            <h2 className='p-5 lg:w-1/6 text-center text-gray-500 border'>{10-idx}</h2>
            <h2 className='p-5 lg:w-1/6 text-center text-gray-500 border'>{idx+12}</h2>
        </div>
            )}
        </div>
        <button className='mx-auto text-white bg-secondary mt-8 py-3 px-5 rounded-full hover:bg-blue-600 duration-500 w-fit'>VIEW FULL TABLE</button>
    </section>
  )
}

export default PointTable