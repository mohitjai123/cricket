import React from 'react'

function WhatWeDo() {
  return (
    <section className='lg:p-24 p-4'>
      <h3 className='font-semibold'>WHAT WE DO</h3>
      <h2 className='lg:text-6xl text-3xl mb-7 max-w-xl font-semibold'>We teach cricket for all skill levels</h2>

      <div className='lg:flex'>
        <div className='lg:w-1/2'>
          <p className='text-gray-500 mb-10'>Consectetur adipiscing elit, sed do eiusmod onsectetur adipiscing elit, sed do eiusm od tempor.
          </p>
          <div className='flex gap-2 items-center'>
            <img className='rounded-full h-20 w-20' src="https://spin.axiomthemes.com/wp-content/uploads/2023/10/image2-copyright-300x300.jpg" alt="" />
            <div>
              <h3 className='font-[500] text-2xl'>Rakesh Sharma</h3>
              <p className='text-gray-500'>CEO, Coach</p>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 text-gray-500 grid max-lg:mt-4 gap-4 lg:grid-cols-2'>
          <p><span className='text-primary align-text-top text-5xl'>Q</span>uisque quis magna vitae quam ornare rhoncus. Cras felis risus, rutrum eget venenatis eget, sodales ut mi.</p>
          <p>Tempor ut consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do od eiusm  tempor ut labore.</p>
          <p>Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor ut labore sed eiusm od ut eiusm.</p>
          <p>Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor.</p>
        </div>
      </div>

    </section>
  )
}

export default WhatWeDo