import React from 'react'
import CountUp from 'react-countup'

function Number() {
    const data = [
        {
            title:"People",
            number:90
        },
        {
            title:"Matches",
            number:2548
        },
        {
            title:"Years",
            number:25
        },
        {
            title:"Trophies",
            number:256
        },
        
    ]
  return (
    <section className='flex flex-wrap lg:px-24 px-4 justify-around text-center'>
        {data.map((item, idx)=>
            <div key={idx}>
                <h4 className='font-[500] text-xl'>{item.title}</h4>
                <h2 className='font-semibold my-2 lg:text-6xl text-3xl'>
                    <CountUp start={0} end={item.number} duration={2} enableScrollSpy/>+
                </h2>
            </div>
        )}
    </section>
  )
}



export default Number