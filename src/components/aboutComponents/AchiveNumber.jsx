import React from 'react'
import CountUp from 'react-countup'

function AchiveNumber() {
  return (
    <section className='lg:px-24 py-14 p-4 flex lg:justify-between flex-wrap'>
        <NumberCard/>
        <NumberCard/>
        <NumberCard/>
        <NumberCard/>
    </section>
  )
}
const NumberCard =()=>{
    return (
        <div className='relative w-full border-collapse border-x lg:w-1/4 grid place-items-center'>
            <h4 className='text-grayScale text-9xl font-bold'><CountUp start={0} duration={5} end={120} enableScrollSpy/></h4>
            <p className='absolute text-xl font-semibold'>Poeple</p>
        </div>
    )
}

export default AchiveNumber