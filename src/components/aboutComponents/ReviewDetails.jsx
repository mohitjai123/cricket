import React, { useEffect, useState } from 'react'
import MyCarousel from './MyCarousel'
import { API_URL } from '../../stor'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

function ReviewDetails() {
  const [banner, setbanner] = useState("")
  const fetchData =async()=>{
    const bannerQuery = doc(db, "aboutUs", "testimonial_banner")
    const shost = await getDoc(bannerQuery)
    const dat = shost.data()
    setbanner(dat.poster)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <section className='flex flex-wrap bg-primary'>
        <div style={{backgroundImage:`url(${banner})`}} className='min-h-96 w-full lg:w-1/2 bg-no-repeat bg-top bg-cover'>
        </div>
        <div className='lg:w-1/2 lg:px-24 py-14 p-4 grid place-items-center relative'>
            <MyCarousel/>
        </div>
    </section>
  )
}

export default ReviewDetails