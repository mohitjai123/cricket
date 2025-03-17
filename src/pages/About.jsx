import React from 'react'
import BreadCamp from '../components/BreadCamp'
import WhatWeDo from '../components/aboutComponents/WhatWeDo'
import WorkSection from '../components/aboutComponents/WorkSection'
import CoachesSection from '../components/aboutComponents/CoachesSection'
import ReviewDetails from '../components/aboutComponents/ReviewDetails'
import AchiveNumber from '../components/aboutComponents/AchiveNumber'
import FaqBox from '../components/aboutComponents/Faq'
import History from '../components/aboutComponents/History'
import { API_URL } from '../stor'

function About() {
  return (
    <div>
      <BreadCamp img={API_URL+"banner/MJPL-About-Page.jpg"} name="About us"/>
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