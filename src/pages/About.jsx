import React, { useEffect, useState } from 'react'
import BreadCamp from '../components/BreadCamp'
import WhatWeDo from '../components/aboutComponents/WhatWeDo'
import WorkSection from '../components/aboutComponents/WorkSection'
import CoachesSection from '../components/aboutComponents/CoachesSection'
import ReviewDetails from '../components/aboutComponents/ReviewDetails'
import AchiveNumber from '../components/aboutComponents/AchiveNumber'
import FaqBox from '../components/aboutComponents/Faq'
import History from '../components/aboutComponents/History'
import { API_URL } from '../stor'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'

function About() {
  const [banner, setbanner] = useState("")
  const fetchData =async()=>{
    const bannerQuery = doc(db, "aboutUs", "top_banner")
    const shost = await getDoc(bannerQuery)
    const dat = shost.data()
   setbanner(dat.poster)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      <BreadCamp img={banner} name="About us"/>
      <History/>
      <WhatWeDo/>
      <WorkSection/>
      {/* <VideoSection/>  */}
      <CoachesSection/>
      {/* <AchiveNumber/> */}
      <ReviewDetails/>
      {/* <FaqBox/> */}
      {/* <BlogsNews/> */}
    </div>
  )
}

export default About