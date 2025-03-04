import React from 'react'
import MyCarousel from './MyCarousel'

function ReviewDetails() {
  return (
    <section className='flex flex-wrap bg-primary'>
        <div style={{backgroundImage:'url(https://spin.axiomthemes.com/wp-content/uploads/2023/09/12-copyright-570x696.jpg)'}} className='min-h-96 w-full lg:w-1/2 bg-no-repeat bg-top bg-cover'>

        </div>
        <div className='lg:w-1/2 lg:p-24 p-4 grid place-items-center relative'>
            <MyCarousel/>
        </div>
    </section>
  )
}

export default ReviewDetails