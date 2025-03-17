import React from 'react'
import { API_URL } from '../../stor'

function WorkSection() {
  return (
    <section className='lg:px-24 py-14 pt-0 px-4 flex flex-wrap justify-center'>
      <CardItem img={API_URL + "other-images/IMG_4783.JPG"} />
      <CardItem img={API_URL + "other-images/IMG_4774.JPG"} />
      <CardItem img={API_URL + "other-images/IMG_4722.JPG"} />
      {/* <CardItem img={API_URL+"other-images/IMG_4722.JPG"}/> */}
    </section>
  )
}

const CardItem = ({ img }) => {
  return (
    <div className='overflow-hidden mt-10'>
      <img className='max-w-96 group-hover:scale-110 duration-500' src={img} alt="" />
    </div>

  )
}

export default WorkSection