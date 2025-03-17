import React from 'react'
import MyCarousel from './MyCarousel'
import { API_URL } from '../../stor'

function ReviewDetails() {
  return (
    <section className='flex flex-wrap bg-primary'>
        <div style={{backgroundImage:`url(${API_URL+"other-images/IMG_6487.JPG"})`}} className='min-h-96 w-full lg:w-1/2 bg-no-repeat bg-top bg-cover'>

        </div>
        <div className='lg:w-1/2 lg:px-24 py-14 p-4 grid place-items-center relative'>
            <MyCarousel/>
        </div>
    </section>
  )
}

export default ReviewDetails