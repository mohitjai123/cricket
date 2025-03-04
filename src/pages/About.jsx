import React from 'react'
import BreadCamp from '../components/BreadCamp'
import WhatWeDo from '../components/aboutComponents/WhatWeDo'
import WorkSection from '../components/aboutComponents/WorkSection'
import VideoSection from '../components/VideoSection'
import CoachesSection from '../components/aboutComponents/CoachesSection'
import BlogsNews from '../components/BlogsNews'
import ReviewDetails from '../components/aboutComponents/ReviewDetails'
import AchiveNumber from '../components/aboutComponents/AchiveNumber'

function About() {
  return (
    <div>
      <BreadCamp name="About us"/>
      <WhatWeDo/>
      <WorkSection/>
      {/* <VideoSection/>  */}
      <CoachesSection/>
      <AchiveNumber/>
      <ReviewDetails/>
      {/* <BlogsNews/> */}
    </div>
  )
}

export default About